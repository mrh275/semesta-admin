module.exports = {
  mode: 'jit',
  purge: {
    // enabled: false,
    content: ["./*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif']
      },
      colors: {
        primary: {
          light: "#00bbff",
          DEFAULT: "#0099ff",
          dark: "#0077ff"
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
