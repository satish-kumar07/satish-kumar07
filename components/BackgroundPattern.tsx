"use client";
import React from "react";

export default function BackgroundPattern() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Top subtle ambient warmth/depth */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] max-w-[90vw] h-[450px] rounded-full bg-accent/4 dark:bg-accent/6 blur-3xl" />

      {/* Architectural Dot Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-80 dark:opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]" />
    </div>
  );
}
