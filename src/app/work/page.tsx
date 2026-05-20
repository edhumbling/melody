import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { projects, site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Selected Work",
  description: `Selected work and project directions for ${site.name}.`,
};

export default function WorkPage() {
  return (
    <main className="page-shell">
      {/* Editorial Page Hero */}
      <section className="page-hero">
        <Reveal>
          <p className="section-kicker">Case Studies</p>
          <h1 className="font-serif">Selected work with space for depth, proof, and process.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-deck text-white/70">
            Each entry below represents a deep-dive initiative. The layout provides a highly polished 
            presentation for identity, digital product design, content editorial, and visual research 
            curations.
          </p>
        </Reveal>
      </section>

      {/* Connected Work Row Archive */}
      <section className="work-list">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <Link href={`/work/${project.slug}`} className="block">
              <article className="work-row group cursor-pointer">
                <div>
                  <span className="work-meta text-[10px] font-bold text-emerald-400 tracking-wider block mb-2">
                    {project.type}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed pr-4 mt-2 md:mt-0">
                  {project.summary}
                </p>
                <div className="flex items-center justify-start md:justify-end mt-4 md:mt-0">
                  <span className="text-link group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    <span className="font-mono text-xs text-white/40 group-hover:text-amber-400 transition-colors">
                      {project.year}
                    </span>{" "}
                    <ArrowRight size={15} className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-emerald-400" />
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
