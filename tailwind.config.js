/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },

    extend: {
      colors: {
        'grayish-blue': 'hsl(208, 11%, 55%)',
        'dark-cyan': 'hsl(192, 100%, 9%)',
        'pale-cyan': 'hsl(193, 100%, 96%)',
        pink: 'hsl(322, 100%, 66%)',
      },

      boxShadow: {
        normal: '0 3px 9px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
