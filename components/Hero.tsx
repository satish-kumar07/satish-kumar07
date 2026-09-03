"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "Satish_Kumar_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for AI/ML Engineering &amp; Research Roles</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-3 leading-[1.1]">
              <span className="inline-block transition-all duration-300 ease-out hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 cursor-default mr-3 sm:mr-4">
                PRAJAPATI
              </span>
              <span className="inline-block transition-all duration-300 ease-out hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-0.5 cursor-default mr-3 sm:mr-4">
                SATISH
              </span>
              <span className="inline-block transition-all duration-300 ease-out hover:text-sky-600 dark:hover:text-sky-400 hover:-translate-y-0.5 cursor-default">
                KUMAR
              </span>
            </h1>

            {/* Professional Role */}
            <h2 className="text-lg sm:text-xl font-medium text-accent mb-6">
              AI/ML Engineer
            </h2>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mb-8 font-normal">
              Specializing in <span className="text-foreground font-medium">Machine Learning</span>,{" "}
              <span className="text-foreground font-medium">Generative AI (LLMs &amp; RAG)</span>, and{" "}
              <span className="text-foreground font-medium">Computer Vision</span>. I engineer robust, production-ready intelligent systems that transform complex algorithmic research into dependable, high-performance models.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity shadow-2xs"
              >
                <span>View Projects</span>
                <HiArrowDown size={15} />
              </a>

              <a
                href="https://github.com/satish-kumar07"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-card border border-border text-foreground text-sm font-medium hover:bg-cardHover transition-colors shadow-2xs"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>

              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-card border border-border text-muted text-sm font-medium hover:text-foreground hover:bg-cardHover transition-colors shadow-2xs"
              >
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-5 text-subtle">
              <span className="text-xs font-mono uppercase tracking-wider text-muted">Connect:</span>
              <a
                href="https://github.com/satish-kumar07"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/satish-kumar-prajapati/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://medium.com/@prajapatisatishkumar792"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="Medium Articles"
              >
                <FaMedium size={18} />
              </a>
              <a
                href="mailto:prajapatisatishkumar792@gmail.com"
                className="hover:text-accent transition-colors"
                aria-label="Send Email"
              >
                <FaEnvelope size={17} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="relative p-2 rounded-2xl bg-card border border-border shadow-card">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-xl overflow-hidden bg-cardHover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-photo.jpg"
                  alt="Satish Kumar"
                  className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] font-mono text-muted">
                <span>Satish Kumar</span>
                <span>AI/ML Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
