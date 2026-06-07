import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/src/lib/articles";
import Footer from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);
  const fallback = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const relatedArticles = related.length > 0 ? related : fallback;

  return (
    <main className="bg-[#f8f6f2] dark:bg-[#111110] min-h-screen transition-colors duration-300">
      {/* ══ HERO IMAGE ══ */}
      <section className="relative w-full h-[55vh] min-h-[360px] overflow-hidden bg-gradient-to-br from-[#1a1408] via-[#2c1f0e] to-[#0f0d09]">
        {/* Gold shimmer top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-80" />

        {/* Diagonal gold grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 50px)`,
          }}
        />

        {/* Radial glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a84c18_0%,_transparent_70%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Category + title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-700 text-white">
                {article.category}
              </span>
              <span className="text-[#c9a84c]/70 text-xs">{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
              <span className="text-[#c9a84c]/70 text-xs">
                {article.readTime}
              </span>
            </div>
            <h1 className="font-serif font-black text-3xl md:text-5xl text-white leading-tight drop-shadow-lg">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Gold shimmer bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
      </section>

      {/* ══ CONTENT ══ */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 text-stone-400 dark:text-[#555] hover:text-[#c9a84c] dark:hover:text-[#c9a84c] text-sm font-medium mb-10 transition-colors duration-200 group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Kembali ke Artikel
        </Link>

        {/* Excerpt */}
        {/* Excerpt */}
        <div className="border-l-[3px] border-[#c9a84c] pl-5 py-3 bg-amber-50/50 dark:bg-[#c9a84c]/5 rounded-r-2xl mb-6">
          <p className="text-base md:text-lg text-stone-700 dark:text-[#fbf7f0]/80 font-medium leading-relaxed italic">
            {article.excerpt}
          </p>
        </div>

        {/* Article image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10 shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Article body */}
        <div className="space-y-5">
          {Array.isArray(article.content) ? (
            article.content.map((paragraph, index) => {
              const isHeading = /^\d+\./.test(paragraph);
              if (isHeading) {
                return (
                  <h2
                    key={index}
                    className="text-sm font-serif font-bold text-stone-900 dark:text-[#fbf7f0] pt-4 pb-1 border-b border-stone-200 dark:border-[#2a2a2a]"
                  >
                    <span className="text-[#c9a84c]">
                      {paragraph.match(/^\d+\./)?.[0]}
                    </span>{" "}
                    {paragraph.replace(/^\d+\./, "").trim()}
                  </h2>
                );
              }
              return (
                <p
                  key={index}
                  className="whitespace-pre-line text-stone-600 dark:text-[#a8a29e] text-[15px] leading-relaxed"
                >
                  {paragraph}
                </p>
              );
            })
          ) : (
            <p className="whitespace-pre-line text-stone-600 dark:text-[#a8a29e] text-[15px] leading-relaxed">
              {article.content}
            </p>
          )}
        </div>

        {/* Tags / share row */}
        <div className="mt-12 pt-8 border-t border-stone-200 dark:border-[#2a2a2a] flex items-center justify-between flex-wrap gap-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-red-100 dark:bg-[#b91c1c]/20 text-red-700 dark:text-[#b91c1c] border border-red-200 dark:border-[#b91c1c]/30">
            {article.category}
          </span>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${article.title} — baca di Living Pork`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 dark:text-[#a8a29e] hover:text-[#c9a84c] dark:hover:text-[#c9a84c] transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Bagikan
          </a>
        </div>
      </div>

      {/* ══ RELATED ARTICLES ══ */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-white dark:bg-[#161614] transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="text-[#b91c1c] text-xs font-bold tracking-[0.2em] uppercase">
                Baca Juga
              </span>
              <h2 className="text-3xl font-serif font-bold mt-2 text-stone-900 dark:text-[#fbf7f0]">
                Artikel{" "}
                <em className="text-[#c9a84c] not-italic italic">Lainnya</em>
              </h2>
              <div className="w-10 h-[3px] bg-[#c9a84c] mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artikel/${a.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-2xl bg-[#f8f6f2] dark:bg-[#1a1a18] border border-stone-200 dark:border-[#2a2a2a] hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-700 text-white">
                        {a.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] text-amber-600 dark:text-[#c9a84c] tracking-widest uppercase font-bold mb-2">
                        {a.date}
                      </p>
                      <h3 className="font-serif font-bold text-[14px] text-stone-900 dark:text-[#fbf7f0] group-hover:text-[#c9a84c] transition-colors duration-300 leading-snug line-clamp-2">
                        {a.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
