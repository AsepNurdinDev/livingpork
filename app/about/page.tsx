"use client";

import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── Timeline milestones ─── */
const milestones = [
  {
    year: "2015",
    title: "Awal Perjalanan",
    desc: "Memulai usaha pengiriman babi hidup ke pemotong, membangun kepercayaan dan jaringan pelanggan setia.",
  },
  {
    year: "2023",
    title: "Berkembang Pesat",
    desc: "Semakin dikenal luas, banyak teman dan rekanan mulai memesan daging babi secara rutin.",
  },
  {
    year: "2025",
    title: "Living Pork Berdiri",
    desc: "Agustus 2025, Living Pork resmi berdiri sebagai brand premium dengan standar produksi dan distribusi modern.",
  },
];

/* ─── Process steps ─── */
const processes = [
  {
    num: "01",
    icon: "🔪",
    title: "Pemilihan & Pemotongan",
    desc: "Setiap potongan dipilih secara selektif. Pemotongan dilakukan higienis oleh tenaga terlatih dengan standar ketat.",
    photo: "/cuting.png",
    alt: "Proses pemotongan daging",
  },
  {
    num: "02",
    icon: "📦",
    title: "Pengemasan Vacuum",
    desc: "Produk frozen dikemas menggunakan mesin vacuum sealer untuk menghilangkan udara, mencegah oksidasi dan bakteri. Daging bertahan hingga 6 bulan di freezer.",
    photo: "/vacum.png",
    alt: "Pengemasan produk",
  },
  {
    num: "03",
    icon: "❄️",
    title: "Penyimpanan Cold Storage",
    desc: "Produk disimpan dalam freezer khusus untuk mempercepat pembekuan sebelum dipindahkan ke cold storage, menjaga kualitas optimal.",
    photo: "/freeze.png",
    alt: "Penyimpanan cold storage",
  },
  {
    num: "04",
    icon: "🚚",
    title: "Pengiriman Berpendingin",
    desc: "Distribusi menggunakan mobil box berpendingin dengan sistem cold chain terintegrasi. Produk tiba dalam kondisi sempurna.",
    photo: "/truk.jpeg",
    alt: "Pengiriman berpendingin",
  },
];

/* ─── Gallery photos ─── */
const gallery = [
  {
    src: "/salinan/1.png",
    label: "Produksi",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/salinan/2.png",
    label: "Produk Segar",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/salinan/3.png",
    label: "Pengemasan",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/poto.jpeg",
    label: "Tim Kami",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/truk.jpeg",
    label: "Distribusi",
    span: "col-span-1 row-span-1",
  },
];

/* ─── Simple fade-in hook ─── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <main className="bg-[#f8f6f2] dark:bg-[#111110] text-stone-900 dark:text-[#fbf7f0] transition-colors duration-300 overflow-hidden">
      {/* ══════ HERO SECTION ══════ */}
      <section className="relative min-h-[70vh] flex items-end pb-20 px-6 overflow-hidden">
        {/* Desktop BG */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/baner.jpeg"
            alt="Living Pork"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Mobile BG */}
        <div className="absolute inset-0 z-0 block lg:hidden">
          <Image
            src="/baner-mobile.jpeg"
            alt="Living Pork"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        {/* Pattern */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 50px)`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <span className="inline-block text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Tentang Kami
          </span>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-black text-white leading-[1.05] mb-6 max-w-3xl">
            Living
            <br />
            <em className="text-[#c9a84c] not-italic italic">Pork</em>
          </h1>
          <div className="w-14 h-[3px] bg-[#c9a84c] mb-6" />
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
            Kualitas Premium untuk Setiap Kebutuhan Kuliner Anda
          </p>
        </div>
      </section>

      {/* ══════ INTRO SECTION ══════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="text-[#b91c1c] text-xl font-bold tracking-[0.2em] uppercase">
              Siapa Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6 leading-tight">
              Dibangun dari
              <br />
              <em className="text-[#b91c1c] not-italic italic">Kepercayaan</em>
            </h2>
            <div className="w-10 h-[3px] bg-[#c9a84c] mb-7" />
            <div className="space-y-4 text-stone-600 dark:text-[#a8a29e] text-[15px] leading-relaxed">
              <p>
                Di Living Pork, kualitas tidak hanya berasal dari produk yang
                kami sediakan, tetapi juga dari orang-orang yang bekerja di
                baliknya.
              </p>
              <p>
                Setiap hari, tim kami bekerja dengan standar kebersihan dan
                penanganan yang baik untuk memastikan setiap produk yang sampai
                kepada pelanggan memenuhi kualitas yang kami banggakan.
              </p>
              <p>
                Mulai dari proses pemilihan, pemotongan, pengemasan, hingga
                distribusi — kami mengutamakan profesionalisme, ketelitian, dan
                tanggung jawab dalam setiap langkah.
              </p>
            </div>
            <blockquote className="mt-8 pl-5 border-l-2 border-[#c9a84c]">
              <p className="text-stone-800 dark:text-[#e8e0d0] font-serif italic text-lg leading-snug">
                &quot;Kepercayaan pelanggan adalah aset terbesar yang harus
                dijaga.&quot;
              </p>
              <cite className="text-[#c9a84c] text-xs tracking-widest uppercase not-italic mt-2 block">
                — Living Pork
              </cite>
            </blockquote>
          </FadeIn>

          <FadeIn delay={150} className="w-full">
            <div className="relative w-full">
              <div className="rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/5] relative">
                <Image
                  src="/poto.jpeg"
                  alt="Tim Living Pork"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] rounded-2xl p-4 shadow-xl">
                <div className="text-[#c9a84c] font-serif font-black text-3xl leading-none">
                  10+
                </div>
                <div className="text-stone-500 dark:text-[#a8a29e] text-xs mt-1">
                  Tahun Pengalaman
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#c9a84c]/10 dark:bg-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center">
                <span className="text-2xl">🥩</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════ TIMELINE ══════ */}
      <section className="py-20 px-6 bg-white dark:bg-[#161614] transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-14">
              <span className="text-[#b91c1c] text-xs font-bold tracking-[0.2em] uppercase">
                Perjalanan Kami
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 leading-tight">
                Profil{" "}
                <em className="text-[#c9a84c] not-italic italic">
                  Living Pork
                </em>
              </h2>
              <div className="w-10 h-[3px] bg-[#c9a84c] mt-5" />
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-[#2a2a2a] -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <FadeIn key={i} delay={i * 120}>
                  <div
                    className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div
                      className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 text-left" : "md:pl-16 text-left md:text-right"}`}
                    >
                      <div className="bg-[#f8f6f2] dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] rounded-2xl p-6 hover:border-[#c9a84c] dark:hover:border-[#c9a84c] transition-colors duration-300 ml-12 md:ml-0">
                        <div className="text-[#c9a84c] font-serif font-black text-4xl mb-2 opacity-60">
                          {m.year}
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2 text-stone-900 dark:text-[#fbf7f0]">
                          {m.title}
                        </h3>
                        <p className="text-stone-500 dark:text-[#a8a29e] text-sm leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c9a84c] border-4 border-white dark:border-[#161614] shadow-md z-10" />

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PROCESS ══════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-14">
              <span className="text-[#b91c1c] text-xs font-bold tracking-[0.2em] uppercase">
                Standar Kami
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 leading-tight">
                Dari Produksi
                <br />
                <em className="text-[#c9a84c] not-italic italic">
                  hingga Meja Anda
                </em>
              </h2>
              <div className="w-10 h-[3px] bg-[#c9a84c] mt-5" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {processes.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group relative bg-white dark:bg-[#1a1a18] border border-stone-200 dark:border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:-translate-y-1 transition-all duration-300">
                  {/* Top gold line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Photo */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.photo}
                      alt={p.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white font-serif font-black text-4xl opacity-30">
                      {p.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-[#2a2a2a] border border-stone-200 dark:border-[#383838] group-hover:bg-amber-50 group-hover:border-[#c9a84c]/30 dark:group-hover:bg-[#2e2a1e] flex items-center justify-center text-base transition-all duration-300">
                        {p.icon}
                      </div>
                      <h3 className="font-serif font-bold text-[15px] text-stone-900 dark:text-[#fbf7f0] group-hover:text-[#c9a84c] transition-colors duration-300">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-stone-500 dark:text-[#a8a29e] text-[12.5px] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ GALLERY ══════ */}
      <section className="py-20 px-6 bg-white dark:bg-[#161614] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <span className="text-[#b91c1c] text-xs font-bold tracking-[0.2em] uppercase">
                Galeri
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 leading-tight">
                Di Balik{" "}
                <em className="text-[#c9a84c] not-italic italic">Layar Kami</em>
              </h2>
              <div className="w-10 h-[3px] bg-[#c9a84c] mt-5" />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
              {gallery.map((g, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden group cursor-pointer ${g.span}`}
                >
                  <Image
                    src={g.src}
                    alt={g.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    style={{ transition: "transform 0.5s ease" }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-bold tracking-widest uppercase">
                      {g.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════ CLOSING CTA ══════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="w-14 h-[3px] bg-[#c9a84c] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Living Pork –<br />
              <em className="text-[#c9a84c] not-italic italic">
                Kualitas Premium
              </em>
              <br />
              untuk Setiap Kebutuhan
            </h2>
            <p className="text-stone-500 dark:text-[#a8a29e] text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Dari rumah tangga hingga HOREKA skala besar, kami siap menjadi
              mitra strategis dan terpercaya untuk kebutuhan suplai daging babi
              premium Anda.
            </p>
            <a
              href="https://wa.me/6287858577888?text=Halo%20Living%20Pork%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-600 active:scale-95 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-red-900/30 hover:scale-105"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami
            </a>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
