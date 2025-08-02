import React, { useState } from "react";
import {Sun, Moon} from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  return(
  <div className="w-6 h-6 rounded-full bg-gray-400 dark:bg-gray-200">
    <button
      onClick={() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }}
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
