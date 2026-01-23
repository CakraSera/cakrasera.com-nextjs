"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Atom,
  Server,
  Zap,
  Type,
  Palette,
  Database,
  Flame,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

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
  "Hono Js": Flame,
  PostgreSQL: Database,
};

export function SkillsCarousel() {
  return (
    <div className="mx-auto px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Hono Js",
            "Tailwind CSS",
            "PostgreSQL",
          ].map((skill, index) => {
            const Icon = skillIcons[skill] || Code;
            return (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    {Icon && <Icon className="text-primary mb-3 h-12 w-12" />}
                    <h3 className="text-lg font-medium">{skill}</h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
