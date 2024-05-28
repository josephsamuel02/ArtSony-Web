import withMT from "@material-tailwind/react/utils/withMT";
// /** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        Nunito: ["Nunito", " sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {},
      // colors: {
      //   Red: "#FF0218",
      // },
    },
  },
  plugins: [],
});
