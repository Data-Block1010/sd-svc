import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/**/*.{ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#15A588",
        secondary: "#344054",
        border: "#E9EAEB",
        border2: "#717680",
        border3: "#535862",
        waitlistText: "#E3E2FF",
        waitlist: {
          blue: {
            100: "#d9d4ff",
            200: "#b2a6ff",
            300: "#8c77fe",
            400: "#693EFE",
            500: "#4703d1",
            600: "#27017d",
            700: "#120045",
          },
          black: {
            100: "#d8d8da",
            200: "#b1b0b5",
            300: "#8b8a92",
            400: "#67666f",
            500: "#45444c",
            600: "#26252a",
            700: "#111113",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
