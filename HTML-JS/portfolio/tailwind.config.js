/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "preview-cv-noel":
          "url('https://res.cloudinary.com/dpyhpvmoz/image/upload/v1744087945/portfolio-dqt/preview-cv-page/preview-cv-noel-bg.jpg')",
      },
    },
  },
  plugins: [],
};
