module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  safelist: [
    "text-2xl",
    "text-3xl",
    {
      pattern: /bg-(yellow|blue)-(100)/,
    },
    {
      pattern: /text-(yellow|blue)-(800)/,
    },
    {
      pattern: /border-(yellow|blue)-(600)/,
    },
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
