import { withUt } from 'uploadthing/tw';

module.exports = withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'text': '#f5f5f5',
        'background': '#1f1f1f',
        'primary': '#5ed768',
        'secondary': '#5a5a68',
        'accent': '#0abaff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});
