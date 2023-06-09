/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('IMG/slots.jpg')",
      },
      borderRadius: {
        'border-radius': '',  
      }
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'color-main': '#17a59e',
      'white': '#ffffff',
      'gray-custom': '#585858',
      'green-custom': '#BCF5A9',
      'black':'#000000',
      'red':'#F90000',
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
}

