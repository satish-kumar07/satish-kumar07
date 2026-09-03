"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import projects, { Project } from "@/data/projectsData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 250);
  };

  return (
    <>
      <section id="projects" className="py-20 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                03 / Featured Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                Selected Projects
              </h2>
              <p className="text-sm text-muted mt-1.5 max-w-xl">
                Practical implementations in computer vision, retrieval-augmented generation, machine learning, and web platforms.
              </p>
            </div>

            <div className="text-xs font-mono text-subtle">
              {projects.length} Projects Total
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => {
              const hasLive = project.live && !project.live.includes("github.com");

              return (
                <article
                  key={project.slug}
                  onClick={() => handleOpenModal(project)}
                  className="group bg-card rounded-xl border border-border p-7 flex flex-col justify-between shadow-card hover:shadow-card-hover hover:border-accent/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                >
                  <div>
                    {/* Header: Project Index & Category */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-xs font-mono text-subtle font-medium">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {hasLive ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Live Demo
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-muted bg-cardHover px-2 py-0.5 rounded">
                          Open Source
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-background border border-border text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Actions */}
                    <div
                      className="pt-4 border-t border-border flex items-center justify-between gap-3 text-xs font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
                        >
                          <FaGithub size={14} />
                          <span>Code →</span>
                        </a>

                        {hasLive && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-accent hover:text-accent-hover transition-colors font-medium"
                          >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt size={10} />
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => handleOpenModal(project)}
                        className="inline-flex items-center gap-1 text-muted hover:text-foreground transition-colors"
                      >
                        <span>Details</span>
                        <HiArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
