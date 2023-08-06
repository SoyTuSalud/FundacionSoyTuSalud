/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        3: '3px'
      },
      colors: {
        primary: '#616AC5',
        'pink-bright': '#E26D83',
        'white-ghost': '#EFF2FB'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        /* Scrollbar for Chrome, Safari and Opera */
        '.scrollbar-none::-webkit-scrollbar': {
          display: 'none'
        },
        '.scrollbar-x::-webkit-scrollbar': {
          display: 'block',
          height: '3px'
        },
        '.scrollbar-y::-webkit-scrollbar': {
          display: 'block',
          width: '3px'
        },

        /* Scrollbar for Edge and Firefox */
        '.scrollbar-none': {
          'scrollbar-width': 'none'
        },
        '.scrollbar': {
          'scrollbar-width': 'auto'
        }
      })
    })
  ]
}
