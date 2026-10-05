import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import company_details from "@/lib/data/company_details";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Career Journey</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Work Experience</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {company_details.map((el) => (
          <Link key={el.id} href={el.detailPage} className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
            <Card className="h-full flex flex-col justify-between border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xs transition-all duration-300 group-hover:border-primary/40 group-hover:bg-accent/40 group-hover:shadow-lg group-hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {/* Logo */}
                <div className="h-12 w-12 rounded-xl bg-muted/60 dark:bg-muted/30 p-2 flex items-center justify-center shrink-0 border border-border/40">
                  <img
                    src={el.logo}
                    alt={`${el.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Title */}
                <div>
                  <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">
                    {el.role}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {el.name} · {el.timeframe}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="py-2 flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {el.shortBlurb}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {el.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary/80 dark:bg-secondary/40 border border-border/30 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-2 flex items-center justify-between text-xs text-muted-foreground group-hover:text-primary transition-colors">
                <span>View project case study</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Experience;
