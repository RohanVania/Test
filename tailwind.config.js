/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'testimonial-lg':{'max':'1210px'},
        'xs':'500px',
        '2xs':'400px',
        '3xs':'300px',
        'text-sm':'575px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        'form-md':'927px'
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
  prefix:'tw-'
}

