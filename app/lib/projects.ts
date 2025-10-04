import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Server,
  Type,
  Palette,
  Database,
  GitBranch,
  Smartphone,
  Plug,
  BookOpen,
  Code,
  LayoutDashboard,
  MessageSquare,
  Cloud,
  Zap,
  Globe,
} from "lucide-react";

export type ProjectCategory =
  | "All"
  | "Fullstack"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Learning"
  | "Bootcamp"
  | "Other";

export const skillIcons: { [key: string]: LucideIcon } = {
  "HTML & CSS": Code,
  JavaScript: Code,
  React: Atom,
  "Node.js": Server,
  "Next.js": Zap,
  TypeScript: Type,
  "Tailwind CSS": Palette,
  MongoDB: Database,
  Express: Server,
  Git: GitBranch,
  "Responsive Design": Smartphone,
  "API Integration": Plug,
  MDX: BookOpen,
  Stripe: Globe,
  "Socket.io": MessageSquare,
  "D3.js": LayoutDashboard,
  PostgreSQL: Database,
  GraphQL: Cloud,
  Docker: Server,
  AWS: Cloud,
  "CI/CD": GitBranch,
  WordPress: Globe,
  Bootstrap: Palette,
  "Chart.js": LayoutDashboard,
  Supabase: Database,
  "OpenWeather API": Plug,
  Mapbox: Globe,
  "CSS Modules": Palette,
  Redux: Atom,
  "Material UI": Palette,
  Firebase: Database,
  "Health APIs": Plug,
  Prisma: Database,
  "React Native": Smartphone,
};
