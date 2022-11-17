/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./sandbox/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#f5f4f9',
      primary: '#f58234',
      primaryHover: '#c4601e',
      secondary: '#576b81',
      secondaryHover: '#314963',
      secondaryLight: '#c9d2db'      
    }
  },
  plugins: [],
}
