/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      biko: ["Biko"],
      coco: ["COCOGOOSE DemiBold"],
    },
    extend: {
      backgroundImage: {
        surreal: "url('../images/bg-surreal.svg')",
      },
    },
  },
  plugins: [],
};
