import type { Config } from 'tailwindcss'
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
        foreground: {
          DEFAULT: 'rgb(var(--foreground-rgb) / 0.9)',
          dim: 'rgb(var(--foreground-dim-rgb) / 0.6)',
          subtle: 'rgb(var(--foreground-subtle-rgb) / 0.7)',
          inverse: {
            DEFAULT: 'rgb(var(--foreground-inverse))',
            dim: 'rgb(var(--foreground-inverse-dim-rgb) / 0.5)',
            subtle: 'rgb(var(--foreground-inverse-subtle-rgb) / 0.7)',
          },
          product: {
            brand: 'rgb(var(--foreground-product-brand))',
          },
          system: {
            error: 'rgb(var(--foreground-system-error))',
            link: 'rgb(var(--foreground-system-link))',
            success: 'rgb(var(--foreground-system-success))',
            warning: 'rgb(var(--foreground-system-warning))',
          }
        },
        
        // Brand colors
        indigo: {
          50: 'rgb(var(--indigo-50) / <alpha-value>)',
          100: 'rgb(var(--indigo-100) / <alpha-value>)',
          200: 'rgb(var(--indigo-200) / <alpha-value>)',
          300: 'rgb(var(--indigo-300) / <alpha-value>)',
          400: 'rgb(var(--indigo-400) / <alpha-value>)',
          500: 'rgb(var(--indigo-500) / <alpha-value>)',
          600: 'rgb(var(--indigo-600) / <alpha-value>)',
          700: 'rgb(var(--indigo-700) / <alpha-value>)',
          800: 'rgb(var(--indigo-800) / <alpha-value>)',
          900: 'rgb(var(--indigo-900) / <alpha-value>)',
          950: 'rgb(var(--indigo-950) / <alpha-value>)',
        },
        
        red: {
          50: 'rgb(var(--red-50) / <alpha-value>)',
          100: 'rgb(var(--red-100) / <alpha-value>)',
          200: 'rgb(var(--red-200) / <alpha-value>)',
          300: 'rgb(var(--red-300) / <alpha-value>)',
          400: 'rgb(var(--red-400) / <alpha-value>)',
          500: 'rgb(var(--red-500) / <alpha-value>)',
          600: 'rgb(var(--red-600) / <alpha-value>)',
          700: 'rgb(var(--red-700) / <alpha-value>)',
          800: 'rgb(var(--red-800) / <alpha-value>)',
          900: 'rgb(var(--red-900) / <alpha-value>)',
          950: 'rgb(var(--red-950) / <alpha-value>)',
        },
        
        purple: {
          50: 'rgb(var(--purple-50) / <alpha-value>)',
          100: 'rgb(var(--purple-100) / <alpha-value>)',
          200: 'rgb(var(--purple-200) / <alpha-value>)',
          300: 'rgb(var(--purple-300) / <alpha-value>)',
          400: 'rgb(var(--purple-400) / <alpha-value>)',
          500: 'rgb(var(--purple-500) / <alpha-value>)',
          600: 'rgb(var(--purple-600) / <alpha-value>)',
          700: 'rgb(var(--purple-700) / <alpha-value>)',
          800: 'rgb(var(--purple-800) / <alpha-value>)',
          900: 'rgb(var(--purple-900) / <alpha-value>)',
          950: 'rgb(var(--purple-950) / <alpha-value>)',
        },
        
        yellow: {
          50: 'rgb(var(--yellow-50) / <alpha-value>)',
          100: 'rgb(var(--yellow-100) / <alpha-value>)',
          200: 'rgb(var(--yellow-200) / <alpha-value>)',
          300: 'rgb(var(--yellow-300) / <alpha-value>)',
          400: 'rgb(var(--yellow-400) / <alpha-value>)',
          500: 'rgb(var(--yellow-500) / <alpha-value>)',
          600: 'rgb(var(--yellow-600) / <alpha-value>)',
          700: 'rgb(var(--yellow-700) / <alpha-value>)',
          800: 'rgb(var(--yellow-800) / <alpha-value>)',
          900: 'rgb(var(--yellow-900) / <alpha-value>)',
          950: 'rgb(var(--yellow-950) / <alpha-value>)',
        },
        
        green: {
          50: 'rgb(var(--green-50) / <alpha-value>)',
          100: 'rgb(var(--green-100) / <alpha-value>)',
          200: 'rgb(var(--green-200) / <alpha-value>)',
          300: 'rgb(var(--green-300) / <alpha-value>)',
          400: 'rgb(var(--green-400) / <alpha-value>)',
          500: 'rgb(var(--green-500) / <alpha-value>)',
          600: 'rgb(var(--green-600) / <alpha-value>)',
          700: 'rgb(var(--green-700) / <alpha-value>)',
          800: 'rgb(var(--green-800) / <alpha-value>)',
          900: 'rgb(var(--green-900) / <alpha-value>)',
          950: 'rgb(var(--green-950) / <alpha-value>)',
        },
        
        gray: {
          50: 'rgb(var(--gray-50) / <alpha-value>)',
          100: 'rgb(var(--gray-100) / <alpha-value>)',
          200: 'rgb(var(--gray-200) / <alpha-value>)',
          300: 'rgb(var(--gray-300) / <alpha-value>)',
          400: 'rgb(var(--gray-400) / <alpha-value>)',
          500: 'rgb(var(--gray-500) / <alpha-value>)',
          600: 'rgb(var(--gray-600) / <alpha-value>)',
          700: 'rgb(var(--gray-700) / <alpha-value>)',
          800: 'rgb(var(--gray-800) / <alpha-value>)',
          900: 'rgb(var(--gray-900) / <alpha-value>)',
          950: 'rgb(var(--gray-950) / <alpha-value>)',
        },
        
        blue: {
          50: 'rgb(var(--blue-50) / <alpha-value>)',
          100: 'rgb(var(--blue-100) / <alpha-value>)',
          200: 'rgb(var(--blue-200) / <alpha-value>)',
          300: 'rgb(var(--blue-300) / <alpha-value>)',
          400: 'rgb(var(--blue-400) / <alpha-value>)',
          500: 'rgb(var(--blue-500) / <alpha-value>)',
          600: 'rgb(var(--blue-600) / <alpha-value>)',
          700: 'rgb(var(--blue-700) / <alpha-value>)',
          800: 'rgb(var(--blue-800) / <alpha-value>)',
          900: 'rgb(var(--blue-900) / <alpha-value>)',
          950: 'rgb(var(--blue-950) / <alpha-value>)',
        },
        
        // Semantic colors
        primary: {
          DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground-rgb) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-rgb) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground-rgb) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive-background-rgb) / <alpha-value>)',
          foreground: 'rgb(var(--destructive-foreground-rgb) / <alpha-value>)',
        },
        "destructive-secondary": {
          border: 'rgb(var(--destructive-secondary-border-rgb) / <alpha-value>)',
          foreground: 'rgb(var(--destructive-secondary-foreground-rgb) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted-rgb) / <alpha-value>)',
          foreground: 'rgb(var(--muted-foreground-rgb) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground-rgb) / <alpha-value>)',
        },
        
        // Surface system
        surface: {
          // Background numbered variants
          0: 'rgb(var(--surface-background-0) / <alpha-value>)',
          1: 'rgb(var(--surface-background-1) / <alpha-value>)',
          2: 'rgb(var(--surface-background-2) / <alpha-value>)',
          3: 'rgb(var(--surface-background-3) / <alpha-value>)',
          4: 'rgb(var(--surface-background-4) / <alpha-value>)',
          5: 'rgb(var(--surface-background-5) / <alpha-value>)',
          6: 'rgb(var(--surface-background-6) / <alpha-value>)',
          
          // Elevation variants
          flat: 'rgb(var(--surface-flat) / <alpha-value>)',
          high: 'rgb(var(--surface-high) / <alpha-value>)',
          highlight: 'rgb(var(--surface-highlight-rgb) / 0.04)',
          low: 'rgb(var(--surface-low) / <alpha-value>)',
          mid: 'rgb(var(--surface-mid) / <alpha-value>)',
          overlay: 'rgb(var(--surface-overlay-rgb) / 0.7)',
          
          // Product and system variants
          product: {
            brand: 'rgb(var(--surface-product-brand) / <alpha-value>)',
          },
          system: {
            error: 'rgb(var(--surface-system-error) / <alpha-value>)',
            neutral: 'rgb(var(--surface-system-neutral) / <alpha-value>)',
            success: 'rgb(var(--surface-system-success) / <alpha-value>)',
            warning: 'rgb(var(--surface-system-warning) / <alpha-value>)',
          },
          // Navigation variants
          'navigation-selected': {
            DEFAULT: 'rgb(var(--indigo-500) / 0.4)',
            hover: 'rgb(var(--indigo-500) / 0.5)',
          },
        },
        
        // Border system
        border: {
          DEFAULT: 'hsl(var(--border))',
          dim: 'rgb(var(--border-dim-rgb) / 0.2)',
          elevation: 'rgb(var(--border-elevation-rgb) / 0.04)',
          inverse: {
            DEFAULT: 'rgb(var(--border-inverse))',
            dim: 'rgb(var(--border-inverse-dim-rgb) / 0.2)',
            subtle: 'rgb(var(--border-inverse-subtle-rgb) / 0.4)',
          },
          subtle: 'rgb(var(--border-subtle-rgb) / 0.4)',
          system: {
            error: 'rgb(var(--border-system-error))',
            focus: 'rgb(var(--border-system-focus))',
            success: 'rgb(var(--border-system-success))',
            warning: 'rgb(var(--border-system-warning))',
          }
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // Add boxShadow configuration
      boxShadow: {
        flat: "0px 0px 0px 0px var(--shadow-flat)",
        high: "0px 16px 24px 0px var(--shadow-high-primary), 0px 0px 2px 0px var(--shadow-high-secondary)",
        low: "0px 2px 4px 0px var(--shadow-low-primary), 0px 0px 2px 0px var(--shadow-low-secondary)",
        mid: "0px 4px 8px 0px var(--shadow-mid-primary), 0px 0px 2px 0px var(--shadow-mid-secondary)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        xs: ["10px", "15px"],
        sm: ["12px", "18px"],
        base: ["13px", "20px"],
        lg: ["14px", "21px"],
        xl: ["16px", "24px"],
        "2xl": ["18px", "23px"],
        "3xl": ["20px", "25px"],
        "4xl": ["24px", "30px"],
        "5xl": ["28px", "35px"],
        "6xl": ["32px", "40px"],
        "7xl": ["40px", "50px"],
        "8xl": ["52px", "65px"],
        "9xl": ["68px", "85px"],
        display: ["88px", "110px"],
      },
    },
  } satisfies Config["theme"],
  plugins: [animate],
}

export default config
