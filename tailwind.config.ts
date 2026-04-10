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
        panel: "#0B0F1A",
        trace: "#141925",
        bone: "#F2EFE8",
        copper: "#C87A3C",
        signal: "#FFC847",
        mute: "#6B7080",
        grid: "#1E2434",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        "pulse-led": "pulseLed 1.8s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        pulseLed: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 8px currentColor" },
          "50%": { opacity: "0.4", boxShadow: "0 0 2px currentColor" },
        },
        scanLine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
