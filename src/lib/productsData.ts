export interface Product {
  slug: string
  image: string
  gallery: string[]
  name: string
  desc: string
  longDesc: string
  badge: string | null
  badgeColor: string
  category: string
  cookingSuggestions: string[]
  inStock: boolean
}

export const products: Product[] = [
  {
    slug: 'samcam-skin-on',
    image: '/salinan/samcam-skin-on.png',
    gallery: ['/produk/samcam-skin-on.png'],
    name: 'Samcam Skin On',
    desc: 'Perut babi dengan kulit, cocok untuk siu yuk dan panggang.',
    longDesc:
      'Potongan perut babi dengan lapisan kulit yang menghasilkan tekstur renyah saat dipanggang. Cocok untuk berbagai masakan khas Asia.',
    badge: 'Best Seller',
    badgeColor: 'bg-red-700 text-white',
    category: 'Premium Cut',
    cookingSuggestions: ['Siu Yuk', 'Roast Pork', 'Kare', 'Babi Kecap'],
    inStock: true,
  },

  {
    slug: 'samcam-skin-off',
    image: '/produk/samcam-skin-of.png',
    gallery: ['/produk/samcam-skin-of.png'],
    name: 'Samcam Skin Off',
    desc: 'Perut babi tanpa kulit dengan lapisan lemak seimbang.',
    longDesc:
      'Potongan samcam tanpa kulit yang lebih mudah diolah untuk berbagai hidangan tumis dan BBQ.',
    badge: null,
    badgeColor: '',
    category: 'Premium Cut',
    cookingSuggestions: ['BBQ', 'Tumis', 'Babi Kecap', 'Char Siu'],
    inStock: true,
  },

  {
    slug: 'iga',
    image: '/produk/iga-perut.png',
    gallery: ['/produk/iga-perut.png'],
    name: 'Iga Babi',
    desc: 'Iga segar dengan daging yang tebal.',
    longDesc:
      'Iga babi pilihan dengan kandungan kolagen tinggi, cocok untuk BBQ, sup, maupun semur.',
    badge: 'Favorit',
    badgeColor: 'bg-amber-500 text-stone-900',
    category: 'Bone-In Cut',
    cookingSuggestions: ['BBQ', 'Sup Iga', 'Semur', 'Bakar'],
    inStock: true,
  },

  {
    slug: 'kapsim',
    image: '/produk/kapsim.png',
    gallery: ['/produk/kapsim.png'],
    name: 'Kapsim',
    desc: 'Daging bagian bahu dengan tekstur lembut.',
    longDesc:
      'Potongan daging bahu yang cocok untuk berbagai masakan tradisional maupun modern.',
    badge: null,
    badgeColor: '',
    category: 'Classic Cut',
    cookingSuggestions: ['Tumis', 'Semur', 'Sate', 'Kare'],
    inStock: true,
  },

  {
    slug: 'has-dalam',
    image: '/produk/daging-has-dalam.png',
    gallery: ['/produk/daging-has-dalam.png'],
    name: 'Has Dalam',
    desc: 'Bagian paling empuk dari daging babi.',
    longDesc:
      'Has dalam merupakan potongan premium dengan tekstur sangat lembut dan sedikit lemak.',
    badge: 'Premium',
    badgeColor: 'bg-green-700 text-white',
    category: 'Premium Cut',
    cookingSuggestions: ['Steak', 'Grill', 'Pan Fry', 'Roast'],
    inStock: true,
  },

  {
    slug: 'loin',
    image: '/produk/loin.png',
    gallery: ['/produk/loin.png'],
    name: 'Loin',
    desc: 'Potongan daging tanpa banyak lemak.',
    longDesc:
      'Loin merupakan salah satu bagian favorit karena teksturnya lembut dan mudah diolah.',
    badge: null,
    badgeColor: '',
    category: 'Lean Cut',
    cookingSuggestions: ['Steak', 'Grill', 'Tumis', 'Schnitzel'],
    inStock: true,
  },

  {
    slug: 'paha-belakang-skin-off',
    image: '/produk/paha-belakang-skin-off.png',
    gallery: ['/produk/paha-belakang-skin-off.png'],
    name: 'Paha Belakang Skin Off',
    desc: 'Potongan paha belakang tanpa kulit.',
    longDesc:
      'Daging paha belakang dengan tekstur padat dan rasa gurih alami.',
    badge: null,
    badgeColor: '',
    category: 'Classic Cut',
    cookingSuggestions: ['Semur', 'Sate', 'Tumis'],
    inStock: true,
  },

  {
    slug: 'paha-depan-skin-off',
    image: '/produk/paha-depan-skin-on.png',
    gallery: ['/produk/paha-depan-skin-on.png'],
    name: 'Paha Depan Skin Off',
    desc: 'Potongan paha depan tanpa kulit.',
    longDesc:
      'Memiliki serat daging yang baik untuk berbagai jenis masakan rumah tangga.',
    badge: null,
    badgeColor: '',
    category: 'Classic Cut',
    cookingSuggestions: ['Tumis', 'Semur', 'Sate'],
    inStock: true,
  },

  {
    slug: 'pipi-skin-on',
    image: '/produk/pipi-skin-on.png',
    gallery: ['/produk/pipi-skin-on.png'],
    name: 'Pipi Skin On',
    desc: 'Bagian pipi dengan tekstur lembut dan juicy.',
    longDesc:
      'Pipi babi terkenal dengan kelembutan dan rasa yang kaya ketika dimasak perlahan.',
    badge: 'Chef Choice',
    badgeColor: 'bg-purple-700 text-white',
    category: 'Special Cut',
    cookingSuggestions: ['Braised', 'Slow Cook', 'BBQ'],
    inStock: true,
  },

  {
    slug: 'kulit-punggung',
    image: '/produk/kulit-punggung.png',
    gallery: ['/produk/kulit-punggung.png'],
    name: 'Kulit Punggung',
    desc: 'Kulit babi segar untuk kerupuk atau olahan lainnya.',
    longDesc:
      'Kulit punggung berkualitas tinggi yang cocok untuk berbagai olahan makanan.',
    badge: null,
    badgeColor: '',
    category: 'Skin',
    cookingSuggestions: ['Kerupuk Kulit', 'Sop', 'Rebus'],
    inStock: true,
  },

  {
    slug: 'kulit-paha',
    image: '/produk/kulit-paha.png',
    gallery: ['/produk/kulit-paha.png'],
    name: 'Kulit Paha',
    desc: 'Kulit babi dari bagian paha.',
    longDesc:
      'Cocok untuk kerupuk kulit maupun bahan tambahan berbagai masakan.',
    badge: null,
    badgeColor: '',
    category: 'Skin',
    cookingSuggestions: ['Kerupuk Kulit', 'Sup', 'Rebus'],
    inStock: true,
  },

  {
    slug: 'kulit-kepala',
    image: '/produk/kulit-kepala.png',
    gallery: ['/produk/kulit-kepala.png'],
    name: 'Kulit Kepala',
    desc: 'Kulit kepala segar dengan tekstur khas.',
    longDesc:
      'Sering digunakan dalam berbagai hidangan tradisional dan olahan kulit.',
    badge: null,
    badgeColor: '',
    category: 'Skin',
    cookingSuggestions: ['Sup', 'Kerupuk Kulit', 'Rebus'],
    inStock: true,
  },

  {
    slug: 'kaki',
    image: '/produk/kaki-babi.png',
    gallery: ['/produk/kaki-babi.png'],
    name: 'Kaki Babi',
    desc: 'Kaya kolagen dan cocok untuk sup.',
    longDesc:
      'Kaki babi segar yang kaya gelatin alami dan sangat populer untuk masakan berkuah.',
    badge: null,
    badgeColor: '',
    category: 'Traditional Cut',
    cookingSuggestions: ['Sup', 'Semur', 'Masakan Tradisional'],
    inStock: true,
  },

  {
    slug: 'jeroan',
    image: '/produk/jeroan-babi.png',
    gallery: ['/produk/jeroan-babi.png'],
    name: 'Jeroan',
    desc: 'Hati, usus, dan organ pilihan yang segar.',
    longDesc:
      'Jeroan segar yang dibersihkan secara higienis dan siap diolah.',
    badge: 'Murah',
    badgeColor: 'bg-blue-700 text-white',
    category: 'Offal',
    cookingSuggestions: ['Sate', 'Gulai', 'Tumis', 'Sup'],
    inStock: true,
  },
]