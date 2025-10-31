"use client"

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Button } from '@mui/material'
import { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Inicializa o tema com base no localStorage ou usa dark como padrão
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark =
      savedTheme === "dark" || (savedTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches)

   
    setIsDarkMode(prefersDark)
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <Button
      variant="text"
      size="small"
      onClick={toggleTheme}
      className="rounded-full hover:bg-primary/20 transition-colors"
      aria-label={isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      {isDarkMode ? (
        <LightModeIcon style={{ fontSize: 20 }} className="text-yellow-300" />
      ) : (
        <DarkModeIcon style={{ fontSize: 20 }} />
      )}
    </Button>
  )
}

export default ThemeToggle
