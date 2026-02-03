import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                luxury: {
                    black: "#0a0a0a", // Deepest black
                    charcoal: "#1c1c1c", // Graphite/Dark Gray
                    gold: "#d4af37", // Classic Gold
                    bronze: "#cd7f32",
                    copper: "#b87333",
                    light: "#f5f5f5", // Off-white/Platinum
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
            animation: {
                "fade-in-up": "fadeInUp 0.8s ease-out forwards",
                "fade-in": "fadeIn 1s ease-out forwards",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
