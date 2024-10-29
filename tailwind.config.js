module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        blue: "hsl(246, 80%, 60%)",
        "light-red-work": "hsl(15, 100%, 70%)",
        "soft-blue-play": "hsl(195, 74%, 62%)",
        "light-red-study": "hsl(348, 100%, 68%)",
        "lime-green-exercise": "hsl(145, 58%, 55%)",
        "violet-social": "hsl(264, 64%, 52%)",
        "soft-orange-selfcare": "hsl(43, 84%, 65%)",
        "light-red": "#ff6b6b",
        "light-blue": "#4b98ff",
        "light-green": "#34c759",
        "light-yellow": "#ffcc00",
        "light-purple": "#af52de",
        "light-orange": "#ff9500",

        // Neutral colors
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        base: "18px", // Default font size for body text
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
      },
    },
  },
  plugins: [],
};
