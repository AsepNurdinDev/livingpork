'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const WA_NUMBER = '6287858577888'
const WA_MESSAGE = encodeURIComponent('Halo Living Pork, saya mau pesan daging babi segar!')

const slidesDesktop = [
  { src: '/baner.jpeg',  label: 'Pengemasan Produk' },
]

const slidesMobile = [
  { src: '/baner-mobile.jpeg', label: 'Pengemasan Produk' },
]

const WA_SVG = (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [cardFading, setCardFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      changeSlide((prev) => (prev + 1) % slidesDesktop.length)
    }, 4000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  function changeSlide(indexOrUpdater: number | ((prev: number) => number)) {
    setCardFading(true)
    setTimeout(() => {
      setCurrent((prev) =>
        typeof indexOrUpdater === 'function' ? indexOrUpdater(prev) : indexOrUpdater
      )
      setCardFading(false)
    }, 280)
    startTimer()
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center">

      {/* ── BACKGROUND DESKTOP ── */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {slidesDesktop.map((slide, i) => (
          <Image
            id='home'
            key={slide.src}
            src={slide.src}
            alt={slide.label}
            fill
            priority={i === 0}
            className="object-cover transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      {/* ── BACKGROUND MOBILE ── */}
      <div className="absolute inset-0 z-0 block lg:hidden pt-10">
        {slidesMobile.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.label}
            fill
            priority={i === 0}
            className="object-cover object-top transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg, #C9A84C 0px, #C9A84C 1px,
            transparent 1px, transparent 50px
          )`,
        }}
      />

      {/* ══════════ DESKTOP ══════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full hidden lg:flex flex-col justify-center min-h-[100svh] py-32">
        {/* Headline */}
        <div className="max-w-2xl pt-30">
          <div className="flex items-center gap-4 pt-88">
            
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 active:scale-95 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-red-900/40 hover:shadow-red-900/60 hover:scale-105"
            >
              {WA_SVG}
              Pesan via WhatsApp
            </a>
            <Link
              href="/#produk"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] px-8 py-4 rounded-full transition-all duration-200"
            >
              Lihat Produk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Slide label */}
        <div
          className={`absolute right-12 bottom-20 transition-opacity duration-280 ${
            cardFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">
            {slidesDesktop[current].label}
          </span>
        </div>
      </div>

      {/* ══════════ MOBILE ══════════ */}
      <div className="relative z-10 flex flex-col justify-between w-full min-h-[100svh] lg:hidden">
        <div className="flex-1 flex flex-col justify-end px-6 pb-16 pt-36">
          {/* Buttons */}
          <div className="flex flex-col gap-3">
            
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-600 active:scale-95 text-white font-bold px-6 py-4 rounded-full transition-all duration-200 shadow-lg shadow-red-900/40 text-sm"
            >
              {WA_SVG}
              Pesan via WhatsApp
            </a>
            <Link
              href="/#produk"
              className="w-full inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] px-6 py-4 rounded-full text-sm transition-all duration-200"
            >
              Lihat Produk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}