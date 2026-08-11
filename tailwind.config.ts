import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#fafafa",
      },
      boxShadow: {
        card: "0 18px 50px -30px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
