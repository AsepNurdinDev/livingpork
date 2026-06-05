import Link from 'next/link'
import { articles } from '@/src/lib/articles'

export default function ArtikelPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4 bg-brown overflow-hidden">

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

      {/* Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-red/10 blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red/20 border border-red/30 text-red px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
            Tips & Resep
          </div>

          <h1 className="font-serif font-black text-5xl md:text-7xl text-cream">
            Artikel
            <span className="text-gold italic"> Living Pork</span>
          </h1>

          <p className="text-cream/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            Temukan berbagai tips memasak, resep pilihan,
            informasi produk, dan inspirasi hidangan terbaik
            menggunakan daging babi premium.
          </p>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artikel/${article.slug}`}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-gold/40
                hover:shadow-2xl
                hover:shadow-red/10
              "
            >
              {/* Cover */}
              <div className="relative h-56 overflow-hidden">

                <div className="absolute inset-0 bg-brown-mid flex items-center justify-center">
                  <span className="text-[90px] transition-transform duration-500 group-hover:scale-110">
                    {article.emoji}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span
                  className="
                    absolute
                    top-4
                    left-4
                    bg-red
                    text-white
                    text-xs
                    font-bold
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-xs tracking-widest uppercase text-gold mb-3">
                  {article.date}
                </p>

                <h2
                  className="
                    font-serif
                    font-bold
                    text-xl
                    text-cream
                    leading-snug
                    transition-colors
                    duration-300
                    group-hover:text-gold
                    line-clamp-2
                  "
                >
                  {article.title}
                </h2>

                <p className="text-cream/60 text-sm mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 mt-6 text-red font-semibold text-sm">
                  Baca Selengkapnya
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}