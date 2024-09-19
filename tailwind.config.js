/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#E5FBFB",
          2: "#F6FDFF",
          3: "#EBEDF0",
          4: "#CBE2F2",
          5: "#BBD6EC",
        },
      },
    },
  },
  plugins: [],
};
