/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-delay-1": "fade-in 0.7s ease-out 0.2s forwards",
        "fade-in-delay-2": "fade-in 0.7s ease-out 0.4s forwards",
        "fade-in-delay-3": "fade-in 0.7s ease-out 0.6s forwards",
        "fade-in-delay-4": "fade-in 0.7s ease-out 0.8s forwards",
        "fade-in-delay-5": "fade-in 0.7s ease-out 0.9s forwards",
        meteor: "meteor 5s linear infinite",
        "slide-in":"slide-in 1s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(0px)" },
          to: { opacity: "1", transform: "translateY(-10px)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
          "slide-in": {
      "0%": { transform: "translateX(100%)", opacity: "0" },
      "100%": { transform: "translateX(0)", opacity: "1" },
    },
      },
    },
  },

  plugins: [],
}