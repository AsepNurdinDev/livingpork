"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { articles } from "@/src/lib/articles";
import Footer from "@/components/layout/Footer";

const categories = [
  "Semua",
  ...Array.from(new Set(articles.map((a) => a.category))),
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ArtikelPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <main className="bg-[#f8f6f2] dark:bg-[#111110] min-h-screen transition-colors duration-300">
      {/* ══ HEADER ══ */}
      <div className="bg-[#f8f6f2] dark:bg-[#111110] px-6 pt-30 pb-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-[#b91c1c]/20 border border-red-200 dark:border-[#b91c1c]/30 text-red-700 dark:text-[#b91c1c] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#b91c1c] animate-pulse" />
            Tips & Resep
          </div>
          <h1 className="font-serif font-black text-5xl md:text-6xl text-stone-900 dark:text-[#fbf7f0]">
            Artikel
            <span className="text-amber-600 dark:text-[#c9a84c] italic">
              {" "}
              Living Pork
            </span>
          </h1>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-4 mb-4" />
          <p className="text-stone-500 dark:text-[#a8a29e] text-sm leading-relaxed max-w-xl">
            Tips memasak, resep pilihan, dan inspirasi hidangan terbaik
            menggunakan daging babi premium.
          </p>
        </div>
      </div>

      {/* ══ FILTER ══ */}
      <div className="sticky top-0 z-30 bg-[#f8f6f2]/90 dark:bg-[#111110]/90 backdrop-blur-md border-b border-stone-200 dark:border-[#2a2a2a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-stone-900 dark:bg-[#fbf7f0] text-white dark:text-stone-900"
                  : "bg-white dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] text-stone-500 dark:text-[#a8a29e] hover:border-[#c9a84c] dark:hover:border-[#c9a84c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-stone-400 dark:text-[#555]">
            <div className="text-5xl mb-4">📭</div>
            <p className="font-serif text-xl">Artikel tidak ditemukan</p>
          </div>
        ) : (
          <>
            {/* ══ FEATURED CARD (large) ══ */}
            {featured && (
              <FadeIn className="mb-10">
                <Link
                  href={`/artikel/${featured.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#1a1a18] border border-stone-200 dark:border-[#2a2a2a] hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50 transition-all duration-300 md:flex">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* Image */}
                    <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden bg-stone-100 dark:bg-[#2a2a2a] shrink-0">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                      <div className="absolute top-5 left-5 flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-700 text-white">
                          {featured.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#c9a84c] text-stone-900">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 md:p-10 md:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs text-amber-600 dark:text-[#c9a84c] tracking-widest uppercase font-bold">
                          {featured.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-[#444]" />
                        <span className="text-xs text-stone-400 dark:text-[#555]">
                          {featured.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif font-black text-2xl md:text-3xl text-stone-900 dark:text-[#fbf7f0] leading-tight mb-4 group-hover:text-[#c9a84c] transition-colors duration-300">
                        {featured.title}
                      </h2>
                      <p className="text-stone-500 dark:text-[#a8a29e] text-sm leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="inline-flex items-center gap-2 text-red-700 dark:text-[#b91c1c] font-bold text-sm">
                        Baca Selengkapnya
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            )}

            {/* ══ REST GRID ══ */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {rest.map((article, i) => (
                  <FadeIn key={article.slug} delay={i * 80}>
                    <Link
                      href={`/artikel/${article.slug}`}
                      className="group block h-full"
                    >
                      <div className="flex flex-col h-full overflow-hidden rounded-3xl bg-white dark:bg-[#1a1a18] border border-stone-200 dark:border-[#2a2a2a] hover:-translate-y-2 hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50 transition-all duration-300">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                        {/* Image */}
                        <div className="relative h-52 overflow-hidden bg-stone-100 dark:bg-[#2a2a2a] shrink-0">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-red-700 text-white">
                            {article.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[11px] text-amber-600 dark:text-[#c9a84c] tracking-widest uppercase font-bold">
                              {article.date}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-[#444]" />
                            <span className="text-[11px] text-stone-400 dark:text-[#555]">
                              {article.readTime}
                            </span>
                          </div>
                          <h2 className="font-serif font-bold text-[17px] text-stone-900 dark:text-[#fbf7f0] leading-snug line-clamp-2 group-hover:text-[#c9a84c] transition-colors duration-300 flex-1">
                            {article.title}
                          </h2>
                          <p className="text-stone-500 dark:text-[#a8a29e] text-[12.5px] mt-2 line-clamp-2 leading-relaxed">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center gap-2 mt-5 text-red-700 dark:text-[#b91c1c] font-semibold text-sm">
                            Baca Selengkapnya
                            <svg
                              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </main>
  );
}
