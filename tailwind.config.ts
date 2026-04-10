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
        warm: "#FFFBF5",
        sand: "#F0EBE3",
        earth: "#2C2418",
        copper: "#C07A45",
        sky: "#4A7FA5",
        leaf: "#5B7C52",
        smoke: "#8C8578",
        cream: "#E8E0D4",
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        warm: "0 4px 24px rgba(44, 36, 24, 0.08)",
        "warm-lg": "0 12px 40px rgba(44, 36, 24, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
