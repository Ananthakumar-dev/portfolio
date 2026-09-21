"use client";

import { Button } from "@/components/ui/button";
import { Download, MoveRight, Sparkles, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import profile_img from "@/public/images/profile-img.png";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Java",
  "PHP",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-violet-600/20 via-indigo-500/15 to-cyan-500/15 dark:from-violet-500/25 dark:via-indigo-500/20 dark:to-cyan-400/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-fuchsia-500/10 dark:bg-fuchsia-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-25 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none -z-10" />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6 z-10">
        {/* Profile Avatar with Glowing Ring */}
        <div className="relative group">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 blur-md transition duration-500"></div>
          <div className="relative p-1 rounded-full bg-background ring-2 ring-border/60">
            <Image
              src={profile_img}
              alt="Ananthakumar"
              width={128}
              height={128}
              priority
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {/* Status Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background/90 dark:bg-card/90 backdrop-blur-md border border-border/80 px-3 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-foreground">Available for hire</span>
          </div>
        </div>

        {/* Intro Badge */}
        <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/80 bg-muted/60 dark:bg-card/60 backdrop-blur-md text-xs sm:text-sm font-medium text-muted-foreground shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Hi, I'm <strong className="font-semibold text-foreground">Ananthakumar</strong></span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl leading-[1.2] sm:leading-[1.15]">
          Software Developer{" "}
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">
            crafting high-impact
          </span>{" "}
          web applications
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Based in Madurai, Tamil Nadu, India with <strong className="font-semibold text-foreground">4+ years</strong> of experience designing and engineering responsive, scalable, and user-centric digital products.
        </p>

        {/* Quick Tech Stack Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground border border-border/40 backdrop-blur-xs transition-transform hover:-translate-y-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
          <Button
            asChild
            size="lg"
            className="group rounded-full px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
          >
            <a href="#about">
              Contact me
              <MoveRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-6 border-border/80 hover:bg-accent/60 backdrop-blur-sm transition-all duration-300 cursor-pointer"
          >
            <a href="#experience">
              <Download className="h-4 w-4 mr-1" />
              View Resume & Work
            </a>
          </Button>

          {/* Social Shortcut Icons */}
          <div className="flex items-center gap-1.5 ml-0 sm:ml-2">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted/70"
              aria-label="GitHub Profile"
            >
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted/70"
              aria-label="LinkedIn Profile"
            >
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted/70"
              aria-label="Email Contact"
            >
              <a href="mailto:contact@example.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="pt-8">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
          >
            <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70 group-hover:text-foreground transition-colors">
              Scroll down
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground/80 group-hover:text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
