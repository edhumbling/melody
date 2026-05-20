import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkle } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} - Selected Work`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Helper render to show specific custom premium SVG graphics per project
  const renderProjectGraphic = () => {
    switch (project.slug) {
      case "presence-system":
        return (
          <svg viewBox="0 0 200 200" className="w-full max-w-[260px] mx-auto animate-[spin_30s_linear_infinite]" style={{ animationDuration: "12s" }}>
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="0.75" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            <rect x="60" y="60" width="80" height="80" rx="14" fill="none" stroke="url(#gradient-graphic-page)" strokeWidth="2.5" />
            <defs>
              <linearGradient id="gradient-graphic-page" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7d8a8" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        );
      case "the-listening-room":
        return (
          <svg viewBox="0 0 200 200" className="w-full max-w-[260px] mx-auto">
            <path d="M20 50 Q 50 15, 80 50 T 140 50 T 180 50" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1.5" />
            <path d="M20 100 Q 50 65, 80 100 T 140 100 T 180 100" fill="none" stroke="url(#gradient-graphic-page)" strokeWidth="2.5" />
            <path d="M20 150 Q 50 115, 80 150 T 140 150 T 180 150" fill="none" stroke="rgba(247, 216, 168, 0.2)" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="8" fill="#10b981" className="animate-ping" style={{ animationDuration: "2.5s" }} />
            <circle cx="100" cy="100" r="5" fill="#10b981" />
            <circle cx="140" cy="100" r="4" fill="#eab308" />
            <defs>
              <linearGradient id="gradient-graphic-page" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7d8a8" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        );
      case "studio-letter":
      default:
        return (
          <svg viewBox="0 0 200 200" className="w-full max-w-[260px] mx-auto">
            <rect x="30" y="40" width="140" height="120" rx="14" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
            <rect x="40" y="50" width="120" height="100" rx="10" fill="none" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="1" />
            <path d="M30 40 L 100 95 L 170 40" fill="none" stroke="url(#gradient-graphic-page)" strokeWidth="2.5" />
            <circle cx="100" cy="95" r="8" fill="rgba(16, 185, 129, 0.35)" />
            <line x1="50" y1="122" x2="120" y2="122" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            <line x1="50" y1="134" x2="95" y2="134" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            <defs>
              <linearGradient id="gradient-graphic-page" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7d8a8" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <main className="page-shell">
      {/* Immersive Case Header */}
      <section className="page-hero !border-none !pb-4">
        <Reveal>
          <Link href="/work" className="text-link !text-white/40 hover:!text-emerald-400 mb-6 flex items-center gap-2">
            <ArrowLeft size={13} /> Back to work archive
          </Link>
          <p className="section-kicker !text-emerald-400 mt-2">{project.type}</p>
          <h1 className="font-serif text-white">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-deck text-white/70">
            {project.summary}
          </p>
        </Reveal>
      </section>

      {/* Case Details Split Grid */}
      <section className="contact-grid !mt-12">
        {/* Info Column */}
        <Reveal>
          <article className="contact-card h-full flex flex-col justify-between border-white/8 bg-neutral-900/10">
            <div>
              <p className="section-kicker">Project Context</p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-b border-white/5 pb-8 mb-8 mt-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">Client</span>
                  <span className="text-white text-base mt-1 block font-serif font-light">{project.client}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">Role</span>
                  <span className="text-white text-base mt-1 block font-serif font-light">{project.role}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">Timeline</span>
                  <span className="text-white text-base mt-1 block font-serif font-light">{project.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">Year</span>
                  <span className="text-white text-base mt-1 block font-mono text-xs mt-2">{project.year}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">Core Stack</span>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/8 text-white/80 rounded-full text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-wider text-white/30">
              <span>Selected Work Archive</span>
              <span>© {project.year}</span>
            </div>
          </article>
        </Reveal>

        {/* Narrative Details */}
        <Reveal delay={0.08}>
          <article className="contact-card h-full flex flex-col justify-between border-white/8 bg-neutral-900/10">
            <div className="mb-8">
              <p className="section-kicker">Creative Challenge</p>
              <p className="text-white/70 text-[15px] leading-relaxed mt-4">
                {project.challenge}
              </p>
            </div>
            <div className="border-t border-white/5 pt-6 mt-4">
              <p className="section-kicker">Deliberate Solution</p>
              <p className="text-white/70 text-[15px] leading-relaxed mt-4">
                {project.solution}
              </p>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Visual Showcase & Metrics */}
      <section className="about-grid !mt-6">
        {/* SVG Graphic Center */}
        <Reveal>
          <article className="about-panel h-full flex flex-col justify-center items-center py-12 relative overflow-hidden bg-gradient-to-br from-neutral-950/80 to-neutral-900/40 border-white/8">
            <span className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
            <span className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            
            <div className="p-8 bg-black/40 rounded-3xl border border-white/5 backdrop-blur-md">
              {renderProjectGraphic()}
            </div>
            
            <span className="text-[10px] text-white/30 uppercase tracking-widest mt-8 font-mono">
              System Architecture Diagram
            </span>
          </article>
        </Reveal>

        {/* Metrics/Stats Card */}
        <Reveal delay={0.08}>
          <article className="about-panel h-full flex flex-col justify-between border-white/8 bg-neutral-900/10">
            <div>
              <p className="section-kicker">Key Milestones & Yield</p>
              <h2 className="font-serif text-3xl font-light mt-2 text-white">Measurable Signal.</h2>
              <div className="grid gap-4 mt-6">
                {project.metrics.map((metric) => (
                  <div key={metric} className="flex items-center gap-4 py-3.5 px-4 bg-white/2 border border-white/5 rounded-xl hover:border-emerald-500/30 transition-all duration-300">
                    <Sparkle size={18} className="text-emerald-400 flex-shrink-0" weight="duotone" />
                    <span className="text-white/85 text-sm font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-white/35 text-[11px] mt-8 leading-relaxed">
              Metrics compiled from third-party client telemetry, analytics audits, and brand recognition index assessments.
            </p>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
