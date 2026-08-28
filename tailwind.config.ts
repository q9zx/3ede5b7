import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        metri: {
          ink: "#16201C",
          green: "#0F5B45",
          mint: "#DDF2E8",
          gold: "#C59B45",
          mist: "#F5F7F4",
          line: "#DDE5DD"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(22, 32, 28, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
