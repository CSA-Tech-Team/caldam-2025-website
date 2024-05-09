/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: "#081424",
        darkblue: "#00C7B5",
        sponsersBgColor: "#C5D8D1",
        bluecolor: "#102133",
        bluevariants: {
          primary: "#102133",
          "100": "#102133",
          "200": "#192946",
          "300": "#22305A",
          "400": "#2A376D",
          "500": "#314180",
          "600": "#394994",
          "700": "#4150A7",
          "800": "#4958BB",
          "900": "#515FCE"
        },
        orange: "#FCA311",
      },
      screens: {
        lapsize: "677px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
