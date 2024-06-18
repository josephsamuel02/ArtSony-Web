import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "banner-one": "url('images/Property 1=Default.svg')",
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "chat-background": "url('/images/Frame 1954.svg')",
      },
      colors: {},
    },
  },
  plugins: [],
});
