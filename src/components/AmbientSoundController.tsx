"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";

// F-Major Pentatonic Scale for perfect chimes harmony
const PENTATONIC_SCALE = [
  349.23, // F4
  392.00, // G4
  440.00, // A4
  523.25, // C5
  587.33, // D5
  698.46, // F5
];

export function AmbientSoundController() {
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== "undefined") {
      const savedPreference = localStorage.getItem("melody-sound-enabled");
      return savedPreference !== "true";
    }
    return true;
  });
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    if (audioCtxRef.current) return;

    // Create browser AudioContext
    const AudioContextClass =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const mainGain = ctx.createGain();
    
    // Set a very gentle, polite volume ceiling
    mainGain.gain.setValueAtTime(0.08, ctx.currentTime);
    mainGain.connect(ctx.destination);

    audioCtxRef.current = ctx;
    gainNodeRef.current = mainGain;
  };

  const playChime = useCallback((index: number) => {
    if (isMuted) return;

    // Initialize audio context on first interactive sound triggers
    initAudio();

    const ctx = audioCtxRef.current;
    const mainGain = gainNodeRef.current;
    if (!ctx || !mainGain) return;

    // Resume context if browser suspended it (autoplay policy)
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const frequency = PENTATONIC_SCALE[index % PENTATONIC_SCALE.length];

    // 1. Create primary sine oscillator for fundamental warmth
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(frequency, now);

    // 2. Create triangle oscillator for physical marimba harmonic resonance
    const osc2 = ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(frequency * 2, now); // First overtone

    // 3. Lowpass filter to ensure tone remains soft, gentle, and dark
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, now);

    // 4. Amplitude gain envelope (fast strike, long resonant decay)
    const ampGain = ctx.createGain();
    ampGain.gain.setValueAtTime(0, now);
    ampGain.gain.linearRampToValueAtTime(0.7, now + 0.008); // Sharp strike
    ampGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6); // Generous decay

    // Connect nodes
    osc1.connect(ampGain);
    osc2.connect(ampGain);
    
    // Connect triangle with slightly lower gain to avoid sharp harmonics
    const harmonicGain = ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.12, now);
    osc2.disconnect(ampGain);
    osc2.connect(harmonicGain).connect(ampGain);

    ampGain.connect(filter).connect(mainGain);

    osc1.start(now);
    osc2.start(now);

    // Cleanup nodes after decay finishes
    osc1.stop(now + 1.8);
    osc2.stop(now + 1.8);
  }, [isMuted]);

  useEffect(() => {
    // Find all primary interactive items to attach melodic listeners to
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], .project-card, .journal-list article, .about-panel, .work-row, .sound-card"
      ) as HTMLElement;

      if (interactive && !interactive.dataset.soundHooked) {
        interactive.dataset.soundHooked = "true";

        // Assign a specific note based on the item type or index to form ascending/descending runs
        let noteIndex = Math.floor(Math.random() * PENTATONIC_SCALE.length);

        const navLinks = Array.from(document.querySelectorAll(".desktop-nav a"));
        const navIdx = navLinks.indexOf(interactive);
        if (navIdx !== -1) {
          noteIndex = navIdx; // Nav plays progressive F-pentatonic notes
        }

        const bentoCards = Array.from(document.querySelectorAll(".project-card, .about-panel, .contact-card"));
        const bentoIdx = bentoCards.indexOf(interactive);
        if (bentoIdx !== -1) {
          noteIndex = bentoIdx + 2;
        }

        interactive.addEventListener("mouseenter", () => {
          playChime(noteIndex);
        });
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [playChime]);

  const toggleSound = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    localStorage.setItem("melody-sound-enabled", String(!nextMute));
    
    if (!nextMute) {
      initAudio();
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      // Play a welcome greeting chime run
      setTimeout(() => playChime(0), 0);
      setTimeout(() => playChime(2), 140);
      setTimeout(() => playChime(4), 280);
    }
  };


  return (
    <button
      onClick={toggleSound}
      className={`sound-toggle-btn ${!isMuted ? "active" : ""}`}
      aria-label={isMuted ? "Unmute ambient sounds" : "Mute ambient sounds"}
      title="Quiet Rhythm Sound Engine"
    >
      <div className={`visualizer-bars ${!isMuted ? "playing" : "muted"}`}>
        <span className="visualizer-bar" />
        <span className="visualizer-bar" />
        <span className="visualizer-bar" />
        <span className="visualizer-bar" />
      </div>
      <span className="text-[10px] uppercase font-bold tracking-widest hidden sm:inline">
        {isMuted ? "Sound Off" : "Sound On"}
      </span>
      {isMuted ? (
        <SpeakerSlash size={15} weight="bold" />
      ) : (
        <SpeakerHigh size={15} weight="bold" />
      )}
    </button>
  );
}
