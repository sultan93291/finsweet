/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        black: "rgba(28, 29, 40, 1)",
        text_color: "rgba(255, 255, 255, 1)",
        overlay: "rgba(0,0,0,0.4)",
        btn_color: "#FFD2A4",
        unique_txt: "#DC9853",
      },
      maxWidth: {
        container: "1280px",
      },
      fontFamily: {
        robot: "Roboto Condensed', sans-serif",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        med:"1500px",
        xxl: "1920px",
      },
    },
  },
  plugins: [],
};
