const WA_NUMBER = "6287858577888";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131026.34384313125!2d115.05415360442376!3d-8.542245993530807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f006a0e6ab5%3A0x4e0641f780f49c9!2sLiving%20pork!5e1!3m2!1sen!2sid!4v1780732199141!5m2!1sen!2sid";

export default function CTABanner() {
  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="bg-red-700 dark:bg-red-900 py-20 px-4 relative overflow-hidden transition-colors duration-300">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-[#c9a84c]/10 blur-[80px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-6xl block mb-6">🥩</span>

          <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Siap Nikmati Daging Babi
            <br />
            <span className="italic text-amber-300 dark:text-[#c9a84c]">
              Segar Hari Ini?
            </span>
          </h2>

          <p className="text-white/70 mt-4 text-lg max-w-lg mx-auto">
            Jangan tunggu lagi. Stok terbatas setiap harinya. Pesan sekarang dan
            terima daging segar berkualitas.
          </p>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              "Halo Living Pork, saya mau pesan daging babi segar sekarang!",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#fbf7f0] hover:bg-[#c9a84c] text-stone-900 font-black text-lg px-10 py-4 rounded-full mt-8 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan Sekarang
          </a>
        </div>
      </section>

      {/* ── Kontak & Lokasi ── */}
      <section
        id="contact"
        className="relative bg-[#f8f6f2] dark:bg-[#0a0a0a] py-20 md:py-28 px-4 overflow-hidden transition-colors duration-300"
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
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

        {/* Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red-500/10 dark:bg-[#b91c1c]/10 blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 dark:bg-[#c9a84c]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-[#b91c1c]/20 border border-red-200 dark:border-[#b91c1c]/30 text-red-700 dark:text-[#b91c1c] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#b91c1c] animate-pulse" />
              Hubungi Kami
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-black text-stone-900 dark:text-[#fbf7f0]">
              Temukan
              <span className="text-amber-600 dark:text-[#c9a84c] italic"> Lokasi Kami</span>
            </h2>

            <p className="text-stone-500 dark:text-[#fbf7f0]/60 mt-5 max-w-xl mx-auto">
              Kami siap melayani pemesanan daging babi segar setiap hari dengan kualitas terbaik.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Contact Cards */}
            <div className="flex flex-col gap-5">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Living Pork, saya ingin bertanya!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  bg-white dark:bg-[#1e1e1e]
                  border border-stone-200 dark:border-[#2e2e2e]
                  rounded-3xl p-5
                  hover:border-green-400 dark:hover:border-green-500/50
                  hover:shadow-lg hover:shadow-green-500/5 dark:hover:shadow-green-500/5
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-[#fbf7f0]/40">
                      WhatsApp
                    </p>
                    <h3 className="text-stone-900 dark:text-[#fbf7f0] font-bold text-lg">
                      +62 878-5857-7888
                    </h3>
                    <p className="text-stone-500 dark:text-[#fbf7f0]/60 text-sm">
                      Chat langsung untuk pemesanan
                    </p>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/living_pork?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  bg-white dark:bg-[#1e1e1e]
                  border border-stone-200 dark:border-[#2e2e2e]
                  rounded-3xl p-5
                  hover:border-pink-400 dark:hover:border-pink-500/50
                  hover:shadow-lg hover:shadow-pink-500/5 dark:hover:shadow-pink-500/5
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-pink-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-[#fbf7f0]/40">
                      Instagram
                    </p>
                    <h3 className="text-stone-900 dark:text-[#fbf7f0] font-bold text-lg">
                      @living_pork
                    </h3>
                    <p className="text-stone-500 dark:text-[#fbf7f0]/60 text-sm">
                      Promo dan update stok terbaru
                    </p>
                  </div>
                </div>
              </a>

              {/* Alamat */}
              <div className="
                bg-white dark:bg-[#1e1e1e]
                border border-stone-200 dark:border-[#2e2e2e]
                rounded-3xl p-5
              ">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-[#b91c1c]/10 border border-red-100 dark:border-[#b91c1c]/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-red-600 dark:text-[#b91c1c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
                      <circle cx="12" cy="11" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-[#fbf7f0]/40">
                      Alamat
                    </p>
                    <h3 className="text-stone-900 dark:text-[#fbf7f0] font-bold text-lg">
                      Jl. Seruni, NO 3, BR. Taman Darmasaba
                    </h3>
                    <p className="text-stone-500 dark:text-[#fbf7f0]/60 text-sm">
                      Badung, Bali
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="
              overflow-hidden rounded-[32px]
              border border-stone-200 dark:border-[#2e2e2e]
              bg-stone-100 dark:bg-[#1e1e1e]
              shadow-xl shadow-black/5 dark:shadow-black/30
            ">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ minHeight: "450px", border: 0, display: "block" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Living Pork"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}