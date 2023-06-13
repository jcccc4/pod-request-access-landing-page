/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./assets/tablet/image-host.jpg')",
        tablet: "url('./assets/tablet/image-host.jpg')",
        desktop: "url('./assets/tablet/image-host.jpg')",
      },
      colors: {
        main: "#121725",
        text: "#C2CBE5",
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
      },
      fontSize: {
        quote: ["26px", "38px"],
        des: ["15px", "25px"],
        btn: ["14px", "28px"],
        "quote-lg": ["48px", "56px"],
        "des-lg": ["18px", "28px"],
        "btn-lg": ["14px", "28px"],
        "quote-lg": ["52px", "62px"],
        val: ["12px", "14px"],
      },
    },
  },
  plugins: [],
};
