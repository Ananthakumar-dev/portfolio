type company_details_type = {
  id: string
  name: string
  logo: string
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
    "logo": "/images/trioangle.webp",
    "role": "Backend Engineer",
    "timeframe": "2022 — 2024",
    "shortBlurb": "Built marketplace apps (Airbnb & Amazon clones) — payments, search, chat, and order flows.",
    "tags": ["Laravel", "Node.js", "MySQL", "Stripe", "PayPal"],
    "detailPage": "/experience/trioangle"
  },
  {
    "id": "elroi",
    "name": "Elroi",
    "logo": "/images/elroi.png",
    "role": "Full-stack Developer (HRM)",
    "timeframe": "2025 — Present",
    "shortBlurb": "Built HRM module for ERP using Next.js — leave, shift, clockin/clockout, accruals.",
    "tags": ["Next.js", "React", "Postgres", "Timezone", "Attendance"],
    "detailPage": "/experience/elroi"
  },
  {
    "id": "skills",
    "name": "Skills & Tools",
    "logo": "/images/skills-icon.svg",
    "role": "Technical Summary",
    "shortBlurb": "Payments, realtime chat, search optimization, Unix basics, AWS fundamentals, DSA (200+ LeetCode).",
    "tags": ["Stripe", "Firebase", "JWT", "SQL", "AWS", "Linux"],
    "detailPage": "/experience/learnings"
  }
];

export default company_details;