import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      }
    },
  },
  plugins: [],
} satisfies Config;
