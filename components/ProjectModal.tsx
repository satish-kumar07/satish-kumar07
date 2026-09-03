"use client";
import React, { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Project } from "@/data/projectsData";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  useEffect(() => {
    if (project) {
      setActiveTab("overview");
    }
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const getTabContent = (tab: TabKey): string => {
    if (!project) return "";
    switch (tab) {
      case "overview":
        return project.overview;
      case "problem":
        return project.problem;
      case "solution":
        return project.solution;
    }
  };

  const hasLive = project?.live && !project.live.includes("github.com");

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-card rounded-xl border border-border shadow-xl overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-border">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md text-muted hover:text-foreground hover:bg-cardHover transition-colors"
                  aria-label="Close modal"
                >
                  <HiX size={20} />
                </button>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-background border border-border text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="px-6 sm:px-8 pt-5">
              <div className="flex gap-1 p-1 rounded-lg bg-background border border-border w-fit">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                      activeTab === tab.key
                        ? "bg-card text-foreground shadow-xs"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Body */}
            <div className="px-6 sm:px-8 py-5 min-h-[140px]">
              <div className="text-sm text-foreground/90 leading-relaxed">
                {getTabContent(activeTab)}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 bg-cardHover border-t border-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-card border border-border text-xs font-medium text-foreground hover:bg-cardHover transition-colors shadow-2xs"
                >
                  <FaGithub size={14} />
                  <span>GitHub Repository</span>
                </a>

                {hasLive && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-accent text-xs font-medium text-white hover:bg-accent-hover transition-colors shadow-2xs"
                  >
                    <span>View Live Deployment</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                )}
              </div>

              <span className="text-[11px] font-mono text-muted hidden sm:inline">
                Press ESC to close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
