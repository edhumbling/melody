import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { principles, site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, her story, values, and personal site direction.`,
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      {/* Biographical Page Hero */}
      <section className="page-hero">
        <Reveal>
          <p className="section-kicker">Biographical</p>
          <h1 className="font-serif">A considered introduction, prepared for the real story.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-deck text-white/70">
            This space functions as Melody&apos;s digital office: warm enough to invite direct contact, 
            disciplined enough to support a highly professional creative profile, and structured to scale 
            beautifully over time.
          </p>
        </Reveal>
      </section>

      {/* Profile & Grid Panels */}
      <section className="about-grid">
        <Reveal>
          <article className="about-panel h-full flex flex-col justify-between border-white/8 bg-neutral-900/10 p-8">
            <div>
              <p className="section-kicker">Presence</p>
              <h2 className="font-serif text-3xl font-light mt-2 text-white">Focus on Substance.</h2>
              <p className="text-white/60 mt-4 leading-relaxed text-sm">
                Use this grid element to present an elegant biography, profile picture captions, educational 
                credentials, design leadership, or consulting records. The spacing is mathematically balanced 
                to host content cleanly without clutter.
              </p>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="about-panel h-full flex flex-col justify-between border-white/8 bg-neutral-900/10 p-8">
            <div>
              <p className="section-kicker">Visual Rhythm</p>
              <h2 className="font-serif text-3xl font-light mt-2 text-white">Exact & Memorable.</h2>
              <p className="text-white/60 mt-4 leading-relaxed text-sm">
                The typography choices and clean margins maintain an editorial magazine feel. 
                Using a glowing monogram mark and careful micro-interactions ensures Melody&apos;s brand 
                leaves a premium, lasting impression from the very first scroll.
              </p>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Elegant Timeline Section */}
      <section className="timeline relative">
        {/* Fine vertical gradient glowing line */}
        <div className="absolute left-[90px] md:left-[90px] left-[12px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500 via-yellow-400 to-transparent -z-10 opacity-20" />
        
        {principles.map((item, index) => (
          <Reveal key={item} delay={index * 0.08}>
            <article className="timeline-item group relative">
              <span className="text-[10px] text-emerald-400 font-extrabold tracking-widest font-mono uppercase">
                {`Principle 0${index + 1}`}
              </span>
              <div className="pl-6 md:pl-0">
                <h3 className="font-serif text-xl font-normal group-hover:text-emerald-300 transition-colors duration-300">
                  {item}
                </h3>
                <p className="text-white/55 text-sm mt-2 leading-relaxed max-w-xl">
                  A timeless operational pillar for maintaining quality and precision as the digital system expands.
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
