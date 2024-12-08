import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED'
      },
    },
  },
  plugins: [],
} satisfies Config;
