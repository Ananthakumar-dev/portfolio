import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

const Experience = () => {
  return (
    <div id="experience" className="w-full px-[12%] mt-4 scroll-mt-20">
        <h2 className="text-center mb-6 text-3xl">Experience</h2>

        <div className="grid grid-cols-3 gap-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Backend Developer — Marketplace Apps
              </CardTitle>
              <CardDescription>
                Trioangle Technologies - 3 Years
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Worked on consumer marketplace platforms — an Airbnb clone and an Amazon clone. I handled both frontend and backend responsibilities, focusing on payments, booking flows, product search & filters, and real-time chat. My primary back-end stacks were Laravel and Node.js.
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/experience/trioangle`} className="underline text-sm">Details</Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Full-stack Developer — HRM & ERP Module
              </CardTitle>
              <CardDescription>
                Elroi Software Solutions - 1 Year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Worked on an ERP project built in Next.js, where I owned the HRM module. My work covered leave management, shift-based clock-in/out, dashboards, and master settings to support HR workflows.</p>
            </CardContent>
            <CardFooter>
              <Link href={`/experience/elroi`} className="underline text-sm">Details</Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Skills & Tools — Full-stack essentials
              </CardTitle>
              <CardDescription>
                Learned & Own experience things
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I work across frontend and backend areas, with experience in payments, search optimization, and HRM systems. Below are my main skills, tools, and proof points.
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/experience/learnings`} className="underline text-sm">Details</Link>
            </CardFooter>
          </Card>
        </div>
    </div>
  )
}

export default Experience