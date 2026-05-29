export type GalleryViewMode =
  | "extraLarge"
  | "large"
  | "medium"
  | "small"
  | "list"
  | "details"
  | "tiles"
  | "content";

export const GALLERY_VIEW_MODES: GalleryViewMode[] = [
  "extraLarge",
  "large",
  "medium",
  "small",
  "list",
  "details",
  "tiles",
  "content",
];

export function galleryGridClass(mode: GalleryViewMode): string {
  switch (mode) {
    case "extraLarge":
      return "grid grid-cols-1 sm:grid-cols-2 gap-8";
    case "large":
      return "grid grid-cols-2 md:grid-cols-3 gap-6";
    case "medium":
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4";
    case "small":
      return "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3";
    case "list":
    case "details":
      return "flex flex-col gap-2";
    case "tiles":
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3";
    case "content":
      return "flex flex-col gap-3";
    default:
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
  }
}

export function thumbSizeClass(mode: GalleryViewMode): string {
  switch (mode) {
    case "extraLarge":
      return "h-56 sm:h-72";
    case "large":
      return "h-44";
    case "medium":
      return "h-32";
    case "small":
      return "h-20";
    case "list":
      return "h-14 w-20 shrink-0";
    case "details":
      return "h-12 w-16 shrink-0";
    case "tiles":
      return "h-16 w-16 shrink-0";
    case "content":
      return "h-20 w-28 shrink-0";
    default:
      return "h-40";
  }
}
