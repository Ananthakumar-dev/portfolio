import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import company_details from "@/lib/data/company_details";

const Experience = () => {
  return (
    <div id="experience" className="w-full px-[12%] mt-4 scroll-mt-20">
      <h2 className="text-center mb-6 text-3xl">Experience</h2>

      <div className="grid grid-cols-3 gap-2">
        {company_details.map((el) => (
          <Link key={el.id} href={el.detailPage} className="block">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                {/* Logo */}
                <img
                  src={el.logo}
                  alt={`${el.name} logo`}
                  className="h-12 w-12 object-contain"
                />

                {/* Title */}
                <div>
                  <CardTitle className="text-base">{el.role}</CardTitle>
                  <CardDescription>
                    {el.name} · {el.timeframe}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">{el.shortBlurb}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {el.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex-1 items-end">
                <span className="text-sm underline">View details →</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;
