import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */

// Export Tailwind CSS configuration with Material Tailwind
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        Nunito: ["Nunito", "sans-serif", "Raleway"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "banner-one": "url('images/Property 1=Default-1.svg')",
        "banner-two": "url('images/Property 1=Default.svg')",
        "shop-add-one": "url('images/shop add poster.svg')",
        "revenue-bg": "url('images/revenue bg.svg')",
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "chat-background": "url('/images/Frame 1954.svg')",
        "footer-background": "url('/images/footer bg1.svg')",
      },
      colors: {},
    },
    colors: {
      customOrange: "#F25B38",
      lightOrange: "rgba(255, 136, 118, 0.10)",
      whitesmoke: "#F5F5F5",
    },
  },
  plugins: [],
});
