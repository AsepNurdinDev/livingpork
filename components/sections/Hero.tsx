'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const milestones = [
  {
    year: '2015',
    title: 'Awal Perjalanan',
    desc: 'Memulai usaha pengiriman babi hidup ke pemotong, membangun kepercayaan dan jaringan pelanggan setia.',
  },
  {
    year: '2023',
    title: 'Berkembang Pesat',
    desc: 'Semakin dikenal luas, banyak teman dan rekanan mulai memesan daging babi secara rutin.',
  },
  {
    year: '2025',
    title: 'Living Pork Berdiri',
    desc: 'Agustus 2025, Living Pork resmi berdiri sebagai brand premium dengan standar produksi dan distribusi modern.',
  },
]

const processes = [
  { num: '01', icon: '🔪', title: 'Pemilihan & Pemotongan', desc: 'Setiap potongan dipilih secara selektif. Pemotongan dilakukan higienis oleh tenaga terlatih dengan standar ketat.', photo: '/cuting.png' },
  { num: '02', icon: '📦', title: 'Pengemasan Vacuum', desc: 'Produk frozen dikemas menggunakan mesin vacuum sealer. Daging bertahan hingga 6 bulan di freezer.', photo: '/vacum.png' },
  { num: '03', icon: '❄️', title: 'Penyimpanan Cold Storage', desc: 'Produk disimpan dalam freezer khusus sebelum dipindahkan ke cold storage, menjaga kualitas optimal.', photo: '/freeze.png' },
  { num: '04', icon: '🚚', title: 'Pengiriman Berpendingin', desc: 'Distribusi menggunakan mobil box berpendingin dengan sistem cold chain terintegrasi.', photo: '/truk.jpeg' },
]

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function AboutPreview() {
  return (
    <main className=" bg-[#f8f6f2] dark:bg-[#111110] text-stone-900 dark:text-[#fbf7f0] transition-colors duration-300 overflow-hidden">

      {/* ══════ HERO — bg sama dengan Hero.tsx ══════ */}
      <section className="relative min-h-[70vh] flex items-end pb-20 px-6 pt-20 overflow-hidden">

        {/* Desktop BG */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image src="/baner.jpeg" alt="Living Pork" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Mobile BG */}
        <div className="absolute inset-0 z-0 block lg:hidden">
          <Image src="/baner-mobile.jpeg" alt="Living Pork" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>
      </section>

      {/* ══════ SIAPA KAMI ══════ */}
      <section className="py-24 px-6 bg-[#f8f6f2] dark:bg-[#121212] transition-colors duration-300">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="text-[#b91c1c] text-xl font-bold tracking-[0.2em] uppercase">Siapa Kami</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6 leading-tight">
              Dibangun dari<br />
              <em className="text-[#b91c1c] not-italic italic">Kepercayaan</em>
            </h2>
            <div className="w-10 h-[3px] bg-[#c9a84c] mb-7" />
            <div className="space-y-4 text-stone-600 dark:text-[#a8a29e] text-[15px] leading-relaxed">
              <p>Di Living Pork, kualitas tidak hanya berasal dari produk yang kami sediakan, tetapi juga dari orang-orang yang bekerja di baliknya.</p>
              <p>Setiap hari, tim kami bekerja dengan standar kebersihan dan penanganan yang baik untuk memastikan setiap produk yang sampai kepada pelanggan memenuhi kualitas yang kami banggakan.</p>
              <p>Mulai dari proses pemilihan, pemotongan, pengemasan, hingga distribusi — kami mengutamakan profesionalisme, ketelitian, dan tanggung jawab dalam setiap langkah.</p>
            </div>
            <blockquote className="mt-8 pl-5 border-l-2 border-[#c9a84c]">
              <p className="text-stone-800 dark:text-[#e8e0d0] font-serif italic text-lg leading-snug">
                "Kepercayaan pelanggan adalah aset terbesar yang harus dijaga."
              </p>
              <cite className="text-[#c9a84c] text-xs tracking-widest uppercase not-italic mt-2 block">— Living Pork</cite>
            </blockquote>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                <Image src="/poto.jpeg"        alt="Living Pork" fill className="object-cover hidden lg:block" />
                <Image src="/poto.jpeg" alt="Living Pork" fill className="object-cover block lg:hidden" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] rounded-2xl p-4 shadow-xl">
                <div className="text-[#c9a84c] font-serif font-black text-3xl leading-none">10+</div>
                <div className="text-stone-500 dark:text-[#a8a29e] text-xs mt-1">Tahun Pengalaman</div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#c9a84c]/10 dark:bg-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center">
                <span className="text-2xl">🥩</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════ PROFIL / TIMELINE ══════ */}
      <section className="py-20 px-6 bg-white dark:bg-[#161614] transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-14">
              <span className="text-[#b91c1c] text-xs font-bold tracking-[0.2em] uppercase">Perjalanan Kami</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 leading-tight">
                Profil <em className="text-[#c9a84c] not-italic italic">Living Pork</em>
              </h2>
              <div className="w-10 h-[3px] bg-[#c9a84c] mt-5" />
            </div>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-[#2a2a2a] -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <FadeIn key={i} delay={i * 120}>
                  <div className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 text-left md:text-right'}`}>
                      <div className="bg-[#f8f6f2] dark:bg-[#1e1e1e] border border-stone-200 dark:border-[#2e2e2e] rounded-2xl p-6 hover:border-[#c9a84c] dark:hover:border-[#c9a84c] transition-colors duration-300 ml-12 md:ml-0">
                        <div className="text-[#c9a84c] font-serif font-black text-4xl mb-2 opacity-60">{m.year}</div>
                        <h3 className="font-serif font-bold text-lg mb-2 text-stone-900 dark:text-[#fbf7f0]">{m.title}</h3>
                        <p className="text-stone-500 dark:text-[#a8a29e] text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c9a84c] border-4 border-white dark:border-[#161614] shadow-md z-10" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STANDAR KAMI ══════ */}
      <section className="py-24 px-6 bg-[#f8f6f2] dark:bg-[#121212] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-14">
              <span className="text-[#b91c1c] text-xs font-bold tracking-[0.2em] uppercase">Standar Kami</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 leading-tight">
                Dari Produksi<br />
                <em className="text-[#c9a84c] not-italic italic">hingga Meja Anda</em>
              </h2>
              <div className="w-10 h-[3px] bg-[#c9a84c] mt-5" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {processes.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group relative bg-white dark:bg-[#1a1a18] border border-stone-200 dark:border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#c9a84c] dark:hover:border-[#c9a84c] hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="relative h-48 overflow-hidden">
                    <Image src={p.photo} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-[#2a2a2a] border border-stone-200 dark:border-[#383838] group-hover:bg-amber-50 group-hover:border-[#c9a84c]/30 dark:group-hover:bg-[#2e2a1e] flex items-center justify-center text-base transition-all duration-300">
                        {p.icon}
                      </div>
                      <h3 className="font-serif font-bold text-[15px] text-stone-900 dark:text-[#fbf7f0] group-hover:text-[#c9a84c] transition-colors duration-300">{p.title}</h3>
                    </div>
                    <p className="text-stone-500 dark:text-[#a8a29e] text-[12.5px] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}