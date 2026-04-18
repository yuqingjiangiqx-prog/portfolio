/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17201f",
        moss: "#49665d",
        mint: "#dff4ea",
        coral: "#ff6b57",
        sun: "#ffd166",
        paper: "#f7faf6",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 31, 0.08)",
        line: "0 1px 0 rgba(23, 32, 31, 0.08)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
