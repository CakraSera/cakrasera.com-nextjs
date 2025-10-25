import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 flex w-full justify-center border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <MobileNav /> */}
          <MobileNav />
          <NavLink to="/" className="text-xl font-bold">
            Rakhel Cakra K.S
          </NavLink>
        </div>
        <nav className="hidden gap-6 md:flex">
          <NavLink to="/" className={`text-sm font-medium transition-colors`}>
            Home
          </NavLink>
          {/* <NavLink
            to="/about"
            className={`text-sm font-medium transition-colors`}>
            About
          </NavLink> */}
          <NavLink
            to="/projects"
            className={`text-sm font-medium transition-colors`}>
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={`text-sm font-medium transition-colors`}>
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
