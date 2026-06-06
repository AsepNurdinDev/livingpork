'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import Footer from '@/components/layout/Footer'

const WA_NUMBER = '6287858577888'

// Definisikan tipe data produk agar sesuai dengan struktur data Anda
interface Product {
  slug: string
  name: string
  desc: string
  category: string
  price: string
  unit: string
  image: string
  inStock: boolean
  badge?: string
  badgeColor?: string
  cookingSuggestions: string[]
}

interface ProductDetailClientProps {
  product: Product
  products: Product[]
}

/* ─── Fade-in on scroll effect ─── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) { 
        setVisible(true); 
        obs.disconnect() 
      } 
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ 
        opacity: visible ? 1 : 0, 
        transform: visible ? 'translateY(0)' : 'translateY(24px)', 
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` 
      }}
    >
      {children}
    </div>
  )
}

export default function ProductDetailClient({ product, products }: ProductDetailClientProps) {
  // Mengambil 3 produk terkait dari kategori yang sama (tidak termasuk produk aktif saat ini)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  const waMessage = `Halo Living Pork, saya ingin memesan produk berikut:\n\n*Nama Produk:* ${product.name}\n*Harga:* ${product.price} / ${product.unit}\n\nApakah stok tersedia?`

  return (
    <main className="bg-[#f8f6f2] dark:bg-[#111110] pt-18 text-stone-900 dark:text-[#fbf7f0] min-h-screen transition-colors duration-300">
      
      {/* ══ BREADCRUMB & BACK BUTTON ══ */}
      <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-12">
        <Link 
          href="/produk" 
          className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-stone-500 dark:text-[#a8a29e] hover:text-[#c9a84c] dark:hover:text-[#c9a84c] transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Katalog
        </Link>
      </div>

      {/* ══ MAIN PRODUCT SECTION ══ */}
      <section className="py-8 px-4 md:py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left: Product Image */}
          <FadeIn className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white dark:bg-[#1a1a18] border border-stone-200 dark:border-[#2a2a2a] shadow-xl shadow-stone-200/50 dark:shadow-black/40">
            {product.badge && (
              <div className={`absolute top-5 right-5 z-20 px-3 py-1 rounded-full text-xs font-bold ${product.badgeColor || 'bg-[#c9a84c] text-white'}`}>
                {product.badge}
              </div>
            )}
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover"
              priority 
            />
          </FadeIn>

          {/* Right: Product Details */}
          <FadeIn delay={100} className="flex flex-col h-full justify-center">
            {/* Category Tag */}
            <span className="inline-block text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-3">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-stone-900 dark:text-[#fbf7f0] leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price & Stock Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 my-2 border-y border-stone-200 dark:border-[#2a2a2a]">
              <div>
                <div className="text-amber-600 dark:text-[#c9a84c] text-3xl md:text-4xl font-black">
                  {product.price}
                </div>
                <div className="text-stone-400 dark:text-[#555] text-xs mt-0.5">Per {product.unit}</div>
              </div>

              <div className={`flex items-center gap-1.5 text-sm font-semibold ${product.inStock ? 'text-green-600 dark:text-green-500' : 'text-red-500'}`}>
                <span className={`w-2.5 h-2.5 rounded-full ${product.inStock ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                {product.inStock ? 'Stok Tersedia' : 'Stok Habis'}
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-400 dark:text-[#555] mb-2">Deskripsi Produk</h2>
              <p className="text-stone-600 dark:text-[#a8a29e] text-sm md:text-base leading-relaxed">
                {product.desc}
              </p>
            </div>

            {/* Cooking Suggestions / Tags */}
            {product.cookingSuggestions && product.cookingSuggestions.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xs font-bold tracking-wider uppercase text-stone-400 dark:text-[#555] mb-2.5">Saran Penyajian</h2>
                <div className="flex flex-wrap gap-2">
                  {product.cookingSuggestions.map((suggestion, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1.5 rounded-full bg-stone-100 dark:bg-[#252521] text-stone-600 dark:text-[#a8a29e] border border-stone-200 dark:border-[#333]"
                    >
                      🍳 {suggestion}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Order Button */}
            <div className="mt-8">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-red-900/20"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pesan Sekarang via WhatsApp
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ══ RELATED PRODUCTS SECTION ══ */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 border-t border-stone-200 dark:border-[#2a2a2a] bg-stone-50 dark:bg-[#141412] transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center md:text-left">
              <span className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase block mb-2">Rekomendasi</span>
              <h2 className="font-serif font-black text-2xl md:text-3xl text-stone-900 dark:text-[#fbf7f0]">
                Produk <em className="text-[#c9a84c] not-italic italic">Terkait</em>
              </h2>
              <div className="w-12 h-[3px] bg-[#c9a84c] mt-3 mx-auto md:mx-0" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {relatedProducts.map((p, i) => (
                <FadeIn key={p.slug} delay={i * 80}>
                  <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-white dark:bg-[#1a1a18] border border-stone-200 dark:border-[#2a2a2a] hover:-translate-y-2 hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/60 transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-stone-100 dark:bg-[#2a2a2a] shrink-0">
                      <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="font-serif text-[16px] font-bold text-stone-900 dark:text-[#fbf7f0] leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                        {p.name}
                      </h3>
                      <p className="text-stone-500 dark:text-[#a8a29e] text-xs mt-2 leading-relaxed flex-1 line-clamp-2">
                        {p.desc}
                      </p>

                      {/* Price row */}
                      <div className="mt-5 flex items-end justify-between">
                        <div>
                          <div className="text-amber-600 dark:text-[#c9a84c] text-xl font-black">{p.price}</div>
                          <div className="text-stone-400 dark:text-[#555] text-[10px] mt-0.5">{p.unit}</div>
                        </div>
                        <Link
                          href={`/produk/${p.slug}`}
                          className="px-4 py-2 rounded-full border border-stone-200 dark:border-[#2e2e2e] text-stone-700 dark:text-[#fbf7f0] text-xs font-bold hover:border-[#c9a84c] hover:text-[#c9a84c] dark:hover:border-[#c9a84c] dark:hover:text-[#c9a84c] transition-all duration-200"
                        >
                          Lihat Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ BOTTOM CTA ══ */}
      <section className="py-20 px-6 bg-white dark:bg-[#161614] transition-colors duration-300">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-[3px] bg-[#c9a84c] mx-auto mb-8" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 leading-tight">
              Butuh Potongan Khusus?
            </h2>
            <p className="text-stone-500 dark:text-[#a8a29e] text-sm leading-relaxed mb-8">
              Kami menyediakan layanan custom cutting sesuai spesifikasi restoran atau kebutuhan rumah tangga Anda. Hubungi kami untuk pesanan khusus.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Living Pork, saya ingin menanyakan produk atau potongan khusus.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-red-900/30 hover:scale-105"
            >
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  )
}