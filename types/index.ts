export type ProjectCategory =
  | "All"
  | "Fullstack"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Bootcamp"
  | "Learning"
  | "Other";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  category: Exclude<ProjectCategory, "All">;
  tags: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  features?: string[];
  challenges?: string[];
  screenshots?: { src: string; alt: string }[];
}
