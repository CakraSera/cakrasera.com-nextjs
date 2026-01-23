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

export type ProjectCategory = "All" | "Fullstack" | "Frontend" | "Backend";

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

export const featuredProjectsSlugs: readonly [string, string, string] = [
  "kendarago",
  "fitlex",
  "kanban-board",
];

export const projectsData: Project[] = [
  {
    slug: "kendarago",
    title: "KendaraGo",
    shortDescription:
      "A web-based application designed to facilitate vehicle rentals, with a primary focus on motorcycles.",
    longDescription: [
      "KendaraGo is a web-based application designed to facilitate vehicle rentals, with a primary focus on motorcycles. The app addresses key user pains such as inaccurate location data and difficult booking processes.",
      "The platform features location-based search, vehicle filtering, and detailed rental information. It aims to streamline the rental experience for both users and providers by offering features like map integration and direct contact options.",
      "Built with a modern tech stack including React, Hono, and PostgreSQL, the application ensures a robust and scalable architecture. It employs a clean separation of concerns with distinct presentation, application, and data access layers.",
    ],
    category: "Fullstack",
    tags: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Hono",
      "PostgreSQL",
      "Docker",
    ],
    image: "/images/projects/kendarago.png",
    liveLink: "https://kendarago.netlify.app/",
    githubLink: "https://github.com/kendarago/kendarago",
    features: [
      "Location-Based Search with GPS or manual input",
      "Vehicle Filtering & Sorting (Type, Brand, Price)",
      "Map integration (Google Maps / Leaflet)",
      "Detailed Vehicle & Rental Information",
      "Direct contact via Phone / WhatsApp",
    ],
    technologiesUsed: [
      "React",
      "Tailwind CSS",
      "Shadcn/ui",
      "TypeScript",
      "Hono",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    challenges: [
      "Implementing accurate location-based search and map integration",
      "Designing a responsive UI for various device types",
      "Managing complex filtering and sorting logic for vehicles",
    ],
    learnings: [
      "Full-stack development with Hono and React",
      "Containerization and deployment with Docker",
      "Database schema design with Prisma and PostgreSQL",
    ],
  },
  {
    slug: "fitlex",
    title: "Fitlex",
    shortDescription:
      "A modern e-commerce platform for fitness equipment, designed to provide a seamless shopping experience for home workouts.",
    longDescription: [
      "Fitlex is a modern e-commerce platform dedicated to fitness equipment, aiming to enhance the home workout experience through a seamless shopping interface. The platform addresses the need for high-quality fitness gear accessible from the comfort of one's home.",
      "The application features a robust product catalog with advanced filtering and sorting, detailed product pages with video integration, and a streamlined checkout process. It emphasizes user engagement through promotional bundles and interactive UI elements.",
      "Built with a resilient full-stack architecture, Fitlex leverages React for a dynamic frontend and Hono with PostgreSQL for a high-performance backend. The system is containerized with Docker to ensure consistent deployment environments.",
    ],
    category: "Fullstack",
    tags: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Hono",
      "PostgreSQL",
      "Docker",
    ],
    image: "/images/projects/fitlex.png",
    liveLink: "https://fitlex.cakrasera.com",
    githubLink: "https://github.com/CakraSera/fitlex",
    features: [
      "Interactive Home Page with promotional bundles",
      "Comprehensive Product Catalog with filtering and sorting",
      "Detailed Product Pages with video galleries",
      "Full Shopping Cart and Checkout functionality",
      "Order processing with status tracking",
    ],
    technologiesUsed: [
      "React",
      "Tailwind CSS",
      "Shadcn/ui",
      "TypeScript",
      "Hono",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    challenges: [
      "Implementing a secure and smooth checkout process",
      "Managing complex global state for the shopping cart",
      "Designing a responsive UI that handles rich media content effectively",
    ],
    learnings: [
      "Architecting a scalable e-commerce solution",
      "Integrating Hono for efficient backend API development",
      "Utilizing Docker for full-stack application containerization",
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
    image: "/images/projects/address-book.png",
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
    image: "/images/projects/kanban-board.png",
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
    image: "/images/projects/narai-coder.jpg",
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
  },
  {
    slug: "events-schedule-api",
    title: "Events Schedule API",
    shortDescription:
      "A RESTful API for managing events and user registrations built with Go, featuring JWT authentication and Swagger documentation.",
    longDescription: [
      "Events Schedule API is a RESTful backend service built with Go that enables comprehensive event management and user registration functionality. The API provides a complete CRUD interface for events with secure authentication using JWT tokens.",
      "The application features role-based access control, ensuring only event owners can modify or delete their events. Users can browse all events publicly, but must authenticate to create events or register for them.",
      "Built as a final project from a Udemy course, the API demonstrates modern Go development practices with clean architecture, middleware patterns, and comprehensive API documentation using Swagger/OpenAPI specifications.",
    ],
    category: "Backend",
    tags: ["Go", "Gin", "REST API", "JWT", "SQLite", "Swagger"],
    image: "/images/projects/events-schedule-api.jpg",
    liveLink: "https://.events-schedule-apicakrasera.com/scalar",
    githubLink: "https://github.com/CakraSera/events-schedule-api",
    features: [
      "Full CRUD operations for event management",
      "JWT-based user authentication and authorization",
      "Event registration and cancellation system",
      "Owner-only event modification and deletion",
      "Interactive Swagger/OpenAPI documentation",
      "Password hashing with bcrypt for security",
      "SQLite database with automatic initialization",
    ],
    technologiesUsed: [
      "Go",
      "Gin Framework",
      "SQLite",
      "JWT (golang-jwt)",
      "bcrypt",
      "Swagger/OpenAPI",
    ],
    challenges: [
      "Implementing secure JWT authentication middleware",
      "Designing ownership validation for protected resources",
      "Creating comprehensive API documentation with Swagger",
      "Managing concurrent database access with SQLite",
    ],
    learnings: [
      "Go web development with Gin framework",
      "JWT token generation and validation",
      "RESTful API design principles",
      "API documentation best practices",
      "Secure password hashing techniques",
    ],
  },
  {
    slug: "running-shoes-api",
    title: "Running Shoes API",
    shortDescription:
      "A comprehensive REST API for managing running shoes and brands, designed for runners, enthusiasts, and collectors.",
    longDescription: [
      "Running Shoes API is a passionate project born from a love of running, designed to help runners and enthusiasts manage and explore running shoes. The API provides a robust foundation for tracking shoe collections, building review sites, or staying updated on the latest releases.",
      "The application features a thoughtfully designed database schema capturing essential details about shoes and brands. It provides comprehensive endpoints for managing shoes, brands, and their relationships, with support for filtering and search capabilities.",
      "Built with modern TypeScript and Bun runtime, the API leverages Prisma ORM for type-safe database operations and is fully containerized with Docker for consistent deployment environments. The project includes interactive Scalar API documentation for easy exploration.",
    ],
    category: "Backend",
    tags: ["TypeScript", "Bun", "Prisma", "PostgreSQL", "Docker", "REST API"],
    image: "/images/projects/running-shoes.jpg",
    liveLink: "https://running-shoes.cakrasera.com/scalar",
    githubLink: "https://github.com/CakraSera/running-shoes-api",
    features: [
      "Complete CRUD operations for running shoes",
      "Brand management with relationship mapping",
      "Get shoes by brand slug for filtered queries",
      "Slug-based resource identification",
      "Batch operations (delete all shoes)",
      "Interactive Scalar API documentation",
      "Type-safe database operations with Prisma",
    ],
    technologiesUsed: [
      "TypeScript",
      "Bun Runtime",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
      "Scalar API Docs",
    ],
    challenges: [
      "Designing an efficient relational database schema",
      "Implementing slug-based routing for SEO-friendly URLs",
      "Managing brand-shoe relationships with Prisma",
      "Containerizing the full-stack application with Docker",
    ],
    learnings: [
      "TypeScript API development with Bun runtime",
      "Prisma ORM for type-safe database access",
      "RESTful API design for resource relationships",
      "Docker containerization and docker-compose orchestration",
      "Database schema design and normalization",
    ],
  },
];
