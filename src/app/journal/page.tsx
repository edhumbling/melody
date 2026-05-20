import type { Metadata } from "next";
import Link from "next/link";
import { Feather } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { journalEntries, site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Journal Notes",
  description: `Notes, essays, and updates from ${site.name}.`,
};

export default function JournalPage() {
  return (
    <main className="page-shell">
      {/* Magazine Page Hero */}
      <section className="page-hero">
        <Reveal>
          <p className="section-kicker">Publications</p>
          <h1 className="font-serif">A quiet archive for slow essays, notes, and records.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-deck text-white/70">
            The journal acts as a relaxed reading room: calm typography, clean dates, readable summaries, 
            and generous vertical margins to let future essays breathe fully.
          </p>
        </Reveal>
      </section>

      {/* Premium Journal Lists */}
      <section className="journal-list">
        {journalEntries.map((entry, index) => (
          <Reveal key={entry.title} delay={index * 0.08}>
            <Link href={`/journal/${entry.slug}`} className="block">
              <article className="group cursor-pointer">
                <Feather 
                  size={20} 
                  weight="thin" 
                  className="mt-1.5 text-emerald-400 group-hover:scale-110 group-hover:text-amber-400 transition-all duration-300" 
                />
                <div>
                  <span className="text-[10px] font-bold text-amber-400 tracking-wider block mb-2 font-mono uppercase">
                    {entry.date}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white group-hover:text-emerald-300 transition-colors duration-300">
                    {entry.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-2xl">
                    {entry.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
