import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, calming palette — sage + terracotta + cream
        cream: {
          50: '#FEFCF7',
          100: '#FBF8F3',
          200: '#F5EFE6',
          300: '#EDE3D4',
        },
        sage: {
          50: '#F2F5F1',
          100: '#E0E8DE',
          200: '#C2D1BE',
          300: '#9FB59A',
          400: '#7A9B76',
          500: '#5F8259',
          600: '#4A6945',
          700: '#3A5338',
          800: '#2D4029',
          900: '#223020',
        },
        clay: {
          50: '#FAF2EE',
          100: '#F3E1D8',
          200: '#E8C5B4',
          300: '#DBA690',
          400: '#C97B63',
          500: '#B4604A',
          600: '#994D3B',
          700: '#7A3D2F',
          800: '#5C2D23',
          900: '#41201A',
        },
        charcoal: {
          50: '#F5F4F2',
          100: '#E8E6E2',
          200: '#C7C2BC',
          300: '#9A938A',
          400: '#6E655C',
          500: '#4A433C',
          600: '#3A342F',
          700: '#2C2A28',
          800: '#1F1D1B',
          900: '#141311',
        },
        gold: {
          400: '#C9A570',
          500: '#B8935A',
          600: '#9B7A48',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        'tighter-2': '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'subtle-float': 'subtleFloat 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
