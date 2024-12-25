/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "preview-cv-noel":
          "url('https://portfolio-dqt.s3.ap-southeast-1.amazonaws.com/preview-cv-page/preview-cv-noel-bg.jpg')",
      },
    },
  },
  plugins: [],
};
