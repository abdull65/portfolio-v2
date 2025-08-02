import React, { useState, useEffect } from "react";
import {Sun, Moon} from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
  const initialTheme = 
  savedTheme ? (savedTheme as "light" | "dark")
  : preferDark ? "dark" : "light";

setTheme(initialTheme)
document.documentElement.classList.toggle("dark", initialTheme === "dark");
}, [])
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
}
  return(
  <div className="w-6 h-6 rounded-full bg-gray-400 dark:bg-gray-200">
    <button
      onClick={toggleTheme}
      aria-label="theme toggle"
      className="flex items-center justify-center w-full h-full"
    >
      {theme === 'light' ? (
        <Sun className="w-4 h-4 text-yellow-500" />
      ) : (
        <Moon className="w-4 h-4 text-gray-800" />
      )}
    </button>
  </div>
  )
}
