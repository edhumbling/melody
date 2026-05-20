import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ReadingProgress } from "@/components/ReadingProgress";
import { journalEntries } from "@/lib/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find((e) => e.slug === slug);
  if (!entry) return { title: "Essay Not Found" };
  return {
    title: `${entry.title} - Journal Essay`,
    description: entry.excerpt,
  };
}

export default async function JournalEssayPage({ params }: Props) {
  const { slug } = await params;
  const entry = journalEntries.find((e) => e.slug === slug);

  if (!entry) {
    notFound();
  }

  // Filter out the current essay to get recommendations
  const readNext = journalEntries.filter((e) => e.slug !== slug).slice(0, 2);

  return (
    <main className="page-shell relative">
      {/* Scroll Progress Bar Client Component */}
      <ReadingProgress />

      {/* Hero Header */}
      <section className="page-hero !border-none !pb-4">
        <Reveal>
          <Link href="/journal" className="text-link !text-white/40 hover:!text-emerald-400 mb-6 flex items-center gap-2 group/back">
            <ArrowLeft size={13} className="transform group-hover/back:-translate-x-1.5 transition-transform" />
            <span>Back to journal archive</span>
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-[10px] text-amber-400 font-bold tracking-wider font-mono">{entry.date}</span>
            <span className="w-1.5 h-1.5 bg-white/10 rounded-full" />
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{entry.readTime}</span>
          </div>
          <h1 className="font-serif text-white mt-4 max-w-4xl text-5xl md:text-6xl font-light leading-tight">
            {entry.title}
          </h1>
        </Reveal>
      </section>

      {/* Essay Content Section */}
      <section className="split-section !mt-8 !grid-cols-1 md:!grid-cols-[1fr_280px] gap-12">
        {/* Core Prose */}
        <Reveal>
          <article className="max-w-none text-white/80 leading-relaxed text-base md:text-[17px] font-sans">
            {/* First paragraph with drop-cap */}
            <p className="mb-8 leading-[1.85] first-letter:float-left first-letter:text-6xl first-letter:font-serif first-letter:font-light first-letter:mr-3.5 first-letter:text-emerald-400 first-letter:line-height-[0.8] first-line:tracking-wide">
              {entry.fullText[0]}
            </p>

            {/* Remaining paragraphs */}
            {entry.fullText.slice(1).map((para, i) => {
              // Insert an elegant creative pull-quote after the second paragraph if it exists
              if (i === 0) {
                return (
                  <div key={i}>
                    <p className="mb-8 leading-[1.85]">{para}</p>
                    <blockquote className="my-12 py-6 pl-8 border-l-2 border-emerald-400 italic text-white/95 text-lg md:text-xl font-serif max-w-2xl bg-white/[0.01] rounded-r-2xl pr-4">
                      &ldquo;Lead with clarity before ornament. Let words, space, and rhythm do the heavy lifting.&rdquo;
                    </blockquote>
                  </div>
                );
              }
              return (
                <p key={i} className="mb-8 leading-[1.85]">
                  {para}
                </p>
              );
            })}
          </article>
        </Reveal>

        {/* Sidebar Metadata */}
        <Reveal delay={0.08} className="hidden md:block">
          <aside className="sticky top-32 p-6 border border-white/6 rounded-2xl bg-white/[0.01] backdrop-filter blur-md">
            <BookOpen size={24} className="text-emerald-400 mb-4" weight="thin" />
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2 font-sans">
              Editorial Hub
            </h4>
            <p className="text-white/50 text-xs leading-relaxed font-sans">
              Published in Melody Amoabeng&apos;s personal creative journal. We focus strictly on slow-form, 
              considered articles regarding brand strategy, visual architectures, and technical restraint.
            </p>
            <div className="mt-6 pt-6 border-t border-white/5 font-sans">
              <span className="text-[9px] text-white/30 uppercase tracking-widest block font-bold">Author</span>
              <span className="text-white text-xs mt-1 block font-serif font-light">Melody Amoabeng</span>
            </div>
          </aside>
        </Reveal>
      </section>

      {/* Read Next Section */}
      <section className="work-preview !border-t !border-white/5 !mt-12 !pt-16">
        <h2 className="font-serif text-3xl mb-8 text-white font-light">Read Next</h2>
        <div className="about-grid">
          {readNext.map((next, index) => (
            <Reveal key={next.title} delay={index * 0.08}>
              <Link href={`/journal/${next.slug}`} className="block h-full group">
                <article className="about-panel h-full flex flex-col justify-between hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 border-white/8 bg-neutral-900/10 p-8">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold tracking-wider font-mono">{next.date}</span>
                    <h3 className="font-serif text-xl mt-3 text-white group-hover:text-emerald-300 transition-colors duration-300 font-light">
                      {next.title}
                    </h3>
                    <p className="text-white/60 text-xs mt-3 leading-relaxed">
                      {next.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/40 mt-8 group-hover:text-white transition-colors duration-300">
                    <span className="uppercase tracking-wider font-bold text-[10px]">Read Essay</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform text-emerald-400" />
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
