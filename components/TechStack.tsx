"use client";
import React, { useState } from "react";

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Core paradigms, predictive modeling, and intelligent architectures",
    skills: [
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Generative AI",
      "RAG (Retrieval-Augmented Generation)",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "OpenCV",
      "TensorFlow",
      "Model Evaluation",
    ],
  },
  {
    id: "languages",
    name: "Programming Languages",
    description: "Languages for algorithmic problem solving and systems",
    skills: [
      "Python",
      "C++",
      "C",
      "TypeScript",
      "JavaScript",
      "SQL",
    ],
  },
  {
    id: "libraries-frameworks",
    name: "Frameworks & Libraries",
    description: "Data science tooling and modern web frameworks",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "React",
      "Next.js",
      "Django",
      "FastAPI",
      "Tailwind CSS",
    ],
  },
  {
    id: "tools",
    name: "Developer Tools & Platforms",
    description: "Version control, databases, cloud, and notebooks",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "Firebase",
      "Docker",
      "Vercel",
      "MySQL",
      "SQLite",
    ],
  },
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const displayedCategories =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-border">
      {/* Anchor alias for #tech */}
      <span id="tech" className="block -mt-20 pt-20" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              02 / Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm text-muted mt-1.5 max-w-xl">
              Organized technical proficiencies across machine learning, language runtimes, and engineering toolsets.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-card p-1 rounded-lg border border-border shadow-2xs self-start">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground hover:bg-cardHover"
              }`}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  activeFilter === cat.id
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground hover:bg-cardHover"
                }`}
              >
                {cat.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="bg-card rounded-xl border border-border p-6 sm:p-7 shadow-card hover:border-accent/40 transition-all"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold text-foreground">
                  {category.name}
                </h3>
                <span className="text-xs font-mono text-subtle">
                  {category.skills.length} items
                </span>
              </div>

              <p className="text-xs text-muted mb-5">
                {category.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-mono text-foreground bg-background border border-border hover:border-accent hover:text-accent transition-all cursor-default"
                  >
                    {skill}
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
