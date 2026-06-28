import Link from "next/link";

export default function BlogsPage() {
  return (
    <main className="blogs-page">
      <div className="content-shell">
        <div className="section-heading">
          <p>Profile</p>
          <h1>MELODY NYARKO AMOABENG</h1>
        </div>
        <p>
          Creative AML/KYC/Fraud Analyst with 5years of working experience in the financial
          industry. Versed in Anti-Money Laundering, Fraud analysis, Account review, PEP
          screening, SAR drafting, High risk review, Transaction monitoring, KYC, Negative
          News Screening, and OFAC stripping.
        </p>
        <div className="contact-actions">
          <Link href="/">View full profile</Link>
        </div>
      </div>
    </main>
  );
}
