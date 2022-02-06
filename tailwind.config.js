const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
      },
      spacing: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
}
