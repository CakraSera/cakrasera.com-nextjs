"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Code,
  Wrench,
  Database,
  Zap,
  MapPin,
  Mail,
  School,
  Atom,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <>
      {/* About Hero Section */}
      {/* Hero */}
      <section id="intro" className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="outline" className="px-3 py-1 w-fit">
              About Me
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm Cakra — a fullstack web developer. 😎
            </h1>
            <p className="text-muted-foreground text-lg">
              Hey, I'm Cakra (full name: Rakhel Cakra Kusumadinata Sera) – a
              full-stack web developer with a flair for client-side magic. My
              motto? <em>"Try something. If it's failed then learn faster."</em>{" "}
              🚀
            </p>

            {/* Quick facts */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border bg-background p-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Tangerang Selatan, Indonesia</p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-4 flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-medium">Fullstack Web Developer</p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-4 flex items-start gap-3">
                <School className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">
                    Informatics Engineering at University of Palangka Raya
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-4 flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <a
                    href="mailto:rakelsera2001@gmail.com"
                    className="font-medium hover:text-primary transition-colors">
                    rakelsera2001@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[280px] sm:h-[340px] md:h-[420px] rounded-xl overflow-hidden border shadow">
              <Image
                src="/images/about-me.jpeg"
                alt="Portrait of Cakra"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section id="story" className="py-16 md:py-24 ">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            Personal Story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I kicked off my tech adventure with a degree in Informatic
              Engineering from Universitas Palangka Raya. My first gig? Building
              the frontend for Narai Coder's community web using HTML, CSS, and
              Bootstrap. But I knew it could be better – so I leveled up through
              bootcamps like "How to be an Ideal Top Search React JS Front-End
              Engineer," Generasi GIGIH Full Stack Engineer, and Bearmentor
              Batch 8 (shoutout to Mas Haidar Hanif for the awesome
              mentorship!🫡).
            </p>
            <p>
              These days, I'm practicing component-driven development with
              React, using Next.js to ship fullstack features quickly, and
              deploying to Vercel. I still learn every day – whether it's new
              frameworks, design patterns, or best practices💪.
            </p>
          </div>

          {/* Simple timeline */}
          <div className="mt-6 space-y-6">
            {[
              {
                year: "2021",
                title:
                  "✨ My First Real Project: Building the Narai Coder Landing Page",
                points: [
                  "Created a landing page for Narai Coder using HTML, CSS, and Bootstrap.",
                  "Collaborated closely with one backend developer using laravel.",
                ],
              },
              {
                year: "2022",
                title: "🛠️ Fixing My Gaps → Alterra Academy Frontend Bootcamp",
                points: [
                  "I think I need to learn more from my past project, so I join Bootcamps Alterra Academy for learning Frontend Web Development.",
                  "Built several projects using Figma, HTML, CSS, Javascript, React, using GraphQl at React, and etc.",
                  "I learned teamwork and collaboration skills through pair programming and group projects with backend developers and UX/UI designers.",
                ],
              },
              {
                year: "2022",
                title:
                  "✨ My Next Chapter: Joining PT Qatros Teknologi Indonesia as a Frontend Web Engineer Intern!",
                points: [
                  "Expanded my frontend expertise beyond bootcamp curriculum with Vue.js & Nuxt.js",
                  "Final project 'Gompu': Integrated WebRTC, booking management & payment gateway",
                  "Exploring Yogyakarta's rich culture through its neighborhoods and culinary scenes",
                ],
              },
              {
                year: "2022",
                title:
                  "After Bootcamp, I got internship as Frontend Web Engineer🥹 - PT Qatros Teknologi Indonesia",
                points: [
                  "Expanded my frontend expertise beyond bootcamp curriculum with Vue.js & Nuxt.js",
                  "Final project 'Gompu': Integrated WebRTC, booking management & payment gateway",
                  "Exploring Yogyakarta's rich culture through its neighborhoods and culinary scenes",
                ],
              },
              {
                year: "2023 - 2025",
                title:
                  "From Frontend to Full-Stack: My Intensive Journey with Generasi GIGIH & Bearmentor🚀",
                points: [
                  "In Generasi GIGIH 3.0, I learned MERN Stack(MongoDB, Express Js, React Js, and Node Js. And finally I built a Fullstack Project using MERN Stack.",
                  "In Bearmentor, I learned about Clean Architecture, SOLID Principles, Design Patterns, and Best Practices in Real-World Projects. I built several projects using Next.js to ship fullstack features quickly, and deploying to Vercel.",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-[80px_1fr] gap-4">
                <div className="text-sm text-muted-foreground font-medium">
                  {item.year}
                </div>
                <div className="rounded-lg border bg-background p-4">
                  <p className="font-semibold">{item.title}</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise (2x2 cards) */}
      <section id="skills" className="container py-12 md:py-16">
        <div className="space-y-8">
          <div className="rounded-2xl border bg-background shadow-sm relative overflow-hidden">
            {/* subtle radial sparkle backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.35] [background:radial-gradient(700px_300px_at_50%_-10%,hsl(var(--primary)/0.08),transparent_60%)]"
            />
            <div className="relative p-6 sm:p-10">
              <h2 className="text-center text-2xl md:text-3xl font-bold">
                Technical Expertise
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* helper inline component */}
                {[
                  {
                    title: "Languages",
                    items: [
                      { icon: Code, text: "JavaScript, TypeScript" },
                      { icon: Zap, text: "Go" },
                    ],
                  },
                  {
                    title: "Frameworks",
                    items: [
                      {
                        icon: Atom,
                        text: "React Js, Next.js, Express Js, Hono Js",
                      },
                      { icon: Code, text: "Tailwind, Shadcn UI" },
                    ],
                  },
                  {
                    title: "Databases",
                    items: [
                      { icon: Database, text: "MongoDB, PostgreSQL, MySQL" },
                    ],
                  },
                  {
                    title: "Developer Tools",
                    items: [
                      { icon: Wrench, text: "Docker, Git, VS Code, Figma" },
                    ],
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border bg-background/60 p-5 sm:p-6 shadow-sm">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {card.items.map((it, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-foreground/90">
                          <it.icon className="h-4 w-4 text-primary mt-0.5" />
                          <span className="text-sm sm:text-base">
                            {it.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact or Interests */}
      <section className="container py-12 md:py-16">
        <div className="rounded-lg border bg-background p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Fun Fact</h2>
          <p className="text-muted-foreground">
            What sets me apart? My passion for sports – gym for strength,
            running for endurance, badminton and basketball for team strategy.
            It's like full-stack dev: I treat each workout like building an
            end-to-end app, tweaking stacks (Node.js + React, anyone?) until the
            flow is perfect, APIs integrate smoothly, and everything scales. My
            motto? "Try something. If it's failed then learn faster." From buggy
            early projects, I've bounced back via intense bootcamps, Udemy
            self-learning, and tools like Docker – turning setbacks into
            scalable wins. Resilience is key in this fast-paced tech world, just
            like an athlete rising after a loss.
          </p>
        </div>
      </section>
    </>
  );
}
