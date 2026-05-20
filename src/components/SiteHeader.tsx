"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { navItems, site } from "@/lib/site-content";
import { SignatureMark } from "./SignatureMark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="brand-link" aria-label={`${site.name} home`}>
        <SignatureMark className="brand-mark" />
        <span className="font-sans font-extrabold tracking-wider text-white hidden sm:inline-block">
          {site.name}
        </span>
      </Link>

      <nav className="desktop-nav relative" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-colors duration-300 ${
                isActive ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeNavDock"
                  className="absolute inset-0 bg-white/8 border border-white/10 rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Absolute close button inside full menu */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white"
              aria-label="Close menu"
            >
              <X size={20} weight="bold" />
            </button>

            <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
              <span className="text-[10px] text-emerald-400 uppercase font-black tracking-widest block mb-4 border-b border-white/5 pb-2">
                Navigation Directory
              </span>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`relative py-3 rounded-xl flex items-center justify-between text-3xl font-serif ${
                      pathname === item.href ? "text-emerald-400" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span className="font-sans text-xs text-white/30">0{index + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
