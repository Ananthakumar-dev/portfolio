import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const techStack = [
  { name: "Laravel", logo: "laravel.svg" },
  { name: "Node.js", logo: "nodejs.svg" },
  { name: "MySQL", logo: "mysql.svg" },
  { name: "Firebase", logo: "/tech/firebase.svg" },
  { name: "React", logo: "react.svg" }
];

const page = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-8">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-semibold">Backend Engineer — Marketplace Applications</h2>
                <p className="text-sm text-gray-600 flex flex-col">
                    <span>Trioangle Technologies, Aug 2021 - Dec 2024</span>
                </p>
            </div>

            <div>
                <Link href="/#experience">
                    <Button size="sm" className="cursor-pointer">
                        <ArrowLeft />
                        Back
                    </Button>
                </Link>
            </div>
        </div>

        <div className="px-6 py-4 bg-gray-100">
            <div className="rounded-lg border bg-white p-6 mb-2">
                <h3 className="text-lg font-semibold mb-2">Summary</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Worked on consumer marketplace platforms — an Airbnb clone and an Amazon clone.
                    Handled both frontend and backend responsibilities, focusing on payments,
                    booking flows, product search & filters, and real-time chat.
                    Primary backend stacks were Laravel and Node.js.
                </p>
            </div>

            <div className="rounded-lg border bg-white p-6 mb-2">
                <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>

                <ul className="list-disc space-y-2 pl-5 text-sm">
                    <li>Implemented Stripe, PayPal, and local gateway payments with refunds.</li>
                    <li>Designed booking price calculations for Airbnb-style reservations.</li>
                    <li>Built real-time chat between users and hosts.</li>
                    <li>Implemented cart, orders, cancellations, and returns for e-commerce.</li>
                    <li>Optimized SQL queries for large-scale search and filtering.</li>
                    <li>Delivered features end-to-end across frontend and backend.</li>
                </ul>
            </div>

            <div className="rounded-lg border bg-white p-6 space-y-6 mb-2">
                <h3 className="text-lg font-semibold">
                    Notable Projects & Accomplishments
                </h3>

                {/* Airbnb */}
                <div className="rounded-md border p-4">
                    <h4 className="font-semibold mb-2">
                    Airbnb Clone — Booking & Chat
                    </h4>

                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Implemented booking price calculations (rates, fees, taxes, discounts).</li>
                    <li>Built calendar availability and overlapping booking validation.</li>
                    <li>Implemented real-time chat for host ↔ guest communication.</li>
                    <li>Optimized room search queries and filters.</li>
                    </ul>
                </div>

                {/* Amazon */}
                <div className="rounded-md border p-4">
                    <h4 className="font-semibold mb-2">
                    Amazon Clone — Shopping & Order Management
                    </h4>

                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Implemented add-to-cart, order creation, cancellations, and returns.</li>
                    <li>Designed cancellation window and return policy logic.</li>
                    <li>Built faceted product search with backend optimizations.</li>
                    </ul>
                </div>

                {/* Payments */}
                <div className="rounded-md border p-4">
                    <h4 className="font-semibold mb-2">
                    Payments Integration — Stripe & PayPal
                    </h4>

                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Integrated Stripe and PayPal for payments and refunds.</li>
                    <li>Implemented Stripe Connect and account preference settings.</li>
                    <li>Handled refund reconciliation and webhook reliability.</li>
                    <li>Ensured secure handling of payment webhooks.</li>
                    </ul>
                </div>
            </div>

            <div className="rounded-lg border bg-white p-6">
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                    {techStack.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col items-center gap-2"
                    >
                        <img
                        src={`/images/tech/${tech.logo}`}
                        alt={tech.name}
                        className="h-10 w-10 object-contain"
                        />
                        <span className="text-xs text-muted-foreground">
                        {tech.name}
                        </span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page