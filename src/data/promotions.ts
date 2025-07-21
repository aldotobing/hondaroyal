import { Car } from './cars';

export interface Promotion {
  id: string | number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  terms: string[];
  image: string;
  badge: string;
  color: 'red' | 'green' | 'blue' | 'yellow' | 'purple';
}

// Get default promotions (not related to specific cars)
export const getDefaultPromotions = (): Promotion[] => [
  {
    id: 'trade-in',
    title: "Program Tukar Tambah Spesial",
    description: "Dapatkan nilai tukar tambah terbaik untuk mobil lama Anda",
    discount: "Nilai Tukar Tinggi",
    validUntil: "31 Desember 2024",
    terms: [
      "Penilaian gratis dan transparan",
      "Proses cepat & mudah",
      "Berlaku untuk semua merek mobil",
      "Dapatkan tambahan diskon khusus"
    ],
    image: "/promo/trade-in.jpg",
    badge: "TRADE-IN",
    color: "blue"
  },
  {
    id: 'dp-ringan',
    title: "DP Ringan & Cicilan Ringan",
    description: "Nikmati kemudahan kepemilikan mobil baru dengan DP ringan dan cicilan terjangkau",
    discount: "DP Mulai 10%",
    validUntil: "31 Desember 2024",
    terms: [
      "DP mulai dari 10%",
      "Bunga kompetitif mulai 6.8%",
      "Tenor hingga 7 tahun",
      "Proses cepat & mudah"
    ],
    image: "/promo/dp-ringan.jpg",
    badge: "KREDIT",
    color: "green"
  }
];

// Generate promotions from car data
export const generateCarPromotions = (cars: Car[]): Promotion[] => {
  return cars.map(car => {
    // Find the variant with the best promotion
    const bestVariant = car.variants.find(v => v.promo_price) || car.variants[0];
    
    // Calculate discount percentage if there's a promo price
    let discount = 0;
    if (bestVariant.promo_price && bestVariant.price) {
      const price = parseInt(bestVariant.price.replace(/[^0-9]/g, ''));
      const promoPrice = parseInt(bestVariant.promo_price.replace(/[^0-9]/g, ''));
      discount = Math.round(((price - promoPrice) / price) * 100);
    }
    
    return {
      id: car.id,
      title: `Promo Spesial ${car.name}`,
      description: `Dapatkan penawaran terbaik untuk ${car.name} dengan diskon dan fasilitas menarik`,
      discount: discount > 0 ? `${discount}% OFF` : "Penawaran Spesial",
      validUntil: "31 Desember 2024",
      terms: [
        `Harga mulai dari ${bestVariant.promo_price || bestVariant.price}`,
        "Gratis biaya admin",
        "Gratis asuransi 1 tahun",
        "Gratis service 3x kunjungan"
      ],
      image: car.images?.main || '/images/car-placeholder.jpg',
      badge: "PROMO",
      color: "blue"
    };
  });
};

// Get all active promotions
export const getAllPromotions = (cars: Car[]): Promotion[] => {
  const carPromotions = generateCarPromotions(cars);
  const defaultPromotions = getDefaultPromotions();
  
  // Return car promotions if available, otherwise return default promotions
  return carPromotions.length > 0 ? carPromotions : defaultPromotions;
};
