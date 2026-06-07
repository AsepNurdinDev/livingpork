import React from "react";
import Image from "next/image";

const WA_NUMBER = "6287858577888";
const WA_MESSAGE = encodeURIComponent(
  "Halo Living Pork, saya mau pesan daging babi segar!",
);

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Pilih Produk",
    desc: "Cek daftar produk kami. Tentukan jenis potongan dan jumlah yang Anda inginkan.",
    img: "/produk/iga-perut.png",
  },
  {
    number: "02",
    icon: "💬",
    title: "Chat via WhatsApp",
    desc: "Hubungi kami langsung via WhatsApp. Kami akan konfirmasi ketersediaan stok.",
    img: null,
    isWA: true,
  },
  {
    number: "03",
    icon: "💳",
    title: "Konfirmasi & Bayar",
    desc: "Pembayaran bisa transfer bank atau tunai saat pengambilan/antar.",
    img: null,
    isBayar: true,
  },
  {
    number: "04",
    icon: "🚚",
    title: "Terima Pesanan",
    desc: "Daging segar dikemas rapi dan dikirim ke lokasi Anda atau siap diambil.",
    img: "/truk.jpeg",
  },
];

export default function HowToOrder() {
  return (
    <section
      id="order"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden transition-colors duration-300"
    >
      {/* ── BACKGROUND premium ── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a1408] via-[#2c1f0e] to-[#0f0d09]" />

      {/* Radial gold glow tengah */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_#c9a84c18_0%,_transparent_70%)]" />

      {/* Grid diagonal animasi */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 60px)`,
          animation: "slideGrid 12s linear infinite",
        }}
      />

      {/* Garis horizontal bergerak */}
      <div
        className="absolute inset-0 z-[3] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 80px)`,
          animation: "slideUp 8s linear infinite",
        }}
      />

      {/* Shimmer garis atas & bawah */}
      <div className="absolute top-0 left-0 right-0 h-[1px] z-[4] bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] z-[4] bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      {/* Orbs dekoratif */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#c9a84c]/5 blur-3xl z-[2] animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-[#c9a84c]/5 blur-3xl z-[2] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <style>{`
        @keyframes slideGrid {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        @keyframes slideUp {
          0% { background-position: 0 0; }
          100% { background-position: 0 -80px; }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Mudah & Cepat
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white">
            Cara
            <span className="text-[#c9a84c] italic"> Pemesanan</span>
          </h2>
          <p className="text-white/60 mt-5 max-w-xl mx-auto">
            Hanya beberapa langkah sederhana untuk mendapatkan daging babi segar
            berkualitas premium.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col">
              <div className="flex flex-col h-full bg-white dark:bg-[#1e1e1e] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10 hover:-translate-y-2 transition-all duration-300 group">
                <div className="px-5 pt-5 pb-0 flex items-center justify-between">
                  <span className="text-[#c9a84c] font-black text-sm tracking-widest">
                    [{s.number}]
                  </span>
                  <span className="text-2xl">{s.icon}</span>
                </div>

                <div className="flex items-center justify-center px-5 py-5 h-36">
                  {s.img ? (
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : s.isWA ? (
                    <div className="flex flex-col items-center gap-2">
                      <svg
                        className="w-16 h-16 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-xs text-stone-500 dark:text-[#a8a29e] font-medium">
                        +62 878-5857-7888
                      </span>
                    </div>
                  ) : s.isBayar ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex gap-3">
                        <div className="w-12 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-[10px] font-black">
                            BCA
                          </span>
                        </div>
                        <div className="w-12 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-[10px] font-black">
                            BRI
                          </span>
                        </div>
                        <div className="w-12 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <span className="text-stone-900 text-[10px] font-black">
                            DANA
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-stone-500 dark:text-[#a8a29e]">
                        Transfer / Tunai
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="mx-5 h-[1.5px] bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

                <div className="px-5 py-5 flex-1">
                  <h3 className="font-serif font-bold text-[15px] text-stone-900 dark:text-[#fbf7f0] mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-stone-500 dark:text-[#a8a29e] text-[12px] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ══ DELIVERY SECTION ══ */}
        <div className="mb-16 overflow-hidden rounded-3xl bg-white dark:bg-[#1e1e1e] border border-white/10 shadow-2xl shadow-black/30 md:flex">
          <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden bg-stone-100 dark:bg-[#2a2a2a] shrink-0">
            <Image
              src="/truk.jpeg"
              alt="Armada Pengiriman Living Pork"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 dark:to-black/30" />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                Cold Chain Delivery
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10 md:w-1/2">
            <span className="text-[#b91c1c] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Sistem Distribusi
            </span>
            <h3 className="font-serif font-black text-2xl md:text-3xl text-stone-900 dark:text-[#fbf7f0] leading-tight mb-4">
              Pengiriman{" "}
              <em className="text-[#c9a84c] not-italic italic">Produk</em>
            </h3>
            <div className="w-10 h-[3px] bg-[#c9a84c] mb-6" />
            <div className="space-y-4 text-stone-600 dark:text-[#a8a29e] text-[14px] leading-relaxed">
              <p>
                Untuk pengiriman produk daging frozen, Living Pork menggunakan
                kendaraan{" "}
                <span className="font-semibold text-stone-800 dark:text-[#fbf7f0]">
                  mobil box berpendingin
                </span>{" "}
                (refrigerated transport) guna menjaga suhu tetap stabil selama
                proses distribusi.
              </p>
              <p>
                Sistem pengiriman ini dirancang untuk memastikan kualitas,
                kesegaran, dan keamanan produk tetap terjaga hingga sampai ke
                tangan pelanggan.
              </p>
              <p>
                Dengan penanganan yang tepat dari gudang hingga proses
                pengiriman, kami memastikan setiap produk yang Anda terima tetap
                dalam kondisi terbaik sesuai{" "}
                <span className="font-semibold text-stone-800 dark:text-[#fbf7f0]">
                  standar kualitas Living Pork
                </span>
                .
              </p>
            </div>
            <div className="flex gap-6 mt-7">
              {[
                { value: "0°C", label: "Suhu Terjaga" },
                { value: "100%", label: "Fresh Guaranteed" },
                { value: "24/7", label: "Siap Kirim" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[#c9a84c] font-black text-xl">
                    {stat.value}
                  </div>
                  <div className="text-stone-400 dark:text-[#555] text-[11px] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white text-lg font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-red-900/40"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
