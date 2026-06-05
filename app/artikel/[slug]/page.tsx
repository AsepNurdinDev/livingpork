import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/src/lib/articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  // 1. Tangkap slug dari URL secara async (standar Next.js terbaru)
  const { slug } = await params
  
  // 2. Cari artikel yang sesuai dengan slug di lib
  const article = articles.find((a) => a.slug === slug)

  // 3. Jika slug ngawur atau tidak ada di lib, lempar ke halaman 404
  if (!article) {
    notFound()
  }

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

      <div className="relative max-w-3xl mx-auto">
        
        {/* Tombol Kembali */}
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 text-gold hover:text-cream font-medium text-sm mb-10 transition-colors group"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Kembali ke Artikel
        </Link>

        {/* Artikel Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-red text-white text-xs font-bold px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs tracking-widest uppercase text-gold">
              {article.date}
            </span>
          </div>

          <h1 className="font-serif font-black text-4xl md:text-5xl text-cream leading-tight">
            {article.title}
          </h1>
        </header>

        {/* Artikel Big Emoji / Banner */}
        <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-12 shadow-2xl">
          <span className="text-[120px] md:text-[160px]">
            {article.emoji}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Artikel Content */}
        <article className="max-w-none">
          {/* Paragraf Pembuka / Ringkasan */}
          <p className="text-xl text-cream font-medium leading-relaxed italic mb-10 border-l-4 border-gold pl-4 bg-white/5 py-4 pr-4 rounded-r-2xl">
            {article.excerpt}
          </p>

          {/* Isi Konten Utama yang di-loop otomatis */}
          <div className="text-cream/80 space-y-6 text-base md:text-lg leading-relaxed">
            {Array.isArray(article.content) ? article.content.map((paragraph, index) => {
              // Deteksi otomatis: Jika paragraf diawali dengan angka (misal "1.", "2."), 
              // kita jadikan sebagai Sub-Judul (Heading) agar tampilannya menarik
              const isHeading = /^\d+\./.test(paragraph);

              if (isHeading) {
                return (
                  <h2 key={index} className="text-2xl font-serif font-bold text-gold pt-6 pb-2 border-b border-white/5">
                    {paragraph}
                  </h2>
                );
              }

              // Jika paragraf biasa, render dengan text wrap yang mendukung \n (pindah baris)
              return (
                <p key={index} className="whitespace-pre-line text-cream/75">
                  {paragraph}
                </p>
              );
            }) : (
              <p className="whitespace-pre-line text-cream/75">
                {article.content}
              </p>
            )}
          </div>
        </article>

      </div>
    </section>
  )
}