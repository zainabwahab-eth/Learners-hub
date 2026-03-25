/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryDark: '#4F46E5',
        accent: '#34D399',
        accentDark: '#059669',
        background: '#F9FAFB',
        border: '#E5E7EB',
        textMain: '#111827',
        textMuted: '#6B7280',
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, #8B5CF6, #34D399)',
        'gradient-indigo': 'linear-gradient(135deg, #818CF8, #6366F1)',
      },
    },
  },
  plugins: [],
}
