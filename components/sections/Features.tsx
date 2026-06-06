const features = [
  {
    icon: '🥩',
    title: 'Daging Babi Kualitas Premium',
    desc: 'Setiap potongan dipilih secara selektif dengan standar tinggi untuk mempertahankan kesegaran optimal, tekstur sempurna, dan cita rasa alami yang autentik.',
  },
  {
    icon: '🧼',
    title: 'Higienis & Tersertifikasi',
    desc: 'Seluruh proses penanganan, pemotongan, hingga pengemasan menerapkan standar sanitasi ketat untuk menjamin keamanan pangan (food safety).',
  },
  {
    icon: '🚚',
    title: 'Distribusi Cepat & Terjaga',
    desc: 'Sistem rantai dingin (cold chain) terintegrasi memastikan suhu produk tetap stabil hingga tiba di tangan Anda dalam kondisi sesegar mungkin.',
  },
  {
    icon: '💰',
    title: 'Harga Kompetitif, Kualitas Konsisten',
    desc: 'Struktur harga terbaik untuk pembelian eceran (retail) maupun grosir (wholesale) tanpa mengorbankan konsistensi mutu produk.',
  },
  {
    icon: '🤝',
    title: 'Kontinuitas Suplai Terpercaya',
    desc: 'Kapasitas produksi andal menjamin stabilitas pasokan rutin secara tepat waktu untuk mendukung kelancaran operasional bisnis HOREKA Anda.',
  },
  {
    icon: '✂️',
    title: 'Custom Cutting Sesuai Kebutuhan',
    desc: 'Layanan pemotongan dan pengemasan khusus yang dipersonalisasi sesuai spesifikasi menu usaha Anda maupun konsumsi pribadi.',
  },
]

export default function Features() {
  return (
    <section
      id="keunggulan"
      className="bg-[#f8f6f2] dark:bg-[#121212] pt-8 pb-24 px-4 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="font-sans tracking-widest text-[#b91c1c] text-xl font-bold uppercase">
            Kenapa Living Pork?
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-[#fbf7f0] mt-2 leading-tight">
            Kualitas Premium untuk
            <br />
            <em className="text-[#b91c1c] not-italic italic">Setiap Kebutuhan Kuliner</em>
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-5 mb-5" />
          <p className="font-sans text-sm leading-relaxed text-stone-500 dark:text-[#a8a29e] max-w-2xl">
            Living Pork menghadirkan daging babi kualitas premium yang diproses secara higienis
            untuk rumah tangga, restoran, hotel, katering (HOREKA), hingga distributor skala besar.
            Kami siap menjadi mitra strategis dan terpercaya untuk kebutuhan suplai Anda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                group relative
                bg-white dark:bg-[#1e1e1e]
                border border-stone-200 dark:border-[#2e2e2e]
                rounded-2xl overflow-hidden
                p-6
                cursor-default
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#c9a84c] dark:hover:border-[#c9a84c]
                hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/40
              "
            >
              {/* Top gold line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <div className="font-sans text-[22px] font-bold tracking-[0.12em] text-[#c9a84c] opacity-50 mb-3">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="
                w-11 h-11 rounded-xl mb-4
                flex items-center justify-center text-xl
                bg-stone-100 dark:bg-[#2a2a2a]
                border border-stone-200 dark:border-[#383838]
                group-hover:bg-amber-50 group-hover:border-[#c9a84c]/25
                dark:group-hover:bg-[#2e2a1e] dark:group-hover:border-[#c9a84c]/25
                transition-all duration-300
              ">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="
                font-serif font-bold text-[15px] mb-2
                text-stone-900 dark:text-[#fbf7f0]
                group-hover:text-[#c9a84c]
                transition-colors duration-300
              ">
                {f.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[12.5px] leading-relaxed text-stone-500 dark:text-[#a8a29e]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}