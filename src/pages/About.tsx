import { Award, Shield, Users, Clock, MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "Tahun Pengalaman",
      description: "Melayani keluarga Indonesia dengan dedikasi tinggi"
    },
    {
      icon: Users,
      number: "2500+",
      label: "Pelanggan Puas",
      description: "Kepercayaan pelanggan adalah kebanggaan kami"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Garansi Resmi",
      description: "Semua Honda dilengkapi garansi resmi Honda"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Layanan Konsultasi",
      description: "Siap membantu Anda kapan saja"
    }
  ];

  const services = [
    {
      title: "Konsultasi Gratis",
      description: "Mendapatkan saran terbaik untuk memilih Honda yang sesuai kebutuhan dan budget",
      icon: Users
    },
    {
      title: "Test Drive",
      description: "Rasakan langsung performa dan kenyamanan Honda sebelum memutuskan membeli",
      icon: Award
    },
    {
      title: "Pembiayaan Fleksibel",
      description: "Berbagai pilihan skema kredit dengan bunga kompetitif dan tenor fleksibel",
      icon: Shield
    },
    {
      title: "Trade-In Terpercaya",
      description: "Tukar tambah mobil lama dengan harga terbaik dan proses yang transparan",
      icon: CheckCircle
    },
    {
      title: "After Sales Service",
      description: "Layanan purna jual terpercaya dengan jaringan bengkel resmi Honda",
      icon: Clock
    },
    {
      title: "Delivery Service",
      description: "Layanan antar mobil ke rumah untuk kenyamanan pelanggan",
      icon: MapPin
    }
  ];

  const testimonials = [
    {
      name: "Budi Hartono",
      location: "Jakarta Selatan",
      car: "Honda CR-V",
      rating: 5,
      text: "Pelayanan Sayuti sangat memuaskan. Dari konsultasi awal hingga serah terima mobil, semuanya profesional dan ramah. Honda CR-V saya sangat nyaman untuk keluarga.",
      date: "Desember 2023"
    },
    {
      name: "Sari Dewi",
      location: "Tangerang",
      car: "Honda Brio",
      rating: 5,
      text: "Proses pembelian Honda Brio sangat mudah dan cepat. Sayuti membantu mencarikan skema kredit terbaik sesuai kemampuan saya. Recommended!",
      date: "November 2023"
    },
    {
      name: "Ahmad Rizki",
      location: "Bekasi",
      car: "Honda Civic",
      rating: 5,
      text: "Honda Civic impian akhirnya terwujud! Terima kasih Sayuti yang sudah membantu dari awal sampai akhir. Pelayanannya benar-benar top!",
      date: "Oktober 2023"
    }
  ];

  return (
    <div className="py-8 lg:py-12 bg-gray-50 min-h-screen">
      <SEO 
        title="Tentang Honda Royal - Dealer Terpercaya Anda"
        description="Kenali lebih dekat Honda Royal, dealer resmi mobil Honda dengan pengalaman lebih dari 15 tahun. Kami berkomitmen untuk memberikan pelayanan terbaik."
        keywords="tentang kami, dealer honda, honda royal, profil perusahaan, sejarah honda royal"
        url="https://hondawiyung.web.id/tentang"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dealer Honda terpercaya yang berkomitmen memberikan pelayanan terbaik untuk keluarga Indonesia
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Misi Kami: Menghadirkan Mobil Honda Terbaik untuk Keluarga Indonesia
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Sejak tahun 2008, kami telah berdedikasi melayani ribuan keluarga Indonesia dalam mewujudkan impian memiliki mobil Honda berkualitas. Dengan pengalaman lebih dari 15 tahun, kami memahami kebutuhan unik setiap pelanggan.
              </p>
              <p>
                Kami tidak hanya menjual mobil, tetapi membangun hubungan jangka panjang dengan pelanggan. Setiap Honda yang kami jual disertai dengan komitmen layanan purna jual terbaik dan dukungan penuh dari tim ahli kami.
              </p>
              <p>
                Dipimpin oleh sales executive berpengalaman, <strong>Sayuti</strong>, yang telah membantu lebih dari 2500 keluarga Indonesia mendapatkan Honda impian mereka dengan pelayanan yang ramah, profesional, dan terpercaya.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/cars/honda_hrv_3.jpg"
              alt="Honda HR-V"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">{achievement.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Sales Representative Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Sayuti</h3>
                <p className="text-lg text-red-600 font-semibold">Senior Sales Executive Honda</p>
                <div className="flex justify-center lg:justify-start items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(4.9/5 dari 500+ review)</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Mengapa Memilih Sayuti?</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">15+ tahun pengalaman di industri otomotif Honda</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Konsultasi gratis dan rekomendasi terbaik sesuai budget</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Proses pembelian cepat dan tidak ribet</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">After sales service dan follow up berkala</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tersedia 24/7 untuk konsultasi dan emergency</span>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <a
                  href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20ingin%20konsultasi%20tentang%20Honda.%20Bisa%20bantu%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat Sayuti</span>
                </a>
                <a
                  href="tel:+6285936562657"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Telepon
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Layanan Lengkap Kami
            </h2>
            <p className="text-lg text-gray-600">
              Dari konsultasi hingga after sales, kami siap melayani semua kebutuhan Honda Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-gray-600">
              Testimoni nyata dari pelanggan yang telah mempercayai layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-red-600 font-medium">Pemilik {testimonial.car}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Siap Bergabung dengan Keluarga Besar Honda?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            Jadilah bagian dari ribuan keluarga Indonesia yang telah mempercayai kami.
            Hubungi Sayuti sekarang untuk konsultasi gratis dan penawaran terbaik!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20untuk%20bergabung%20dengan%20keluarga%20Honda.%20Bisa%20minta%20konsultasi%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Konsultasi Gratis dengan Sayuti</span>
            </a>
            <a
              href="/kontak"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Kunjungi Showroom
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;