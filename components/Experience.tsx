"use client";
import React from "react";

const experiences = [
  {
    role: "Machine Learning & AI Trainee",
    company: "Allsoft Solutions (IBM Business Partner)",
    period: "2024",
    type: "Summer Training",
    description:
      "Completed an intensive, industry-oriented engineering program in Applied Machine Learning, Predictive Modeling, and Generative AI workflows. Acquired rigorous practical expertise in designing reproducible end-to-end data pipelines, model optimization, and evaluation frameworks.",
    achievements: [
      "Engineered an end-to-end Real Estate Price Prediction pipeline incorporating automated data preprocessing, missing-value imputation, outlier filtering, and strategic feature engineering.",
      "Trained, tuned, and benchmarked multiple supervised regression architectures (Linear, Ridge, Decision Trees, Ensemble Forests), utilizing k-fold cross-validation.",
      "Evaluated model generalization across RMSE, MAE, and R² performance metrics to diagnose bias-variance tradeoffs and prevent data leakage.",
      "Constructed modular, version-controlled Python workflows adhering to professional data science and reproducible machine learning standards.",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Feature Engineering",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
            04 / Trajectory
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
            Work &amp; Training Experience
          </h2>
          <p className="text-sm text-muted mt-1.5 max-w-xl">
            Practical industry training and technical experience in machine learning workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl border border-border p-7 sm:p-8 shadow-card"
            >
              {/* Top Row: Role, Duration, Type */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-accent mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                  <span className="px-2.5 py-0.5 rounded bg-background border border-border text-foreground">
                    {exp.type}
                  </span>
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-muted leading-relaxed mt-4 mb-6">
                {exp.description}
              </p>

              {/* Responsibilities & Achievements */}
              <div className="mb-6 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-subtle">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-5 border-t border-border flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-background border border-border text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
