/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "show-modal": {
          from: { top: "45%", opacity: "0" },
          to: { top: "50%", opacity: "1" },
        },
      },
      animation: {
        "show-modal": "show-modal 0.5s ease-in-out",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      width: {
        128: "10%",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
