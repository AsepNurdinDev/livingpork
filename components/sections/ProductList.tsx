"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/src/lib/productsData";

const WA_NUMBER = "6287858577888";

export default function ProductList() {
  const featured = products.slice(0, 3);

  return (
    <section
      id="produk"
      className="relative bg-[#f8f6f2] dark:bg-[#121212] py-28 overflow-hidden transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 50px)`,
        }}
      />

      {/* Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-500/10 dark:bg-[#b91c1c]/10 blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/10 dark:bg-[#c9a84c]/10 blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-[#b91c1c]/20 border border-red-200 dark:border-[#b91c1c]/30 text-red-700 dark:text-[#b91c1c] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#b91c1c] animate-pulse" />
            Fresh Cut Selection
          </div>
          <h2 className="font-serif font-black text-5xl md:text-6xl text-stone-900 dark:text-[#fbf7f0]">
            Produk
            <span className="text-amber-600 dark:text-[#c9a84c] italic">
              {" "}
              Premium
            </span>
          </h2>
          <p className="text-stone-500 dark:text-[#fbf7f0]/60 mt-5 max-w-xl mx-auto leading-relaxed">
            Potongan daging babi pilihan yang diproses setiap subuh dan siap
            dikirim ke rumah Anda.
          </p>
        </div>

        {/* Product Grid — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] hover:-translate-y-2 hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50 transition-all duration-300"
            >
              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Badge */}
              {p.badge && (
                <div
                  className={`absolute top-5 right-5 z-20 px-3 py-1 rounded-full text-xs font-bold ${p.badgeColor}`}
                >
                  {p.badge}
                </div>
              )}

              {/* Category chip */}
              <div className="absolute top-5 left-5 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/40 text-white/80 backdrop-blur-sm">
                {p.category}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-stone-100 dark:bg-[#2a2a2a]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-serif text-xl text-stone-900 dark:text-[#fbf7f0] font-bold leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-stone-500 dark:text-[#fbf7f0]/50 mt-2 text-sm leading-relaxed flex-1">
                  {p.desc}
                </p>

                {/* Cooking suggestions */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.cookingSuggestions.slice(0, 3).map((s, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 dark:bg-[#2a2a2a] text-stone-500 dark:text-[#a8a29e] border border-stone-200 dark:border-[#383838]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="text-amber-600 dark:text-[#c9a84c] text-2xl font-black">
                      {(p as any).price}
                    </div>
                    <div className="text-stone-400 dark:text-[#fbf7f0]/40 text-xs mt-0.5">
                      {(p as any).unit ?? "per kg"}
                    </div>
                  </div>
                  <Link
                    href={`/produk/${p.slug}`}
                    className="text-xs text-stone-400 dark:text-[#a8a29e] hover:text-[#c9a84c] dark:hover:text-[#c9a84c] underline underline-offset-2 transition-colors duration-200"
                  >
                    Detail →
                  </Link>
                </div>

                {/* Button */}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Living Pork, saya mau pesan ${p.name}. Apakah stok tersedia?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-red-700/20 dark:shadow-[#b91c1c]/20"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 bg-stone-900 dark:bg-[#fbf7f0] text-white dark:text-stone-900 font-bold px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
          >
            Lihat Semua Produk
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Living Pork, saya ingin menanyakan ketersediaan produk lainnya.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-amber-500/40 dark:border-[#c9a84c]/30 text-amber-600 dark:text-[#c9a84c] hover:bg-amber-500 dark:hover:bg-[#c9a84c] hover:text-white dark:hover:text-stone-900 hover:border-transparent px-6 py-4 rounded-full font-semibold transition-all duration-200"
          >
            Tanya Produk Lainnya
          </a>
        </div>
      </div>
    </section>
  );
}
