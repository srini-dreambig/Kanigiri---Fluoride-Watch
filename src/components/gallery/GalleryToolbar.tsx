import React, { useEffect, useRef, useState } from "react";
import {
  LayoutGrid,
  ChevronDown,
  CheckSquare,
  Square,
  Download,
  X,
} from "lucide-react";
import { GALLERY_VIEW_MODES, type GalleryViewMode } from "./galleryViewModes";

type ViewLabels = Record<GalleryViewMode, string>;

type LayoutLabels = {
  view_menu: string;
  bulk_select: string;
  bulk_select_exit: string;
  select_all: string;
  clear_selection: string;
  download_selected: string;
  selected_count: string;
  downloading: string;
};

type Props = {
  viewMode: GalleryViewMode;
  onViewModeChange: (mode: GalleryViewMode) => void;
  viewLabels: ViewLabels;
  layoutLabels: LayoutLabels;
  selectMode: boolean;
  onSelectModeChange: (on: boolean) => void;
  selectedCount: number;
  totalCount: number;
  onSelectAll: () => void;
  onClearSelection: () => void;
  onDownloadSelected: () => void;
  isDownloading: boolean;
};

export const GalleryToolbar = ({
  viewMode,
  onViewModeChange,
  viewLabels,
  layoutLabels,
  selectMode,
  onSelectModeChange,
  selectedCount,
  totalCount,
  onSelectAll,
  onClearSelection,
  onDownloadSelected,
  isDownloading,
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="flex flex-col gap-4 border-b border-white/5 pb-4">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold tracking-wide hover:bg-white/10 transition-colors"
            aria-expanded={menuOpen}
            aria-haspopup="listbox"
          >
            <LayoutGrid size={16} className="text-indigo-400" />
            {layoutLabels.view_menu}: {viewLabels[viewMode]}
            <ChevronDown size={14} className={`transition-transform ${menuOpen ? "rotate-180" : ""}`} />
          </button>
          {menuOpen ? (
            <ul
              role="listbox"
              className="absolute z-30 mt-2 min-w-[220px] py-1 rounded-xl bg-zinc-900 border border-white/10 shadow-2xl"
            >
              {GALLERY_VIEW_MODES.map((mode) => (
                <li key={mode}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={viewMode === mode}
                    onClick={() => {
                      onViewModeChange(mode);
                      setMenuOpen(false);
                    }}
                    className={[
                      "w-full text-left px-4 py-2.5 text-sm transition-colors",
                      viewMode === mode
                        ? "bg-indigo-500/20 text-indigo-200"
                        : "text-white/80 hover:bg-white/5",
                    ].join(" ")}
                  >
                    {viewLabels[mode]}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => onSelectModeChange(!selectMode)}
          className={[
            "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide border transition-colors",
            selectMode
              ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-200"
              : "bg-white/5 border-white/10 hover:bg-white/10",
          ].join(" ")}
        >
          {selectMode ? <CheckSquare size={16} /> : <Square size={16} />}
          {selectMode ? layoutLabels.bulk_select_exit : layoutLabels.bulk_select}
        </button>
      </div>

      {(selectMode || selectedCount > 0) && (
        <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10">
          <span className="text-xs text-white/50">
            {layoutLabels.selected_count
              .replace("{count}", String(selectedCount))
              .replace("{total}", String(totalCount))}
          </span>
          <button
            type="button"
            onClick={onSelectAll}
            disabled={totalCount === 0}
            className="text-xs font-semibold text-indigo-300 hover:text-indigo-200 disabled:opacity-40"
          >
            {layoutLabels.select_all}
          </button>
          <button
            type="button"
            onClick={onClearSelection}
            disabled={selectedCount === 0}
            className="text-xs font-semibold text-white/50 hover:text-white disabled:opacity-40"
          >
            {layoutLabels.clear_selection}
          </button>
          <button
            type="button"
            onClick={onDownloadSelected}
            disabled={selectedCount === 0 || isDownloading}
            className="inline-flex items-center gap-2 ml-auto px-4 py-2 rounded-lg bg-white text-black text-xs font-semibold tracking-wide hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100"
          >
            <Download size={14} />
            {isDownloading ? layoutLabels.downloading : layoutLabels.download_selected}
          </button>
          {selectMode && selectedCount > 0 ? (
            <button
              type="button"
              onClick={onClearSelection}
              className="p-2 rounded-lg hover:bg-white/10 text-white/50"
              aria-label={layoutLabels.clear_selection}
            >
              <X size={16} />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};
