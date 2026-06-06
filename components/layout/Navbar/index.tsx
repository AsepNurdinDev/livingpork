'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/src/components/ThemeProvider'

const WA_NUMBER = '6287858577888'
const WA_MESSAGE = encodeURIComponent('Halo Living Pork, saya mau pesan daging babi segar!')

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    {label: 'Home', href: '/#home'},
    { label: 'Tentang', href: '/about' },
    { label: 'Produk', href: '/produk' },
    { label: 'Keunggulan', href: '/#keunggulan' },
    { label: 'Cara Pesan', href: '/#order' },
    { label: 'Artikel', href: '/artikel' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f8f6f2] dark:bg-[#121212] backdrop-blur-xl shadow-sm dark:shadow-none py-3 border-b border-stone-200 dark:border-[#2a2a2a]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.jpg"
            alt="Living Pork Logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-sans text-2xl tracking-wider font-black transition-colors text-stone-900 dark:text-[#fbf7f0]">
            LIVING<span className="text-red-700 dark:text-[#c9a84c]">PORK</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wide transition-colors duration-200 text-stone-600 dark:text-[#fbf7f0]/70 hover:text-red-700 dark:hover:text-[#c9a84c]"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            type="button"
            className="p-2 rounded-full transition-colors text-stone-600 dark:text-[#c9a84c] hover:bg-stone-100 dark:hover:bg-white/5"
            aria-label="Toggle Dark Mode"
          >
            {mounted && darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 5.657a4 4 0 118 0 4 4 0 01-8 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-800 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-md shadow-red-700/20 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan Sekarang
          </a>
        </nav>

        {/* Mobile: Dark Mode + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleDarkMode}
            type="button"
            className="p-2 rounded-full text-stone-600 dark:text-[#c9a84c] hover:bg-stone-100 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {mounted && darkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 5.657a4 4 0 118 0 4 4 0 01-8 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hamburger / X toggle */}
          <button
            className="p-2 rounded-full text-stone-700 dark:text-[#fbf7f0] hover:bg-stone-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-20 left-4 right-4 z-50 md:hidden">
            <div className="bg-white dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/50 p-5 flex flex-col gap-3">

              {/* Header drawer: label + tombol X */}
              <div className="flex items-center justify-between px-1 mb-1">
                <span className="text-xs font-bold tracking-widest uppercase text-stone-400 dark:text-[#fbf7f0]/30">
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="
                    w-8 h-8 flex items-center justify-center
                    rounded-full
                    bg-stone-100 dark:bg-[#2a2a2a]
                    border border-stone-200 dark:border-[#383838]
                    text-stone-500 dark:text-[#fbf7f0]/50
                    hover:bg-red-50 dark:hover:bg-[#b91c1c]/10
                    hover:text-red-600 dark:hover:text-[#b91c1c]
                    hover:border-red-200 dark:hover:border-[#b91c1c]/30
                    transition-all duration-200
                  "
                  aria-label="Tutup menu"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    group flex items-center justify-between
                    px-5 py-4 rounded-2xl
                    bg-stone-50 dark:bg-[#2a2a2a]
                    border border-stone-200 dark:border-[#383838]
                    hover:border-[#c9a84c] dark:hover:border-[#c9a84c]
                    hover:bg-amber-50/50 dark:hover:bg-[#2e2a1e]
                    transition-all duration-200
                  "
                >
                  <span className="text-stone-800 dark:text-[#fbf7f0] font-medium text-sm">
                    {link.label}
                  </span>
                  <span className="text-stone-300 dark:text-[#fbf7f0]/20 group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </Link>
              ))}

              {/* CTA WhatsApp */}
              <div className="border-t border-stone-100 dark:border-[#2e2e2e] pt-3 mt-1">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-red-700/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}