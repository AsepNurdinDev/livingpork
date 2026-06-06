export interface Article {
  slug: string;
  emoji: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  // Kita buat konten berupa array string agar tiap paragraf terpisah rapi
  content: string[]; 
}

export const articles: Article[] = [
    {
    slug: 'tips-memasak-iga-babi',
    emoji: '🍖',
    category: 'Tips Memasak',
    date: '1 Juni 2025',
    title: 'Cara Memasak Iga Babi Agar Empuk dan Tidak Bau',
    excerpt: 'Iga babi yang empuk dan tidak amis adalah kunci masakan lezat. Simak tips praktis dari dapur kami.',
    content: [
      "Iga babi adalah salah satu potongan favorit karena dagingnya tebal dan kaya rasa. Namun banyak yang mengeluh iga babi mereka alot atau masih berbau kurang sedap. Berikut tips dari kami:",
      "1. Pilih Iga yang Segar\nPastikan iga yang Anda beli berwarna merah cerah, tidak pucat, dan tidak berbau asam. Living Pork menjamin kesegaran iga setiap harinya.",
      "2. Rebus dengan Jahe dan Bawang Putih\nSebelum diolah lebih lanjut, rebus iga bersama jahe geprek, bawang putih, dan sedikit cuka selama 20 menit. Ini membantu menghilangkan bau dan membuat daging lebih empuk.",
      "3. Marinasi Semalaman\nUntuk rasa lebih maksimal, marinasi iga dengan kecap manis, bawang putih, jahe, dan sedikit minyak wijen. Diamkan semalam di kulkas.",
      "4. Masak dengan Api Kecil\nMasak dengan api kecil dan waktu yang lama. Metode slow-cook menghasilkan daging yang jatuh dari tulang dan sangat empuk."
    ]
  },
  {
    slug: 'rahasia-pork-belly-crispy',
    emoji: '🥓',
    category: 'Resep',
    date: '5 Juni 2025',
    title: 'Rahasia Kulit Pork Belly Ekstra Garing',
    excerpt: 'Langkah mudah mendapatkan samcan dengan kulit super renyah kriuk tahan lama.',
    content: [
      "Membuat samcan goreng atau panggang dengan kulit garing membutuhkan teknik pengeringan yang tepat.",
      "Langkah utamanya adalah menusuk-nusuk bagian kulit sedekat mungkin menggunakan jarum atau garpu, lalu lumuri dengan garam kasar dan cuka untuk menarik keluar kelembaban kulit saat dipanggang."
    ]
  }
];