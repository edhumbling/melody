import Link from "next/link";
import { ArrowRight, CompassRose, Feather, Sparkle, Waveform } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SignatureMark } from "@/components/SignatureMark";
import {
  journalEntries,
  offerings,
  principles,
  projects,
} from "@/lib/site-content";

export default function Home() {
  return (
    <main>
      {/* Immersive Hero Section */}
      <section className="hero-section">
        <div className="hero-copy">
          <Reveal>
            <p className="reeler-line">Creative Presence</p>
            <h1 className="font-serif">
              A digital home built with quiet force and unmistakable rhythm.
            </h1>
            <p className="hero-deck">
              A premium, refined digital space designed for narrative, selected work, writing, and
              direct connection. Crafted to feel warm, high-contrast, and deeply memorable.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="/work">
                Explore the work <ArrowRight size={15} weight="bold" />
              </Link>
              <Link className="button-secondary" href="/about">
                Meet Melody
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="hero-art-wrap">
          <div className="hero-art">
            <span className="ambient-ring" />
            <SignatureMark className="hero-mark shadow-2xl" />
            
            {/* Soft interactive floating micro-cockpits */}
            <div className="sound-card top group">
              <Waveform size={18} weight="duotone" className="text-emerald-400 group-hover:animate-pulse" />
              <span>Quiet Rhythm</span>
            </div>
            
            <div className="sound-card bottom group">
              <Sparkle size={16} weight="duotone" className="text-amber-400 group-hover:scale-125 transition-transform" />
              <span>Creative Signal</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Dynamic Infinite Marquee Band */}
      <section className="marquee-band" aria-label="Core focus areas">
        <div className="flex animate-[glide_35s_linear_infinite] whitespace-nowrap gap-12">
          {offerings.concat(offerings).concat(offerings).map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="split-section">
        <Reveal>
          <p className="section-kicker">Core Philosophy</p>
          <h2 className="font-serif text-white/95">
            Built for true recognition, not fleeting noise.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mt-6 max-w-sm">
            We reject the visual hyper-activity of modern templates. Spacing, typography, and structural
            rhythm speak before any words are read.
          </p>
        </Reveal>
        <div className="principle-list">
          {principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.08}>
              <article className="group">
                <span className="font-mono text-xs text-amber-400">0{index + 1}</span>
                <p className="font-serif">{principle}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected Work Bento Grid */}
      <section className="work-preview">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2 className="font-serif">Archival starting points of a public body.</h2>
          </div>
          <Link href="/work" className="text-link">
            View all works <ArrowRight size={14} />
          </Link>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const isLarge = index === 0;
            return (
              <Reveal
                key={project.title}
                delay={index * 0.08}
                className={isLarge ? "md:col-span-2" : "md:col-span-1"}
              >
                <Link href={`/work/${project.slug}`} className="block h-full group">
                  <article className={`project-card h-full flex flex-col justify-between ${
                    isLarge ? "bg-gradient-to-br from-neutral-950 via-neutral-900/60 to-neutral-950 border-white/8" : ""
                  }`}>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="project-index">{project.year}</div>
                        <span className="text-emerald-400/90 text-[10px] tracking-widest uppercase font-bold">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="font-serif mt-6 text-3xl font-light text-white group-hover:text-emerald-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-md">
                        {project.summary}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 group-hover:text-white transition-colors duration-300">
                      <span className="uppercase tracking-wider font-bold">Explore case study</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Luxury Editorial Quote Strip */}
      <section className="editorial-strip">
        <Reveal>
          <div className="group">
            <CompassRose
              size={42}
              weight="thin"
              className="mx-auto text-amber-300 transition-transform duration-700 group-hover:rotate-[90deg]"
            />
          </div>
          <h2 className="font-serif text-white max-w-2xl mx-auto leading-tight mt-6 text-3xl md:text-4xl font-light">
            Every page is meticulously structured for timeless future growth.
          </h2>
          <p className="text-white/55 mt-4 max-w-xl mx-auto text-base">
            Easily integrate biographical notes, full case studies, talks, curated essays, and client
            collaborations without ever redesigning the underlying system.
          </p>
        </Reveal>
      </section>

      {/* Journal Preview Section */}
      <section className="journal-preview">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Journal Notes</p>
            <h2 className="font-serif">Slow-form writing that breathes living energy.</h2>
          </div>
          <Link href="/journal" className="text-link">
            Read entire archive <ArrowRight size={14} />
          </Link>
        </div>

        <div className="journal-list">
          {journalEntries.slice(0, 2).map((entry, index) => (
            <Reveal key={entry.title} delay={index * 0.06}>
              <Link href={`/journal/${entry.slug}`} className="block">
                <article className="group cursor-pointer">
                  <Feather size={20} weight="thin" className="mt-1.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold tracking-widest block mb-1">
                      {entry.date}
                    </span>
                    <h3 className="font-serif text-xl font-light group-hover:text-emerald-300 transition-colors duration-300">
                      {entry.title}
                    </h3>
                    <p className="text-white/55 text-sm mt-2 leading-relaxed max-w-3xl">
                      {entry.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
