/** Canonical mandal slugs (shared by API handlers and frontend data). */
export const mandalSlugsInOrder = [
  "pc-palli",
  "kanigiri",
  "pamur",
  "cs-puram",
  "hm-padu",
  "veligandla",
] as const;

export type MandalSlug = (typeof mandalSlugsInOrder)[number];
