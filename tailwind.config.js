module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      colors: {
        "logo-main": "#9b0404",
      },
      fontFamily: {
        main: ["Название шрифта которое будешь использывать в проэкте"],
      },
    },
  },
  plugins: [],
};
