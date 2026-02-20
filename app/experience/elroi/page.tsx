import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Full-stack Developer — HRM & ERP Module
          </h2>
          <p className="text-sm text-gray-600 flex flex-col">
            <span>Elroi software solutions, Feb 2024 - Mar 2025</span>
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
        <div>
          <h6 className="font-semibold">Summary</h6>

          <p className="pl-12">
            Worked on an ERP project built in Next.js, where I owned the HRM
            module. My work covered leave management, shift-based clock-in/out,
            dashboards, and master settings to support HR workflows.
          </p>
        </div>

        <div>
          <h6 className="font-semibold">Key Responsibilities</h6>

          <ul className="pl-12 list-disc">
            <li>
              Designed and implemented HRM features: leave applications, hourly
              permissions, shift scheduling, web clock-in/clock-out, and HR
              dashboard.
            </li>
            <li>
              Implemented master configuration screens for leaves, shifts,
              holidays, and weekoffs to support admin setup.
            </li>
            <li>
              Handled timezone logic for accurate clock-in/clock-out across
              distributed teams.
            </li>
            <li>
              Implemented periodical leave accrual and leave balance calculations.
            </li>
            <li>
              Supported complex shift rules: rotational shifts, shift boundaries,
              and overtime considerations.
            </li>
            <li>
              Coordinated with mobile and sysadmin teams for consistent attendance
              and authentication flows.
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold">Notable projects & accomplishments</h6>

          <ul className="pl-12 list-disc">
            <li>
              <p>HR Dashboard & Feeds</p>

              <ul className="pl-12 list-disc">
                <li>
                  Built dashboard for employees and admins with feeds
                  (announcements), holiday lists, and weekly offs.
                </li>
              </ul>
            </li>
            <li>
              <p>Attendance & Shift Handling</p>

              <ul className="pl-12 list-disc">
                <li>
                  Implemented web clock-in/out that respects employee shift
                  windows and timezone differences.
                </li>
                <li>
                  Designed algorithms to compute daily/shift-based attendance and
                  overtime.
                </li>
              </ul>
            </li>
            <li>
              <p>Leave Accrual System</p>

              <ul className="pl-12 list-disc">
                <li>
                  Implemented periodic leave accrual (monthly/quarterly) and
                  balance maintenance logic with admin controls.
                </li>
              </ul>
            </li>
            <li>
              <p>Master Settings & Admin Controls</p>

              <ul className="pl-12 list-disc">
                <li>
                  Built robust admin pages for configuring leave types, holiday
                  calendars, shift patterns, and approval workflows.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold">Tech Stack</h6>

          <p className="pl-12">
            Next.js, React, REST/GraphQL APIs, Postgres/MySQL, timezone libraries
            (moment-timezone / date-fns-tz), Redis or caching layer (if
            used).
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
