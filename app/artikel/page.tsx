import Link from 'next/link'
import { articles } from '@/src/lib/articles'

export default function ArtikelPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4 bg-[#f8f6f2] dark:bg-[#121212] overflow-hidden transition-colors duration-300">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 50px
          )`,
        }}
      />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-red-500/10 dark:bg-[#b91c1c]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/10 dark:bg-[#c9a84c]/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-[#b91c1c]/20 border border-red-200 dark:border-[#b91c1c]/30 text-red-700 dark:text-[#b91c1c] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#b91c1c] animate-pulse" />
            Tips & Resep
          </div>

          <h1 className="font-serif font-black text-5xl md:text-7xl text-stone-900 dark:text-[#fbf7f0]">
            Artikel
            <span className="text-amber-600 dark:text-[#c9a84c] italic"> Living Pork</span>
          </h1>

          <p className="text-stone-500 dark:text-[#fbf7f0]/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            Temukan berbagai tips memasak, resep pilihan, informasi produk, dan inspirasi hidangan terbaik
            menggunakan daging babi premium.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artikel/${article.slug}`}
              className="
                group flex flex-col
                bg-white dark:bg-[#1e1e1e]
                border border-stone-200 dark:border-[#2e2e2e]
                rounded-3xl overflow-hidden
                hover:-translate-y-2
                hover:border-[#c9a84c] dark:hover:border-[#c9a84c]
                hover:shadow-2xl hover:shadow-black/8 dark:hover:shadow-black/40
                transition-all duration-300
              "
            >
              {/* Cover */}
              <div className="relative h-56 overflow-hidden bg-stone-100 dark:bg-[#2a2a2a] flex items-center justify-center">
                <span className="text-[90px] transition-transform duration-500 group-hover:scale-110 select-none">
                  {article.emoji}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs tracking-widest uppercase text-amber-600 dark:text-[#c9a84c] mb-3">
                  {article.date}
                </p>

                <h2 className="font-serif font-bold text-xl text-stone-900 dark:text-[#fbf7f0] leading-snug line-clamp-2 group-hover:text-[#c9a84c] transition-colors duration-300 flex-1">
                  {article.title}
                </h2>

                <p className="text-stone-500 dark:text-[#fbf7f0]/60 text-sm mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 mt-6 text-red-700 dark:text-[#b91c1c] font-semibold text-sm">
                  Baca Selengkapnya
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}