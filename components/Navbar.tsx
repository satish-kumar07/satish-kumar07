"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-background border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground hover:text-accent transition-colors flex items-center gap-2"
        >
          <span className="font-semibold text-lg">Satish Kumar</span>
          <span className="text-xs font-mono text-muted hidden sm:inline-block px-2 py-0.5 rounded bg-cardHover text-muted">
            AI/ML Engineer
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-foreground transition-colors py-1 relative hover:underline decoration-accent/60 underline-offset-4"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-border bg-card text-muted hover:text-foreground hover:bg-cardHover transition-all"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <HiSun size={17} className="text-amber-400" />
              ) : (
                <HiMoon size={17} className="text-[#555555]" />
              )}
            </button>
          )}

          <Link
            href="/resume"
            className="text-xs font-medium text-foreground px-3.5 py-1.5 rounded-md border border-border bg-card hover:bg-cardHover transition-all shadow-2xs"
          >
            Resume
          </Link>
          <a
            href="#contact"
            className="text-xs font-medium text-white px-3.5 py-1.5 rounded-md bg-accent hover:bg-accent-hover transition-colors shadow-2xs"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Actions & Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-border bg-card text-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <HiSun size={16} className="text-amber-400" />
              ) : (
                <HiMoon size={16} className="text-[#555555]" />
              )}
            </button>
          )}
          <Link
            href="/resume"
            className="text-xs font-medium text-foreground px-2.5 py-1 rounded border border-border bg-card"
          >
            Resume
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-accent focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 space-y-3 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-muted hover:text-foreground py-1.5"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-border">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-xs font-medium text-white py-2.5 rounded-md bg-accent"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
