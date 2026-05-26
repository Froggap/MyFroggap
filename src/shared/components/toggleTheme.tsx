'use client'

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";


export default function ToggleTheme() {
  const {theme, setTheme} = useTheme();

  return (
    <button
      className="cursor-pointer hover:scale-110 transition-all"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <FaSun color="white" /> : <FaMoon color="white" />}
    </button>
  );
}
