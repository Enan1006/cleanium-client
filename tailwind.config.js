// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#5603ad",
          secondary: "#8367c7",
          accent: "#b3e9c7",
          neutral: "#c2f8cb",
          "base-100": "#ffffff",
          "base-200": "#c7ffdf",
          info: "#1B98F5",
          success: "#1FAA59",
          warning: "#DDD101",
          error: "#E21717",
        },
      },
      "dark",
    ],
  },
  // theme: {
  //   extend: {},
  // },
  plugins: [
    require('daisyui'),
  ],
}