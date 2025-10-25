"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-6">
        <div className="px-2">
          <Link
            href="/"
            className="text-xl font-bold"
            onClick={() => setOpen(false)}>
            Rakhel Cakra K.S
          </Link>
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`rounded-md px-2 py-1 text-lg font-medium transition-colors ${
                pathname === route.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
              onClick={() => setOpen(false)}>
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <Button asChild className="w-full" onClick={() => setOpen(false)}>
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
