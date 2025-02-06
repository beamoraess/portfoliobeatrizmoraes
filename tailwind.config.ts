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
        mono: ["Fira Code", "monospace"]
      },
      colors: {
        bgGradientStart: "#0B052A", // Azul Profundo (um pouco mais claro)
        bgGradientMidStart: "#8D6C7A", // Bege Rosado Suave para transição
        bgGradientMiddle: "#B99A9A", // Bege Rosado (menos saturado)
        bgGradientMidEnd: "#8A6474", // Transição antes do vinho suave
        bgGradientEnd: "#6D4B5E", // Vinho Suave (tom mais fechado, mas menos forte)
        textPrimary: "#F0EAD6", // Bege Claro para melhor leitura
        textSecondary: "#E4A6D3", // Lilás mais vivo para títulos
        accent: "#E4A6D3",
        borderColor: "#C27BA0",
        bgSecondary: "#3D2F40", // Roxo fechado para detalhes sutis
      },
    },
  },
  plugins: [],
} satisfies Config;
