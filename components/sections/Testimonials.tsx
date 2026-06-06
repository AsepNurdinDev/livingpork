'use client'

import { useRef } from 'react'

const testimonials = [
  {
    name: 'Ibu Maria T.',
    role: 'Pelanggan Setia',
    text: 'Sudah langganan Living Pork lebih dari 6 bulan. Dagingnya selalu segar, baunya tidak amis, dan potongannya rapi. Pokoknya puas banget!',
    stars: 5,
  },
  {
    name: 'Chef Hendra',
    role: 'Pemilik Restoran',
    text: 'Saya pakai daging babi dari Living Pork untuk restoran saya. Kualitas konsisten, pengiriman tepat waktu, dan responsif kalau ada pesanan mendadak.',
    stars: 5,
  },
  {
    name: 'Ko Benny',
    role: 'Pelanggan Rumahan',
    text: 'Pertama kali coba karena rekomendasi teman, dan langsung ketagihan. Harga fair, daging berkualitas, pesan via WA juga gampang banget.',
    stars: 5,
  },
  {
    name: 'Ci Linda',
    role: 'Ibu Rumah Tangga',
    text: 'Daging samcan-nya juara! Layer lemak dan dagingnya pas banget buat bikin babi kecap di rumah. Keluarga besar pada suka pas kumpul-kumpul.',
    stars: 5,
  },
  {
    name: 'Steven K.',
    role: 'Penggemar BBQ',
    text: 'Potongan pork belly slice-nya rapi dan konsisten tipisnya. Pas banget buat nge-grill bareng teman-teman di akhir pekan. Recommended!',
    stars: 5,
  },
  {
    name: 'Ibu Listia',
    role: 'Katering Rumahan',
    text: 'Sangat terbantu dengan layanan custom cutting dari Living Pork. Bisa request potongan dadu sesuai standar porsi katering saya tanpa biaya tambahan.',
    stars: 5,
  },
  {
    name: 'Pak Gunawan',
    role: 'Pelanggan Setia',
    text: 'Packaging-nya rapi dan bersih banget, pakai vakum pack jadi aman di freezer. Pengiriman ke luar kota juga tetap fresh sampai tujuan.',
    stars: 5,
  },
  {
    name: 'Chef Wijaya',
    role: 'Culinary Consultant',
    text: 'Kandungan air pada dagingnya sangat minim, menandakan proses cutting dan penyimpanan yang sangat higienis dan profesional. Luar biasa.',
    stars: 5,
  },
  {
    name: 'Santi Anastasia',
    role: 'Pelanggan Baru',
    text: 'Awalnya ragu beli online, tapi pas datang dagingnya benar-benar merah segar dan tidak banyak air bumbu. Pasti bakal re-order lagi di sini.',
    stars: 5,
  },
  {
    name: 'Ko Johan',
    role: 'Pemilik Depot',
    text: 'Kerja sama pasokan daging dengan Living Pork bikin tenang. Stok mereka selalu aman dan harganya sangat bersaing untuk pelaku usaha kuliner.',
    stars: 5,
  },
]

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-stone-100 dark:bg-[#0e0e0e] py-24 px-4 relative overflow-hidden transition-colors duration-300">

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1c1917 0px, #1c1917 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, #1c1917 0px, #1c1917 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans tracking-widest text-amber-600 dark:text-[#c9a84c] text-xs font-bold uppercase">
            Kata Mereka
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-[#fbf7f0] mt-2">
            Pelanggan Kami
          </h2>
          <div className="w-16 h-1 bg-red-700 dark:bg-[#b91c1c] mx-auto mt-4" />
        </div>

        {/* Carousel Wrapper with Side Buttons */}
        <div className="relative group/carousel px-0 md:px-4">
          
          {/* Left Arrow Button (Samping Kiri) */}
          <button
            onClick={() => scroll('left')}
            className="
              hidden md:flex absolute left-[-24px] top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full border border-stone-200 dark:border-[#2e2e2e] 
              bg-white/90 dark:bg-[#1e1e1e]/90 backdrop-blur-sm
              text-stone-700 dark:text-[#fbf7f0] items-center justify-center 
              hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:text-[#c9a84c] dark:hover:text-[#c9a84c] 
              shadow-xl shadow-black/5 dark:shadow-black/20
              opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 active:scale-95
            "
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button (Samping Kanan) */}
          <button
            onClick={() => scroll('right')}
            className="
              hidden md:flex absolute right-[-24px] top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full border border-stone-200 dark:border-[#2e2e2e] 
              bg-white/90 dark:bg-[#1e1e1e]/90 backdrop-blur-sm
              text-stone-700 dark:text-[#fbf7f0] items-center justify-center 
              hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:text-[#c9a84c] dark:hover:text-[#c9a84c] 
              shadow-xl shadow-black/5 dark:shadow-black/20
              opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 active:scale-95
            "
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div
            ref={scrollRef}
            className="
              flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6
              scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]
              md:grid md:grid-flow-col md:auto-cols-[calc(33.333%-16px)] md:overflow-x-auto
            "
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="
                  snap-center shrink-0 
                  w-[85vw] sm:w-[45vw] md:w-full
                  group/card
                  bg-white dark:bg-[#1e1e1e]
                  border border-stone-200 dark:border-[#2e2e2e]
                  rounded-2xl p-7
                  hover:border-[#c9a84c] dark:hover:border-[#c9a84c]
                  hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30
                  hover:-translate-y-1
                  transition-all duration-300
                  flex flex-col justify-between
                "
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className="text-amber-500 dark:text-[#c9a84c] text-lg">★</span>
                    ))}
                  </div>

                  <p className="text-stone-600 dark:text-[#fbf7f0]/70 text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-100 dark:border-[#2e2e2e]">
                  {/* Avatar initial */}
                  <div className="w-9 h-9 rounded-full bg-red-100 dark:bg-[#b91c1c]/20 flex items-center justify-center text-red-700 dark:text-[#b91c1c] text-sm font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-stone-900 dark:text-[#fbf7f0] font-semibold text-sm">{t.name}</p>
                    <p className="text-stone-400 dark:text-[#fbf7f0]/40 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-stone-400 text-xs tracking-wider animate-pulse">
            ← Geser untuk melihat lainnya →
          </p>
        </div>

      </div>
    </section>
  )
}