/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
        transitionDuration: {
          DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};
