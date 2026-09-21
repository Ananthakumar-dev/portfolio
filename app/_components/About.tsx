import Image from "next/image";
import about_img from "@/public/images/about-profile.png";
import { BriefcaseBusiness, CodeXml, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Introduction</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">About Me</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="w-64 sm:w-80 shrink-0 rounded-3xl overflow-hidden border border-border/80 shadow-xl relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <Image
            src={about_img}
            className="w-full h-auto object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
            alt="Ananthakumar Profile"
          />
        </div>

        <div className="flex flex-col flex-1 gap-6 text-left">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am an experienced Software Developer with over <strong className="text-foreground font-semibold">4+ years</strong> of professional expertise in building scalable, responsive, and performance-focused web solutions. Throughout my career, I have collaborated with dynamic teams to deliver high-quality code and delightful digital experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            <div className="rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xs p-6 transition-all duration-300 hover:border-primary/40 hover:bg-accent/40 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <CodeXml className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Languages & Tools</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                React, Next.js, TypeScript, Node.js, Java, PHP, Laravel, Tailwind CSS
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xs p-6 transition-all duration-300 hover:border-primary/40 hover:bg-accent/40 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Education</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                B.E. in Mechanical Engineering
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/60 dark:bg-card/40 backdrop-blur-xs p-6 transition-all duration-300 hover:border-primary/40 hover:bg-accent/40 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Experience</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                4+ years in software engineering & production products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;