export interface Car {
  id: string;
  name: string;
  category: string;
  variants: CarVariant[];
  engine: string;
  transmission: string;
  fuel_type: string;
  seating: number;
  safety_features: string[];
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  description: string;
  highlights: string[];
  promo?: {
    title: string;
    description: string;
    validUntil: string;
  };
  rating?: number;
  overview?: {
    title: string;
    description: string[];
  };
}

export interface CarVariant {
  name: string;
  price: string;
  promo_price?: string;
  transmission?: string;
  features?: string[];
}

export const cars: Car[] = [
  {
    id: "brio",
    name: "Honda Brio",
    category: "City Car",
    variants: [
      {
        name: "S MT",
        price: "Rp 172.600.000"
      },
      {
        name: "E MT",
        price: "Rp 185.900.000"
      },
      {
        name: "E CVT",
        price: "Rp 198.400.000"
      },
      {
        name: "RS CVT",
        price: "Rp 215.900.000",
        promo_price: "Rp 205.000.000"
      }
    ],
    engine: "1.2L i-VTEC",
    transmission: "CVT / Manual",
    fuel_type: "Bensin",
    seating: 5,
    safety_features: [
      "Dual SRS Airbag",
      "ABS + EBD",
      "Vehicle Stability Assist (VSA)",
      "Hill Start Assist (HSA)",
      "Emergency Stop Signal (ESS)"
    ],
    dimensions: {
      length: "3.815 mm",
      width: "1.680 mm", 
      height: "1.485 mm",
      wheelbase: "2.405 mm"
    },
    images: {
      main: "/cars/honda_brio.jpg",
      gallery: [
        "/cars/honda_brio2.jpg",
        "/cars/honda_brio3.jpg",
        "/cars/honda_brio4.jpg",
      ]
    },
    description: "Honda Brio adalah pilihan tepat untuk mobilitas perkotaan dengan desain sporty dan fitur lengkap. Cocok untuk keluarga muda yang aktif.",
    highlights: [
      "Irit BBM hingga 20 km/L",
      "Desain sporty dan modern",
      "Kabin luas dan nyaman",
      "Harga terjangkau untuk city car premium"
    ],
    rating: 4.8,
    overview: {
      title: "Pilihan Cerdas untuk Mobilitas Perkotaan",
      description: [
        "Honda Brio terus menjadi kekuatan dominan di pasar city car Indonesia, menarik berbagai konsumen dengan perpaduan gaya, performa, dan efisiensi bahan bakar. Sebagai pemain terkemuka di segmen Low-Cost Green Car (LCGC), Brio telah berhasil memposisikan dirinya sebagai pilihan premium, menawarkan lebih dari sekadar transportasi dasar.",
        "Semua varian Honda Brio didukung oleh mesin 1.2 liter i-VTEC, menghasilkan 90 PS pada 6.000 rpm. Mesin ini memberikan pengalaman berkendara yang bersemangat, membuat Brio terasa lincah dan responsif di lingkungan perkotaan. Mobil ini dipuji karena 'menyenangkan untuk dikendarai', dengan handling yang mudah dan sifat lincah yang membuat navigasi di jalan-jalan kota menjadi mudah."
      ]
    }
  },
  {
    id: "brv-n7x",
    name: "Honda BR-V N7X Edition",
    category: "SUV",
    variants: [
      {
        name: "S MT",
        price: "Rp 313.400.000"
      },
      {
        name: "E MT",
        price: "Rp 329.000.000"
      },
      {
        name: "E CVT",
        price: "Rp 341.700.000"
      },
      {
        name: "Prestige CVT",
        price: "Rp 366.700.000"
      },
      {
        name: "Prestige Honda Sensing CVT",
        price: "Rp 386.700.000"
      }
    ],
    engine: "1.5L i-VTEC",
    transmission: "CVT / Manual",
    fuel_type: "Bensin",
    seating: 7,
    safety_features: [
      "Honda SENSING (Prestige HS)",
      "6 SRS Airbag",
      "ABS + EBD + BA",
      "Vehicle Stability Assist (VSA)",
      "Hill Start Assist (HSA)",
      "Emergency Stop Signal (ESS)"
    ],
    dimensions: {
      length: "4,490 mm",
      width: "1,780 mm",
      height: "1,685 mm",
      wheelbase: "2,662 mm"
    },
    images: {
      main: "/cars/honda_brv_nx_7.jpg",
      gallery: [
        "/cars/honda_brv_nx_7.jpg",
        "/cars/honda_brv_nx_7_2.jpg",
        "/cars/honda_brv_nx_7_3.jpg"
      ]
    },
    description: "Honda BR-V N7X Edition hadir dengan desain lebih sporty dan tangguh. Dilengkapi fitur lengkap untuk kenyamanan dan keselamatan berkendara keluarga.",
    highlights: [
      "7-seater family SUV",
      "Desain eksterior N7X Edition eksklusif",
      "Kabin luas dan nyaman",
      "Pilihan varian lengkap"
    ],
    rating: 4.7,
    overview: {
      title: "SUV Keluarga yang Stylish dan Tangguh",
      description: [
        "Honda BR-V N7X Edition, yang diluncurkan di Indonesia International Motor Show (IIMS) 2024, pada dasarnya adalah versi yang disempurnakan secara kosmetik dari All New Honda BR-V, yang dirancang untuk menarik bagi mereka yang mengagumi mobil konsep N7X. Edisi khusus ini bertujuan untuk memberikan pilihan yang lebih stylish dan elegan di segmen Low SUV (LSUV) yang populer di Indonesia.",
        "Perbedaan yang paling mencolok pada N7X Edition adalah pilihan warna eksklusif Sand Khaki Pearl, yang sebelumnya hanya tersedia untuk HR-V. Warna ini dimaksudkan untuk memberikan tampilan klasik dan elegan yang tak lekang oleh waktu pada kendaraan."
      ]
    }
  },
  {
    id: "accord-rs-ehev",
    name: "Honda Accord RS e:HEV",
    category: "Sedan Premium",
    variants: [
      {
        name: "RS e:HEV",
        price: "Rp 974.000.000"
      }
    ],
    engine: "2.0L i-MMD e:HEV",
    transmission: "e-CVT",
    fuel_type: "Hybrid",
    seating: 5,
    safety_features: [
      "Honda SENSING 360",
      "10 SRS Airbag",
      "ABS + EBD + BA",
      "Vehicle Stability Assist (VSA)",
      "Hill Start Assist (HSA)",
      "Auto Brake Hold",
      "Blind Spot Information System"
    ],
    dimensions: {
      length: "4,971 mm",
      width: "1,862 mm",
      height: "1,450 mm",
      wheelbase: "2,830 mm"
    },
    images: {
      main: "/cars/honda_accord_rs_hev.jpg",
      gallery: [
        "/cars/honda_accord_rs_hev.jpg",
        "/cars/honda_accord_rs_hev_2.png",
        "/cars/honda_accord_rs_hev_3.jpg",
        "/cars/honda_accord_rs_hev_4.jpg"
      ]
    },
    description: "Honda Accord RS e:HEV menghadirkan kemewahan dan teknologi hybrid terdepan. Desain elegan dengan performa efisien dan fitur keselamatan lengkap.",
    highlights: [
      "Sistem hybrid e:HEV 2.0L",
      "Fitur Honda SENSING 360",
      "Interior mewah dengan material premium",
      "Teknologi canggih dan konektivitas lengkap"
    ],
    rating: 4.9,
    overview: {
      title: "Kemewahan dan Efisiensi dalam Satu Paket",
      description: [
        "Honda Accord RS e:HEV telah kembali secara signifikan ke pasar Indonesia, kini sebagai sedan hybrid premium. Fitur unggulan dari Accord baru adalah efisiensi bahan bakarnya yang luar biasa. Selama uji jalan 100 km yang mencakup berbagai kondisi lalu lintas di dalam dan sekitar Jakarta, Accord RS e:HEV mencapai konsumsi bahan bakar rata-rata 25,5 km/liter.",
        "Meskipun 'RS' mungkin menunjukkan fokus sporty, ulasan menunjukkan bahwa Accord memprioritaskan kenyamanan. Kabinnya senyap dan terisolasi dengan baik, dan suspensinya memberikan pengendaraan yang mulus, meminimalkan body roll. Tenaga gabungan dari mesin bensin dan motor listrik adalah 207 ps, menawarkan performa yang kuat."
      ]
    }
  },
  {
    id: "city-sedan",
    name: "Honda City Sedan",
    category: "Sedan",
    variants: [
      {
        name: "E CVT",
        price: "Rp 410.300.000"
      }
    ],
    engine: "1.5L i-VTEC",
    transmission: "CVT",
    fuel_type: "Bensin",
    seating: 5,
    safety_features: [
      "Honda SENSING",
      "6 SRS Airbag",
      "ABS + EBD + BA",
      "Vehicle Stability Assist (VSA)",
      "Hill Start Assist (HSA)",
      "Emergency Stop Signal (ESS)"
    ],
    dimensions: {
      length: "4.549 mm",
      width: "1.748 mm",
      height: "1.467 mm",
      wheelbase: "2.589 mm"
    },
    images: {
      main: "/cars/honda_city_sedan.jpg",
      gallery: [
        "/cars/honda_city_sedan.jpg",
        "/cars/honda_city_sedan_2.jpg",
        "/cars/honda_city_sedan_3.jpg",
        "/cars/honda_city_sedan_4.jpg"
      ]
    },
    description: "All New Honda City Sedan menawarkan kemewahan dan kompleksitas fitur dalam desain sedan yang elegan. Own The City dengan gaya yang tak tertandingi.",
    highlights: [
      "Sedan premium dengan Honda SENSING",
      "Interior mewah dengan teknologi terdepan",
      "Performa mesin yang bertenaga",
      "Efisiensi bahan bakar terbaik di kelasnya"
    ],
    rating: 4.6,
    overview: {
      title: "Elegansi dan Performa untuk Perkotaan",
      description: [
        "Honda City Sedan terus menjadi pemain penting di pasar sedan Indonesia, menawarkan perpaduan gaya, performa, dan kepraktisan. Di Indonesia, Honda City Sedan ditawarkan dalam satu varian dengan transmisi continuously variable (CVT).",
        "Di bawah kapnya, Honda City Sedan ditenagai oleh mesin 1.5 liter DOHC i-VTEC yang menghasilkan tenaga 121 PS dan torsi 145 Nm. Mesin ini dipasangkan dengan CVT yang responsif, yang mencakup paddle shifter untuk pengalaman berkendara yang lebih menarik. Mesin ini dipuji karena bertenaga dan responsif, terutama untuk berkendara di kota."
      ]
    }
  },
  {
    id: "city-hatchback",
    name: "Honda City Hatchback RS",
    category: "Hatchback",
    variants: [
      {
        name: "RS MT",
        price: "Rp 360.600.000"
      },
      {
        name: "RS CVT",
        price: "Rp 370.700.000"
      },
      {
        name: "RS CVT with Honda Sensing",
        price: "Rp 388.200.000"
      }
    ],
    engine: "1.5L i-VTEC",
    transmission: "CVT / Manual",
    fuel_type: "Bensin",
    seating: 5,
    safety_features: [
      "Honda SENSING (varian tertentu)",
      "6 SRS Airbag",
      "ABS + EBD + BA",
      "Vehicle Stability Assist (VSA)",
      "Hill Start Assist (HSA)",
      "Multi-Angle Rearview Camera"
    ],
    dimensions: {
      length: "4.345 mm",
      width: "1.748 mm",
      height: "1.488 mm",
      wheelbase: "2.589 mm"
    },
    images: {
      main: "/cars/honda_city_hatchback_rs.jpg",
      gallery: [
        "/cars/honda_city_hatchback_rs.jpg",
        "/cars/honda_city_hatchback_rs_2.jpg",
        "/cars/honda_city_hatchback_rs_3.jpg",
        "/cars/honda_city_hatchback_rs_4.jpg"
      ]
    },
    description: "Honda City Hatchback RS - Elevate Your Move. Desain sporty yang memukau dengan performa yang mengesankan untuk gaya hidup dinamis.",
    highlights: [
      "Desain sporty RS yang agresif",
      "Honda SENSING untuk keamanan maksimal",
      "Ruang kabin luas dengan fleksibilitas hatchback",
      "Performa mesin responsif"
    ],
    rating: 4.7,
    overview: {
      title: "Hatchback Sporty dengan Fleksibilitas Tinggi",
      description: [
        "Honda City Hatchback RS telah membuat gebrakan di pasar otomotif Indonesia, secara efektif menggantikan Honda Jazz yang populer. City Hatchback RS memiliki desain yang sporty dan agresif, dengan garis karakter yang tajam dan lampu depan full LED modern, daytime running lights, dan lampu kabut.",
        "Di dalam, kabinnya memiliki nuansa sporty dengan skema warna hitam yang dominan dan aksen jahitan merah. Kursi depan dirancang agar sporty dan ergonomis, dan kemudi menawarkan penyesuaian tilt dan teleskopik untuk posisi mengemudi yang nyaman."
      ]
    }
  },
  {
    id: "hrv",
    name: "Honda HR-V",
    category: "SUV",
    variants: [
      {
        name: "S MT",
        price: "Rp 375.900.000"
      },
      {
        name: "E CVT",
        price: "Rp 395.900.000"
      },
      {
        name: "RS CVT",
        price: "Rp 425.900.000"
      }
    ],
    engine: "1.5L i-VTEC",
    transmission: "CVT / Manual",
    fuel_type: "Bensin",
    seating: 5,
    safety_features: [
      "Honda SENSING",
      "6 SRS Airbag",
      "ABS + EBD + BA",
      "Vehicle Stability Assist (VSA)",
      "Hill Start Assist (HSA)",
      "Multi-Angle Rearview Camera"
    ],
    dimensions: {
      length: "4.335 mm",
      width: "1.790 mm",
      height: "1.590 mm",
      wheelbase: "2.610 mm"
    },
    images: {
      main: "/cars/honda_hrv.jpg",
      gallery: [
        "/cars/honda_hrv.jpg",
        "/cars/honda_hrv_2.jpg",
        "/cars/honda_hrv_3.jpg",
        "/cars/honda_hrv_4.jpg"
      ]
    },
    description: "Honda HR-V menghadirkan gaya hidup urban yang dinamis dengan performa SUV yang tangguh. Desain sporty dengan kemampuan jelajah yang optimal.",
    highlights: [
      "SUV stylish dengan ground clearance tinggi",
      "Ruang kabin luas dan fleksibel",
      "Honda SENSING untuk keamanan maksimal",
      "Cocok untuk adventure dan daily use"
    ],
    rating: 4.8,
    overview: {
      title: "SUV Kompak yang Stylish dan Andal",
      description: [
        "Honda HR-V terus menjadi kekuatan dominan di segmen SUV kompak yang kompetitif di Indonesia. Sejak diluncurkan pertama kali pada tahun 2014 dan pengenalan generasi terbarunya pada tahun 2022, HR-V telah menarik berbagai konsumen yang mencari kendaraan yang stylish, praktis, dan andal untuk berkendara di perkotaan maupun jarak jauh.",
        "Desain eksterior Honda HR-V terbaru menjadi daya tarik utama bagi banyak pembeli. Sering digambarkan sebagai modern, elegan, dan sporty, dengan gril sewarna bodi yang khas dan lampu depan LED ramping yang menciptakan fasia depan yang menawan."
      ]
    }
  },
  {
    id: "crv",
    name: "Honda CR-V",
    category: "SUV",
    variants: [
      {
        name: "1.5L Turbo CVT",
        price: "Rp 715.000.000",
        promo_price: "Rp 689.000.000"
      }
    ],
    engine: "1.5L VTEC Turbo",
    transmission: "CVT",
    fuel_type: "Bensin",
    seating: 7,
    safety_features: [
      "Honda SENSING",
      "6 SRS Airbag",
      "ABS + EBD + BA",
      "Vehicle Stability Assist (VSA)",
      "Hill Start Assist (HSA)",
      "Multi-Angle Rearview Camera",
      "Blind Spot Information (BSI)"
    ],
    dimensions: {
      length: "4.621 mm",
      width: "1.855 mm",
      height: "1.679 mm",
      wheelbase: "2.662 mm"
    },
    images: {
      main: "/cars/honda_crv.jpg",
      gallery: [
        "/cars/honda_crv.jpg",
        "/cars/honda_crv_2.jpg",
        "/cars/honda_crv_3.jpg",
        "/cars/honda_crv_4.jpg"
      ]
    },
    description: "Honda CR-V adalah SUV premium dengan mesin turbo yang bertenaga dan fitur keselamatan terdepan. Pilihan ideal untuk keluarga besar yang mengutamakan kenyamanan dan keamanan.",
    highlights: [
      "SUV 7-seater premium dengan turbo engine",
      "Teknologi Honda SENSING terlengkap",
      "Interior mewah dengan material berkualitas tinggi",
      "Performa tangguh untuk segala medan"
    ],
    promo: {
      title: "Promo Spesial CR-V",
      description: "Hemat hingga 26 juta rupiah untuk pembelian Honda CR-V",
      validUntil: "31 Maret 2024"
    },
    rating: 4.9,
    overview: {
      title: "SUV Premium dengan Performa dan Kenyamanan Terbaik",
      description: [
        "Honda CR-V terus menjadi pilihan populer di pasar SUV Indonesia, mendapatkan pujian atas desainnya yang sporty, pilihan mesin yang bertenaga dan efisien, serta interior yang nyaman dan kaya fitur. Ulasan terbaru dari media otomotif Indonesia menyoroti kemampuan CR-V untuk melayani baik berkendara di perkotaan maupun petualangan.",
        "Interior CR-V dianggap luas dan mewah, terutama pada varian turbo yang menawarkan konfigurasi tempat duduk tiga baris. Penggunaan kulit pada jok, kemudi, dan tuas persneling, bersama dengan panel kayu di dasbor, menciptakan nuansa premium."
      ]
    }
  },
  {
    id: "civic",
    name: "Honda Civic RS",
    category: "Sedan",
    variants: [
      {
        name: "RS CVT",
        price: "Rp 630.900.000"
      }
    ],
    engine: "1.5L VTEC Turbo",
    transmission: "CVT",
    fuel_type: "Bensin",
    seating: 5,
    safety_features: [
      "Honda SENSING",
      "6 SRS Airbag",
      "ABS + EBD + BA",
      "Vehicle Stability Assist (VSA)",
      "Hill Start Assist (HSA)",
      "Multi-Angle Rearview Camera",
      "Blind Spot Information (BSI)"
    ],
    dimensions: {
      length: "4.678 mm",
      width: "1.802 mm",
      height: "1.415 mm",
      wheelbase: "2.735 mm"
    },
    images: {
      main: "/cars/honda_civic_rs.jpg",
      gallery: [
        "/cars/honda_civic_rs.jpg",
        "/cars/honda_civic_rs_2.jpg",
        "/cars/honda_civic_rs_3.jpg",
        "/cars/honda_civic_rs_4.jpg"
      ]
    },
    description: "All New Honda Civic RS - License to Thrill. Sedan sporty dengan turbo engine yang menghadirkan sensasi berkendara yang tak terlupakan.",
    highlights: [
      "Sedan sporty dengan turbo engine",
      "Desain futuristik dan aerodinamis",
      "Honda SENSING untuk keamanan optimal",
      "Interior premium dengan teknologi terdepan"
    ],
    rating: 4.9,
    overview: {
      title: "Sedan Sporty dengan Desain dan Performa Terbaik",
      description: [
        "Generasi terbaru Honda Civic RS telah mendapatkan perhatian positif di pasar Indonesia, dengan para pengulas memuji estetika sporty dan modernnya, fitur yang ditingkatkan, dan dinamika berkendara yang menarik. Sejak diluncurkan pada Oktober 2021, Civic generasi ke-11, yang ditawarkan secara eksklusif dalam trim RS, telah menjadi pilihan populer di segmen sedan.",
        "Di bawah kapnya, Honda Civic RS ditenagai oleh mesin 1.5 liter DOHC VTEC Turbo yang dipasangkan dengan transmisi CVT, menghasilkan 176 tenaga kuda dan torsi 240 Nm. Powertrain ini dipuji karena bertenaga dan efisien, dengan konsumsi bahan bakar rata-rata sekitar 15 km/liter."
      ]
    }
  },
];

// Helper functions for car data
export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

export const getCarsByCategory = (category: string): Car[] => {
  return cars.filter(car => car.category === category);
};

export const getCarsWithPromo = (): Car[] => {
  return cars.filter(car => 
    car.variants.some(variant => variant.promo_price) || car.promo
  );
};

export const getLowestPrice = (car: Car): string => {
  const prices = car.variants.map(variant => 
    parseInt((variant.promo_price || variant.price).replace(/[^0-9]/g, ''))
  );
  const lowestPrice = Math.min(...prices);
  return `Rp ${lowestPrice.toLocaleString('id-ID')}.000`;
};

export const getHighestPrice = (car: Car): string => {
  const prices = car.variants.map(variant => 
    parseInt(variant.price.replace(/[^0-9]/g, ''))
  );
  const highestPrice = Math.max(...prices);
  return `Rp ${highestPrice.toLocaleString('id-ID')}.000`;
};

export const getPriceRange = (car: Car): string => {
  if (car.variants.length === 1) {
    const variant = car.variants[0];
    return variant.promo_price || variant.price;
  }
  
  const lowest = getLowestPrice(car);
  const highest = getHighestPrice(car);
  
  if (lowest === highest) {
    return lowest;
  }
  
  return `${lowest} - ${highest}`;
};