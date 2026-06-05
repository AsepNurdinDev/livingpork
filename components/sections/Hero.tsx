import Link from 'next/link'
import Image from 'next/image'

const WA_NUMBER = '628123456789'
const WA_MESSAGE = encodeURIComponent(
  'Halo Living Pork, saya mau pesan daging babi segar!'
)

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-stone-50 dark:bg-[#121212] overflow-hidden flex items-center transition-colors duration-300">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-5"
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
      <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-red-500/10 dark:bg-[#b91c1c]/20 blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-amber-500/10 dark:bg-[#c9a84c]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-[#b91c1c]/15 border border-red-200 dark:border-[#b91c1c]/30 text-red-700 dark:text-[#b91c1c] px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-[#b91c1c] animate-pulse" />
            Segar Setiap Hari
          </div>

          {/* Heading */}
          <h1 className="font-serif font-black text-5xl md:text-6xl xl:text-7xl text-stone-900 dark:text-[#fbf7f0] leading-tight">
            Daging Babi
            <br />
            <span className="text-amber-600 dark:text-[#c9a84c] italic">
              Premium
            </span>
            <br />
            Pilihan Anda
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg text-stone-600 dark:text-[#fbf7f0]/70 leading-relaxed max-w-xl">
            Potongan daging babi segar berkualitas tinggi dari peternakan
            terpercaya. Diproses secara higienis dan tersedia dalam berbagai
            pilihan potongan siap masak untuk kebutuhan keluarga maupun usaha.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-red-700
                hover:bg-red-800
                text-white
                dark:text-[#fbf7f0]
                font-bold
                px-8
                py-4
                rounded-full
                transition-all
                duration-300
                hover:scale-105
                shadow-xl
                shadow-red-700/20
                dark:shadow-[#b91c1c]/30
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
              Pesan via WhatsApp
            </a>

            <Link
              href="#produk"
              className="
                inline-flex
                items-center
                justify-center
                border
                border-stone-300
                dark:border-[#c9a84c]/20
                text-stone-700
                dark:text-[#fbf7f0]
                hover:text-amber-600
                dark:hover:text-[#c9a84c]
                hover:border-amber-600
                dark:hover:border-[#c9a84c]
                px-8
                py-4
                rounded-full
                transition-all
                duration-300
              "
            >
              Lihat Produk
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden lg:flex items-center justify-center relative">

          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-red-500/10 dark:bg-[#b91c1c]/20 rounded-full blur-[120px]" />
          </div>

          {/* Main Circle */}
          {/* bg-[#1e1e1e] menggantikan bg-brown-mid di dark mode */}
          <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border border-stone-200 dark:border-[#c9a84c]/20 bg-stone-100 dark:bg-[#1e1e1e]">
            <Image
              src="/daging1.png"
              alt="Daging Babi Premium"
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-110
              "
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 dark:from-[#121212]/40 via-transparent to-transparent" />

            {/* Gold ring */}
            <div className="absolute inset-3 rounded-full border border-amber-500/10 dark:border-[#c9a84c]/20" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 dark:text-[#fbf7f0]/30">
        <div className="w-px h-10 bg-stone-300 dark:bg-[#fbf7f0]/20 animate-bounce" />
      </div>
    </section>
  )
}