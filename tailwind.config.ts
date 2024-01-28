import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'text': ['Plus Jakarta Sans', 'sans-serif'],
      'detail': ['"Lora"', 'serif']
    },
    extend: {
      colors: {
        primary: '#0062F5',
        text: '#222B38',
        'white-100': "#F1F5FB",
        'white-200': '#CED7E5',
        'white-400': '#778191',
      },
      boxShadow: {
        medium: '0px 2px 6px -2px rgba(29, 41, 52, 0.24)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
