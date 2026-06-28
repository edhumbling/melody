import {
  Bank,
  Certificate,
  CheckCircle,
  EnvelopeSimple,
  GraduationCap,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";

const summary =
  "Creative AML/KYC/Fraud Analyst with 5years of working experience in the financial industry. Versed in Anti-Money Laundering, Fraud analysis, Account review, PEP screening, SAR drafting, High risk review, Transaction monitoring, KYC (Know Your Customer), Negative News Screening, and OFAC stripping. Proficient in MS office, Research, and Risk management. Dedicated and driven with strong work ethic and motivation to thrive in a team-based or individually motivated settings.";

const experience = [
  {
    role: "AML/Fraud Analyst",
    company: "PNC Bank",
    place: "Newark, NJ",
    range: "Jan 2025 - Current",
    points: [
      "Investigates suspicious activities arising from account surveillance and branch escalations.",
      "Analyze and investigate complex fraud cases, including account takeover, dispute fraud and identity theft using tools such as Looker, Unit21, Salesforce, LexisNexis, Zendesk.",
      "Conduct detailed investigation into suspicious activity and draft SAR when risk cannot be mitigated.",
      "Works closely with internal groups to ensure understanding of SAR and investigate requirements.",
      "Conduct objective, thorough, and timely investigations into allegations of fraud using software such as Looker, Zendesk, Unit21, RDC, Whatismyipaddress, Documentum.",
      "Prepare and send SAR to regulatory compliance manager prior to filing.",
      "Review and updates code of conduct and company Policies.",
    ],
  },
  {
    role: "AML/KYC Analyst",
    company: "Chase Bank",
    place: "Belair, MD",
    range: "Feb 2023 - Dec 2024",
    points: [
      "Extensive knowledge of current fraud issues and trends.",
      "Sound knowledge of regulatory requirements related to fraud detection and investigation.",
      "Adept at monitoring and reviewing institutional transactions and reconciling customer accounts to identify fraud.",
      "Participated in new client onboarding and contract renewal processes using tools such as RDC, Actimize, World check, Clink, LexisNexis.",
      "Escalated unusual activity to the Financial Intelligence Unit (FIU) and assisted with escalating potential risks.",
      "Maintained detailed records on clients for second level review.",
      "Have a track record in risk assessment, data analysis and fraud detection.",
      "Identified fraud patterns and anomalies through analysis of large quantities of data.",
      "Supported investigations into potential fraud, money laundering, and compliance breaches, preparing clear reports with findings and recommendations.",
      "Assisted in conducting risk assessments and reviews of client processes to identify gaps in internal controls, compliance, and fraud prevention frameworks.",
      "Prepared training and awareness materials on fraud prevention, AML, and compliance for client workshops.",
    ],
  },
  {
    role: "AML/KYC Analyst",
    company: "Access Bank",
    place: "Accra - Ghana",
    range: "Jan 2021 - Jan 2023",
    points: [
      "Performed independent check of KYC information provided by front office.",
      "Implemented appropriate CIP (Customer Identification Program) and CAP (Customer Acceptance Policy).",
      "Adept at applying KYC guidelines to prevent funds from being used for fraudulent purposes.",
      "Identified and resolved any issues in relation to the onboarding process.",
      "Reviewed and detected suspicious activities based on a variety of AML Systems generated transactional alerts from transactional activity.",
      "Analyzed client data, documentation, and negative news to determine client risk profile as established under the global KYC Procedures.",
      "Reviewed customer financial data to ascertain the level of risk involved for extending credit.",
      "Liaised with branch managers to receive feedback on customer satisfaction and provide guidance on achieving KYC objectives.",
    ],
  },
];

const skills = [
  "Analytical",
  "Risk mitigation",
  "Banking regulations",
  "Due diligence",
  "Investigation",
  "Fraud Analysis",
  "SAR drafting",
  "Team player",
  "Sanctions compliance",
  "Information verification",
  "Compliance strength",
  "Work ethics",
  "Operation support",
  "Data documentation",
];

const education = [
  {
    title: "High School Diploma",
    date: "05/2016",
    source: "Kumasi Girls Senior High School, Ghana.",
  },
  {
    title: "AMLCFTx : AML CFT Risk-based Supervision of Financial institutions.",
    date: "05/2026",
    source: "International Monetary Fund IMFx.",
  },
  {
    title: "LEAD1x : Exercising Leadership: Foundation Principles .",
    date: "05/2025",
    source: "Harvard University, Harvardx.",
  },
];

function SectionHeading({
  id,
  label,
  title,
}: {
  id: string;
  label: string;
  title: string;
}) {
  return (
    <div className="section-heading" id={id}>
      <p>{label}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero-section" id="summary" aria-label="Summary">
        <div className="hero-art" aria-hidden="true">
          <div className="globe-line globe-line-one" />
          <div className="globe-line globe-line-two" />
          <div className="ledger-disc" />
        </div>

        <div className="hero-content">
          <p className="hero-title">AML/KYC/Fraud Analyst</p>
          <h1>
            MELODY NYARKO
            <span> AMOABENG</span>
          </h1>
          <p className="hero-summary">{summary}</p>

          <div className="hero-contact" aria-label="Contact details">
            <a href="tel:+14046631569">
              <Phone size={16} weight="bold" />
              (404) 663-1569
            </a>
            <a href="mailto:mna@melodyamoabeng.com">
              <EnvelopeSimple size={16} weight="bold" />
              mna@melodyamoabeng.com
            </a>
            <span>
              <MapPin size={16} weight="bold" />
              Douglasville GA 30135
            </span>
          </div>
        </div>
      </section>

      <section className="profile-band" aria-label="Professional highlights">
        <div>
          <strong>5years</strong>
          <span>Financial industry experience</span>
        </div>
        <div>
          <strong>SAR</strong>
          <span>Drafting and regulatory escalation</span>
        </div>
        <div>
          <strong>AML/KYC</strong>
          <span>Account review and high risk review</span>
        </div>
        <div>
          <strong>OFAC</strong>
          <span>Screening, stripping, and negative news</span>
        </div>
      </section>

      <section className="content-shell experience-layout" aria-label="Experience">
        <SectionHeading id="experience" label="Experience" title="Financial crime and banking compliance work" />
        <div className="timeline">
          {experience.map((job) => (
            <article className="experience-entry" key={`${job.company}-${job.range}`}>
              <div className="experience-marker" aria-hidden="true" />
              <div className="experience-main">
                <div className="experience-top">
                  <div>
                    <p>{job.range}</p>
                    <h3>{job.role}</h3>
                  </div>
                  <span>
                    <Bank size={16} weight="bold" />
                    {job.company}
                  </span>
                </div>
                <p className="experience-place">{job.place}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>
                      <CheckCircle size={15} weight="fill" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills" aria-label="Skills">
        <div className="content-shell skills-grid">
          <SectionHeading label="Skills" title="Core compliance strengths" id="skills-heading" />
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-shell education-section" aria-label="Education">
        <SectionHeading id="education" label="Education" title="Education and professional learning" />
        <div className="education-list">
          {education.map((item) => (
            <article key={item.title}>
              <div className="education-icon" aria-hidden="true">
                {item.title === "High School Diploma" ? (
                  <GraduationCap size={22} weight="bold" />
                ) : (
                  <Certificate size={22} weight="bold" />
                )}
              </div>
              <p>{item.date}</p>
              <h3>{item.title}</h3>
              <span>{item.source}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-label="Contact">
        <div className="contact-inner">
          <SectionHeading label="Contact" title="Available for AML, KYC, and fraud analysis opportunities" id="contact-heading" />
          <div className="contact-actions">
            <a href="mailto:mna@melodyamoabeng.com">mna@melodyamoabeng.com</a>
            <a href="tel:+14046631569">(404) 663-1569</a>
          </div>
        </div>
      </section>
    </main>
  );
}
