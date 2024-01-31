/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#fff",
        darkgray: "#9f9f9f",
        gray: {
          100: "rgba(0, 0, 0, 0.5)",
          200: "rgba(255, 255, 255, 0.5)",
        },
        gainsboro: "#e6e6e6",
        "primary-1": "#34416b",
        darkslateblue: {
          100: "#1d274b",
          200: "rgba(52, 65, 107, 0.2)",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
