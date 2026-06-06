"use client";

import { useRef } from "react";
import Image from "next/image";

const items = [
  {
    type: "image",
    src: "/produk/iga-perut.png",
    title: "Iga Babi",
    category: "Produk",
  },
  {
    type: "image",
    src: "/produk/jeroan-babi.png",
    title: "Jeroan Babi",
    category: "Produk",
  },
  {
    type: "image",
    src: "/poto.jpeg",
    title: "Area Produksi",
    category: "Produksi",
  },
  {
    type: "video",
    src: "/pemotongan.mp4",
    title: "Proses Pemotongan",
    category: "Video",
  },
  {
    type: "video",
    src: "/pengemasan.mp4",
    title: "Pengemasan Produk",
    category: "Video",
  }, 
  {
    type: "image",
    src: "/produk/sam-sam.png",
    title: "Samcam Babi",
    category: "Produk",
  },
];

export default function Gallery() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () =>
    sliderRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () =>
    sliderRef.current?.scrollBy({ left: 400, behavior: "smooth" });

  return (
    <section
      id="gallery"
      className="relative bg-[#f8f6f2] dark:bg-[#121212] py-24 overflow-hidden transition-colors duration-300"
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 50px)`,
        }}
      />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red-500/10 dark:bg-[#b91c1c]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 dark:bg-[#c9a84c]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-[#b91c1c]/20 border border-red-200 dark:border-[#b91c1c]/30 text-red-700 dark:text-[#b91c1c] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#b91c1c] animate-pulse" />
            Dokumentasi
          </div>

          <h2 className="font-serif font-black text-4xl md:text-6xl text-stone-900 dark:text-[#fbf7f0]">
            Galeri
            <span className="text-amber-600 dark:text-[#c9a84c] italic">
              {" "}
              Kami
            </span>
          </h2>

          <p className="text-stone-500 dark:text-[#fbf7f0]/60 mt-4 max-w-xl">
            Lihat kualitas produk, proses produksi, dan dokumentasi aktivitas
            Living Pork secara langsung.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative group">
          {/* Tombol Kiri (Posisi top diubah ke 130px agar presisi di tengah media kartu) */}
          <button
            onClick={scrollLeft}
            className="
              hidden md:flex absolute left-4 top-[130px] -translate-y-1/2 z-10
              w-12 h-12 items-center justify-center rounded-full
              border border-stone-300 dark:border-white/20
              bg-white/80 dark:bg-black/40 backdrop-blur-md
              text-stone-700 dark:text-[#fbf7f0]
              hover:bg-[#c9a84c] hover:text-white hover:border-[#c9a84c]
              shadow-xl transition-all duration-300
              opacity-0 group-hover:opacity-100 group-hover:translate-x-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Tombol Kanan (Posisi top diubah ke 130px agar presisi di tengah media kartu) */}
          <button
            onClick={scrollRight}
            className="
              hidden md:flex absolute right-4 top-[130px] -translate-y-1/2 z-10
              w-12 h-12 items-center justify-center rounded-full
              border border-stone-300 dark:border-white/20
              bg-white/80 dark:bg-black/40 backdrop-blur-md
              text-stone-700 dark:text-[#fbf7f0]
              hover:bg-[#c9a84c] hover:text-white hover:border-[#c9a84c]
              shadow-xl transition-all duration-300
              opacity-0 group-hover:opacity-100 group-hover:-translate-x-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory scrollbar-hide"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="
                  snap-start flex-shrink-0 w-[300px] md:w-[360px]
                  rounded-3xl overflow-hidden
                  bg-white dark:bg-[#1e1e1e]
                  border border-stone-200 dark:border-[#2e2e2e]
                  hover:-translate-y-2 hover:border-[#c9a84c] dark:hover:border-[#c9a84c]
                  hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40
                  transition-all duration-300
                "
              >
                {/* Media */}
                <div className="relative h-[260px] overflow-hidden bg-stone-100 dark:bg-[#2a2a2a]">
                  {item.type === "video" ? (
                    /* 🛠️ PERBAIKAN DI BAGIAN INI 🛠️ */
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 300px, 360px"
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full z-[5]">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 border-t border-stone-100 dark:border-[#2e2e2e]">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-[#fbf7f0] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 dark:text-[#fbf7f0]/50 text-sm mt-2">
                    Living Pork Premium Quality
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Hint */}
        <div className="md:hidden text-center mt-6">
          <span className="text-stone-400 dark:text-[#fbf7f0]/40 text-sm">
            ← Geser untuk melihat galeri →
          </span>
        </div>
      </div>
    </section>
  );
}