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
        orange: "#FCA311",
      },
      screens: {
        lapsize: "677px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
