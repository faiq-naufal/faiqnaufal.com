module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
      maxlg: { max: "959px" },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        shadowNavBar: "0 -2px 4px 0 rgba(108, 114, 124, 0.16)",
      },
      colors: {
        primaryGreen: "#0e8162",
      },
      fontSize: {
        xxs: ".625rem",
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.25rem",
        "8xl": "4rem",
        "9xl": "5rem",
        "10xl": "5.5rem",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
      },
      zIndex: {
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
