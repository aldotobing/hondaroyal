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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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