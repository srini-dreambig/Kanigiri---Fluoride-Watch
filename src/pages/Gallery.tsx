import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { api, type CrisisCategory, type GalleryImageDto } from "../lib/api";
import { fileToCompressedDataUrl } from "../lib/compressImage";
import { downloadGallerySelection } from "../lib/galleryDownload";
import { getUiLabels } from "../data/uiLabels";
import { GalleryFeed } from "../components/gallery/GalleryFeed";
import { GalleryToolbar } from "../components/gallery/GalleryToolbar";
import type { GalleryViewMode } from "../components/gallery/galleryViewModes";
import {
  Upload,
  Image as ImageIcon,
  X,
  Plus,
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
    (async () => {
      try {
        const health = await api.health().catch(() => null);
        if (health && !health.ok) {
          if (!cancelled) {
            setLoadError(
              health.database === "unconfigured"
                ? "Database not configured: add DATABASE_URL (Vercel → Settings → Environment Variables), then redeploy."
                : g.load_error
            );
          }
        }
        const data = await api.gallery.list();
        if (!cancelled) {
          setImages(data);
          if (health?.ok) setLoadError(null);
        }
      } catch (err) {
        if (!cancelled) {
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
      const uploads = await Promise.all(
        fileArray.map((file) => fileToCompressedDataUrl(file))
      );

      const saved = await Promise.all(
        uploads.map((imageData) =>
          api.gallery.create({
            imageData,
            category: uploadCategory,
            caption: g.default_caption,
          })
        )
      );

      setImages((prev) => [...saved, ...prev]);
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
      setImages((prev) => prev.filter((img) => img.id !== id));
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
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-16">
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
        className={`relative p-12 md:p-20 border-2 border-dashed rounded-3xl transition-all duration-300 flex flex-col items-center justify-center text-center space-y-6 ${
          dragActive
            ? "border-indigo-500 bg-indigo-500/5 scale-[0.99]"
            : "border-white/10 bg-white/[0.02] hover:border-white/20"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="text-[11px] font-semibold tracking-wide opacity-70">{g.category_label}</div>
          <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
            {UPLOAD_CATEGORIES.map((cat) => {
              const active = uploadCategory === cat;
              const accent =
                cat === "Drought"
                  ? "text-sky-300"
                  : cat === "Fluoride"
                    ? "text-brand-crimson"
                    : "text-amber-300";
              return (
                <button
                  key={cat}
                  onClick={() => setUploadCategory(cat)}
                  className={[
                    "px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all",
                    active ? "bg-white text-black shadow-lg" : `text-white/50 hover:text-white ${accent}`,
                  ].join(" ")}
                >
                  {categoryLabel(cat)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
          {isUploading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Plus size={40} />
            </motion.div>
          ) : (
            <Upload size={40} />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight">
            {isUploading ? g.uploading : g.drag_drop}
          </h3>
          <p className="text-sm opacity-40">{g.file_types}</p>
        </div>

        <label className="cursor-pointer px-8 py-4 bg-white text-black font-semibold text-xs tracking-wide hover:scale-105 transition-all rounded-lg inline-flex items-center gap-3">
          <Camera size={18} /> {t.gallery.upload_btn}
          <input type="file" className="hidden" accept="image/*" multiple onChange={handleFileInput} />
        </label>

        {dragActive && (
          <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none flex items-center justify-center">
            <div className="p-4 rounded-xl bg-indigo-500 text-white font-semibold text-xs tracking-wide shadow-2xl">
              {g.drop_hint}
            </div>
          </div>
        )}
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
