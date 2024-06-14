/** @type {import('tailwindcss').Config} */
export default {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
      mytheme: {
        "accent": "#291D89",
        "primary": "#FFFFFF",
        "secondary": "#EBEBEB",
        "neutral": "#F5F5F5",
        "base-100": "#FFFFFF",
        "info": "#009CD8",
        "success": "#06B15F",
        "error": "#E75353",
        "warning": "#F06531",
        "notification": "#F06531",
        "extra": "#6562A9",
        "disabled": "#919698"
      },
    },"light", "dark", "corporate","cymk"],
  },
  plugins: [require('daisyui')],
}

