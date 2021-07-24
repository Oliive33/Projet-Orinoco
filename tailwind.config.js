module.exports = {
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        oniPink: "#debef7",
      },
      scale: {
        102: "1.02",
      },
      minWidth: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["even", "odd"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
