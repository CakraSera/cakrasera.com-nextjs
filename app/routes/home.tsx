import { Link } from "react-router";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  BookOpen,
  Briefcase,
  GitBranch,
  Plug,
  Code,
  Smartphone,
  Database,
  Atom,
  Server,
  Zap,
  Type,
  Palette,
  ExternalLink,
  Eye,
} from "lucide-react";
import { format } from "date-fns";

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

import type { Route } from "./+types/home";
import { projectsData } from "~/data/projects";
import { Card, CardContent } from "~/components/ui/card";
import { WorkExperience } from "~/data/work-experience";

// Map skill names to Lucide React icons
const skillIcons: { [key: string]: React.ElementType } = {
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
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Rakhel Cakra K.Sera" },
    {
      name: "description",
      content:
        "Personal portfolio website showcasing my skills and projects as a fullstack web developer.",
    },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container space-y-8 py-16 md:py-24">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="space-y-6 text-center md:w-1/2 md:text-left">
            <Badge className="px-3 py-1 text-sm" variant="outline">
              Open to opportunities
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary">Cakra</span>
              <br />
              Fullstack Web Developer
            </h1>
            <p className="text-muted-foreground mx-auto max-w-md text-base sm:text-lg md:mx-0 md:text-xl">
              Passionate about building web applications and constantly learning
              new technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild>
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 pt-4 md:justify-start">
              <a
                href="https://github.com/CakraSera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rakhelcakrakusumadinatasera/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2 md:justify-end">
            <div className="border-primary/20 relative h-64 w-64 overflow-hidden rounded-full border-4 sm:h-72 sm:w-72 md:h-80 md:w-80">
              <img
                src="/assets/images/web-profile-img.jpg?height=320&width=320"
                alt="Developer portrait"
                className="object-cover"
              />
            </div>  
          </div>
        </div>
      </section>

      {/* Work Experience Preview */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 md:mx-auto">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Work Experience
              </h2>
              <p className="text-muted-foreground text-lg">
                My professional journey in web development.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {WorkExperience.map((record) => (
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Briefcase className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{record.position}</h3>
                      <p className="text-primary font-medium">
                        {record.companyName}
                      </p>
                      <p className="text-muted-foreground mb-2 text-sm">
                        {format(record.startDate, "MMM yyyy")} -
                        {format(record.endDate, "MMM yyyy")}
                      </p>
                      <p className="text-sm">{record.jobDescription[0]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <Button asChild>
                <Link to="/about#experience">
                  View Full Experience <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">My Skills</h2>
            <p className="text-muted-foreground text-lg">
              Technologies I've been working with recently.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              "HTML & CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "MongoDB",
            ].map((skill, index) => {
              const Icon = skillIcons[skill] || Code; // Fallback to Code icon if specific not found
              return (
                <div
                  key={index}
                  className="bg-background flex flex-col items-center rounded-lg border p-6 text-center shadow-sm">
                  {Icon && <Icon className="text-primary mb-3 h-8 w-8" />}
                  <h3 className="text-lg font-medium">{skill}</h3>
                </div>
              );
            })}
          </div>
          <div className="pt-4 text-center">
            <Button variant="outline" asChild>
              <Link to="/about#skills">
                View All Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Featured Projects Preview */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Check out some of my recent work.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <Card
                key={project.slug}
                className="group bg-background overflow-hidden rounded-lg border shadow-sm">
                <Link to={`/projects/${project.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Link>
                <div className="flex flex-wrap gap-3 p-4 pt-0">
                  {project.liveLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-1 bg-transparent">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-1 bg-transparent">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-1 bg-transparent">
                    <Link to={`/projects/${project.slug}`}>
                      <Eye /> View Detail
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="pt-4 text-center">
            <Button asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Let's Connect!</h2>
          <p className="text-muted-foreground text-lg">
            I'm looking for opportunities to grow as a developer and contribute
            to meaningful projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank">
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
