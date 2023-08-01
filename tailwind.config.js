/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'clr-accent': 'rgb(238, 188, 74)',
        'clr-accent-dim': 'rgb(64, 57, 31)',
        
        'bg-main-dark': 'rgb(0, 3, 8)',
        'bg-nav-dark': 'rgb(6, 8, 15)',
        'bg-dim-dark': 'rgb(32, 35, 36)',
        'text-clr-dark': 'rgb(254, 255, 254)',
        'border-clr-dark': 'rgb(37, 37, 38)',
        'dim-text-dark': 'rgb(143, 144, 144)',
        
        'bg-main': 'rgb(255, 255, 255)',
        'text-clr': 'rgb(11, 13, 20)',
        'bg-nav': 'rgb(244, 244, 244)',
        'bg-dim': 'rgb(170, 173, 174)',
        'border-clr': 'rgb(179, 179, 180)',
        'dim-text': 'rgb(116, 117, 120)',
      },
    },
  },
  plugins: [],
}
