"use client";
import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  officialLink: string;
  fileLink: string;
  category: string;
}

const certifications: Certification[] = [
  {
    title: "SQL (5-Star Rating)",
    issuer: "HackerRank",
    year: "2024",
    description: "Demonstrated advanced mastery of complex multi-table joins, nested subqueries, window functions, relational constraints, and query optimization.",
    officialLink: "https://www.hackerrank.com/certificates/db694c6dff94",
    fileLink: "https://drive.google.com/file/d/1tZKM7fV9m1n8aGjDLDiioP5tKDiuC0SM/view?usp=sharing",
    category: "Databases",
  },
  {
    title: "DSA Bootcamp",
    issuer: "GeeksforGeeks",
    year: "2025",
    description: "Comprehensive algorithmic training covering asymptotic complexity, dynamic programming, graph algorithms, and competitive problem solving.",
    officialLink: "https://www.geeksforgeeks.org/certificate/5a4ec12a24b70d46aa2703174b747101",
    fileLink: "https://drive.google.com/file/d/1CBa5kM2AeI_yBWG8iumO_lrV9fS6dyr3/view?usp=sharing",
    category: "Algorithms",
  },
  {
    title: "OCI AI Foundations",
    issuer: "Oracle",
    year: "2025",
    description: "Enterprise cloud AI architecture, foundation models, machine learning lifecycle deployment, and Oracle Cloud generative services.",
    officialLink: "https://education.oracle.com/",
    fileLink: "https://drive.google.com/file/d/1L4QlFKSdxnNw6Wib0_a4TRTzJBc1F5y0/view",
    category: "Cloud AI",
  },
  {
    title: "Prompt Engineering",
    issuer: "Infosys",
    year: "2025",
    description: "Systematic techniques for few-shot prompt construction, chain-of-thought conditioning, context grounding, and LLM reasoning alignment.",
    officialLink: "https://www.infosys.com/",
    fileLink: "https://drive.google.com/file/d/1PJnwEncYyJg-hMgMt1lvSu9jpkbzAdJR/view",
    category: "Generative AI",
  },
  {
    title: "The Bits and Bytes of Networking",
    issuer: "Coursera · Google",
    year: "2024",
    description: "Core computer networking architecture: TCP/IP & OSI stacks, IPv4/IPv6 subnetting, DNS resolution, routing protocols, and packet encapsulation.",
    officialLink: "https://www.coursera.org/account/accomplishments/verify/DUPPP5RBNVB3",
    fileLink: "https://drive.google.com/file/d/1aQSKjWBiLi7K8MY-xJOP6edEvHYPnVXr/view?usp=sharing",
    category: "Networking",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    description: "Modern web standards, semantic HTML5 markup, responsive CSS grid/flexbox architecture, and cross-browser accessibility compliance.",
    officialLink: "https://www.freecodecamp.org/certification/fccbd0182e6-23ec-41dd-910d-79a055ec6ad6/responsive-web-design",
    fileLink: "https://drive.google.com/file/d/11Rk1bph2UHETmmZ4ZVx2NHFYUFOGW623/view?usp=sharing",
    category: "Web",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "NASSCOM",
    year: "2025",
    description: "Theoretical underpinnings of transformer self-attention mechanisms, latent diffusion models, and enterprise generative AI integration patterns.",
    officialLink: "https://nasscom.in/",
    fileLink: "https://drive.google.com/file/d/1YUJEGEc_w8b_QnhrsNucGzP5zRbuX3sN/view?usp=sharing",
    category: "Generative AI",
  },
];

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getEmbedUrl = (url: string) => {
    if (url.includes("drive.google.com/file/d/")) {
      return url.replace(/\/view.*$/, "/preview");
    }
    return url;
  };

  return (
    <section id="certifications" className="py-20 md:py-24 border-b border-border">
      {/* Anchor alias for #achievements */}
      <span id="achievements" className="block -mt-20 pt-20" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              05 / Accreditations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
              Certifications &amp; Credentials
            </h2>
            <p className="text-sm text-muted mt-1.5 max-w-xl">
              Verified certifications in algorithms, databases, cloud architecture, and artificial intelligence.
            </p>
          </div>

          <div className="text-xs font-mono text-subtle">
            {certifications.length} Credentials
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl border border-border p-6 flex flex-col justify-between shadow-card hover:border-accent/40 hover:shadow-card-hover transition-all"
            >
              <div>
                {/* Header: Issuer + Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium text-accent">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-muted">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                <a
                  href={cert.officialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span>Verify</span>
                  <FaExternalLinkAlt size={10} />
                </a>

                {cert.fileLink && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs text-muted hover:text-foreground transition-colors"
                  >
                    View Document
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing certificate document */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl h-[80vh] bg-card rounded-xl border border-border shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-cardHover">
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  {selectedCert.title}
                </h4>
                <p className="text-xs text-muted">
                  {selectedCert.issuer} · {selectedCert.year}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.officialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-accent hover:underline flex items-center gap-1"
                >
                  Verify Online <FaExternalLinkAlt size={9} />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-md text-muted hover:text-foreground hover:bg-background"
                >
                  <HiX size={18} />
                </button>
              </div>
            </div>

            {/* Document Iframe */}
            <div className="flex-1 min-h-0 bg-background">
              <iframe
                src={getEmbedUrl(selectedCert.fileLink)}
                className="w-full h-full border-none block"
                title={selectedCert.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
