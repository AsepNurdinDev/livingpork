import React from 'react'

const WA_NUMBER = '628123456789'
const WA_MESSAGE = encodeURIComponent('Halo Living Pork, saya mau pesan daging babi segar!')

const steps = [
  { number: '01', icon: '📋', title: 'Pilih Produk', desc: 'Cek daftar produk kami di atas. Tentukan jenis potongan dan jumlah yang Anda inginkan.' },
  { number: '02', icon: '💬', title: 'Chat via WhatsApp', desc: 'Hubungi kami langsung via WhatsApp. Ceritakan pesanan Anda, kami akan konfirmasi ketersediaan.' },
  { number: '03', icon: '💳', title: 'Konfirmasi & Bayar', desc: 'Kami infokan total harga. Pembayaran bisa transfer bank atau tunai saat pengambilan/antar.' },
  { number: '04', icon: '🚚', title: 'Terima Pesanan', desc: 'Daging segar dikemas rapi dan dikirim ke lokasi Anda atau siap diambil.' },
]

export default function HowToOrder() {
  return (
    <section
      id="order"
      className="relative bg-[#f8f6f2] dark:bg-[#121212] py-20 md:py-28 px-4 sm:px-6 overflow-hidden transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 50px)`,
        }}
      />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red-500/10 dark:bg-[#b91c1c]/10 blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 dark:bg-[#c9a84c]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-[#b91c1c]/20 border border-red-200 dark:border-[#b91c1c]/30 text-red-700 dark:text-[#b91c1c] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#b91c1c] animate-pulse" />
            Mudah & Cepat
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-black text-stone-900 dark:text-[#fbf7f0]">
            Cara
            <span className="text-amber-600 dark:text-[#c9a84c] italic"> Pemesanan</span>
          </h2>

          <p className="text-stone-500 dark:text-[#fbf7f0]/60 mt-5 max-w-xl mx-auto">
            Hanya beberapa langkah sederhana untuk mendapatkan daging babi segar berkualitas premium.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden rounded-3xl p-6
                bg-white dark:bg-[#1e1e1e]
                border border-stone-200 dark:border-[#2e2e2e]
                hover:-translate-y-2 hover:border-[#c9a84c] dark:hover:border-[#c9a84c]
                hover:shadow-xl hover:shadow-black/8 dark:hover:shadow-black/40
                transition-all duration-300
              "
            >
              {/* Top gold line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <div className="absolute top-5 right-5 text-[#c9a84c]/20 text-5xl font-black select-none">
                {s.number}
              </div>

              {/* Icon */}
              <div className="
                w-14 h-14 rounded-2xl mb-5
                flex items-center justify-center text-3xl
                bg-red-50 dark:bg-[#b91c1c]/10
                border border-red-100 dark:border-[#b91c1c]/20
                group-hover:bg-red-100 dark:group-hover:bg-[#b91c1c]/20
                transition-colors duration-300
              ">
                {s.icon}
              </div>

              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-[#fbf7f0] mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                {s.title}
              </h3>

              <p className="text-stone-500 dark:text-[#fbf7f0]/60 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-red-700 hover:bg-red-800
              text-white
              text-lg font-bold
              px-10 py-5 rounded-full
              transition-all duration-300
              hover:scale-105
              shadow-xl shadow-red-700/20 dark:shadow-[#b91c1c]/30
            "
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}