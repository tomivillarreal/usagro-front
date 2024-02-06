import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#415041",
              foreground: "#000000",
            },
            default: {
              DEFAULT: "#000000",
            },
            secondary: {
              DEFAULT: "#6c6422",
            },
            success: {
              DEFAULT: "#fcdc5c",
            },
            warning: {
              DEFAULT: "#000000",
            },
            danger: {
              DEFAULT: "#000000",
            }

          },
        },
      },
    }),
  ],
};
export default config;
