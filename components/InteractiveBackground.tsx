"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  baseRadius: number;
  currentRadius: number;
  alpha: number;
  isAccent: boolean;
}

interface Wave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovering: false,
    };

    const waves: Wave[] = [];
    let points: Point[] = [];

    const SPACING = 36;
    const INFLUENCE_RADIUS = 130;
    const SPRING = 0.08;
    const FRICTION = 0.82;

    const initPoints = () => {
      points = [];
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      const offsetX = (width - (cols - 1) * SPACING) / 2;
      const offsetY = (height - (rows - 1) * SPACING) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * SPACING;
          const y = offsetY + r * SPACING;
          points.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
            baseRadius: 1.5,
            currentRadius: 1.5,
            alpha: 0.15,
            isAccent: false,
          });
        }
      }
    };

    initPoints();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initPoints();
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovering = true;
    };

    const handlePointerLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isHovering = false;
    };

    const handlePointerDown = (e: MouseEvent) => {
      waves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.6,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.2;
      mouse.y += (mouse.targetY - mouse.y) * 0.2;

      const isDark = document.documentElement.classList.contains("dark");

      ctx.clearRect(0, 0, width, height);

      // Color configs
      const normalDotColor = isDark
        ? "rgba(255, 255, 255, 0.14)"
        : "rgba(23, 23, 23, 0.14)";
      const accentDotColor = isDark
        ? "rgba(96, 165, 250, 0.85)"
        : "rgba(37, 99, 235, 0.85)";
      const lineColor = isDark
        ? "rgba(96, 165, 250, 0.18)"
        : "rgba(37, 99, 235, 0.18)";

      // Draw subtle cursor spotlight in background
      if (mouse.isHovering && mouse.x > -500) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260
        );
        glow.addColorStop(
          0,
          isDark ? "rgba(59, 130, 246, 0.08)" : "rgba(37, 99, 235, 0.06)"
        );
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw ripple waves
      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        wave.radius += 4.5;
        wave.alpha *= 0.94;

        ctx.strokeStyle = isDark
          ? `rgba(96, 165, 250, ${wave.alpha * 0.4})`
          : `rgba(37, 99, 235, ${wave.alpha * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (wave.radius >= wave.maxRadius || wave.alpha < 0.01) {
          waves.splice(i, 1);
        }
      }

      // Track active dots for interconnecting lines
      const activePoints: Point[] = [];

      // Update Points
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        // 1. Mouse repulsion / attraction physics
        const dx = mouse.x - pt.x;
        const dy = mouse.y - pt.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < INFLUENCE_RADIUS && dist > 0) {
          const force = (1 - dist / INFLUENCE_RADIUS) * 20;
          const angle = Math.atan2(dy, dx);
          // Push dot away gently
          pt.vx -= Math.cos(angle) * force * 0.25;
          pt.vy -= Math.sin(angle) * force * 0.25;

          const ratio = 1 - dist / INFLUENCE_RADIUS;
          pt.currentRadius = pt.baseRadius + ratio * 2.2;
          pt.isAccent = true;
          activePoints.push(pt);
        } else {
          pt.currentRadius += (pt.baseRadius - pt.currentRadius) * 0.1;
          pt.isAccent = false;
        }

        // 2. Wave displacement
        for (let j = 0; j < waves.length; j++) {
          const w = waves[j];
          const wdx = pt.x - w.x;
          const wdy = pt.y - w.y;
          const wdist = Math.sqrt(wdx * wdx + wdy * wdy);
          const diff = Math.abs(wdist - w.radius);
          if (diff < 25) {
            const wForce = (1 - diff / 25) * w.alpha * 6;
            const wAngle = Math.atan2(wdy, wdx);
            pt.vx += Math.cos(wAngle) * wForce;
            pt.vy += Math.sin(wAngle) * wForce;
            pt.isAccent = true;
          }
        }

        // 3. Spring back to origin
        const springX = (pt.originX - pt.x) * SPRING;
        const springY = (pt.originY - pt.y) * SPRING;

        pt.vx = (pt.vx + springX) * FRICTION;
        pt.vy = (pt.vy + springY) * FRICTION;

        pt.x += pt.vx;
        pt.y += pt.vy;

        // Draw dot
        ctx.fillStyle = pt.isAccent ? accentDotColor : normalDotColor;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw faint technical links between nearby active dots
      if (activePoints.length > 1) {
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        for (let a = 0; a < activePoints.length; a++) {
          for (let b = a + 1; b < activePoints.length; b++) {
            const p1 = activePoints[a];
            const p2 = activePoints[b];
            const pDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (pDist < SPACING * 1.5) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [theme]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Top subtle ambient warmth wash */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] max-w-[90vw] h-[500px] rounded-full bg-accent/4 dark:bg-accent/7 blur-3xl" />

      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
}
