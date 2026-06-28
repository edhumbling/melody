"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { List, X, ShieldWarning, Cpu } from "@phosphor-icons/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: "Risk Profile Engine", href: "/" },
    { name: "Intelligence Blogs", href: "/blogs" },
  ];

  // Simulated real-time fintech system logs for mobile HUD overlay
  const systemLogs = [
    "SECURE_GATEWAY_CONN: OK",
    "DECRYPTING_KYC_PIPELINES: STATUS_GREEN",
    "TRANSACTION_SURVEILLANCE_ACTIVE: 60FPS",
    "NEURAL_THREAT_SCANNER: ENGAGED",
  ];

  return (
    <>
      <nav className="global-nav">
        <div className="nav-brand">
          <Link href="/" className="logo-link">
            <span className="logo-text">Melody.AI</span>
            <span className="logo-dot" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "is-active" : ""}`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <motion.button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={20} /> : <List size={20} />}
        </motion.button>
      </nav>

      {/* Fullscreen HUD Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* HUD System Frame Info */}
            <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)", fontSize: 10, fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
              <span>HUD // SYSTEM_MENU v2.6</span>
              <span>EST_CONN: SECURE</span>
            </div>

            <div className="mobile-menu-content">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.1, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className={`mobile-link ${pathname === link.href ? "is-active" : ""}`}
                    onClick={closeMenu}
                  >
                    {link.name}
                    {pathname === link.href && <span className="mobile-active-dot" />}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Cyberpunk HUD System Logs Widget */}
            <div style={{ marginTop: "auto", display: "grid", gap: 16 }}>
              <div style={{ borderTop: "1px solid var(--line-strong)", paddingTop: 24 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--cyan)", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                  <Cpu size={14} /> Telemetry Feeds
                </p>
                <div style={{ display: "grid", gap: 6 }}>
                  {systemLogs.map((log, index) => (
                    <motion.div 
                      key={log} 
                      style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <span style={{ color: "var(--cyan)" }}>&gt;</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mobile-menu-footer">
                <ShieldWarning size={16} />
                <span>Encrypted Connection Established</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
