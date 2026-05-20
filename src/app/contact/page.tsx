import type { Metadata } from "next";
import { ArrowRight, EnvelopeSimple, Sparkle } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { offerings, site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Initiate Dialogue",
  description: `Contact ${site.name} for design inquiries.`,
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      {/* Editorial Page Hero */}
      <section className="page-hero">
        <Reveal>
          <p className="section-kicker">Inquiries</p>
          <h1 className="font-serif">Initiate a clear, thoughtful dialogue.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="page-deck text-white/70">
            Reach out via the secure mail cockpit below, or use the direct email bridge to start a 
            collaborative conversation immediately.
          </p>
          <div className="page-actions">
            <a className="button-primary" href={`mailto:${site.email}`}>
              Email Melody Direct <EnvelopeSimple size={15} weight="bold" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Grid: Details & Glass Form Cockpit */}
      <section className="contact-grid">
        {/* Collaborative Scope Info */}
        <Reveal>
          <article className="contact-card h-full flex flex-col justify-between border-white/8 bg-neutral-900/10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkle size={22} weight="duotone" className="text-emerald-400" />
                <span className="text-[10px] text-amber-400 font-extrabold tracking-widest font-mono uppercase">
                  Service Framework
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light text-white mb-4">
                Strategic Collaborations.
              </h2>
              <p className="text-white/60 text-[14px] leading-relaxed mb-8">
                Currently taking on select creative direction roles, digital identity programs, 
                high-end editorial design commissions, and speaking invitations.
              </p>
            </div>
            <div className="principle-list mt-auto">
              {offerings.map((item, index) => (
                <article key={item} className="!min-height-[64px] !py-3 !px-4 hover:border-emerald-500/20 bg-white/[0.01]">
                  <span className="text-xs text-emerald-400 font-bold tracking-wider font-mono">0{index + 1}</span>
                  <p className="font-serif !text-base text-white/90 font-light pl-4">{item}</p>
                </article>
              ))}
            </div>
          </article>
        </Reveal>
        
        {/* Interactive Glass Cockpit Form */}
        <Reveal delay={0.08}>
          <form className="contact-card contact-form h-full border-white/8 bg-neutral-900/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-amber-400 font-extrabold tracking-widest font-mono uppercase">
                Secure Mail Dispatch
              </span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            </div>

            <label className="block">
              <span className="form-label text-[10px] uppercase tracking-wider text-white/40 block mb-2 font-bold">
                Your Identity
              </span>
              <input 
                name="name" 
                placeholder="Your name or organization" 
                className="px-4 py-3 bg-white/2 border border-white/6 rounded-xl focus:border-emerald-400 focus:bg-white/[0.03] transition-all"
              />
            </label>
            
            <label className="block">
              <span className="form-label text-[10px] uppercase tracking-wider text-white/40 block mb-2 font-bold">
                Email Coordinates
              </span>
              <input 
                name="email" 
                type="email" 
                placeholder="you@example.com" 
                className="px-4 py-3 bg-white/2 border border-white/6 rounded-xl focus:border-emerald-400 focus:bg-white/[0.03] transition-all"
              />
            </label>
            
            <label className="block">
              <span className="form-label text-[10px] uppercase tracking-wider text-white/40 block mb-2 font-bold">
                Project Narrative
              </span>
              <textarea 
                name="message" 
                placeholder="Outline what creative goals you have in mind..." 
                className="px-4 py-3 bg-white/2 border border-white/6 rounded-xl focus:border-emerald-400 focus:bg-white/[0.03] transition-all"
              />
            </label>

            <a 
              className="button-primary mt-4 flex items-center justify-center gap-2 w-full cursor-pointer" 
              href={`mailto:${site.email}`}
            >
              <span>Submit Inquiry</span> 
              <ArrowRight size={15} weight="bold" />
            </a>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
