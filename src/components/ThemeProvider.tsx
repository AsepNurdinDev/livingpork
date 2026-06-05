'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Saat SSR, kembalikan false. Saat client, baca dari DOM yang sudah diset script inline
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook agar mudah dipanggil di komponen lain (seperti Navbar)
export const useTheme = () => useContext(ThemeContext)