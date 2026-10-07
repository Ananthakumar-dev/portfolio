import React from "react";
import Image from "next/image";
import skillsLogo from "@/public/images/skills-icon.svg";
import {
  reactLogo,
  nextjsLogo,
  nodejsLogo,
  javaLogo,
  springLogo,
  javascriptLogo,
  phpLogo,
  laravelLogo,
  mysqlLogo,
  cssLogo,
  firebaseLogo,
  htmlLogo,
} from "@/lib/data/tech_logos";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Server,
  Cloud,
  Terminal,
  Cpu,
  Boxes,
  Network,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  BrainCircuit,
  Zap,
  Workflow,
  ExternalLink,
  Laptop,
  Flame,
} from "lucide-react";
import Link from "next/link";
import ThemeSwitch from "@/app/_components/ThemeSwitch";

const techStack = [
  { name: "React", category: "Frontend UI Library", logo: reactLogo },
  { name: "Next.js", category: "Full-Stack SSR Framework", logo: nextjsLogo },
  { name: "Node.js", category: "JavaScript Runtime", logo: nodejsLogo },
  { name: "Java", category: "Enterprise Language", logo: javaLogo },
  { name: "Spring Boot", category: "Microservices Framework", logo: springLogo },
  { name: "JavaScript", category: "Core Web Language", logo: javascriptLogo },
  { name: "PHP", category: "Backend Language", logo: phpLogo },
  { name: "Laravel", category: "Web Framework", logo: laravelLogo },
  { name: "MySQL", category: "Relational Database", logo: mysqlLogo },
  { name: "CSS / Tailwind", category: "Styling & Responsive UI", logo: cssLogo },
  { name: "Firebase", category: "Realtime Services", logo: firebaseLogo },
  { name: "HTML5", category: "Semantic Markup", logo: htmlLogo },
];

const keyMetrics = [
  {
    label: "LeetCode Solved",
    value: "300+ Problems",
    subtext: "DSA & Algorithmic Problem Solving",
  },
  {
    label: "Microservices Project",
    value: "Spring Boot + Next.js",
    subtext: "E-Commerce Microservices (In Progress)",
  },
  {
    label: "Runtimes & SSR",
    value: "Node.js & Next.js",
    subtext: "Event Loop, Streams, SSR & RSC",
  },
  {
    label: "Cloud & Linux",
    value: "AWS & Linux Servers",
    subtext: "EC2, S3, Shell & Server Provisioning",
  },
];

export default function TechnicalSummaryPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_90%)] pointer-events-none -z-10" />

      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-background/80 dark:bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#experience"
              className="hover:text-foreground transition-colors font-medium"
            >
              Experience
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Technical Summary</span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeSwitch />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full gap-2 border-border/80 hover:bg-accent cursor-pointer"
            >
              <Link href="/#experience">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Experience</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Hero Banner */}
        <section className="relative rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  <Sparkles className="h-3 w-3" />
                  Engineering Arsenal
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 dark:bg-muted/30 px-3 py-1 rounded-full border border-border/40">
                  <BrainCircuit className="h-3 w-3 text-amber-500" />
                  300+ LeetCode DSA
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 dark:bg-muted/30 px-3 py-1 rounded-full border border-border/40">
                  <Flame className="h-3 w-3 text-rose-500" />
                  Full-Stack & Systems Architecture
                </span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Technical Summary & Core Proficiencies
                </h1>
                <p className="text-base sm:text-lg text-primary font-medium mt-1">
                  Modern Web, Systems Internals, Microservices, Cloud Deployments & Algorithms
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A comprehensive showcase of my technical foundations and engineering competencies. Spanning high-performance <strong className="text-foreground font-semibold">React / Next.js (SSR & Server Components)</strong>, deep <strong className="text-foreground font-semibold">Node.js runtime internals</strong> (Event Loop, Streams, Multithreading), enterprise <strong className="text-foreground font-semibold">Java & Spring Boot microservices</strong>, hands-on <strong className="text-foreground font-semibold">AWS & Linux server provisioning</strong>, containerization with <strong className="text-foreground font-semibold">Docker</strong>, and continuous problem-solving mastery with <strong className="text-foreground font-semibold">300+ LeetCode solutions</strong>.
              </p>
            </div>

            {/* Architecture Icon Badge Card */}
            <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/40 dark:bg-muted/20 border border-border/50 self-start lg:self-center">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-white dark:bg-card p-4 flex items-center justify-center shadow-xs border border-border/60">
                <Image
                  src={skillsLogo}
                  alt="Technical Skills Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs font-semibold mt-3 text-foreground">
                Technical Summary
              </span>
              <span className="text-[11px] text-muted-foreground">
                Architecture & Skills
              </span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border/60">
            {keyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-background/60 dark:bg-card/60 border border-border/40 backdrop-blur-xs"
              >
                <div className="text-xs text-muted-foreground font-medium">
                  {metric.label}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                  {metric.value}
                </div>
                <div className="text-[11px] text-muted-foreground/90 mt-0.5">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Competency Pillars */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-widest uppercase mb-1">
              <Layers className="h-4 w-4" />
              <span>In-Depth Engineering Breakdown</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Core Technical Pillars & Practiced Stacks
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Deep understanding of underlying computer science concepts, runtime mechanics, and scalable application architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Pillar 1: React & Next.js */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 hover:border-primary/30 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20 shrink-0">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      1. Modern Frontend: React & Next.js Architecture
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Core JavaScript/ES6+, rendering pipelines, SSR/SSG/ISR, React Server Components & state management
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    Frontend Excellence
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40">
                    Next.js App Router
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                    Core JavaScript & ES6+
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Deep mastery of JavaScript runtime semantics: execution contexts, lexical scoping, closures, prototype inheritance, event propagation/delegation, Promises, async/await, and modern ES6+ functional patterns.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                    React Internals & Custom Hooks
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Proficient with reconciliation, Virtual DOM diffing algorithms, component lifecycles, Context API, fine-grained state management, performance optimization (<code className="text-[11px] font-mono">useMemo</code>, <code className="text-[11px] font-mono">useCallback</code>), and reusable custom hook abstractions.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                    Next.js Rendering Strategies
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Thorough grasp of Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), React Server Components (RSC), App Router, dynamic nested layouts, and Next.js asset optimizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Node.js Internals */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 hover:border-primary/30 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
                    <Server className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      2. Node.js Internals, Systems & Runtimes
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Event loop mechanics, libuv, asynchronous I/O, streams, buffers, multithreading & Express.js
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Backend Runtime
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40">
                    Event Loop & Streams
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Event Loop & Non-Blocking I/O
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Solid understanding of <code className="text-[11px] font-mono">libuv</code> architecture, thread pool operations, and event loop execution phases (Timers, Pending I/O, Idle/Prepare, Poll, Check/setImmediate, Close callbacks, and microtask queues).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Streams, Buffers & File System
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Proficient with chunk-based memory-efficient data processing via Streams (Readable, Writable, Duplex, Transform) with backpressure management, low-level binary Buffers, and async <code className="text-[11px] font-mono">fs/promises</code> operations.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Concurrency & Express.js APIs
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Experienced with <code className="text-[11px] font-mono">worker_threads</code> for CPU-bound tasks, cluster module multi-process scaling, and architecting robust Express.js REST APIs with structured middleware pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Java, Spring Boot & Microservices */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 hover:border-primary/30 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20 shrink-0">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      3. Java, Spring Boot & Microservices Architecture
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Object-oriented design, multithreading, Spring Boot ecosystem, and distributed microservices project
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    Enterprise Java
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40">
                    Microservices
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    Core Java & Advanced Multithreading
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Solid foundation in Core Java OOP principles, Collections Framework, Generics, and concurrency mechanisms (<code className="text-[11px] font-mono">ExecutorService</code>, Thread Pools, synchronized blocks, atomic wrappers, and thread safety patterns).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    Spring Boot Framework & JPA
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Skilled in Spring Boot core mechanisms: Inversion of Control (IoC), Dependency Injection (DI), Spring MVC controllers, Spring Data JPA / Hibernate ORM, and RESTful service contracts.
                  </p>
                </div>
              </div>

              {/* Active Flagship Project Highlight */}
              <div className="p-5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <h4 className="font-bold text-sm text-foreground">
                      Featured In-Progress Project: E-Commerce Microservices Platform
                    </h4>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300">
                    Active Development
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Currently architecting and developing a full-scale E-Commerce application utilizing a <strong className="text-foreground font-semibold">Microservices Architecture</strong> with Spring Boot decoupled backend services (Product Catalog, Order Service, User Auth) paired with a high-performance <strong className="text-foreground font-semibold">Next.js reactive frontend</strong>.
                </p>
              </div>
            </div>

            {/* Pillar 4: Cloud, Server Deployment & Linux */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 hover:border-primary/30 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      4. Cloud Infrastructure, Linux & Server Deployment
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      AWS Cloud fundamentals, Linux server installation/management, shell commands & CI/CD workflows
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    Cloud & DevOps
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40">
                    AWS EC2 & Linux
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-blue-500" />
                    AWS Cloud Foundations
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Working understanding of Amazon Web Services core primitives: provisioning and configuring Amazon EC2 compute instances, S3 object storage buckets, Security Groups, IAM roles, and VPC basics.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-blue-500" />
                    Linux & Cloud Server Provisioning
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Hands-on experience installing, setting up, and maintaining live web servers on cloud instances. Command-line proficiency with Linux utilities (<code className="text-[11px] font-mono">ssh</code>, <code className="text-[11px] font-mono">systemctl</code>, <code className="text-[11px] font-mono">journalctl</code>, package managers, cron, permissions).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-blue-500" />
                    Git & GitHub Actions CI/CD
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Clean Git version control workflows, branching and merge strategies, and currently deepening automated CI/CD pipeline authoring with GitHub Actions for automated linting, test suites, and build verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 5 & 6: Containers & DSA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Containerization */}
              <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-4 hover:border-primary/30 transition-all shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center border border-sky-500/20 shrink-0">
                      <Boxes className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">
                        5. Containerization: Docker & Kubernetes
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Containerized application development & orchestration
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Learned containerized development workflows using <strong className="text-foreground font-semibold">Docker</strong> (writing Dockerfiles, multi-stage builds, managing images/containers, Docker Compose multi-service local environments). Deepening knowledge in <strong className="text-foreground font-semibold">Kubernetes fundamentals</strong> (Pods, Services, Deployments, ReplicaSets) to prepare for scalable cloud orchestration.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                    Dockerfiles
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                    Docker Compose
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                    Kubernetes Basics
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium">
                    Continuous Learning
                  </span>
                </div>
              </div>

              {/* DSA & Networking */}
              <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-4 hover:border-primary/30 transition-all shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center border border-purple-500/20 shrink-0">
                      <BrainCircuit className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">
                        6. Data Structures, Algorithms & Networking
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        300+ LeetCode problems & core computer networking
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Solved <strong className="text-foreground font-semibold">300+ problems on LeetCode</strong> covering Arrays, Two Pointers, Sliding Window, Linked Lists, Trees, Graphs (BFS/DFS), Dynamic Programming, and Binary Search. Grounded in core Computer Networking fundamentals (TCP/IP stack, OSI layers, HTTP/HTTPS lifecycle, DNS, WebSockets, REST architecture).
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                    300+ LeetCode
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                    DSA Optimization
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                    TCP/IP & WebSockets
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium">
                    Daily Problem Solving
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Comprehensive Technology Matrix
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Languages, frameworks, runtimes, and databases in active practice
              </p>
            </div>
            <span className="text-xs text-muted-foreground font-mono">
              12 Technologies & Stacks
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-border/40 bg-background/60 dark:bg-card/60 hover:border-primary/40 hover:bg-accent/40 transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-muted/60 dark:bg-muted/30 p-2 flex items-center justify-center shrink-0 border border-border/40 group-hover:scale-105 transition-transform">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation & Case Study Links */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/60">
          <Button
            asChild
            variant="outline"
            className="rounded-full gap-2 w-full sm:w-auto cursor-pointer"
          >
            <Link href="/experience/elroi">
              <ArrowLeft className="h-4 w-4" />
              <span>Previous: Elroi Software Solutions</span>
            </Link>
          </Button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              asChild
              className="rounded-full gap-2 w-full sm:w-auto shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <Link href="/#experience">
                <span>Back to All Experience</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}