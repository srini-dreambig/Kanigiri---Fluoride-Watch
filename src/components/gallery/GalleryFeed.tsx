import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Maximize2, X, CheckCircle } from "lucide-react";
import type { GalleryImageDto, CrisisCategory } from "../../lib/api";
import type { GalleryViewMode } from "./galleryViewModes";
import { galleryGridClass, thumbSizeClass } from "./galleryViewModes";

type Labels = {
  image_alt: string;
  submission_label: string;
  verified_location: string;
  viewer: { expand: string; delete: string };
  layout: {
    category_col: string;
    date_col: string;
    caption_col: string;
  };
};

type Props = {
  images: GalleryImageDto[];
  viewMode: GalleryViewMode;
  selectMode: boolean;
  selectedIds: Set<string>;
  categoryLabel: (cat: CrisisCategory) => string;
  labels: Labels;
  onToggleSelect: (id: string) => void;
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
};

function categoryBadgeClass(cat: CrisisCategory) {
  if (cat === "Drought") return "text-sky-200 border-sky-200/30 bg-sky-950/40";
  if (cat === "Fluoride") return "text-red-200 border-red-200/30 bg-red-950/40";
  return "text-amber-200 border-amber-200/30 bg-amber-950/40";
}

export const GalleryFeed = ({
  images,
  viewMode,
  selectMode,
  selectedIds,
  categoryLabel,
  labels,
  onToggleSelect,
  onOpen,
  onDelete,
}: Props) => {
  const isRowLayout = viewMode === "list" || viewMode === "details" || viewMode === "content";
  const isIconGrid = viewMode === "extraLarge" || viewMode === "large" || viewMode === "medium" || viewMode === "small";
  const showCardFooter = viewMode === "extraLarge" || viewMode === "large" || viewMode === "medium" || viewMode === "tiles";

  return (
    <div className={galleryGridClass(viewMode)}>
      {viewMode === "details" ? (
        <div className="hidden sm:grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-4 px-4 py-2 text-[10px] font-semibold tracking-wide text-white/40 border-b border-white/10">
          <span>{labels.layout.caption_col}</span>
          <span>{labels.layout.category_col}</span>
          <span>{labels.layout.date_col}</span>
          <span className="sr-only">Actions</span>
        </div>
      ) : null}

      <AnimatePresence>
        {images.map((img) => {
          const selected = selectedIds.has(img.id);
          const dateStr = new Date(img.timestamp).toLocaleDateString();

          const checkbox = (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleSelect(img.id);
              }}
              className={[
                "shrink-0 w-6 h-6 rounded-md border flex items-center justify-center transition-colors",
                selected
                  ? "bg-indigo-500 border-indigo-400 text-white"
                  : "border-white/30 bg-black/40 text-transparent hover:border-white/60",
                selectMode ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              ].join(" ")}
              aria-label={selected ? "Deselect" : "Select"}
              aria-pressed={selected}
            >
              <Check size={14} strokeWidth={3} />
            </button>
          );

          const thumb = (
            <div
              className={[
                "relative overflow-hidden rounded-lg bg-white/5",
                isRowLayout ? thumbSizeClass(viewMode) : `w-full ${thumbSizeClass(viewMode)}`,
                !isRowLayout && isIconGrid ? "aspect-[4/3]" : "",
              ].join(" ")}
            >
              <img
                src={img.url}
                alt={img.caption || labels.image_alt}
                className="w-full h-full object-cover"
              />
            </div>
          );

          const handlePrimaryClick = () => {
            if (selectMode) onToggleSelect(img.id);
            else onOpen(img.id);
          };

          if (viewMode === "details") {
            return (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={[
                  "group grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] gap-3 sm:gap-4 items-center px-4 py-3 rounded-xl border transition-colors cursor-pointer",
                  selected ? "border-indigo-500/60 bg-indigo-500/10" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]",
                ].join(" ")}
                onClick={handlePrimaryClick}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {checkbox}
                  {thumb}
                  <p className="text-sm truncate opacity-90 sm:hidden">{img.caption}</p>
                </div>
                <p className="text-sm truncate opacity-80 hidden sm:block">{img.caption}</p>
                <span
                  className={`text-[10px] font-semibold tracking-wide px-2 py-1 rounded-full border w-fit ${categoryBadgeClass(img.category)}`}
                >
                  {categoryLabel(img.category)}
                </span>
                <span className="text-xs font-mono text-white/50">{dateStr}</span>
                <div className="flex gap-2 justify-end">
                  <IconBtn onClick={() => onOpen(img.id)} label={labels.viewer.expand} icon={<Maximize2 size={16} />} />
                  <IconBtn onClick={() => onDelete(img.id)} label={labels.viewer.delete} icon={<X size={16} />} danger />
                </div>
              </motion.div>
            );
          }

          if (viewMode === "list" || viewMode === "content") {
            return (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={[
                  "group flex gap-4 items-center p-3 rounded-xl border transition-colors cursor-pointer",
                  selected ? "border-indigo-500/60 bg-indigo-500/10" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]",
                ].join(" ")}
                onClick={handlePrimaryClick}
              >
                {checkbox}
                {thumb}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full border ${categoryBadgeClass(img.category)}`}
                    >
                      {categoryLabel(img.category)}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">{dateStr}</span>
                  </div>
                  <p className={`opacity-80 italic ${viewMode === "content" ? "text-sm line-clamp-3" : "text-xs line-clamp-2"}`}>
                    "{img.caption}"
                  </p>
                  {viewMode === "content" ? (
                    <p className="text-[10px] text-green-500/80 flex items-center gap-1">
                      <CheckCircle size={10} /> {labels.verified_location}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            );
          }

          if (viewMode === "tiles") {
            return (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className={[
                  "group flex gap-3 items-center p-3 rounded-xl border transition-colors cursor-pointer",
                  selected ? "border-indigo-500/60 bg-indigo-500/10" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]",
                ].join(" ")}
                onClick={handlePrimaryClick}
              >
                {checkbox}
                {thumb}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold truncate">{categoryLabel(img.category)}</p>
                  <p className="text-[10px] text-white/40 truncate">{dateStr}</p>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className={[
                "glass-card overflow-hidden group border transition-colors",
                selected ? "border-indigo-500/50 bg-indigo-500/5" : "border-white/5 bg-white/[0.02]",
              ].join(" ")}
            >
              <div className={`relative overflow-hidden ${isIconGrid ? "" : ""}`}>
                <button
                  type="button"
                  onClick={handlePrimaryClick}
                  className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  aria-label={selectMode ? "Toggle selection" : labels.viewer.expand}
                >
                  <div className={isIconGrid ? `w-full ${thumbSizeClass(viewMode)}` : "aspect-[4/3]"}>
                    <img
                      src={img.url}
                      alt={img.caption || labels.image_alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </button>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {checkbox}
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border backdrop-blur-sm ${categoryBadgeClass(img.category)}`}
                  >
                    {categoryLabel(img.category)}
                  </span>
                </div>
              </div>
              {showCardFooter ? (
                <div className="p-4 space-y-2">
                  <div className="flex justify-between text-[10px] font-semibold tracking-wide opacity-50">
                    <span>{labels.submission_label}</span>
                    <span>{dateStr}</span>
                  </div>
                  {(viewMode === "extraLarge" || viewMode === "large") && (
                    <p className="text-sm font-light opacity-75 italic line-clamp-2">"{img.caption}"</p>
                  )}
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

function IconBtn({
  onClick,
  label,
  icon,
  danger,
}: {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={[
        "rounded-full text-white transition-colors pointer-events-auto p-2",
        danger ? "bg-white/10 hover:bg-red-500/40" : "bg-indigo-500 hover:bg-indigo-600",
      ].join(" ")}
      aria-label={label}
    >
      {icon}
    </button>
  );
}
