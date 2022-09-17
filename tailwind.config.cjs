/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '4/5': '4fr 1fr',
        'custom-fit': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
    },
  },
  plugins: [],
}
