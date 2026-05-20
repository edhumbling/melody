"use client";

import { useEffect } from "react";

export function MotionSystem() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null =
      null;

    async function boot() {
      if (!reduceMotion.matches) {
        const [{ default: Lenis }, { gsap }] = await Promise.all([
          import("lenis"),
          import("gsap"),
        ]);

        lenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
        });

        const raf = (time: number) => {
          lenis?.raf(time);
          frame = requestAnimationFrame(raf);
        };

        frame = requestAnimationFrame(raf);
        gsap.to(".ambient-ring", {
          rotate: 360,
          duration: 42,
          ease: "none",
          repeat: -1,
        });
      }
    }

    boot();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
