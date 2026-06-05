const testimonials = [
  {
    name: 'Ibu Maria T.',
    role: 'Pelanggan Setia',
    text: 'Sudah langganan Living Pork lebih dari 6 bulan. Dagingnya selalu segar, baunya tidak amis, dan potongannya rapi. Pokoknya puas banget!',
    stars: 5,
  },
  {
    name: 'Chef Hendra',
    role: 'Pemilik Restoran',
    text: 'Saya pakai daging babi dari Living Pork untuk restoran saya. Kualitas konsisten, pengiriman tepat waktu, dan responsif kalau ada pesanan mendadak.',
    stars: 5,
  },
  {
    name: 'Ko Benny',
    role: 'Pelanggan Rumahan',
    text: 'Pertama kali coba karena rekomendasi teman, dan langsung ketagihan. Harga fair, daging berkualitas, pesan via WA juga gampang banget.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-stone-100 dark:bg-[#0e0e0e] py-24 px-4 relative overflow-hidden transition-colors duration-300">

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1c1917 0px, #1c1917 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, #1c1917 0px, #1c1917 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans tracking-widest text-amber-600 dark:text-[#c9a84c] text-xs font-bold uppercase">
            Kata Mereka
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-[#fbf7f0] mt-2">
            Pelanggan Kami
          </h2>
          <div className="w-16 h-1 bg-red-700 dark:bg-[#b91c1c] mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                group
                bg-white dark:bg-[#1e1e1e]
                border border-stone-200 dark:border-[#2e2e2e]
                rounded-2xl p-7
                hover:border-[#c9a84c] dark:hover:border-[#c9a84c]
                hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-amber-500 dark:text-[#c9a84c] text-lg">★</span>
                ))}
              </div>

              <p className="text-stone-600 dark:text-[#fbf7f0]/70 text-sm leading-relaxed italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-100 dark:border-[#2e2e2e]">
                {/* Avatar initial */}
                <div className="w-9 h-9 rounded-full bg-red-100 dark:bg-[#b91c1c]/20 flex items-center justify-center text-red-700 dark:text-[#b91c1c] text-sm font-bold shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-stone-900 dark:text-[#fbf7f0] font-semibold text-sm">{t.name}</p>
                  <p className="text-stone-400 dark:text-[#fbf7f0]/40 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}