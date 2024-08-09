/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "10px 5px 5px rgb(62, 32, 91)",
      },
    },
  },
  plugins: [],
};
