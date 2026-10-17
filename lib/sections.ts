export type Section = {
  slug: string;
  filename: string;
  label: string;
  built: boolean;
};

export const SECTIONS: readonly Section[] = [
  { slug: "about", filename: "about.md", label: "About Us", built: true },
  { slug: "events", filename: "events.json", label: "Events", built: true },
  { slug: "projects", filename: "projects/", label: "Build Showcase", built: true },
  { slug: "officers", filename: "officers.ts", label: "Executives & Advisers", built: true },
  { slug: "gallery", filename: "gallery/", label: "Gallery", built: true },
  { slug: "partners", filename: "partners.json", label: "Partners & Sponsors", built: true },
  { slug: "join", filename: "join.sh", label: "Join Us", built: true },
];

export function markerOf(slug: string): string {
  const index = SECTIONS.findIndex((section) => section.slug === slug);
  if (index < 0) throw new Error(`Unknown section: ${slug}`);
  return String(index + 1).padStart(2, "0");
}