"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

export default function ResumePage() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col transition-colors duration-200">
      {/* Clean Navigation Header */}
      <header className="sticky top-0 z-30 bg-card/90 backdrop-blur-md border-b border-border px-6 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-foreground transition-colors"
          >
            <FaArrowLeft size={12} />
            <span>Back to Portfolio</span>
          </Link>

          <h1 className="text-sm font-semibold text-foreground hidden sm:block">
            Satish Kumar — Curriculum Vitae
          </h1>

          <div className="flex items-center gap-2.5">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-md border border-border bg-card text-muted hover:text-foreground hover:bg-cardHover transition-all"
                aria-label="Toggle theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <HiSun size={15} className="text-amber-400" />
                ) : (
                  <HiMoon size={15} className="text-[#555555]" />
                )}
              </button>
            )}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card text-foreground text-xs font-medium hover:bg-cardHover transition-colors shadow-2xs"
            >
              <span>Open in New Tab</span>
              <FaExternalLinkAlt size={10} />
            </a>

            <a
              href="/resume.pdf"
              download="Satish_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity shadow-2xs"
            >
              <FaDownload size={11} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* PDF Viewer Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 flex flex-col">
        <div
          className="w-full bg-white rounded-xl border border-border shadow-card overflow-hidden flex flex-col"
          style={{ height: "calc(100vh - 110px)", minHeight: "650px" }}
        >
          <object
            data="/resume.pdf#view=FitH"
            type="application/pdf"
            className="w-full h-full block border-none"
          >
            <iframe
              src="/resume.pdf#view=FitH"
              className="w-full h-full block border-none"
              title="Satish Kumar Resume"
            >
              <div className="p-8 text-center text-sm text-[#555555]">
                <p className="mb-4">Unable to display PDF directly in your browser.</p>
                <a
                  href="/resume.pdf"
                  download="Satish_Kumar_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-white text-xs font-medium"
                >
                  <FaDownload size={12} />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </main>
    </div>
  );
}
