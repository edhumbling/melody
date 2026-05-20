"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // High performance motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Soft spring physics for the lag-trailing ring
  const ringX = useSpring(cursorX, { stiffness: 220, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 220, damping: 22 });

  useEffect(() => {
    // Hide cursor by default on touchscreen devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest(".project-card") ||
          target.closest(".about-panel") ||
          target.closest(".work-row") ||
          target.closest(".sound-card") ||
          target.closest(".journal-list article"))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision inner dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {/* Lag-trailing spring ring */}
      <motion.div
        className={`custom-cursor-ring ${hovered ? "hovered" : ""}`}
        style={{
          x: ringX,
          y: ringY,
        }}
      />
    </>
  );
}
