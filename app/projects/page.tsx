"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink, Eye, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ProjectCategory } from "@/types";
import { projectsData } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  const categories: ProjectCategory[] = [
    "All",
    "Fullstack",
    "Frontend",
    "Backend",
    "Mobile",
    "Bootcamp",
    "Learning",
    "Other",
  ];
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projectsData;
    }
    return projectsData.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <div>
      {/* Projects Hero */}
      <section className="container mx-auto space-y-4 py-4 md:py-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            A collection of projects I've built to learn and practice my skills.
          </p>
        </div>
      </section>

      {/* Project Categories Filter */}
      <section className="container pb-8 mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full px-4 py-2 text-sm">
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Card key={project.slug} className="group overflow-hidden">
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
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
                    <Link href={`/projects/${project.slug}`}>
                      <Eye /> View Detail
                    </Link>
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground col-span-full text-center">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
