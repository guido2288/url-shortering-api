/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '640px',
    },
    colors: {
      "Cyan": "hsl(180, 66%, 49%)",
      "CyanLigth": "hsl(180, 66%, 65%)",
      "DarkViolet": "hsl(257, 27%, 26%)",
      "Red": "hsl(0, 87%, 67%)",
      "Gray": "hsl(0, 0%, 75%)",
      "GrayishViolet": "hsl(257, 7%, 63%)",
      "VeryDarkBlue": "hsl(255, 11%, 22%)",
      "VeryDarkViolet": "hsl(260, 8%, 14%)",
      "White": "#FFF",
      "Violet": "#703D92",
      'GrayLight': '#F7EBF7 ',
      "Red": "#EE2525"
    },
    backgroundImage: {
      'formMobile': 'url(/src/images/bg-shorten-mobile.svg)',
      'formDesktop': 'url(/src/images/bg-shorten-desktop.svg)',
      'bostMobile': 'url(/src/images/bg-boost-mobile.svg)',
      'bostDesktop': 'url(/src/images/bg-boost-desktop.svg)',
    },
    fontFamily: {
      poppins: ['Poppins']
    }
  },
  plugins: [],
}
