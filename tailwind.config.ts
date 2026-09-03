import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        card: "var(--card)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        border: "var(--border)",
        cardHover: "var(--card-hover)",
        inputBg: "var(--input-bg)",
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          subtle: "rgba(37, 99, 235, 0.08)",
          border: "rgba(37, 99, 235, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)",
        card: "0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(0,0,0,0.03)",
        "card-hover": "0 8px 24px -4px rgba(0,0,0,0.08), 0 4px 12px -2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
