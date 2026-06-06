import Link from 'next/link'
import { articles } from '@/src/lib/articles'

export default function ArticlesSection() {
  const preview = articles.slice(0, 4)

  return (
    <section
      id="artikel"
      className="relative bg-[#f8f6f2] dark:bg-[#121212] py-20 md:py-28 px-4 overflow-hidden transition-colors duration-300"
    >
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red-500/10 dark:bg-[#b91c1c]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 dark:bg-[#c9a84c]/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-[#b91c1c]/20 border border-red-200 dark:border-[#b91c1c]/30 text-red-700 dark:text-[#b91c1c] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#b91c1c] animate-pulse" />
              Tips & Resep
            </div>

            <h2 className="font-serif font-black text-4xl md:text-5xl text-stone-900 dark:text-[#fbf7f0] leading-tight">
              Artikel
              <span className="text-amber-600 dark:text-[#c9a84c] italic"> Living Pork</span>
            </h2>

            <p className="text-stone-500 dark:text-[#fbf7f0]/60 mt-4 max-w-xl leading-relaxed">
              Tips memasak, resep pilihan, dan inspirasi hidangan terbaik menggunakan daging babi premium.
            </p>
          </div>

          {/* Tombol lihat semua — desktop */}
          <Link
            href="/artikel"
            className="
              hidden md:inline-flex items-center gap-2 shrink-0
              border border-amber-500/40 dark:border-[#c9a84c]/30
              text-amber-600 dark:text-[#c9a84c]
              hover:bg-amber-500 dark:hover:bg-[#c9a84c]
              hover:text-white dark:hover:text-stone-900
              hover:border-transparent
              px-6 py-3 rounded-full font-semibold text-sm
              transition-all duration-200
            "
          >
            Lihat Semua Artikel
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((article) => (
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
                hover:shadow-xl hover:shadow-black/8 dark:hover:shadow-black/40
                transition-all duration-300
              "
            >
              {/* Cover / Emoji */}
              <div className="relative h-44 overflow-hidden bg-stone-100 dark:bg-[#2a2a2a] flex items-center justify-center">
                <span className="text-[80px] transition-transform duration-500 group-hover:scale-110 select-none">
                  {article.emoji}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs tracking-widest uppercase text-amber-600 dark:text-[#c9a84c] mb-2">
                  {article.date}
                </p>

                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-[#fbf7f0] leading-snug line-clamp-2 group-hover:text-[#c9a84c] transition-colors duration-300 flex-1">
                  {article.title}
                </h3>

                <p className="text-stone-500 dark:text-[#fbf7f0]/50 text-sm mt-3 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-1.5 mt-5 text-red-700 dark:text-[#b91c1c] font-semibold text-sm">
                  Baca Selengkapnya
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tombol lihat semua — mobile */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/artikel"
            className="
              inline-flex items-center gap-2
              border border-amber-500/40 dark:border-[#c9a84c]/30
              text-amber-600 dark:text-[#c9a84c]
              hover:bg-amber-500 dark:hover:bg-[#c9a84c]
              hover:text-white dark:hover:text-stone-900
              hover:border-transparent
              px-6 py-3 rounded-full font-semibold text-sm
              transition-all duration-200
            "
          >
            Lihat Semua Artikel →
          </Link>
        </div>

      </div>
    </section>
  )
}