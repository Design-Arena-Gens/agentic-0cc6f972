import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"]
      },
      colors: {
        brand: {
          DEFAULT: "#5c27ff",
          50: "#f5f4ff",
          100: "#e9e6ff",
          200: "#d4cdfc",
          300: "#b2a0ff",
          400: "#8b6bff",
          500: "#5c27ff",
          600: "#4a1de0",
          700: "#3815b4",
          800: "#291187",
          900: "#210f6b"
        }
      },
      boxShadow: {
        glow: "0 25px 60px -15px rgba(92, 39, 255, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
