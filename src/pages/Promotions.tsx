import { Calendar, Gift, Percent, CreditCard, Phone, CheckCircle, Clock } from 'lucide-react';

const Promotions = () => {
  const promos = [
    {
      id: 1,
      title: "Promo Tahun Baru 2024",
      description: "Dapatkan diskon hingga 15 juta rupiah untuk pembelian Honda CR-V dan Honda Civic",
      discount: "Hingga Rp 15.000.000",
      validUntil: "31 Januari 2024",
      terms: [
        "Berlaku untuk pembelian cash dan kredit",
        "Tidak dapat digabung dengan promo lain",
        "Stok terbatas",
        "Syarat dan ketentuan berlaku"
      ],
      image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "HOT DEAL",
      color: "red"
    },
    {
      id: 2,
      title: "DP Ringan Honda Brio",
      description: "DP mulai dari 10 juta saja untuk Honda Brio dan Honda Jazz dengan cicilan terjangkau",
      discount: "DP Mulai 10 Juta",
      validUntil: "28 Februari 2024",
      terms: [
        "DP mulai dari Rp 10.000.000",
        "Cicilan mulai dari Rp 3.5 juta/bulan",
        "Tenor hingga 5 tahun",
        "Bunga kompetitif mulai 6.8%"
      ],
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "BEST SELLER",
      color: "green"
    },
    {
      id: 3,
      title: "Trade-In Terbaik Semester 1",
      description: "Tukar tambah mobil lama Anda dengan harga terbaik dan dapatkan bonus spesial",
      discount: "Bonus Hingga 5 Juta",
      validUntil: "30 Juni 2024",
      terms: [
        "Berlaku untuk semua merek mobil",
        "Penilaian gratis dan transparan",
        "Bonus hingga Rp 5.000.000",
        "Proses cepat maksimal 3 hari"
      ],
      image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "LIMITED TIME",
      color: "blue"
    },
    {
      id: 4,
      title: "Cicilan 0% Honda HR-V",
      description: "Kesempatan terbatas! Cicilan 0% untuk Honda HR-V dengan tenor tertentu",
      discount: "Bunga 0%",
      validUntil: "15 Maret 2024",
      terms: [
        "Bunga 0% untuk tenor 2 tahun",
        "DP minimal 30%",
        "Berlaku untuk Honda HR-V semua tipe",
        "Proses approval cepat"
      ],
      image: "https://images.pexels.com/photos/2127022/pexels-photo-2127022.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "EXCLUSIVE",
      color: "purple"
    }
  ];

  const benefits = [
    {
      icon: CreditCard,
      title: "Cicilan Fleksibel",
      description: "Tenor hingga 7 tahun dengan bunga kompetitif mulai dari 6.8% per tahun"
    },
    {
      icon: Gift,
      title: "Bonus Menarik",
      description: "Dapatkan berbagai bonus seperti aksesoris, voucher service, dan asuransi"
    },
    {
      icon: Percent,
      title: "Trade-In Terbaik",
      description: "Harga trade-in mobil lama yang kompetitif dengan proses penilaian transparan"
    }
  ];

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-500';
      case 'green': return 'bg-green-500';
      case 'blue': return 'bg-blue-500';
      case 'purple': return 'bg-purple-500';
      default: return 'bg-red-500';
    }
  };

  return (
    <div className="py-8 lg:py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Promo Spesial Honda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan penawaran terbaik dan hemat lebih banyak untuk mobil Honda impian Anda
          </p>
        </div>

        {/* Current Promotions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {promos.map((promo) => (
            <div key={promo.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 ${getBadgeColor(promo.color)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {promo.badge}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {promo.discount}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{promo.description}</p>
                </div>

                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Berlaku hingga {promo.validUntil}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Syarat & Ketentuan:</h4>
                  <ul className="space-y-2">
                    {promo.terms.map((term, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20dengan%20promo%20${encodeURIComponent(promo.title)}.%20Bisa%20minta%20info%20lengkap%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Chat Sekarang</span>
                  </a>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-3 rounded-lg font-medium transition-all duration-200">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Keuntungan Membeli Honda
            </h2>
            <p className="text-lg text-gray-600">
              Nikmati berbagai kemudahan dan keuntungan eksklusif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financing Calculator */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl text-white p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Hitung Cicilan Honda Anda
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Dapatkan simulasi cicilan yang sesuai dengan budget Anda. Sayuti akan membantu mencarikan skema pembiayaan terbaik.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Tenor fleksibel 1-7 tahun</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Bunga kompetitif mulai 6.8%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>DP mulai dari 15%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Proses approval cepat</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Contoh Cicilan Honda City</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Harga Mobil:</span>
                  <span className="font-semibold">Rp 334.900.000</span>
                </div>
                <div className="flex justify-between">
                  <span>DP (20%):</span>
                  <span className="font-semibold">Rp 66.980.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Tenor:</span>
                  <span className="font-semibold">5 Tahun</span>
                </div>
                <div className="flex justify-between">
                  <span>Bunga:</span>
                  <span className="font-semibold">7.2% per tahun</span>
                </div>
                <hr className="border-white/20" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Cicilan per Bulan:</span>
                  <span>Rp 5.312.000</span>
                </div>
              </div>
              
              <a
                href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20ingin%20simulasi%20cicilan%20Honda.%20Bisa%20bantu%20hitung%20sesuai%20budget%20saya%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold mt-4 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Hitung Cicilan Saya</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Jangan Lewatkan Promo Terbatas Ini!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Hubungi Sayuti sekarang juga untuk mendapatkan penawaran terbaik dan konsultasi gratis tentang Honda yang sesuai dengan kebutuhan Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20dengan%20promo%20Honda%20terbaru.%20Bisa%20minta%20info%20lengkap%20dan%20penawaran%20terbaik%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Chat Sayuti - Dapatkan Promo</span>
              </a>
              <a
                href="tel:+6285936562657"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Telepon Langsung</span>
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>🕒 Promo terbatas dan dapat berubah sewaktu-waktu</p>
              <p>📞 Konsultasi gratis 24/7 dengan Sayuti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;