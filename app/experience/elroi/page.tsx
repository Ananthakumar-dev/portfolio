import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  Layers,
  Sparkles,
  Users,
  Clock,
  CalendarDays,
  Award,
  UserPlus,
  Settings,
  ShieldCheck,
  Zap,
  Code2,
  FileCheck,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import ThemeSwitch from "@/app/_components/ThemeSwitch";

const techStack = [
  { name: "React", category: "Frontend Framework", logo: "react.svg" },
  { name: "Laravel", category: "Backend / REST API", logo: "laravel.svg" },
  { name: "PHP", category: "Backend Language", logo: "php.svg" },
  { name: "JavaScript", category: "Frontend Language", logo: "javascript.svg" },
  { name: "MySQL", category: "Database & Schema", logo: "mysql.svg" },
  { name: "CSS / Tailwind", category: "Styling & Responsive UI", logo: "css.svg" },
  { name: "HTML5", category: "Semantic Markup", logo: "html.svg" },
];

const keyMetrics = [
  {
    label: "Tenure",
    value: "Jan 2025 – Present",
    subtext: "Active Full-Stack Developer",
  },
  {
    label: "HRM Module Ownership",
    value: "100% From Scratch",
    subtext: "Sole Full-Stack Developer",
  },
  {
    label: "Core Sub-Modules",
    value: "7+ Enterprise Modules",
    subtext: "Leave, Shift, PMS, ATS, etc.",
  },
  {
    label: "Tech Stack",
    value: "React + Laravel",
    subtext: "Frontend, Backend & CSS",
  },
];

export default function ElroiExperiencePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

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
            <span className="text-foreground font-semibold">Elroi</span>
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Current Role
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 dark:bg-muted/30 px-3 py-1 rounded-full border border-border/40">
                  <Calendar className="h-3 w-3" />
                  Jan 2025 – Present
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 dark:bg-muted/30 px-3 py-1 rounded-full border border-border/40">
                  <MapPin className="h-3 w-3" />
                  Madurai, Tamil Nadu, India
                </span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Full-stack Developer — Enterprise ERP (HRM Module)
                </h1>
                <p className="text-base sm:text-lg text-primary font-medium mt-1">
                  Elroi Software Solutions — Human Resource Management System
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                At Elroi Software Solutions, I architected and built the entire <strong className="text-foreground font-semibold">Human Resource Management (HRM)</strong> module within the company's enterprise ERP suite from the ground up as the sole full-stack developer. Managing both <strong className="text-foreground font-semibold">React frontend development</strong> (including custom CSS styling & component architecture) and <strong className="text-foreground font-semibold">Laravel backend REST APIs</strong>, I delivered critical enterprise capabilities including employee lifecycle management, leave & hourly permission systems, shift scheduling, web clock-in/out with regularization, performance appraisals (PMS), and applicant tracking (ATS).
              </p>
            </div>

            {/* Company Logo Card */}
            <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/40 dark:bg-muted/20 border border-border/50 self-start lg:self-center">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-white dark:bg-card p-3 flex items-center justify-center shadow-xs border border-border/60">
                <img
                  src="/images/elroi.png"
                  alt="Elroi Software Solutions Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs font-semibold mt-3 text-foreground">
                Elroi Software Solutions
              </span>
              <span className="text-[11px] text-muted-foreground">
                Enterprise ERP
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

        {/* Featured HRM Sub-Modules Deep-Dive */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-widest uppercase mb-1">
              <Layers className="h-4 w-4" />
              <span>Full-Stack Architecture & Feature Breakdown</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Core HRM Systems Built from Scratch
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Engineered end-to-end relational databases, Laravel API endpoints, and responsive React user interfaces across all major HR workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Employee Management */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 space-y-4 hover:border-primary/30 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      Employee Lifecycle & Directory
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Onboarding, documentation, hierarchy & RBAC
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Engineered comprehensive employee lifecycle workflows from onboarding to offboarding. Built detailed profile management, personal/statutory document uploads, designation trees, departmental hierarchy mapping, and fine-grained Role-Based Access Control (RBAC) across Admin, HR, Manager, and Employee roles.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  RBAC Permissions
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Org Hierarchy
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Document Vault
                </span>
              </div>
            </div>

            {/* 2. Leave & Hourly Permission Management */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 space-y-4 hover:border-primary/30 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center border border-indigo-500/20 shrink-0">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      Leave & Hourly Permission Engine
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Accruals, balances, half-day leaves & hourly passes
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Developed dynamic leave policy engines supporting Casual, Sick, Earned, and Maternity leaves with automatic monthly/quarterly balance accruals. Built dedicated hourly permission passes with duration limits, monthly quota tracking, sandwich rule logic, and multi-tier approval flows.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Leave Accrual
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Hourly Permissions
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Approval Queues
                </span>
              </div>
            </div>

            {/* 3. Shift Scheduling & Roster Management */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 space-y-4 hover:border-primary/30 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center border border-purple-500/20 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      Shift Scheduling & Rotational Rosters
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Multi-shift rules, cross-midnight shifts & grace buffers
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Engineered complex shift pattern configurations including Day, Night, Rotational, and Cross-Midnight shifts. Handled grace periods, late-in/early-out thresholds, break interval tracking, and interactive monthly shift roster calendar grids for department managers.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Cross-Midnight Shifts
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Roster Planner
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Grace Periods
                </span>
              </div>
            </div>

            {/* 4. Web Attendance & Regularization */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 space-y-4 hover:border-primary/30 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shrink-0">
                    <FileCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      Web Attendance & Regularization
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Clock-in/out, overtime calculation & missed punch requests
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Implemented browser-based web clock-in/out with IP restriction options and timezone alignment. Built automated algorithms computing daily working hours, overtime (OT), half-day deductions, and an attendance regularization pipeline for missed punch resolution.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Web Clock-In
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Overtime (OT) Engine
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Regularization
                </span>
              </div>
            </div>

            {/* 5. Performance Evaluation System (PMS / Appraisal) */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 space-y-4 hover:border-primary/30 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20 shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      Performance Evaluation & Appraisals (PMS)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      KRA/KPI goal tracking, self-assessment & manager scorecards
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Architected the performance evaluation engine facilitating quarterly and annual appraisal cycles. Built custom Key Result Area (KRA) & KPI goal templates, employee self-assessment scorecards, manager rating reviews, and historical appraisal analytics.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  KPI / KRA Matrix
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Self & Manager Reviews
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Appraisal Scorecards
                </span>
              </div>
            </div>

            {/* 6. Recruitment & Applicant Tracking (ATS) */}
            <div className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 space-y-4 hover:border-primary/30 transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center border border-rose-500/20 shrink-0">
                    <UserPlus className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      Recruitment & Applicant Tracking (ATS)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Job postings, candidate pipeline & interview scheduling
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Engineered the recruitment module managing the complete hiring lifecycle: job requisition approval, job posting management, candidate applicant pipeline stages (Applied &rarr; Screened &rarr; Interview &rarr; Offered &rarr; Onboarded), and interviewer feedback forms.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Candidate Pipeline
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Interview Scheduling
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground font-medium">
                  Hiring Workflow
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Master Configurations & Admin Controls */}
        <section className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                <Settings className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Master Settings & Administrative Controls
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Dynamic centralized control panel for organizational policies
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 self-start sm:self-center">
              Admin Suite
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
              <h4 className="font-semibold text-sm text-foreground">Leave Policy Master</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Define custom leave categories, carry-forward quotas, encashment eligibility, and sandwich rules.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
              <h4 className="font-semibold text-sm text-foreground">Holiday Calendars</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Branch-wise and national public holiday calendars with automatic attendance day-off waivers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
              <h4 className="font-semibold text-sm text-foreground">Shift Pattern Rules</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Configurable shift timings, meal breaks, grace lateness buffers, and rotational shift schedules.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background/50 dark:bg-card/50 border border-border/40 space-y-2">
              <h4 className="font-semibold text-sm text-foreground">Approval Hierarchies</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Multi-level approval chains (Reporting Manager &rarr; Department Head &rarr; HR Admin).
              </p>
            </div>
          </div>
        </section>

        {/* Full-Stack Competencies Grid */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-widest uppercase mb-1">
              <ShieldCheck className="h-4 w-4" />
              <span>Full-Stack Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Technical Execution & Responsibilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-card/70 dark:bg-card/40 border border-border/60 backdrop-blur-md space-y-3">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center border border-cyan-500/20">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-base">
                React Frontend & Custom CSS
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Designed responsive layouts, interactive modal forms, calendar roster grids, and attendance dashboards using React and finely tuned custom CSS styling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/70 dark:bg-card/40 border border-border/60 backdrop-blur-md space-y-3">
              <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center border border-rose-500/20">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-base">
                Laravel Backend & REST APIs
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Developed modular Laravel REST API controllers, Form Request validations, API Resource transformations, and secure authentication middleware.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/70 dark:bg-card/40 border border-border/60 backdrop-blur-md space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-base">
                Relational Database Design
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Designed normalized MySQL schemas for employee documents, leave balances, attendance logs, and multi-tier organizational hierarchies.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Technology Stack
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Core technologies used to build and maintain the Elroi HRM ERP module
              </p>
            </div>
            <span className="text-xs text-muted-foreground font-mono">
              React + Laravel + MySQL
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-border/40 bg-background/60 dark:bg-card/60 hover:border-primary/40 hover:bg-accent/40 transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-muted/60 dark:bg-muted/30 p-2 flex items-center justify-center shrink-0 border border-border/40 group-hover:scale-105 transition-transform">
                  <img
                    src={`/images/tech/${tech.logo}`}
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
            <Link href="/experience/trioangle">
              <ArrowLeft className="h-4 w-4" />
              <span>Previous: Trioangle Technologies</span>
            </Link>
          </Button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              asChild
              className="rounded-full gap-2 w-full sm:w-auto shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <Link href="/experience/learnings">
                <span>Next: Technical Skills & Tools</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
