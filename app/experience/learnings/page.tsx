import React from 'react'

const page = () => {
  return (
    <div className="px-6 py-4">
      <div className="border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-semibold">Skills & Tools — Full-stack essentials</h2>
        <p className="text-sm text-gray-600 flex flex-col">
            <span>Always eagerly explore the Technologies</span>
        </p>
      </div>

      <div>
        <h6 className="font-semibold">Short intro</h6>

        <p className="pl-12">
          I work across frontend and backend areas, with experience in payments, search optimization, and HRM systems. Below are my main skills, tools, and proof points.
        </p>
      </div>

      <div>
        <h6 className="font-semibold">Skill sections</h6>

        <ul className="pl-12 list-disc">
          <li>
            <p>Backend & APIs</p>

            <ul className="pl-12 list-disc">
              <li>Laravel, Node.js — Designed REST APIs, authentication (JWT) and integrations with mobile teams.</li>
            </ul>
          </li>

          <li>
            <p>Frontend</p>

            <ul className="pl-12 list-disc">
              <li>Next.js, React, CSS — Built responsive UIs and complex forms/dashboards (HRM).</li>
            </ul>
          </li>

          <li>
            <p>Payments</p>

            <ul className="pl-12 list-disc">
              <li>Stripe, PayPal, client local gateway — Payments, refunds, Stripe Connect/account preferences, webhook handling.</li>
            </ul>
          </li>

          <li>
            <p>Realtime / Messaging</p>

            <ul className="pl-12 list-disc">
              <li>WebSockets / Pusher / Firebase — Implemented instant chat for user-host communication.</li>
            </ul>
          </li>

          <li>
            <p>Search & DB Optimization</p>

            <ul className="pl-12 list-disc">
              <li>SQL optimization, indexing, complex filters for product/room search.</li>
            </ul>
          </li>

          <li>
            <p>Auth & Security</p>

            <ul className="pl-12 list-disc">
              <li>JWT authentication, secure API patterns, permissions.</li>
            </ul>
          </li>

          <li>
            <p>DevOps & Cloud basics</p>

            <ul className="pl-12 list-disc">
              <li>AWS fundamentals (EC2 basics), deployment understanding, working with sysadmin team.</li>
            </ul>
          </li>

          <li>
            <p>Other tools</p>

            <ul className="pl-12 list-disc">
              <li>Firebase, Redis, Linux basics / Unix commands, collaboration with mobile & sysadmin teams.</li>
            </ul>
          </li>

          <li>
            <p>Algorithms & Problem Solving</p>

            <ul className="pl-12 list-disc">
              <li>Mid-level DSA knowledge; solved 200+ LeetCode problems (evidence of problem-solving skill).</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default page