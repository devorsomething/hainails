import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        softpink: "#FDF2F8",
        rosegold: "#E8B4B8",
        blusher: "#FFB6C1",
        charcoal: "#2D2D2D",
        marble: "#FAFAFA",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-nails": "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=80')",
      },
    },
  },
  plugins: [],
};

export default config;
