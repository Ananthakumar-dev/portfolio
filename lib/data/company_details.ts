import type { StaticImageData } from "next/image";
import trioangleLogo from "@/public/images/trioangle.webp";
import elroiLogo from "@/public/images/elroi.png";
import skillsLogo from "@/public/images/skills-icon.svg";

type company_details_type = {
  id: string
  name: string
  logo: StaticImageData | string
  role: string
  timeframe?: string
  shortBlurb: string
  tags: string[]
  detailPage: string
}

const company_details: company_details_type[] = [
  {
    "id": "trioangle",
    "name": "Trioangle",
    "logo": trioangleLogo,
    "role": "Full-stack & Backend Engineer",
    "timeframe": "2021 — 2024 (3 Yrs)",
    "shortBlurb": "Built marketplace & on-demand platforms (Airbnb, Amazon & Uber clones) — payments, booking engines, geospatial search, and real-time chat.",
    "tags": ["Laravel", "Node.js", "Next.js", "MySQL", "Stripe", "WebSockets"],
    "detailPage": "/experience/trioangle"
  },
  {
    "id": "elroi",
    "name": "Elroi Software Solutions",
    "logo": elroiLogo,
    "role": "Full-stack Developer (HRM)",
    "timeframe": "Jan 2025 — Present",
    "shortBlurb": "Architected and built the enterprise HRM module from scratch using React & Laravel — leave, attendance, shifts, appraisals, and recruitment.",
    "tags": ["React", "Laravel", "MySQL", "CSS", "REST APIs", "HRM / ERP"],
    "detailPage": "/experience/elroi"
  },
  {
    "id": "skills",
    "name": "Skills & Architecture",
    "logo": skillsLogo,
    "role": "Technical Summary & Core Skills",
    "shortBlurb": "Deep dive across React/Next.js (SSR), Node.js internals, Java & Spring Boot microservices, AWS/Linux server deployment, Docker, and DSA (300+ LeetCode).",
    "tags": ["React / Next.js", "Node.js", "Java / Spring Boot", "AWS & Linux", "Docker", "300+ LeetCode"],
    "detailPage": "/experience/learnings"
  }
];

export default company_details;