import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/50 bg-background/50 backdrop-blur-md py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-bold text-lg text-foreground">Ananthakumar</span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ananthakumar. Crafted with Next.js & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="GitHub"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full text-muted-foreground hover:text-foreground"
            aria-label="Email"
          >
            <a href="mailto:contact@example.com">
              <Mail className="h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full ml-2"
            aria-label="Back to top"
          >
            <a href="#home">
              <ArrowUp className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
