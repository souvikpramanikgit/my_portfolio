const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {},
      animation: {
        meteor: 'meteor 5s linear infinite'
      },
      keyframes: {
        meteor: {
          '0%': {
            transform: 'rotate(215deg) translateX(0)',
            opacity: '1'
          },
          '70%': {
            opacity: '1'
          },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0'
          }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin()],
}

