"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { name: "Summary", href: "/#summary" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <>
      <div className="announcement-rail">
        <span>MELODY NYARKO AMOABENG</span>
        <span>AML/KYC/Fraud Analyst</span>
        <span>Anti-Money Laundering, Fraud Analysis, SAR Drafting, Transaction Monitoring</span>
      </div>

      <header className="site-header">
        <Link href="/" className="brand-lockup" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">M</span>
          <span>
            <strong>Melody</strong>
            <small>Nyarko Amoabeng</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        <a className="header-action" href="mailto:mna@melodyamoabeng.com">
          Contact
        </a>

        <button
          type="button"
          className={`menu-button ${isOpen ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>

      <div className={`mobile-nav ${isOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <a href="mailto:mna@melodyamoabeng.com" className="mobile-contact-link" onClick={() => setIsOpen(false)}>
            mna@melodyamoabeng.com
          </a>
        </div>
      </div>
    </>
  );
}

