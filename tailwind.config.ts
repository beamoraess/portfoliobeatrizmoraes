import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        bgGradientStart: "#0B052A", 
        bgGradientMidStart: "#6F4D5E", 
        bgGradientMiddle: "#5B3D4C", 
        bgGradientMidEnd: "#4A2E3E", 
        bgGradientEnd: "#2F1B2C", 
        textPrimary: "#F0EAD6",
        textSecondary: "#E4A6D3", 
        accent: "#E4A6D3",
        borderColor: "#C27BA0",
        bgSecondary: "#3D2F40",
      },
    },
  },
  plugins: [],
} satisfies Config;
