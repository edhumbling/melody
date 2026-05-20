"use client";

import Link from "next/link";
import { ArrowUpRight, CompassRose } from "@phosphor-icons/react";
import { navItems, site, socialLinks } from "@/lib/site-content";
import { SignatureMark } from "./SignatureMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-intro relative">
        <SignatureMark className="footer-mark shadow-lg" />
        <div>
          <p className="footer-title text-white font-serif text-3xl font-light">
            {site.name}
          </p>
          <p className="text-white/50 text-sm mt-1 max-w-sm">
            {site.tagline}
          </p>
        </div>

        {/* Decorative spinning fine seal on the right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block group">
          <CompassRose
            size={68}
            weight="thin"
            className="text-white/10 group-hover:text-emerald-400/30 group-hover:rotate-[180deg] transition-all duration-1000 ease-out"
          />
        </div>
      </div>

      <div className="footer-grid mt-12 border-t border-white/5 pt-12">
        <div>
          <p className="footer-label">Navigation</p>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/65 hover:text-emerald-400 hover:translate-x-1.5 transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="footer-label">Connected Networks</p>
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-white/65 hover:text-emerald-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-1.5"
            >
              {item.label} <ArrowUpRight size={12} className="opacity-40" />
            </a>
          ))}
        </div>
        <div>
          <p className="footer-label">Direct Inquiry Bridge</p>
          <a
            href={`mailto:${site.email}`}
            className="text-white/65 hover:text-emerald-400 hover:translate-x-1.5 transition-all duration-300 flex items-center gap-1.5 break-all font-mono text-xs"
          >
            {site.email} <ArrowUpRight size={12} className="opacity-40" />
          </a>
          <p className="text-white/30 text-[11px] leading-relaxed mt-4 max-w-[200px]">
            Based globally. Operating at the intersection of quiet visual force and unmistakable rhythm.
          </p>
        </div>
      </div>

      <div className="footer-bottom flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 border-t border-white/5 pt-8">
        <p className="text-white/30 text-xs text-center sm:text-left">
          © {new Date().getFullYear()} {site.name}. All rights preserved.
        </p>
        <p className="text-white/20 text-[10px] uppercase tracking-widest text-center sm:text-right">
          TIMELIGHT SYSTEM v1.0
        </p>
      </div>
    </footer>
  );
}
