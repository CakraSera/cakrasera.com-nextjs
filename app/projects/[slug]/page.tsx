import Image from "next/image";
import { projectsData, skillIcons } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ExternalLink,
  Github,
  Lightbulb,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  console.log(projectsData);
  
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  console.log("🚀 ~ ProjectDetail ~ params:", params)
  const slug = (await params).slug
  const project = projectsData.find((p) => p.slug === slug);
  console.log("🚀 ~ ProjectDetail ~ project:", projectsData)

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="container space-y-12 py-16 md:py-24">
        {/* Project Header */}
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            {project?.category} Project
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {project?.title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            {project?.shortDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {project?.liveLink && (
              <Button asChild size="lg">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                </a>
              </Button>
            )}
            {project?.githubLink && (
              <Button variant="outline" asChild size="lg">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> GitHub Repo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Main Project Image */}
        <div className="relative h-64 w-full overflow-hidden rounded-lg border shadow-lg sm:h-80 md:h-[500px]">
          <Image
            src={project?.image || "/placeholder.svg"}
            alt={project?.title || "Project"}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Overview */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-3xl font-bold">Overview</h2>
            {project?.longDescription.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project?.tags.map((tag, index) => {
                const Icon = skillIcons[tag];
                return (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-1">
                    {Icon && <Icon className="h-4 w-4" />}
                    {tag}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features */}
        {project?.features && project.features.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-background flex items-start gap-3 rounded-lg border p-4 shadow-sm">
                  <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Learnings */}
        {(project?.challenges && project.challenges.length > 0) ||
        (project?.learnings && project.learnings.length > 0) ? (
          <div className="grid gap-8 md:grid-cols-2">
            {project.challenges && project.challenges.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Wrench className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-muted-foreground">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.learnings && project.learnings.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Learnings</h2>
                <ul className="space-y-3">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <p className="text-muted-foreground">{learning}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : null}

        {/* Screenshots */}
        {project?.screenshots && project.screenshots.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-center text-3xl font-bold">Screenshots</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="relative h-64 overflow-hidden rounded-lg border shadow-md">
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-sm text-white">{screenshot.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to Projects */}
        <div className="pt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">← Back to All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
