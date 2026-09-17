/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050814",
        neonCyan: "#00f5ff",
        emeraldRecharge: "#10b981",
        alertRed: "#ef4444",
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 245, 255, 0.3)',
        'neon-green': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
