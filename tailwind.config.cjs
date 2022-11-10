const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        vectors: "url('/assets/vectors.svg')",
      },
      fontFamily: {
        audio: ["Audiowide", "cursive"],
        roboto: ["Roboto Mono", "monospace"],

      },
      listStyleType: {
        decimal: "decimal-leading-zero",
      },
      colors: {
        "gray-5": "#808080",
        "black-5": "#1A1A1A",
        "blue-5": " #0303FF",
        "cyan-5": " #04E3D4",
        "white-5": "#f3f3f3",
        "transparent": 'transparent',
      },
      spacing: {
        138: "36rem",
      },
      fontSize: {
        '3xl': ['33px'],
        '4xl': ['67px', '67px'],
      },
      width: {
        '228': '46rem',
      },
      boxShadow: {
        'btn': '5px 5px 0px #f3f3f3',
        'hoverbtn': '5px 5px 0px #0303ff',

      },
      backgroundImage: {
        'hero-pattern': "url('/assets/hero.svg')",
      },
      letterSpacing: {
        widest: '.2em',
        mostwide: '.5em',
      }
    },
  },
  plugins: [],
};
