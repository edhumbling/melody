"use client";

import { motion } from "motion/react";
import { IdentityPanel } from "@/components/IdentityPanel";
import { ArrowRight, Article, ChartLineUp, ShieldCheck, Cpu } from "@phosphor-icons/react";

const blogPosts = [
  {
    id: 1,
    title: "Synthetic Fraud vectors in Neobank Ecosystems",
    excerpt: "Deconstructing the behavior of deepfake verification documents and synthetic SSN networks in modern banking onboarding flows.",
    date: "June 28, 2026",
    category: "SURVEILLANCE",
    icon: <ShieldCheck size={20} />,
    color: "var(--hot)",
    readTime: "5 min decrypt",
  },
  {
    id: 2,
    title: "Optimizing SAR Narratives with Advanced ML Parsers",
    excerpt: "How natural language synthesis speeds regulatory reporting cycles by auto-formatting transaction history logs into standard narratives.",
    date: "June 14, 2026",
    category: "REGULATORY",
    icon: <Article size={20} />,
    color: "var(--cyan)",
    readTime: "7 min decrypt",
  },
  {
    id: 3,
    title: "Rules Tuning: Lowering False Positive Rates by 40%",
    excerpt: "Analyzing the transaction monitoring thresholds at PNC and Access Bank. Balancing risk shielding without degrading support tickets.",
    date: "May 22, 2026",
    category: "ANALYTICS",
    icon: <ChartLineUp size={20} />,
    color: "var(--green)",
    readTime: "4 min decrypt",
  },
];

export default function BlogsPage() {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <main className="engine-shell">
      <IdentityPanel />

      <section className="control-panel" aria-label="Intelligence Blogs Feed">
        <header className="engine-header">
          <div>
            <p className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Cpu size={14} style={{ color: "var(--cyan)" }} /> CLASSIFIED RESEARCH FEED
            </p>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: 8 }}>Intelligence Reports</h2>
          </div>
          <div className="engine-readout" aria-label="Active reports count">
            <span>03</span>
            <small>REPORTS</small>
          </div>
        </header>

        <div className="engine-screen" style={{ marginTop: 32 }}>
          <motion.div 
            className="blog-grid"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            style={{ display: "grid", gap: "16px" }}
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                className="module-panel"
                onMouseMove={handleMouseMove}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
                }}
                style={{ 
                  minHeight: "auto", 
                  padding: "24px", 
                  display: "flex", 
                  flexDirection: "column",
                  borderLeft: `3px solid ${post.color}`,
                  cursor: "pointer"
                }}
                whileHover={{ y: -3 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ color: post.color }}>{post.icon}</div>
                  <span className="panel-kicker" style={{ color: post.color }}>{post.category}</span>
                  <span style={{ marginLeft: "auto", fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{post.date}</span>
                </div>
                
                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "4px 0 10px", color: "#fff" }}>{post.title}</h3>
                
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5, fontSize: "0.85rem", marginBottom: 20 }}>
                  {post.excerpt}
                </p>

                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    {post.readTime}
                  </span>
                  <button className="ghost-command" style={{ height: 32, padding: "0 12px", gap: 6, fontSize: 10 }}>
                    DECRYPT REPORT <ArrowRight size={12} weight="bold" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
