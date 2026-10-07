import React from "react";
import Image from "next/image";
import trioangleLogo from "@/public/images/trioangle.webp";
import {
  laravelLogo,
  nodejsLogo,
  nextjsLogo,
  reactLogo,
  mysqlLogo,
  phpLogo,
  javascriptLogo,
  firebaseLogo,
} from "@/lib/data/tech_logos";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  Layers,
  Sparkles,
  CreditCard,
  MessageSquare,
  Search,
  ShoppingCart,
  Car,
  Home,
  ShieldCheck,
  Zap,
  Compass,
  Cpu,
  RefreshCw,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import ThemeSwitch from "@/app/_components/ThemeSwitch";

const techStack = [
  { name: "Laravel", category: "Backend / API", logo: laravelLogo },
  { name: "Node.js", category: "Backend / Microservices", logo: nodejsLogo },
  { name: "Next.js", category: "Frontend Framework", logo: nextjsLogo },
  { name: "React", category: "UI Library", logo: reactLogo },
  { name: "MySQL", category: "Database & Indexing", logo: mysqlLogo },
  { name: "PHP", category: "Core Language", logo: phpLogo },
  { name: "JavaScript", category: "Core Language", logo: javascriptLogo },
  { name: "Firebase", category: "Realtime & Push", logo: firebaseLogo },
];

const keyMetrics = [
  {
    label: "Tenure",
    value: "3 Years",
    subtext: "Aug 2021 – Dec 2024",
  },
  {
    label: "Enterprise Clones",
    value: "3 Platforms",
    subtext: "Airbnb, Amazon & Uber",
  },
  {
    label: "Payment Gateways",
    value: "Stripe & PayPal",
    subtext: "Multi-currency & Webhooks",
  },
  {
    label: "Architecture",
    value: "Full-Stack",
    subtext: "Laravel, Node.js & Next.js",
  },
];

export default function TrioangleExperiencePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-primary/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
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
            <span className="text-foreground font-semibold">Trioangle</span>
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
        {/* Hero Role Banner */}
        <section className="relative rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="h-3 w-3" />
                  3 Years Tenure
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 dark:bg-muted/30 px-3 py-1 rounded-full border border-border/40">
                  <Calendar className="h-3 w-3" />
                  Aug 2021 – Dec 2024
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 dark:bg-muted/30 px-3 py-1 rounded-full border border-border/40">
                  <MapPin className="h-3 w-3" />
                  Madurai, Tamil Nadu, India
                </span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Full-stack & Backend Engineer
                </h1>
                <p className="text-base sm:text-lg text-primary font-medium mt-1">
                  Trioangle Technologies — Marketplace & On-Demand Platforms
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                During my 3-year tenure at Trioangle, I spearheaded the core engineering of complex multi-vendor marketplaces and on-demand mobility applications modeled after industry leaders like <strong className="text-foreground font-semibold">Airbnb</strong>, <strong className="text-foreground font-semibold">Amazon</strong>, and <strong className="text-foreground font-semibold">Uber</strong>. Working across both <strong className="text-foreground font-semibold">Laravel (PHP)</strong> and <strong className="text-foreground font-semibold">Node.js / Next.js</strong> ecosystems, I owned end-to-end feature delivery spanning payment gateway integrations, real-time WebSocket messaging, geospatial search engines, and complex pricing algorithms.
              </p>
            </div>

            {/* Company Logo Card */}
            <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/40 dark:bg-muted/20 border border-border/50 self-start lg:self-center">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-white dark:bg-card p-3 flex items-center justify-center shadow-xs border border-border/60">
                <Image
                  src={trioangleLogo}
                  alt="Trioangle Technologies Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs font-semibold mt-3 text-foreground">
                Trioangle Technologies
              </span>
              <span className="text-[11px] text-muted-foreground">
                Software Solutions
              </span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
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

        {/* Featured Projects Deep-Dive Section */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-widest uppercase mb-1">
              <Layers className="h-4 w-4" />
              <span>Flagship Project Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Marketplace & On-Demand Platforms
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              In-depth breakdown of architectural responsibilities, key features developed, and business solutions delivered across high-scale clones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Project 1: Airbnb Clone */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 hover:border-primary/30 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-500 flex items-center justify-center border border-rose-500/20 shrink-0">
                    <Home className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Airbnb Clone — Vacation Rental & Experience Platform
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Peer-to-peer property booking, host-guest real-time collaboration, and geospatial discovery
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                    Vacation Rentals
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40">
                    Laravel / Node.js
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1: Google Maps & Geospatial Search */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Compass className="h-4 w-4 text-rose-500" />
                    <span>Interactive Google Maps & Geospatial Search</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Integrated the Google Maps JavaScript API and Geocoding service to enable fluid viewport bounding-box searching. Listings dynamically filter and reload as users pan and zoom on the map, featuring interactive price markers and clustering for dense urban areas.
                  </p>
                </div>

                {/* Feature 2: Real-time Host-Guest Chat */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <MessageSquare className="h-4 w-4 text-indigo-500" />
                    <span>Real-Time Host ↔ Guest WebSocket Chat</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Architected a bi-directional WebSocket messaging system for instant host-guest inquiries. Implemented live typing indicators, unread count badges, delivery status notifications, and integrated custom booking reservation links directly into chat threads.
                  </p>
                </div>

                {/* Feature 3: Pricing & Booking Engine */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span>Dynamic Pricing & Availability Engine</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Built the comprehensive price calculation engine handling nightly base rates, weekend surcharges, seasonal discounts, cleaning fees, guest service fees, and local taxes. Engineered calendar collision checks with database row locks to prevent race conditions during concurrent bookings.
                  </p>
                </div>

                {/* Feature 4: Cancellations & Automated Refunds */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <RefreshCw className="h-4 w-4 text-emerald-500" />
                    <span>Cancellation Policies & Refund Workflows</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Implemented configurable cancellation tiers (Flexible, Moderate, Strict) calculating accurate refund percentages based on time elapsed before check-in. Automated seamless payment reversals through integrated payment APIs.
                  </p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-foreground mr-1">Technologies:</span>
                {["Laravel", "Node.js", "Next.js", "React", "MySQL", "WebSockets", "Google Maps API", "Stripe"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-secondary/80 dark:bg-secondary/40 border border-border/40 text-secondary-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2: Amazon Clone */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 hover:border-primary/30 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20 shrink-0">
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Amazon Clone — Multi-Vendor E-Commerce Platform
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Full-scale marketplace with advanced cart logic, multi-vendor order pipelines, and multi-gateway checkout
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    E-Commerce
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40">
                    Laravel / Next.js
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1: Cart & Inventory Management */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <ShoppingCart className="h-4 w-4 text-amber-500" />
                    <span>Cart & Real-Time Stock Management</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Developed a robust guest and authenticated user cart synchronization module. Implemented real-time inventory quantity validation, stock holding mechanisms during active checkouts, and automated cart abandonment recovery reminders.
                  </p>
                </div>

                {/* Feature 2: Order Management Lifecycle */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <GitBranch className="h-4 w-4 text-blue-500" />
                    <span>End-to-End Order Pipeline State Machine</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Engineered complete order lifecycle management transitioning across <span className="font-mono text-xs">Placed &rarr; Confirmed &rarr; Dispatched &rarr; Delivered</span>. Built vendor-specific order splitting, cancellation eligibility windows, invoice PDF generation, and returns processing pipelines.
                  </p>
                </div>

                {/* Feature 3: Payment Gateways (Stripe & PayPal) */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <CreditCard className="h-4 w-4 text-emerald-500" />
                    <span>Stripe & PayPal Integration with Webhooks</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Integrated Stripe Elements and PayPal Smart Buttons for frictionless multi-currency transactions. Handled asynchronous webhook lifecycle events (payment_intent.succeeded, charge.refunded) with idempotent database locking to prevent duplicate transactions.
                  </p>
                </div>

                {/* Feature 4: Search & Faceted Filtering */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Search className="h-4 w-4 text-cyan-500" />
                    <span>Faceted Search & High-Performance Indexing</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Designed complex multi-attribute search queries across categories, brands, price bands, ratings, and variant attributes. Optimized SQL composite indexes and query plans to achieve sub-100ms response times on large product catalogs.
                  </p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-foreground mr-1">Technologies:</span>
                {["Laravel", "Next.js", "Node.js", "MySQL", "Stripe API", "PayPal SDK", "Redis", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-secondary/80 dark:bg-secondary/40 border border-border/40 text-secondary-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3: Uber Clone */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 hover:border-primary/30 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20 shrink-0">
                    <Car className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Uber Clone — On-Demand Mobility & Ride-Hailing Platform
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Real-time ride request dispatching, distance matrix fare calculations, and trip lifecycle management
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    On-Demand Mobility
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40">
                    Node.js / Laravel
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1: Driver-Rider Dispatch */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Cpu className="h-4 w-4 text-cyan-500" />
                    <span>Real-Time Ride Dispatching Engine</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Implemented the core dispatch logic for matching rider requests with nearest active drivers based on geo-coordinates. Built driver accept/reject countdown timers and automatic cascaded re-dispatching to the next closest driver.
                  </p>
                </div>

                {/* Feature 2: Fare Estimation & Surge Pricing */}
                <div className="p-5 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span>Distance Matrix Fare & Surge Engine</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Integrated Google Distance Matrix API for dynamic ETA and route distance computation. Developed fare estimation algorithms factoring base fare, per-kilometer/minute rates, vehicle class tiers (Economy, Sedan, SUV), and dynamic demand-based surge pricing.
                  </p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-foreground mr-1">Technologies:</span>
                {["Node.js", "Laravel", "MySQL", "WebSockets", "Google Distance Matrix API", "Stripe Payments"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-secondary/80 dark:bg-secondary/40 border border-border/40 text-secondary-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Competencies Grid */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-widest uppercase mb-1">
              <ShieldCheck className="h-4 w-4" />
              <span>Engineering Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Core Technical Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-card/70 dark:bg-card/40 border border-border/60 backdrop-blur-md space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                <CreditCard className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-base">
                Payment Architectures
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Stripe & PayPal API integration, webhook signature validation, idempotency keys, multi-party split payouts, and automated dispute/refund settlements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/70 dark:bg-card/40 border border-border/60 backdrop-blur-md space-y-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center border border-indigo-500/20">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-base">
                Real-Time Systems
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                WebSocket communication protocols, live push channels, online presence detection, typing states, and event-driven architecture with Firebase / Pusher.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/70 dark:bg-card/40 border border-border/60 backdrop-blur-md space-y-3">
              <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center border border-rose-500/20">
                <Compass className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-base">
                Geospatial & Mapping
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Google Maps JavaScript API, Distance Matrix, Geocoding, spatial latitude/longitude indexing, and radius bounding-box queries for high-speed location filtering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/70 dark:bg-card/40 border border-border/60 backdrop-blur-md space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-base">
                Query & Data Optimization
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Relational schema design in MySQL, composite indexing, query profiling, caching strategies, and database transaction concurrency control.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Technology Stack & Tooling
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Primary languages, frameworks, and tools used across Trioangle client and in-house projects
              </p>
            </div>
            <span className="text-xs text-muted-foreground font-mono">
              8 Core Technologies
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
            <Link href="/#experience">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Experience</span>
            </Link>
          </Button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              asChild
              className="rounded-full gap-2 w-full sm:w-auto shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <Link href="/experience/elroi">
                <span>Next: Elroi Software Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}