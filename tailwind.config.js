/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000B8",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#e4e4f5",
        dimPink: "#eae1e6",
        opaqueWhite: "rgba(255, 255, 255, 0.5)"
      },
      fontFamily: {
        tnr: ["Times New Roman"],
        cambria: ["Cambria"],
      },
    }
  },
  plugins: [],
}

