import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        retro: {
          purple: '#9b87f5',
          darkPurple: '#6E59A5',
          cream: '#FEF7CD',
          orange: '#FEC6A1',
          peach: '#FDE1D3',
          blue: '#D3E4FD',
          gray: '#8E9196',
          neon: '#39FF14',
          hotPink: '#FF69B4',
          teal: '#20C2C8',
          mint: '#98FB98',
          mustard: '#FFDB58',
          magenta: '#FF00FF',
          cyan: '#00FFFF',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        retro: ['"Space Mono"', 'monospace'],
        display: ['"Press Start 2P"', 'cursive'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary))/0.9',
              },
            },
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pixel-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1px, 1px)" },
          "20%": { transform: "translate(1px, -1px)" },
          "30%": { transform: "translate(-1px, -1px)" },
          "40%": { transform: "translate(1px, 1px)" },
          "50%": { transform: "translate(0, 1px)" },
          "60%": { transform: "translate(1px, 0)" },
          "70%": { transform: "translate(-1px, 0)" },
          "80%": { transform: "translate(0, -1px)" },
          "90%": { transform: "translate(0, 0)" },
        },
        "color-cycle": {
          "0%, 100%": { color: "#9b87f5" },
          "25%": { color: "#FF69B4" },
          "50%": { color: "#39FF14" },
          "75%": { color: "#00FFFF" },
        },
        "background-shine": {
          "0%": {
            backgroundPosition: "200% 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pixel-shift": "pixel-shift 5s infinite",
        "color-cycle": "color-cycle 8s infinite",
        "background-shine": "background-shine 8s linear infinite",
      },
      boxShadow: {
        'retro': '3px 3px 0 rgba(0, 0, 0, 0.8)',
        'retro-lg': '5px 5px 0 rgba(0, 0, 0, 0.8)',
        'retro-inset': 'inset 3px 3px 0 rgba(0, 0, 0, 0.2)',
        'neon': '0 0 5px theme("colors.retro.neon"), 0 0 20px theme("colors.retro.neon")',
        'neon-text': '0 0 2px theme("colors.retro.neon"), 0 0 10px theme("colors.retro.neon")',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'rainbow-gradient': 'linear-gradient(90deg, #FF00FF, #FF69B4, #39FF14, #00FFFF, #9b87f5)',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;
