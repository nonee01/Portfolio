import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: {
          DEFAULT: "var(--foreground)",
          secondary: "var(--foreground-secondary)",
          tertiary: "var(--foreground-tertiary)",
        },
        border: "var(--border)",
        tn: {
          bg: "#1a1b26",
          bgDark: "#16161e",
          highlight: "#292e42",
          gutter: "#3b4261",
          terminal: "#414868",
          comment: "#565f89",
          fg: "#c0caf5",
          fgDark: "#a9b1d6",
          blue: "#7aa2f7",
          cyan: "#7dcfff",
          magenta: "#bb9af7",
          purple: "#9d7cd8",
          orange: "#ff9e64",
          yellow: "#e0af68",
          green: "#9ece6a",
          teal: "#73daca",
          red: "#f7768e",
        },
        ctp: {
          mauve: "#cba6f7",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "JetBrains Mono", "Fira Code", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
}

export default config
