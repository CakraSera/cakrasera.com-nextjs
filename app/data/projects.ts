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

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  category: ProjectCategory;
  tags: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  features?: string[];
  technologiesUsed?: string[];
  challenges?: string[];
  learnings?: string[];
  screenshots?: { src: string; alt: string }[];
}

// Map skill names to Lucide React icons for display
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

export const projectsData: Project[] = [
  {
    slug: "ecommerce-store",
    title: "E-commerce Store",
    shortDescription:
      "A full-featured e-commerce platform with product management and cart feature.",
    longDescription: [
      "Developed a comprehensive address book publiclication that enables users to manage their contacts efficiently. The solution features full CRUD functionality with intuitive search and filtering capabilities.",
      "Implemented a clean, modern UI using Tailwind CSS that adapts seamlessly across mobile and desktop devices. The publiclication leverages browser local storage to maintain data persistence between sessions.",
      "Focus on UX principles resulted in a zero-learning-curve interface with instant feedback for user actions. Form validation ensures data integrity for all contact information.",
    ],
    category: "Frontend",
    tags: ["JavaScript", "Tailwind CSS", "LocalStorage", "Responsive Design"],
    image: "/assets/images/projects/address-book.png",
    liveLink: "https://fitlex.cakrasera.com",
    githubLink: "https://github.com/CakraSera/fitlex",
    features: [
      "Add/edit/delete contacts with validation",
      "Instant search and filtering",
      "Local storage persistence",
      "Responsive mobile-first design",
      "Dark/light mode toggle",
    ],
    technologiesUsed: ["React", "HTML", "Tailwind CSS"],
    challenges: [
      "Implementing efficient local storage synchronization",
      "Creating responsive layouts for complex contact cards",
      "Developing real-time search with debounce functionality",
    ],
    learnings: [
      "Advanced DOM manipulation techniques",
      "Browser storage API implementation",
      "Performance optimization for filter operations",
    ],
    screenshots: [
      {
        src: "/assets/images/projects/address-book-1.png",
        alt: "Contact list view",
      },
      {
        src: "/assets/images/projects/address-book-2.png",
        alt: "Contact detail view",
      },
    ],
  },
  {
    slug: "address-book",
    title: "Address Book",
    shortDescription:
      "A responsive contact management system with local storage persistence.",
    longDescription: [
      "Developed a comprehensive address book publiclication that enables users to manage their contacts efficiently. The solution features full CRUD functionality with intuitive search and filtering capabilities.",
      "Implemented a clean, modern UI using Tailwind CSS that adapts seamlessly across mobile and desktop devices. The publiclication leverages browser local storage to maintain data persistence between sessions.",
      "Focus on UX principles resulted in a zero-learning-curve interface with instant feedback for user actions. Form validation ensures data integrity for all contact information.",
    ],
    category: "Frontend",
    tags: ["JavaScript", "Tailwind CSS", "LocalStorage", "Responsive Design"],
    image: "/assets/images/projects/address-book.png",
    liveLink: "https://address-book.cakrasera.com",
    githubLink: "https://github.com/CakraSera/address-book",
    features: [
      "Add/edit/delete contacts with validation",
      "Instant search and filtering",
      "Local storage persistence",
      "Responsive mobile-first design",
      "Dark/light mode toggle",
    ],
    technologiesUsed: ["JavaScript", "HTML", "Tailwind CSS"],
    challenges: [
      "Implementing efficient local storage synchronization",
      "Creating responsive layouts for complex contact cards",
      "Developing real-time search with debounce functionality",
    ],
    learnings: [
      "Advanced DOM manipulation techniques",
      "Browser storage API implementation",
      "Performance optimization for filter operations",
    ],
    screenshots: [
      {
        src: "/assets/images/projects/address-book-1.png",
        alt: "Contact list view",
      },
      {
        src: "/assets/images/projects/address-book-2.png",
        alt: "Contact detail view",
      },
    ],
  },
  {
    slug: "kanban-board",
    title: "Kanban Board",
    shortDescription:
      "Drag-and-drop task management system inspired by Kanban methodology.",
    longDescription: [
      "Built an interactive task management publiclication using React with full drag-and-drop functionality. The board features customizable columns that visualize workflow stages from 'To Do' to 'Completed'.",
      "Implemented a responsive UI with Shadcn UI components and Tailwind CSS styling. The publiclication includes task filtering, priority tagging, and due date tracking.",
      "Designed with extensibility in mind, allowing easy integration with backend services through a modular architecture.",
    ],
    category: "Frontend",
    tags: ["React", "Drag and Drop", "Tailwind CSS", "State Management"],
    image: "/assets/images/projects/kanban-board.png",
    liveLink: "https://kanban-board.cakrasera.com",
    githubLink: "https://github.com/CakraSera/kanban",
    features: [
      "Drag-and-drop task management",
      "Customizable workflow columns",
      "Task filtering by status/tags",
      "Priority indicators and due dates",
      "Responsive board layout",
    ],
    technologiesUsed: ["React", "Tailwind CSS", "Shadcn UI", "React DnD"],
    challenges: [
      "Implementing smooth drag-and-drop animations",
      "Managing complex state transitions",
      "Creating accessible keyboard controls",
      "Optimizing performance for large task sets",
    ],
    learnings: [
      "Advanced React state management patterns",
      "Drag-and-drop API implementation",
      "Component library integration",
      "Accessibility best practices",
    ],
    screenshots: [
      {
        src: "/assets/images/projects/kanban-1.png",
        alt: "Main board view",
      },
      {
        src: "/assets/images/projects/kanban-2.png",
        alt: "Task detail modal",
      },
    ],
  },
  {
    slug: "narai-coder",
    title: "Narai Coder",
    shortDescription:
      "Developer community platform for knowledge sharing and collaboration.",
    longDescription: [
      "Created a community hub for developers to share resources, tutorials, and project ideas. The platform features user-generated content with voting and commenting systems.",
      "Implemented user authentication and authorization flows to enable personalized experiences. The responsive design ensures accessibility across devices with optimized reading experiences for technical content.",
      "Focused on community engagement features including content bookmarks, user reputation systems, and discussion threads.",
    ],
    category: "Fullstack",
    tags: [
      "Bootstrap",
      "User Authentication",
      "Community Platform",
      "Responsive Design",
    ],
    image: "/assets/images/projects/narai-coder.jpg",
    liveLink: "https://naraicoder.org",
    githubLink: "https://github.com/Hayolox/NaraiCoder",
    features: [
      "User registration/login with profiles",
      "Content creation and commenting",
      "Resource voting and bookmarking",
      "Responsive article layouts",
      "Search and content filtering",
    ],
    technologiesUsed: ["HTML", "CSS", "Bootstrap", "JavaScript", "Firebase"],
    challenges: [
      "Designing secure authentication flows",
      "Implementing real-time comment updates",
      "Creating accessible form validations",
      "Optimizing content delivery performance",
    ],
    learnings: [
      "Authentication system design",
      "Community engagement patterns",
      "Content moderation techniques",
      "Semantic HTML structure",
    ],
    screenshots: [
      {
        src: "/assets/images/projects/narai-1.jpg",
        alt: "Community homepage",
      },
      {
        src: "/assets/images/projects/narai-2.jpg",
        alt: "Article detail page",
      },
    ],
  },
];
