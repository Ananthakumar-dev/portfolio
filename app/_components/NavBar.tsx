"use client";

import { useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Button } from "@/components/ui/button";
import { Menu, Home, User, Briefcase, Sparkles, Send, FileText } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#mywork", icon: Sparkles },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["home", "about", "experience", "mywork"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-xs shadow-black/5 dark:shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 transition-transform hover:scale-105"
        >
          <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            Ananthakumar
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </a>

        {/* Desktop Navigation Pill */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 p-1 rounded-full bg-muted/60 dark:bg-card/70 backdrop-blur-md border border-border/60 shadow-xs shadow-black/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 block ${
                      isActive
                        ? "bg-background text-foreground shadow-xs font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:bg-accent/50"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switch */}
          <ThemeSwitch />

          {/* Contact Button */}
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full px-5 font-medium shadow-xs shadow-primary/20 hover:shadow-md hover:shadow-primary/30 transition-all duration-200 cursor-pointer"
          >
            <a href="#about">
              Contact
              <Send className="h-3.5 w-3.5 ml-1" />
            </a>
          </Button>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-9 w-9 border-border/80 bg-background/80 backdrop-blur-md"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-card/95 backdrop-blur-2xl border-l border-border/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="p-0 mb-6 text-left">
                    <SheetTitle className="text-lg font-bold flex items-center gap-2">
                      Ananthakumar
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    </SheetTitle>
                  </SheetHeader>

                  <ul className="flex flex-col gap-2">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.href.substring(1);
                      return (
                        <li key={item.name}>
                          <SheetClose asChild>
                            <a
                              href={item.href}
                              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                isActive
                                  ? "bg-primary/10 text-primary font-semibold"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                              {item.name}
                            </a>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-xl">
                      <a href="#about">
                        <Send className="h-4 w-4 mr-2" />
                        Get in Touch
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
