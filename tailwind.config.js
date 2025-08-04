/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyblue: '#8ecae6',
        bluegreen: '#219ebc',
        prussianblue: '#023047',
        yellow: '#ffb703',
        orange: '#fb8500',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

