"use client";
import React from "react";
import { HiOutlineAcademicCap, HiOutlineSparkles, HiOutlineBriefcase } from "react-icons/hi";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI/ML)",
    institution: "Lovely Professional University",
    period: "2023 – Present",
    score: "CGPA: 7.79",
    status: "In Progress",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Sri Chaitanya Junior College",
    period: "2018 – 2020",
    score: "96%",
    status: "Completed",
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Sai Krishnaveni High School",
    period: "2016 – 2018",
    score: "100%",
    status: "Completed",
  },
];

const focusAreas = [
  "Retrieval-Augmented Generation (RAG) & Vector Search",
  "Real-Time Computer Vision & Edge Inference (YOLOv8, OpenCV)",
  "ML Pipelines & Model Serving Architecture (FastAPI, Python)",
  "Applied Machine Learning, Feature Engineering & Evaluation",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
            01 / Profile
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
            Background &amp; Engineering Philosophy
          </h2>
          <p className="text-sm text-muted mt-1.5 max-w-xl">
            A comprehensive look at my background, technical foundation, and core engineering principles.
          </p>
        </div>

        {/* Two Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story & Perspectives (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-muted text-base leading-relaxed">
            <div className="bg-card p-7 sm:p-8 rounded-xl border border-border shadow-card space-y-5">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <HiOutlineSparkles className="text-accent" size={20} />
                <span>Who I Am</span>
              </h3>
              <p>
                I am <strong className="text-foreground">Prajapati Satish Kumar</strong>, an AI/ML Engineer and Computer Science student at Lovely Professional University. I build intelligent systems that bridge algorithmic machine learning with scalable, production software.
              </p>
              <p>
                My work centers on <span className="text-foreground font-medium">Retrieval-Augmented Generation (RAG)</span>, <span className="text-foreground font-medium">Computer Vision (YOLOv8, OpenCV)</span>, and <span className="text-foreground font-medium">Production Machine Learning Pipelines</span>—taking models from experimental notebooks to dependable, high-impact deployments.
              </p>
            </div>

            {/* Current Focus Card */}
            <div className="bg-card p-7 sm:p-8 rounded-xl border border-border shadow-card">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                <HiOutlineBriefcase className="text-accent" size={20} />
                <span>Primary Technical Focus</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted">
                {focusAreas.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Education Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card p-7 sm:p-8 rounded-xl border border-border shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <HiOutlineAcademicCap className="text-accent" size={20} />
                  <span>Education</span>
                </h3>
                <span className="text-xs font-mono text-subtle">Verified</span>
              </div>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-border">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Timeline Node */}
                    <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-card bg-accent shadow-xs" />

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono text-subtle">{edu.period}</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cardHover text-foreground font-medium">
                          {edu.score}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-foreground leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-muted mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
