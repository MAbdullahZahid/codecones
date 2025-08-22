  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",   // App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router (if any)
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        borderRadius: {
          '500': '500px',
        },
         screens: {
        tablet: { min: "800px", max: "1150px" }, // custom breakpoint
        mobile: { max: "800px" },
      },
      },
    },
    plugins: [],
  };
