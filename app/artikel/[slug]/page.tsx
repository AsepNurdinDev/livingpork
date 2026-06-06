import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/src/lib/articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) notFound()

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

      <div className="relative max-w-3xl mx-auto">

        {/* Tombol Kembali */}
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 text-amber-600 dark:text-[#c9a84c] hover:text-stone-900 dark:hover:text-[#fbf7f0] font-medium text-sm mb-10 transition-colors group"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Kembali ke Artikel
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs tracking-widest uppercase text-amber-600 dark:text-[#c9a84c]">
              {article.date}
            </span>
          </div>

          <h1 className="font-serif font-black text-4xl md:text-5xl text-stone-900 dark:text-[#fbf7f0] leading-tight">
            {article.title}
          </h1>
        </header>

        {/* Emoji Banner */}
        <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden border border-stone-200 dark:border-[#2e2e2e] bg-stone-100 dark:bg-[#1e1e1e] flex items-center justify-center mb-12 shadow-xl shadow-black/5 dark:shadow-black/30">
          <span className="text-[120px] md:text-[160px] select-none">
            {article.emoji}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Article Content */}
        <article className="max-w-none">
          {/* Excerpt / Ringkasan */}
          <p className="text-xl text-stone-800 dark:text-[#fbf7f0] font-medium leading-relaxed italic mb-10 border-l-4 border-amber-500 dark:border-[#c9a84c] pl-5 bg-amber-50/50 dark:bg-[#c9a84c]/5 py-4 pr-4 rounded-r-2xl">
            {article.excerpt}
          </p>

          {/* Konten Paragraf */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            {Array.isArray(article.content) ? article.content.map((paragraph, index) => {
              const isHeading = /^\d+\./.test(paragraph)

              if (isHeading) {
                return (
                  <h2 key={index} className="text-2xl font-serif font-bold text-amber-600 dark:text-[#c9a84c] pt-6 pb-2 border-b border-stone-200 dark:border-[#2e2e2e]">
                    {paragraph}
                  </h2>
                )
              }

              return (
                <p key={index} className="whitespace-pre-line text-stone-600 dark:text-[#fbf7f0]/75">
                  {paragraph}
                </p>
              )
            }) : (
              <p className="whitespace-pre-line text-stone-600 dark:text-[#fbf7f0]/75">
                {article.content}
              </p>
            )}
          </div>
        </article>

      </div>
    </section>
  )
}