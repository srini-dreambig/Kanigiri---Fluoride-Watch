import React, { useState, useCallback, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { api, type CrisisCategory, type GalleryImageDto } from "../lib/api";
import { fileToCompressedDataUrl } from "../lib/compressImage";
import { getUiLabels } from "../data/uiLabels";
import {
  Upload,
  Image as ImageIcon,
  X,
  Plus,
  ArrowUpRight,
  Camera,
  Layers,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

  const categoryLabel = (cat: GalleryFilter | CrisisCategory) => g.filters[cat];

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

  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card overflow-hidden group border-white/5 bg-white/[0.02]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={img.url}
                      alt={g.image_alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={[
                          "px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide border backdrop-blur-sm",
                          img.category === "Drought"
                            ? "text-sky-200 border-sky-200/30 bg-sky-950/40"
                            : img.category === "Fluoride"
                              ? "text-red-200 border-red-200/30 bg-red-950/40"
                              : "text-amber-200 border-amber-200/30 bg-amber-950/40",
                        ].join(" ")}
                      >
                        {categoryLabel(img.category)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button
                        onClick={() => removeImage(img.id)}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      >
                        <X size={20} />
                      </button>
                      <a
                        href={img.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-semibold tracking-wide opacity-60">
                      <span>{g.submission_label}</span>
                      <span>{new Date(img.timestamp).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm font-light opacity-80 leading-relaxed italic">"{img.caption}"</p>
                    <div className="flex items-center gap-2 text-[10px] font-semibold tracking-wide text-green-500">
                      <CheckCircle size={12} /> {g.verified_location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
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
  );
};
