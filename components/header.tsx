"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { MobileNav } from "./mobile-nav";
import { NavigationLink } from "@/data/data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 flex w-full justify-center border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="text-xl font-bold">
            Rakhel Cakra K.S
          </Link>
        </div>
        <nav className="hidden gap-6 md:flex">
          {NavigationLink.map((navigation) => (
            <Link
              key={navigation.to}
              href={navigation.to}
              className={`text-sm font-medium transition-colors ${
                pathname === navigation.to
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground/80"
              }`}>
              {navigation.title}
            </Link>
          ))}
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
