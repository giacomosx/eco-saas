const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
      flowbite.content()
  ],
  plugins: [
      flowbite.plugin()
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#EE5411',
        'primary-hover' : '#DB4400',
        'primary-active' : '#C13900',
        'primary-disabled' : '#F7AA8F',
      }
    }
  }
};