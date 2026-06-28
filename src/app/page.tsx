"use client";

import { useMemo, useState } from "react";
import { IdentityPanel } from "@/components/IdentityPanel";
import {
  Bank,
  Certificate,
  CheckCircle,
  FileMagnifyingGlass,
  Fingerprint,
  GraduationCap,
  ListChecks,
  MapPin,
  ShieldCheck,
  Target,
  UserFocus,
} from "@phosphor-icons/react";

type TabId = "bio" | "experience" | "skills" | "education" | "contact";

const tabs: Array<{ id: TabId; label: string; short: string }> = [
  { id: "bio", label: "Bio Engine", short: "Bio" },
  { id: "experience", label: "Experience Log", short: "Work" },
  { id: "skills", label: "Risk Stack", short: "Skills" },
  { id: "education", label: "Education Vault", short: "Study" },
  { id: "contact", label: "Contact Node", short: "Contact" },
];

const experience = [
  {
    role: "AML/Fraud Analyst",
    company: "PNC Bank",
    place: "Newark, NJ",
    range: "Jan 2025 - Current",
    tone: "hot",
    points: [
      "Investigates suspicious activity from account surveillance and branch escalations.",
      "Analyzes account takeover, dispute fraud, and identity theft using Looker, Unit21, Salesforce, LexisNexis, and Zendesk.",
      "Conducts detailed suspicious activity investigations and drafts SARs when risk cannot be mitigated.",
      "Works with internal groups to align SAR narratives and investigation requirements.",
      "Reviews and updates code of conduct and company policy material.",
    ],
  },
  {
    role: "AML/KYC Analyst",
    company: "Chase Bank",
    place: "Belair, MD",
    range: "Feb 2023 - Dec 2024",
    tone: "blue",
    points: [
      "Monitored institutional transactions and reconciled customer accounts to identify fraud.",
      "Supported new client onboarding and renewals using RDC, Actimize, World-Check, Clink, and LexisNexis.",
      "Escalated unusual activity to the Financial Intelligence Unit and supported potential risk escalation.",
      "Supported risk assessments, internal control reviews, and fraud prevention framework checks.",
    ],
  },
  {
    role: "AML/KYC Analyst",
    company: "Access Bank",
    place: "Accra, Ghana",
    range: "Jan 2021 - Jan 2023",
    tone: "green",
    points: [
      "Performed independent checks of KYC information provided by front office teams.",
      "Implemented CIP and Customer Acceptance Policy requirements.",
      "Applied KYC guidelines to prevent funds from being used for fraudulent purposes.",
      "Liaised with branch managers on customer satisfaction and KYC objective guidance.",
    ],
  },
];

const skills = [
  "Analytical review",
  "Risk mitigation",
  "Banking regulations",
  "Due diligence",
  "Investigation",
  "Fraud analysis",
  "SAR drafting",
  "Team collaboration",
  "Sanctions compliance",
  "Information verification",
  "Compliance strength",
  "Work ethic",
  "Operational support",
  "Data documentation",
  "PEP screening",
  "Negative news screening",
  "OFAC stripping",
  "Transaction monitoring",
];

const education = [
  {
    title: "AMLCFTx: AML/CFT Risk-Based Supervision of Financial Institutions",
    source: "International Monetary Fund, IMFx",
    date: "05/2026",
    type: "Certification",
  },
  {
    title: "LEAD1x: Exercising Leadership: Foundation Principles",
    source: "Harvard University, HarvardX",
    date: "05/2025",
    type: "Leadership",
  },
  {
    title: "High School Diploma",
    source: "Kumasi Girls Senior High School, Ghana",
    date: "05/2016",
    type: "Education",
  },
];

function TabButton({
  active,
  label,
  short,
  onClick,
}: {
  active: boolean;
  label: string;
  short: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`tab-button ${active ? "is-active" : ""}`}
      onClick={onClick}
      aria-pressed={active}
    >
      <span className="tab-label">{label}</span>
      <span className="tab-short">{short}</span>
    </button>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("bio");

  const activeIndex = useMemo(
    () => tabs.findIndex((tab) => tab.id === activeTab) + 1,
    [activeTab],
  );

  // Dynamic JS listener to update CSS variables for the mouse hover lighting effect
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

      <section className="control-panel" aria-label="Melody profile engine">
        <header className="engine-header">
          <div>
            <p className="eyebrow">DIAGNOSTICS BOARD</p>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: 8 }}>Compliance Intelligence Node</h2>
          </div>
          <div className="engine-readout" aria-label={`Active module ${activeIndex} of ${tabs.length}`}>
            <span>0{activeIndex}</span>
            <small>/ 05</small>
          </div>
        </header>

        <nav className="tab-strip" aria-label="Profile sections">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              label={tab.label}
              short={tab.short}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </nav>

        <div className="engine-screen">
          {activeTab === "bio" ? (
            <section className="module-grid" aria-label="Complete bio">
              <article className="module-panel wide" onMouseMove={handleMouseMove}>
                <ShieldCheck size={30} style={{ color: "var(--green)" }} />
                <p className="panel-kicker">Professional Summary</p>
                <h3>Financial-crime surveillance execution.</h3>
                <p>
                  Melody is dedicated and analytical, equipped with a rigorous work ethic and motivation to succeed within security surveillance settings. Highly proficient in data synthesis, compliance reviews, and structured investigation protocols across diverse banking compliance layers.
                </p>
              </article>

              <article className="module-panel" onMouseMove={handleMouseMove}>
                <Fingerprint size={28} style={{ color: "var(--cyan)" }} />
                <p className="panel-kicker">Core Lanes</p>
                <ul className="compact-list">
                  <li>Anti-Money Laundering</li>
                  <li>Fraud Analysis</li>
                  <li>Account Surveillance</li>
                  <li>High-Risk Review</li>
                </ul>
              </article>

              <article className="module-panel" onMouseMove={handleMouseMove}>
                <FileMagnifyingGlass size={28} style={{ color: "var(--cyan)" }} />
                <p className="panel-kicker">Regulatory Outputs</p>
                <ul className="compact-list">
                  <li>SAR Narrative Drafting</li>
                  <li>PEP Screening</li>
                  <li>Negative News Monitoring</li>
                  <li>OFAC Regulatory Stripping</li>
                </ul>
              </article>
            </section>
          ) : null}

          {activeTab === "experience" ? (
            <section className="experience-stack" aria-label="Experience">
              {experience.map((job) => (
                <article key={`${job.company}-${job.range}`} className="experience-card">
                  <div className="experience-topline">
                    <div>
                      <p className="panel-kicker" style={{ color: "var(--cyan)" }}>{job.range}</p>
                      <h3 style={{ fontSize: "1.4rem", margin: "6px 0", color: "#fff" }}>{job.role}</h3>
                    </div>
                    <div className="company-chip">
                      <Bank size={14} />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <p className="location-line">
                    <MapPin size={14} />
                    {job.place}
                  </p>
                  <ul className="evidence-list">
                    {job.points.map((point) => (
                      <li key={point}>
                        <CheckCircle size={14} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          ) : null}

          {activeTab === "skills" ? (
            <section className="skills-module" aria-label="Skills">
              <div style={{ display: "flex", gap: 12 }}>
                <ListChecks size={24} style={{ color: "var(--cyan)" }} />
                <div>
                  <p className="panel-kicker">Operating Stack</p>
                  <h3 style={{ fontSize: "1.4rem", color: "#fff", marginTop: 4 }}>Risk verification, regulatory screening, and escalations.</h3>
                </div>
              </div>
              <div className="skill-cloud">
                {skills.map((skill, index) => (
                  <span key={skill} className={index % 3 === 0 ? "hot" : index % 3 === 1 ? "blue" : "green"}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className="tool-rail">
                {["Looker", "Unit21", "Salesforce", "LexisNexis", "Zendesk", "RDC", "Actimize", "World-Check", "Documentum"].map(
                  (tool) => (
                    <span key={tool}>{tool}</span>
                  ),
                )}
              </div>
            </section>
          ) : null}

          {activeTab === "education" ? (
            <section className="education-grid" aria-label="Education and certifications">
              {education.map((item) => (
                <article key={item.title} className="education-card">
                  <div className="education-icon">
                    {item.type === "Education" ? (
                      <GraduationCap size={24} />
                    ) : (
                      <Certificate size={24} />
                    )}
                  </div>
                  <p className="panel-kicker" style={{ marginTop: 16 }}>{item.date} / {item.type}</p>
                  <h3 style={{ fontSize: "1.2rem", margin: "8px 0", color: "#fff" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{item.source}</p>
                </article>
              ))}
            </section>
          ) : null}

          {activeTab === "contact" ? (
            <section className="contact-module" aria-label="Contact">
              <article className="contact-card primary">
                <UserFocus size={30} style={{ color: "var(--cyan)" }} />
                <p className="panel-kicker">Encrypted Connection</p>
                <h3 style={{ color: "#fff", fontSize: "1.4rem" }}>Establish secure communications.</h3>
                <div className="contact-links">
                  <a href="tel:+14046631569">
                    (404) 663-1569
                  </a>
                  <a href="mailto:mna@melodyamoabeng.com">
                    mna@melodyamoabeng.com
                  </a>
                </div>
              </article>

              <article className="contact-card">
                <Target size={30} style={{ color: "var(--cyan)" }} />
                <p className="panel-kicker">Deployment Priorities</p>
                <ul className="compact-list" style={{ border: "none" }}>
                  <li>AML / KYC Analytics</li>
                  <li>Suspicious Activity Screening</li>
                  <li>FIU Auditing & Compliance</li>
                </ul>
              </article>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
