/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        black: "rgba(28, 29, 40, 1)",
        text_color: "rgba(255, 255, 255, 1)",
        overlay:
          "linear-gradient(110deg, #CD5423 -53.83%, #CD5423 -53.82%, #FFD0A0 62.61%)",
        btn_color: "#FFD2A4",
        unique_txt: "#DC9853",
      },
      maxWidth: {
        container: "1280px",
      },
      fontFamily: {
        robot: "Roboto Condensed', sans-serif",
      },
    },
  },
  plugins: [],
};
