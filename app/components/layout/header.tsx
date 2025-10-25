"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 flex w-full justify-center border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <MobileNav /> */}
          <MobileNav />
          <Link href="/" className="text-xl font-bold">
            Rakhel Cakra K.S
          </Link>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-primary"
                : "text-foreground/70 hover:text-primary"
            }`}>
            Home
          </Link>
          {/* <Link
            href="/about"
            className={`text-sm font-medium transition-colors`}>
            About
          </Link> */}
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors ${
              pathname === "/projects"
                ? "text-primary"
                : "text-foreground/70 hover:text-primary"
            }`}>
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              pathname === "/contact"
                ? "text-primary"
                : "text-foreground/70 hover:text-primary"
            }`}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
