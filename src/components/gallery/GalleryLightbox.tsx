import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { GalleryImageDto, CrisisCategory } from "../../lib/api";
import { downloadGalleryImage, galleryDownloadFilename } from "../../lib/galleryViewer";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Trash2,
} from "lucide-react";

export type GalleryViewerLabels = {
  close: string;
  previous: string;
  next: string;
  download: string;
  rotate_left: string;
  rotate_right: string;
  zoom_in: string;
  zoom_out: string;
  reset_view: string;
  counter: string;
  delete: string;
  category: string;
  date: string;
  open_photo: string;
};

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

type Props = {
  images: GalleryImageDto[];
  index: number;
  labels: GalleryViewerLabels;
  categoryLabel: (cat: CrisisCategory) => string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  onDelete?: (id: string) => void;
};

export const GalleryLightbox = ({
  images,
  index,
  labels,
  categoryLabel,
  onClose,
  onIndexChange,
  onDelete,
}: Props) => {
  const image = images[index];
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false);

  const resetView = useCallback(() => {
    setRotation(0);
    setZoom(1);
  }, []);

  useEffect(() => {
    resetView();
  }, [index, resetView]);

  useEffect(() => {
    const preload = (src: string) => {
      const el = new Image();
      el.src = src;
    };
    preload(image.fullUrl);
    if (images[index - 1]) preload(images[index - 1].fullUrl);
    if (images[index + 1]) preload(images[index + 1].fullUrl);
  }, [index, image.fullUrl, images]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const goPrev = useCallback(() => {
    if (images.length <= 1) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [images.length, index, onIndexChange]);

  const goNext = useCallback(() => {
    if (images.length <= 1) return;
    onIndexChange((index + 1) % images.length);
  }, [images.length, index, onIndexChange]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP));
      if (e.key === "-") setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP));
      if (e.key === "0") resetView();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, goPrev, goNext, resetView]);

  if (!image) return null;

  const counterText = labels.counter
    .replace("{current}", String(index + 1))
    .replace("{total}", String(images.length));

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadGalleryImage(
        image.fullUrl,
        galleryDownloadFilename(image.category, image.id),
        rotation
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const toolbarBtn =
    "p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-40 disabled:pointer-events-none";

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={labels.open_photo}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex flex-col bg-black/97 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex flex-col flex-1 min-h-0" onClick={(e) => e.stopPropagation()}>
      {/* Top toolbar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
          <button type="button" className={toolbarBtn} onClick={onClose} aria-label={labels.close}>
            <X size={20} />
          </button>
          <span className="text-xs font-mono text-white/50 px-2 hidden sm:inline">{counterText}</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-end">
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => setRotation((r) => r - 90)}
            aria-label={labels.rotate_left}
          >
            <RotateCcw size={20} />
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => setRotation((r) => r + 90)}
            aria-label={labels.rotate_right}
          >
            <RotateCw size={20} />
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP))}
            disabled={zoom <= MIN_ZOOM}
            aria-label={labels.zoom_out}
          >
            <ZoomOut size={20} />
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP))}
            disabled={zoom >= MAX_ZOOM}
            aria-label={labels.zoom_in}
          >
            <ZoomIn size={20} />
          </button>
          <button type="button" className={toolbarBtn} onClick={resetView} aria-label={labels.reset_view}>
            <Maximize2 size={20} />
          </button>
          <button
            type="button"
            className={`${toolbarBtn} min-w-[2.5rem]`}
            onClick={() => void handleDownload()}
            disabled={isDownloading}
            aria-label={labels.download}
          >
            <Download size={20} />
          </button>
          {onDelete ? (
            <button
              type="button"
              className={`${toolbarBtn} hover:bg-red-500/30`}
              onClick={() => {
                onDelete(image.id);
                if (images.length <= 1) onClose();
                else if (index >= images.length - 1) onIndexChange(index - 1);
              }}
              aria-label={labels.delete}
            >
              <Trash2 size={20} />
            </button>
          ) : null}
        </div>
      </div>

      {/* Main stage */}
      <div className="relative flex-1 flex items-center justify-center min-h-0 px-14 sm:px-20">
        {images.length > 1 ? (
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={labels.previous}
          >
            <ChevronLeft size={28} />
          </button>
        ) : null}

        <AnimatePresence mode="wait">
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="max-w-full max-h-full flex items-center justify-center p-4"
          >
            <img
              src={image.fullUrl}
              alt={image.caption}
              className="max-h-[calc(100vh-12rem)] max-w-full object-contain select-none transition-transform duration-200"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
              }}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={labels.next}
          >
            <ChevronRight size={28} />
          </button>
        ) : null}
      </div>

      {/* Bottom metadata */}
      <div className="shrink-0 px-6 py-4 border-t border-white/10 bg-black/50 space-y-2 max-w-3xl mx-auto w-full text-center">
        <p className="text-sm sm:text-base text-white/90 italic leading-relaxed">"{image.caption}"</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-semibold tracking-wide text-white/50">
          <span>{labels.category}: {categoryLabel(image.category)}</span>
          <span aria-hidden>·</span>
          <span>
            {labels.date}: {new Date(image.timestamp).toLocaleDateString()}
          </span>
          <span className="sm:hidden font-mono">{counterText}</span>
        </div>
      </div>

      </div>
    </motion.div>
  );
};
