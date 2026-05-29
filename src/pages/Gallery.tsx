import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { api, type CrisisCategory, type GalleryImageDto } from "../lib/api";
import { fileToCompressedDataUrl, fileToThumbnailDataUrl } from "../lib/compressImage";
import { downloadGallerySelection } from "../lib/galleryDownload";
import { readGalleryCache, writeGalleryCache, clearGalleryCache } from "../lib/galleryCache";
import { getUiLabels } from "../data/uiLabels";
import { GalleryFeed } from "../components/gallery/GalleryFeed";
import { GalleryToolbar } from "../components/gallery/GalleryToolbar";
import type { GalleryViewMode } from "../components/gallery/galleryViewModes";
import {
  Upload,
  Image as ImageIcon,
  X,
  Camera,
  Layers,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryLightbox } from "../components/gallery/GalleryLightbox";

type GalleryFilter = "All" | CrisisCategory;

const FILTER_KEYS: GalleryFilter[] = ["All", "Drought", "Fluoride", "Migration"];
const UPLOAD_CATEGORIES: CrisisCategory[] = ["Drought", "Fluoride", "Migration"];

export const Gallery = () => {
  const { t, language } = useLanguage();
  const ui = getUiLabels(language);
  const g = ui.gallery;
  const [images, setImages] = useState<GalleryImageDto[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadCategory, setUploadCategory] = useState<CrisisCategory>("Fluoride");
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All");
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<GalleryViewMode>("large");
  const [selectMode, setSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());
  const [isDownloading, setIsDownloading] = useState(false);

  const categoryLabel = (cat: GalleryFilter | CrisisCategory) => g.filters[cat];

  const viewLabels = useMemo(
    () => ({
      extraLarge: g.layout.extraLarge,
      large: g.layout.large,
      medium: g.layout.medium,
      small: g.layout.small,
      list: g.layout.list,
      details: g.layout.details,
      tiles: g.layout.tiles,
      content: g.layout.content,
    }),
    [g.layout]
  );

  useEffect(() => {
    let cancelled = false;
    const cached = readGalleryCache();
    if (cached?.length) {
      setImages(cached);
      setIsLoading(false);
    }

    (async () => {
      try {
        const data = await api.gallery.list();
        if (!cancelled) {
          setImages(data.filter((img) => img.url && img.fullUrl));
          writeGalleryCache(data);
          setLoadError(null);
        }
      } catch (err) {
        if (!cancelled && !cached?.length) {
          setLoadError(err instanceof Error ? err.message : g.load_error);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [g.load_error]);

  const filteredImages =
    activeFilter === "All" ? images : images.filter((img) => img.category === activeFilter);

  useEffect(() => {
    setSelectedIds((prev) => {
      const ids = new Set(filteredImages.map((img) => img.id));
      const next = new Set([...prev].filter((id) => ids.has(id)));
      return next.size === prev.size ? prev : next;
    });
  }, [filteredImages]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const processFiles = async (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter((file) => file.type.startsWith("image/"));
    if (fileArray.length === 0) return;

    setIsUploading(true);
    setLoadError(null);

    try {
      const prepared = await Promise.all(
        fileArray.map(async (file) => ({
          imageData: await fileToCompressedDataUrl(file),
          thumbData: await fileToThumbnailDataUrl(file),
        }))
      );

      const saved = await Promise.all(
        prepared.map(({ imageData, thumbData }) =>
          api.gallery.create({
            imageData,
            thumbData,
            category: uploadCategory,
            caption: g.default_caption,
          })
        )
      );

      setImages((prev) => {
        const next = [...saved, ...prev];
        writeGalleryCache(next);
        return next;
      });
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : g.upload_error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processFiles(e.dataTransfer.files);
      }
    },
    [uploadCategory, g.default_caption, g.read_error, g.upload_error]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const removeImage = async (id: string) => {
    try {
      await api.gallery.remove(id);
      setImages((prev) => {
        const next = prev.filter((img) => img.id !== id);
        writeGalleryCache(next);
        return next;
      });
    } catch {
      setLoadError(g.delete_error);
    }
  };

  const openViewer = (id: string) => {
    const idx = filteredImages.findIndex((img) => img.id === id);
    if (idx >= 0) setViewerIndex(idx);
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    setSelectedIds(new Set(filteredImages.map((img) => img.id)));
  };

  const clearSelection = () => setSelectedIds(new Set());

  const downloadSelected = async () => {
    const selected = filteredImages.filter((img) => selectedIds.has(img.id));
    if (selected.length === 0) return;
    setIsDownloading(true);
    setLoadError(null);
    try {
      await downloadGallerySelection(selected);
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : g.upload_error);
    } finally {
      setIsDownloading(false);
    }
  };

  const deleteFromViewer = async (id: string) => {
    const idx = viewerIndex;
    const remainingIds = filteredImages.filter((img) => img.id !== id);
    await removeImage(id);
    if (remainingIds.length === 0) {
      setViewerIndex(null);
    } else if (idx !== null && idx >= remainingIds.length) {
      setViewerIndex(remainingIds.length - 1);
    }
  };

  return (
    <>
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-indigo-500">
          {t.gallery.title}
        </h1>
        <p className="max-w-2xl opacity-60">{t.gallery.description}</p>
        {loadError ? <p className="text-sm text-brand-crimson/90 max-w-2xl">{loadError}</p> : null}
        {isLoading ? <p className="text-sm text-white/40">{g.loading}</p> : null}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10 w-fit">
          {FILTER_KEYS.map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={[
                  "px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all",
                  active ? "bg-white text-black shadow-lg" : "text-white/50 hover:text-white",
                ].join(" ")}
              >
                {categoryLabel(cat)}
              </button>
            );
          })}
        </div>

        <div className="text-[10px] font-mono opacity-40">
          {g.showing_count
            .replace("{shown}", String(filteredImages.length))
            .replace("{total}", String(images.length))}
        </div>
      </div>

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={[
          "relative flex flex-wrap items-center gap-3 sm:gap-4 px-3 py-2.5 rounded-xl border border-dashed transition-colors",
          dragActive
            ? "border-indigo-500 bg-indigo-500/10"
            : "border-white/10 bg-white/[0.02] hover:border-white/20",
        ].join(" ")}
      >
        <span className="text-[10px] font-semibold tracking-wide text-white/45 shrink-0">
          {g.category_label}
        </span>
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
          {UPLOAD_CATEGORIES.map((cat) => {
            const active = uploadCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setUploadCategory(cat)}
                className={[
                  "px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wide transition-all",
                  active ? "bg-white text-black" : "text-white/50 hover:text-white",
                ].join(" ")}
              >
                {categoryLabel(cat)}
              </button>
            );
          })}
        </div>

        <span className="hidden sm:block w-px h-6 bg-white/10 shrink-0" aria-hidden />

        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400">
            {isUploading ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="inline-flex"
              >
                <Upload size={16} />
              </motion.span>
            ) : (
              <Upload size={16} />
            )}
          </span>
          <p className="text-[11px] sm:text-xs text-white/55 truncate">
            <span className="text-white/80 font-medium">
              {isUploading ? g.uploading : g.drag_drop}
            </span>
            <span className="hidden md:inline"> · {g.file_types}</span>
          </p>
        </div>

        <label className="cursor-pointer shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-[10px] sm:text-xs font-semibold tracking-wide rounded-lg hover:bg-white/90 transition-colors">
          <Camera size={14} />
          {t.gallery.upload_btn}
          <input type="file" className="hidden" accept="image/*" multiple onChange={handleFileInput} />
        </label>

        {dragActive ? (
          <div className="absolute inset-0 rounded-xl bg-indigo-500/15 pointer-events-none flex items-center justify-center">
            <span className="text-[10px] font-semibold tracking-wide text-indigo-200">
              {g.drop_hint}
            </span>
          </div>
        ) : null}
      </div>

      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <Layers size={18} className="text-indigo-400" />
            <span className="text-[10px] font-semibold tracking-wide opacity-60">{g.feed_title}</span>
          </div>
          <span className="text-[10px] font-mono opacity-30">
            {g.evidence_count.replace("{count}", String(images.length))}
          </span>
        </div>

        <GalleryToolbar
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          viewLabels={viewLabels}
          layoutLabels={g.layout}
          selectMode={selectMode}
          onSelectModeChange={(on) => {
            setSelectMode(on);
            if (!on) clearSelection();
          }}
          selectedCount={selectedIds.size}
          totalCount={filteredImages.length}
          onSelectAll={selectAll}
          onClearSelection={clearSelection}
          onDownloadSelected={() => void downloadSelected()}
          isDownloading={isDownloading}
        />

        {filteredImages.length === 0 ? (
          <div className="py-20 text-center space-y-4 opacity-20">
            <ImageIcon size={64} className="mx-auto" />
            <p className="text-sm tracking-wide font-semibold">
              {activeFilter === "All"
                ? t.gallery.no_images
                : g.no_images_in_category.replace("{category}", categoryLabel(activeFilter))}
            </p>
          </div>
        ) : (
          <GalleryFeed
            images={filteredImages}
            viewMode={viewMode}
            selectMode={selectMode}
            selectedIds={selectedIds}
            categoryLabel={categoryLabel}
            labels={{
              image_alt: g.image_alt,
              submission_label: g.submission_label,
              verified_location: g.verified_location,
              viewer: g.viewer,
              layout: {
                category_col: g.layout.category_col,
                date_col: g.layout.date_col,
                caption_col: g.layout.caption_col,
              },
            }}
            onToggleSelect={toggleSelect}
            onOpen={openViewer}
            onDelete={(id) => void removeImage(id)}
          />
        )}
      </div>

      <div className="p-8 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-6">
        <AlertCircle className="text-indigo-400 shrink-0" size={24} />
        <div className="space-y-2">
          <h4 className="text-[10px] font-semibold tracking-wide text-indigo-400">{g.policy_title}</h4>
          <p className="text-xs opacity-60 leading-relaxed font-light">{t.gallery.policy}</p>
        </div>
      </div>
    </div>

    <AnimatePresence>
      {viewerIndex !== null && filteredImages.length > 0 ? (
        <GalleryLightbox
          images={filteredImages}
          index={viewerIndex}
          labels={g.viewer}
          categoryLabel={categoryLabel}
          onClose={() => setViewerIndex(null)}
          onIndexChange={setViewerIndex}
          onDelete={(id) => void deleteFromViewer(id)}
        />
      ) : null}
    </AnimatePresence>
    </>
  );
};
