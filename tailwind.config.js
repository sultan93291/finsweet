/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        black: "rgba(28, 29, 40, 1)",
        text_color: "rgba(255, 255, 255, 1)",
        overlay:"rgba(0,0,0,0.4)",
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
