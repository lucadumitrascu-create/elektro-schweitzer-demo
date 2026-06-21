import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Electric Modern — light, one committed accent
        paper: "#FAFAF7", // warm off-white page background
        surface: "#FFFFFF", // cards / elevated
        ink: "#0E1116", // near-black, warm-tinted text
        graphite: "#363B45", // strong secondary text
        muted: "#6B7280", // muted text
        hairline: "#E8E7E1", // borders / dividers
        electric: "#1B43F0", // the accent — cobalt electric blue
        "electric-ink": "#1230B4", // accent hover / pressed
        "electric-tint": "#EAEEFF", // light accent surface
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,17,22,0.04), 0 12px 32px -16px rgba(14,17,22,0.12)",
        "card-hover": "0 2px 4px rgba(14,17,22,0.05), 0 24px 48px -20px rgba(27,67,240,0.20)",
        electric: "0 12px 28px -10px rgba(27,67,240,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
