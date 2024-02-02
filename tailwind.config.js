/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        particles: "url('./assets/background.png')",
      }),

      animation: {
        "right-to-left": "rightToLeft 0.3s ease-in-out",
        "scale-up": "scaleUp 0.3s ease-in-out",
        "scale-up-infinite": "scaleUp 1s ease infinite",
        shake: "shake 0.3s cubic-bezier(.36, .07, .19, .97) both",
        "fade-in": "fade-in 0.3s ease-in-out",
      },

      keyframes: () => ({
        rightToLeft: {
          "0%": {
            transform: "translateX(100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(1)",
          },
          "20%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        shake: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(5deg) scale(1.2)" },
          "50%": { transform: "rotate(0eg) scale(1.2)" },
          "75%": { transform: "rotate(-5deg) scale(1)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      }),
    },
  },
  plugins: [],
};
