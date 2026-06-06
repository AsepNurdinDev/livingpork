export interface Product {
  slug: string
  image: string
  gallery: string[]
  name: string
  desc: string
  longDesc: string
  price: string
  priceNum: number
  unit: string
  badge: string | null
  badgeColor: string
  category: string
  weight: string
  cookingSuggestions: string[]
  inStock: boolean
}

export const products: Product[] = [
  {
    slug: 'tenderloin',
    image: '/daging1.png',
    gallery: ['/daging1.png', '/daging1.png', '/daging1.png'],
    name: 'Daging Has Dalam (Tenderloin)',
    desc: 'Potongan paling empuk, cocok untuk steak & panggang.',
    longDesc: 'Has Dalam atau Tenderloin adalah bagian paling empuk dari daging babi. Teksturnya yang halus dan kandungan lemak yang seimbang membuatnya menjadi pilihan utama untuk steak, panggang, atau masakan premium lainnya. Dipotong fresh setiap subuh dan dikemas higienis untuk menjaga kualitas optimal.',
    price: 'Rp 85.000',
    priceNum: 85000,
    unit: '/ 500g',
    badge: 'Bestseller',
    badgeColor: 'bg-red-700 text-white',
    category: 'Premium Cut',
    weight: '500g',
    cookingSuggestions: ['Steak', 'Panggang / Grill', 'Tumis', 'Schnitzel'],
    inStock: true,
  },
  {
    slug: 'pork-ribs',
    image: '/products/ribs.jpg',
    gallery: ['/products/ribs.jpg', '/products/ribs.jpg', '/products/ribs.jpg'],
    name: 'Iga Babi (Pork Ribs)',
    desc: 'Cocok untuk BBQ, bakar, atau semur iga favorit keluarga.',
    longDesc: 'Iga Babi pilihan dengan daging yang menempel sempurna di tulang. Kandungan kolagen alami yang tinggi menghasilkan rasa gurih dan tekstur yang lembut setelah dimasak lama. Ideal untuk BBQ, dibakar, semur, atau sup iga yang lezat.',
    price: 'Rp 65.000',
    priceNum: 65000,
    unit: '/ 500g',
    badge: null,
    badgeColor: '',
    category: 'Bone-In Cut',
    weight: '500g',
    cookingSuggestions: ['BBQ / Bakar', 'Semur Iga', 'Sup Iga', 'Braised Ribs'],
    inStock: true,
  },
  {
    slug: 'belly-samcan',
    image: '/products/samcan.jpg',
    gallery: ['/products/samcan.jpg', '/products/samcan.jpg', '/products/samcan.jpg'],
    name: 'Perut (Belly / Samcan)',
    desc: 'Cocok untuk siu yuk, babi kecap, atau masak kare.',
    longDesc: 'Samcan atau Pork Belly adalah potongan dengan lapisan daging dan lemak yang sempurna. Sangat populer dalam masakan Chinese dan Asia Tenggara. Tekstur yang kaya dan rasa yang autentik menjadikannya bahan utama siu yuk renyah, babi kecap manis, atau kare yang gurih.',
    price: 'Rp 72.000',
    priceNum: 72000,
    unit: '/ 500g',
    badge: 'Favorit',
    badgeColor: 'bg-amber-500 text-stone-900',
    category: 'Classic Cut',
    weight: '500g',
    cookingSuggestions: ['Siu Yuk', 'Babi Kecap', 'Kare', 'Char Siu'],
    inStock: true,
  },
  {
    slug: 'ceker-babi',
    image: '/products/ceker.jpg',
    gallery: ['/products/ceker.jpg', '/products/ceker.jpg', '/products/ceker.jpg'],
    name: 'Kaki Babi (Ceker)',
    desc: 'Cocok untuk sup, semur, atau masakan khas daerah.',
    longDesc: 'Kaki babi kaya akan kolagen dan gelatin alami yang memberikan tekstur kenyal dan kuah yang kental. Sangat digemari untuk masakan tradisional seperti sup ceker, semur, atau hidangan khas Manado dan Batak yang kaya rempah.',
    price: 'Rp 45.000',
    priceNum: 45000,
    unit: '/ 500g',
    badge: null,
    badgeColor: '',
    category: 'Traditional Cut',
    weight: '500g',
    cookingSuggestions: ['Sup Ceker', 'Semur', 'Masakan Batak', 'Masakan Manado'],
    inStock: true,
  },
  {
    slug: 'jeroan-pilihan',
    image: '/products/jeroan.jpg',
    gallery: ['/products/jeroan.jpg', '/products/jeroan.jpg', '/products/jeroan.jpg'],
    name: 'Jeroan Pilihan',
    desc: 'Hati, jantung, dan usus segar tersedia setiap hari.',
    longDesc: 'Jeroan pilihan yang diproses dengan standar kebersihan ketat. Tersedia hati, jantung, dan usus yang dibersihkan dengan baik dan siap dimasak. Kaya nutrisi dan cocok untuk berbagai masakan tradisional maupun modern.',
    price: 'Rp 35.000',
    priceNum: 35000,
    unit: '/ 500g',
    badge: null,
    badgeColor: '',
    category: 'Offal',
    weight: '500g',
    cookingSuggestions: ['Tumis Hati', 'Sop Jeroan', 'Gulai', 'Sate'],
    inStock: true,
  },
  {
    slug: 'paket-hemat-2kg',
    image: '/products/paket-hemat.jpg',
    gallery: ['/products/paket-hemat.jpg', '/products/paket-hemat.jpg', '/products/paket-hemat.jpg'],
    name: 'Paket Hemat 2kg',
    desc: 'Pilih 2 jenis potongan favorit dan hemat lebih banyak.',
    longDesc: 'Paket ekonomis untuk keluarga atau usaha kecil. Pilih kombinasi 2 jenis potongan favorit Anda dengan total 2kg. Cocok untuk stok mingguan atau kebutuhan katering. Harga lebih hemat dibanding beli satuan dengan kualitas yang sama persis.',
    price: 'Rp 230.000',
    priceNum: 230000,
    unit: '/ 2kg',
    badge: 'Hemat',
    badgeColor: 'bg-green-700 text-white',
    category: 'Bundle',
    weight: '2kg',
    cookingSuggestions: ['Pilihan Bebas', 'Cocok untuk Katering', 'Stok Mingguan'],
    inStock: true,
  },
]