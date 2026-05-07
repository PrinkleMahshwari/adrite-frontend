/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22C7C7',
        secondary: '#0F172A',
        accent: '#C7F44E',
        light: '#F8FAFC',
        dark: '#111827',
        grayText: '#64748B',
        borderColor: '#E2E8F0'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        custom: '0 10px 25px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        custom: '20px'
      },
      spacing: {
        section: '120px'
      }
    },
  },
  plugins: [],
}