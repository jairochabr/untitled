import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
      },
      colors: {
        primary: "#7C3AED",
      },
    },
  },
  plugins: [],
} satisfies Config;
