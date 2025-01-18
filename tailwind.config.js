/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          white: 'hsl(0, 0%, 100%)', // Neutral 0
          light: 'hsl(252, 6%, 83%)', // Neutral 300
          medium: 'hsl(245, 15%, 58%)', // Neutral 500
          dark: 'hsl(245, 19%, 35%)', // Neutral 700
          darkest: 'hsl(248, 70%, 10%)', // Neutral 900
        },
        orange: {
          primary: 'hsl(7, 88%, 67%)', // Orange 500
          dark: 'hsl(7, 71%, 60%)', // Orange 700
        },
        gradient: {
          textStart: 'hsl(7, 86%, 67%)',
          textEnd: 'hsl(0, 0%, 100%)',
        },
      },
      backgroundImage: {
        'ticket-pattern': "url(../assets/images/pattern-ticket.svg)"
      }
    },
  },
  plugins: [],
};
