// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // ✅ for App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ for components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
