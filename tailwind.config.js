/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'var(--color--primary-orange)',
          DEFAULT: 'var(--color--primary-orange)',
        },
        dark: {
          bg: 'var(--color--dark-bg)',
          DEFAULT: 'var(--color--dark-bg)',
        },
        text: {
          primary: 'var(--color--text-primary)',
          secondary: 'var(--color--text-secondary)',
        },
        gradient: {
          start: 'var(--color--gradient-start)',
          end: 'var(--color--gradient-end)',
        },
        accent: {
          blue: 'var(--color--accent-blue)',
          green: 'var(--color--success-green)',
        },
        card: {
          bg: 'var(--color--card-bg)',
        },
        border: 'var(--color--border)',
        hover: 'var(--color--hover)',
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1-desktop': 'var(--size--h1)',
        'h2-desktop': 'var(--size--h2)',
        'h3-desktop': 'var(--size--h3)',
        'h4-desktop': 'var(--size--h4)',
        'h5-desktop': 'var(--size--h5)',
        'body': 'var(--size--body)',
        'small': 'var(--size--small)',
      },
      maxWidth: {
        'container-max': '1440px',
        'container-wide': '1200px',
        'container-narrow': '800px',
      },
      spacing: {
        'section-desktop': '120px',
        'section-tablet': '80px',
        'section-mobile': '60px',
        'card-desktop': '40px',
        'card-tablet': '30px',
        'card-mobile': '20px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'tech-pulse': 'techPulse 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        techPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(255, 107, 53, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--color--primary-orange), var(--color--gradient-end))',
        'gradient-hero': 'linear-gradient(135deg, var(--color--dark-bg) 0%, rgba(26,26,26,0.8) 50%, var(--color--dark-bg) 100%)',
        'gradient-tech': 'linear-gradient(90deg, var(--color--primary-orange), var(--color--accent-blue))',
      },
      boxShadow: {
        'btn-primary': '0 8px 32px rgba(255,107,53,0.3)',
        'btn-primary-hover': '0 12px 40px rgba(255,107,53,0.4)',
        'glow-orange': '0 0 60px rgba(255,107,53,0.3)',
        'glow-blue': '0 0 60px rgba(0,212,255,0.3)',
      },
    },
  },
  plugins: [],
};