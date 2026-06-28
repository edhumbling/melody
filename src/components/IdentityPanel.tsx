"use client";

import { EnvelopeSimple, Phone, ArrowUpRight, Cpu, Eye } from "@phosphor-icons/react";
import { motion } from "motion/react";

const stats = [
  { label: "Financial Domain", value: "AML/KYC" },
  { label: "Surveillance Years", value: "5+ Years" },
  { label: "Active Focus", value: "Fraud Investigation" },
  { label: "SAR Workflow", value: "Ready" },
];

export function IdentityPanel() {
  return (
    <section className="identity-panel" aria-label="Professional profile summary">
      <div className="status-row">
        <span className="status-light" />
        <span>SURVEILLANCE NODE ACTIVE</span>
      </div>

      <div className="name-lockup">
        <p className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Cpu size={14} className="cyan-text" /> Security Analytics System
        </p>
        <h1>Melody Nyarko Amoabeng</h1>
        <p className="summary">
          Specialized AML/KYC and Fraud Analyst with 5 years of banking surveillance experience across suspicious activity investigations, PEP/sanction screening, SAR drafting, transaction monitoring, and financial crime mitigation.
        </p>
      </div>

      {/* Cyberpunk Telemetry Scanning Panel */}
      <div className="scanning-hud">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line-strong)", paddingBottom: 8 }}>
          <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--cyan)", display: "flex", alignItems: "center", gap: 6 }}>
            <Eye size={12} /> SCANNING FOR THREATS
          </span>
          <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>NODE_049B</span>
        </div>
        <div className="hud-grid-lines">
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
            <span>TRANSACTION_LEDGER_INTEGRITY</span>
            <span style={{ color: "var(--cyan)" }}>98.6%</span>
          </div>
          <div className="hud-line">
            <div className="hud-line-fill" style={{ width: "98.6%" }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--text-secondary)", marginTop: 8 }}>
            <span>AML_RISK_INDEX_SHIELD</span>
            <span style={{ color: "var(--green)" }}>STABLE</span>
          </div>
          <div className="hud-line">
            <div className="hud-line-fill" style={{ width: "70%", backgroundColor: "var(--green)", boxShadow: "0 0 8px var(--green)" }} />
          </div>
        </div>
      </div>

      <div className="signal-grid" aria-label="Profile highlights" style={{ marginTop: 20 }}>
        {stats.map((item, i) => (
          <motion.article 
            key={item.label} 
            className="signal-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.article>
        ))}
      </div>

      <div className="command-stack" aria-label="Quick contact actions" style={{ marginTop: 24 }}>
        <a className="primary-command" href="mailto:mna@melodyamoabeng.com">
          <EnvelopeSimple size={18} weight="bold" />
          Mail Node
          <ArrowUpRight size={14} weight="bold" />
        </a>
        <a className="ghost-command" href="tel:+14046631569">
          <Phone size={18} weight="bold" />
          Call Direct
        </a>
      </div>
    </section>
  );
}
