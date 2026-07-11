import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A0E1A",
        "navy-light": "#131929",
        violet: "#7C3AED",
        "violet-bright": "#9F5FFF",
        cyan: "#00D4FF",
        "cyan-dim": "#00A8C8",
        slate: "#3D4A6B",
        "off-white": "#F0F4FF",
        muted: "#8892B0",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { textShadow: "0 0 10px #00D4FF, 0 0 20px #00D4FF" },
          to: { textShadow: "0 0 20px #7C3AED, 0 0 40px #7C3AED" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
