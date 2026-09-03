"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium, FaCheck, FaExclamationCircle } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactLinks = [
    {
      label: "Email",
      value: "prajapatisatishkumar792@gmail.com",
      href: "mailto:prajapatisatishkumar792@gmail.com",
      icon: <FaEnvelope size={16} />,
    },
    {
      label: "LinkedIn",
      value: "satish-kumar-prajapati",
      href: "https://www.linkedin.com/in/satish-kumar-prajapati/",
      icon: <FaLinkedin size={16} />,
    },
    {
      label: "GitHub",
      value: "satish-kumar07",
      href: "https://github.com/satish-kumar07",
      icon: <FaGithub size={16} />,
    },
    {
      label: "Medium",
      value: "@prajapatisatishkumar792",
      href: "https://medium.com/@prajapatisatishkumar792",
      icon: <FaMedium size={16} />,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
            07 / Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-1 mb-3">
            Let&apos;s Build Something Exceptional.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            I am actively seeking <span className="text-foreground font-medium">AI/ML Engineering roles</span>,{" "}
            <span className="text-foreground font-medium">applied research fellowships</span>,{" "}
            and <span className="text-foreground font-medium">machine learning engineering opportunities</span>. Whether you have an ambitious architectural problem, a technical opening, or a collaborative initiative, let&apos;s connect.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-subtle mb-4">
              Direct Channels
            </h3>

            {contactLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:bg-cardHover transition-all group shadow-card"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-muted group-hover:text-accent transition-colors">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs text-subtle font-medium">
                      {item.label}
                    </span>
                    <span className="block text-sm font-semibold text-foreground truncate">
                      {item.value}
                    </span>
                  </div>
                </div>

                <HiArrowRight size={15} className="text-subtle group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            ))}

            <div className="p-5 rounded-xl bg-card border border-border text-xs text-muted shadow-card mt-6">
              <span className="font-semibold text-foreground block mb-1">
                Typical response latency:
              </span>
              Under 24 hours on business days. Direct inquiries regarding engineering roles, model architectures, and technical collaborations are always welcome.
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-card rounded-xl border border-border p-7 sm:p-9 shadow-card">
            <h3 className="text-lg font-bold text-foreground mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-muted mb-6">
              Fill out the details below and I&apos;ll get back to you promptly.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-inputBg text-sm text-foreground placeholder-subtle focus:outline-none focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-inputBg text-sm text-foreground placeholder-subtle focus:outline-none focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your project, question, or opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-inputBg text-sm text-foreground placeholder-subtle focus:outline-none focus:border-accent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 rounded-lg text-sm font-medium transition-all shadow-2xs ${
                  status === "success"
                    ? "bg-emerald-600 text-white"
                    : status === "error"
                    ? "bg-rose-600 text-white"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending message..."}
                {status === "success" && (
                  <span className="inline-flex items-center gap-2">
                    <FaCheck size={13} />
                    Message Sent Successfully
                  </span>
                )}
                {status === "error" && (
                  <span className="inline-flex items-center gap-2">
                    <FaExclamationCircle size={13} />
                    Failed to send — please email directly
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-subtle">
          <p>© {new Date().getFullYear()} Satish Kumar. All rights reserved.</p>
          <p className="font-mono text-subtle">
            Designed with simplicity · Built with Next.js &amp; Tailwind CSS
          </p>
        </footer>
      </div>
    </section>
  );
}
