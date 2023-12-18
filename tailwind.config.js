/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ui-pink": "#FA9097",
        "ui-light-violet": "#DFB2F4",
        "ui-yellow": "#F5E960",
        "ui-gray": "#F2F5FF",
        "ui-turquoise": "#F2F5FF",
        "ui-light-violet": "#963484",
        "ui-prussian-blue": "#3066BE",
        "ui-dark-blue": "#60AFFF",
        "ui-light-blue": "#28C2FF",
        "ui-light-turquoise": "#28C2FF",
      },
    },
  },
  plugins: [],
};
