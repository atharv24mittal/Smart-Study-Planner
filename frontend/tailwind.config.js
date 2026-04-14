/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",   // Indigo
        secondary: "#9333EA", // Purple
        accent: "#22C55E",    // Green
        dark: "#0F172A",
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)",
      },
      boxShadow: {
        glow: "0 10px 30px rgba(79, 70, 229, 0.4)",
      },
    },
  },
  plugins: [],
};