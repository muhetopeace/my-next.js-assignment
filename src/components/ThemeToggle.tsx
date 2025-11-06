"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  // ✅ Initialize theme from localStorage in useState (runs only on client)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      return saved === "dark" ? "dark" : "light"
    }
    return "light"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const toggle = () => {
    const next: "light" | "dark" = theme === "light" ? "dark" : "light"
    setTheme(next)
    localStorage.setItem("theme", next)
  }

  return (
    <button onClick={toggle} className="ml-4 border px-2 py-1 rounded">
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
