/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f8f8f9",
          200: "#191919",
          300: "#374a92",
          400: "#338bc6",
          500: "#5cbe59",
          600: "#d6c278",
          700: "#00000040",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "system-ui"],
        notojp: ["Noto Sans JP", "system-ui"],
        fira: ["Fira Sans", " system-ui"],
        bebas: ["Bebas Neue", "system-ui"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        logo: `url('./src/Components/Header/olympics.svg')`,
      },
      minWidth: {
        smm: `@media(min-width:360px)`,
      },
      screens: {
        smart460: "460px",
        smart390: "390px",
        smartPhone: "360px",
        mP: "330px",
        sC: "820px",
        comp: "1100px",
        tablet: "912px",
        530: "510px",
        560: "560px",
        600: "600px",
        660: "660px",
        700: "700px",
        750: "750px",
        800: "800px",
        850: "850px",
        900: "900px",
        400: "400px",
      },
      width: {
        card: "35rem",
        ten: "10%",
      },
    },
  },
  plugins: [],
};
