'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { products } from '../../src/lib/productsData'
import Footer from '@/components/layout/Footer'

const WA_NUMBER = '6287858577888'

const categories = ['Semua', ...Array.from(new Set(products.map(p => p.category)))]

/* ─── Fade-in on scroll ─── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

export default function ProdukPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'Semua' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="bg-[#f8f6f2] dark:bg-[#111110] text-stone-900 dark:text-[#fbf7f0] min-h-screen transition-colors duration-300">

      {/* ══ HERO ══ */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="" alt="Produk Living Pork" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 50px)` }} />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <span className="inline-block text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-3">Katalog Produk</span>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-white leading-tight">
            Semua <em className="text-[#c9a84c] not-italic italic">Produk</em>
          </h1>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-4" />
        </div>
      </section>

      {/* ══ FILTER & SEARCH BAR ══ */}
      <div className="sticky top-0 z-30 bg-[#f8f6f2]/90 dark:bg-[#111110]/90 backdrop-blur-md border-b border-stone-200 dark:border-[#2a2a2a] transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">

          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-stone-900 dark:bg-[#fbf7f0] text-white dark:text-stone-900'
                    : 'bg-white dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] text-stone-500 dark:text-[#a8a29e] hover:border-[#c9a84c] dark:hover:border-[#c9a84c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-full text-sm bg-white dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] text-stone-700 dark:text-[#fbf7f0] placeholder-stone-400 dark:placeholder-[#555] focus:outline-none focus:border-[#c9a84c] dark:focus:border-[#c9a84c] transition-colors duration-200 w-52"
            />
          </div>
        </div>
      </div>

      {/* ══ PRODUCT GRID ══ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-stone-400 dark:text-[#555]">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-serif text-xl">Produk tidak ditemukan</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((p, i) => (
                <FadeIn key={p.slug} delay={i * 80}>
                  <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-white dark:bg-[#1a1a18] border border-stone-200 dark:border-[#2a2a2a] hover:-translate-y-2 hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/60 transition-all duration-300">

                    {/* Gold top line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* Badges */}
                    <div className="absolute top-5 left-5 z-20 flex flex-col gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/40 text-white/80 backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    {p.badge && (
                      <div className={`absolute top-5 right-5 z-20 px-3 py-1 rounded-full text-xs font-bold ${p.badgeColor}`}>
                        {p.badge}
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-60 overflow-hidden bg-stone-100 dark:bg-[#2a2a2a] shrink-0">
                      <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="font-serif text-[17px] font-bold text-stone-900 dark:text-[#fbf7f0] leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                        {p.name}
                      </h3>
                      <p className="text-stone-500 dark:text-[#a8a29e] text-[12.5px] mt-2 leading-relaxed flex-1">
                        {p.desc}
                      </p>

                      {/* Cooking tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {p.cookingSuggestions.slice(0, 3).map((s, j) => (
                          <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 dark:bg-[#252521] text-stone-500 dark:text-[#a8a29e] border border-stone-200 dark:border-[#333]">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Price row */}
                      <div className="mt-5 flex items-end justify-between">
                        <div>
                          <div className="text-amber-600 dark:text-[#c9a84c] text-2xl font-black">{p.price}</div>
                          <div className="text-stone-400 dark:text-[#555] text-xs mt-0.5">{p.unit}</div>
                        </div>
                        <div className={`flex items-center gap-1.5 text-xs font-semibold ${p.inStock ? 'text-green-600 dark:text-green-500' : 'text-red-500'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${p.inStock ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                          {p.inStock ? 'Stok Tersedia' : 'Habis'}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-4 flex gap-2">
                        <Link
                          href={`/produk/${p.slug}`}
                          className="flex-1 flex items-center justify-center py-3 rounded-full border border-stone-200 dark:border-[#2e2e2e] text-stone-700 dark:text-[#fbf7f0] text-sm font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] dark:hover:border-[#c9a84c] dark:hover:text-[#c9a84c] transition-all duration-200"
                        >
                          Detail
                        </Link>
                        <a
                          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Living Pork, saya mau pesan ${p.name}. Apakah stok tersedia?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-[2] flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded-full text-sm transition-all duration-200 hover:scale-[1.02]"
                        >
                          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Pesan
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="py-20 px-6 bg-white dark:bg-[#161614] transition-colors duration-300">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-[3px] bg-[#c9a84c] mx-auto mb-8" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 leading-tight">
              Tidak menemukan yang Anda cari?
            </h2>
            <p className="text-stone-500 dark:text-[#a8a29e] text-sm leading-relaxed mb-8">
              Kami menyediakan layanan custom cutting sesuai spesifikasi Anda. Hubungi kami untuk informasi lebih lanjut.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Living Pork, saya ingin menanyakan produk atau potongan khusus.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-red-900/30 hover:scale-105"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>
      <Footer />
    </main>
  )
}