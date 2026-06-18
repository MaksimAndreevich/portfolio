import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#0A0D12",
          850: "#10141B",
          800: "#151A22",
          700: "#202733"
        },
        steel: {
          50: "#F4F7FA",
          100: "#DCE6EF",
          300: "#92A4B6",
          500: "#607287",
          700: "#324050"
        },
        accent: {
          400: "#7DD3FC",
          500: "#38BDF8",
          600: "#0EA5E9"
        },
        mint: {
          400: "#A7F3D0",
          500: "#34D399"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.36)"
      }
    }
  },
  plugins: []
};

export default config;
