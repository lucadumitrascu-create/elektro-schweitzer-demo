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
        volt: "#FF3B30",
        signal: "#FFB800",
        wire: "#0A0A0A",
        panel: "#F7F6F3",
        steel: "#2A2D2E",
        zincc: "#71757A",
        current: "#1E6FD9",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
