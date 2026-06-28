"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Buildings, IdentificationBadge, Siren, TrendUp, Cpu } from "@phosphor-icons/react";

export function NeuralFooter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Flowing grid and nodes configuration
    const linesCount = 4;
    const pointsCount = window.innerWidth < 768 ? 15 : 30;
    
    // Create wave tracks
    const waves: { points: { x: number; y: number; baseOffset: number }[]; speed: number; phase: number; glowColor: string }[] = [];
    const colors = [
      "rgba(0, 240, 255, 0.4)", // Cyan
      "rgba(57, 255, 20, 0.3)",  // Green
      "rgba(112, 0, 255, 0.25)", // Blue
      "rgba(255, 0, 85, 0.2)",   // Hot Pink
    ];

    for (let l = 0; l < linesCount; l++) {
      const points = [];
      const step = width / (pointsCount - 1);
      
      for (let i = 0; i < pointsCount; i++) {
        points.push({
          x: i * step,
          y: height / 2,
          baseOffset: Math.random() * 50 - 25,
        });
      }
      
      waves.push({
        points,
        speed: 0.005 + l * 0.003,
        phase: Math.random() * Math.PI * 2,
        glowColor: colors[l],
      });
    }

    // Interactive tracking details
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Draw Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse coordinates smoothly
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw background ambient glow at mouse coordinates
      const ambientGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160);
      ambientGlow.addColorStop(0, "rgba(0, 240, 255, 0.04)");
      ambientGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Render waves and animated nodes
      waves.forEach((wave, waveIdx) => {
        wave.phase += wave.speed;
        
        ctx.beginPath();
        ctx.strokeStyle = wave.glowColor;
        ctx.lineWidth = 1.5;

        wave.points.forEach((pt, ptIdx) => {
          // Compute Y position using sine waves + mouse gravity factor
          const distToMouse = Math.abs(pt.x - mouse.x);
          const mouseFactor = Math.max(0, 1 - distToMouse / 200);
          
          pt.y = (height / 2) 
            + Math.sin(wave.phase + (ptIdx * 0.2)) * (40 + waveIdx * 10) 
            + pt.baseOffset 
            + (mouse.y - height / 2) * mouseFactor * 0.6;

          if (ptIdx === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            // Draw smooth curves using quadratic curve calculations
            const prevPt = wave.points[ptIdx - 1];
            const xc = (prevPt.x + pt.x) / 2;
            const yc = (prevPt.y + pt.y) / 2;
            ctx.quadraticCurveTo(prevPt.x, prevPt.y, xc, yc);
          }
        });
        
        ctx.stroke();

        // Render moving cyber-packets (pulses) traveling along the wave tracks
        const activeNodeIdx = Math.floor(((wave.phase * 50) % pointsCount));
        const activePt = wave.points[activeNodeIdx];

        if (activePt) {
          ctx.beginPath();
          ctx.arc(activePt.x, activePt.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = waveIdx % 2 === 0 ? "var(--cyan)" : "var(--green)";
          ctx.shadowColor = waveIdx % 2 === 0 ? "var(--cyan)" : "var(--green)";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0; // Reset shadow blur to ensure rendering performance
        }
      });
    };

    gsap.ticker.add(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(draw);
    };
  }, []);

  return (
    <footer className="neural-footer">
      <canvas ref={canvasRef} className="neural-canvas" />
      <div className="footer-content">
        <div className="footer-title">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Cpu size={20} style={{ color: "var(--cyan)" }} />
            <h3>Melody Intelligence System</h3>
          </div>
          <p>Real-Time Financial Crime Diagnostics Network</p>
        </div>
        <div className="footer-capabilities">
          <span><Siren size={15} weight="bold" /> Threat Alerting</span>
          <span><IdentificationBadge size={15} weight="bold" /> KYC Pipelines</span>
          <span><TrendUp size={15} weight="bold" /> Pattern Analysis</span>
          <span><Buildings size={15} weight="bold" /> Bank Audits</span>
        </div>
      </div>
    </footer>
  );
}
