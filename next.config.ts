import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide"; 

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    scrollbarHide, 
  ],
};

export default config;