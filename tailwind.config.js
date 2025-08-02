// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // ✅ App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ Components
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 2.5s steps(20, end), blink .75s step-end infinite',
        blink: 'blink .75s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
    },
  },
  plugins: [],
}
