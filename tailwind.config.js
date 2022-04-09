module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },

      fontSize: {
        "primary-size": "15px",
      },

      colors: {
        dark: "hsl(240, 38%, 20%)",
        light: "hsl(240, 18%, 77%)",
      },

      spacing: {
        "90w": "90vw",
        "95w": "95vw",
      },

      backgroundImage: {
        quote: "url('../images/pattern-quotes.svg')",
        curve: "url('../images/pattern-curve.svg')",
      },

      backgroundSize: {
        half: "100% 50%",
      },
    },
  },
  plugins: [],
};
