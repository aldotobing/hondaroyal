import { Award, Shield, Users, Clock, MapPin, Phone, Star, CheckCircle, MessageCircle, User } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const achievements = [
    { icon: Award, number: "15+", label: "Tahun Pengalaman" },
    { icon: Users, number: "1000+", label: "Pelanggan Puas" },
    { icon: Shield, number: "100%", label: "Garansi Resmi" },
    { icon: Clock, number: "24/7", label: "Layanan Konsultasi" }
  ];

  const services = [
    { title: "Konsultasi & Test Drive", description: "Dapatkan saran ahli dan rasakan langsung performa Honda impian Anda.", icon: Users },
    { title: "Pembiayaan Fleksibel", description: "Skema kredit ringan, bunga kompetitif, dan proses persetujuan cepat.", icon: Shield },
    { title: "Trade-In Harga Terbaik", description: "Tukar mobil lama Anda dengan Honda baru secara transparan dan menguntungkan.", icon: CheckCircle },
    { title: "Layanan Purna Jual", description: "Dukungan after-sales terpercaya dari jaringan bengkel resmi Honda.", icon: Clock },
    { title: "Pengiriman Cepat", description: "Mobil baru Anda kami antar langsung ke depan pintu rumah Anda.", icon: MapPin },
    { title: "Booking Service Mudah", description: "Jadwalkan servis rutin mobil Honda Anda dengan praktis.", icon: Phone }
  ];

  const testimonials = [
    { name: "Budi Hartono", location: "Jakarta Selatan", car: "Honda CR-V", text: "Pelayanan dari Pak Sayuti sangat profesional. Prosesnya cepat dan saya mendapatkan penawaran terbaik untuk CR-V saya." },
    { name: "Sari Dewi", location: "Tangerang", car: "Honda Brio", text: "Sebagai pembeli mobil pertama, saya sangat dibantu oleh Pak Sayuti. Semua pertanyaan saya dijawab dengan sabar. Recommended!" },
    { name: "Ahmad Rizki", location: "Bekasi", car: "Honda Civic RS", text: "Mendapatkan Civic RS impian jadi kenyataan berkat bantuan Pak Sayuti. Pelayanannya juara, dari awal sampai mobil diantar." }
  ];

  return (
    <>
      <SEO 
        title="Tentang Kami - Sales Honda Terpercaya"
        description="Kenali lebih dekat Sayuti, sales executive Honda berpengalaman yang siap membantu Anda mewujudkan mobil impian dengan pelayanan terbaik dan terpercaya."
        keywords="tentang kami, sales honda, sayuti honda, dealer honda, profil sales honda"
        url="https://hondawiyung.web.id/tentang"
      />
      
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <AnimatedSection className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <p className="text-base font-semibold text-red-600 uppercase tracking-wider">Tentang Kami</p>
                <h1 className="mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                  Partner Terpercaya untuk Mobil Honda Impian Anda
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                  Dengan pengalaman lebih dari 15 tahun, saya, <strong>Sayuti</strong>, berkomitmen untuk memberikan pelayanan terbaik, transparan, dan personal dalam membantu Anda menemukan mobil Honda yang paling sesuai.
                </p>
                <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                  {/* Buttons removed as per request */}
                </div>
              </div>
              <div className="relative h-80 lg:h-full">
                <img src="/cars/honda_hrv_3.jpg" alt="Honda HR-V" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Achievements Bar */}
        <AnimatedSection className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {achievements.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <item.icon className="w-10 h-10 text-red-600 mb-2" />
                  <p className="text-3xl font-bold text-gray-900">{item.number}</p>
                  <p className="text-sm font-medium text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Profile Section */}
        <AnimatedSection id="profil" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="rounded-full shadow-2xl mx-auto w-64 h-64 bg-gray-200 flex items-center justify-center">
                    <User className="w-48 h-48 text-gray-400" />
                  </div>
                  <div className="absolute bottom-8 right-8 h-5 w-5 bg-green-500 rounded-full border-2 border-white shadow-md" title="Online"></div>
                </div>
              </div>
              <div className="lg:col-span-3 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900">Sayuti, Senior Sales Executive</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Saya percaya bahwa membeli mobil adalah sebuah perjalanan penting. Misi saya adalah memastikan perjalanan Anda menyenangkan, mudah, dan memuaskan. Saya siap menjadi konsultan pribadi Anda, memberikan informasi akurat, dan membantu setiap langkah, mulai dari pemilihan model, test drive, hingga proses pembiayaan yang paling menguntungkan.
                </p>
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Jujur & Transparan</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Respon Cepat 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Harga Terbaik</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="https://wa.me/6285936562657?text=Halo%20Pak%20Sayuti%2C%20saya%20ingin%20konsultasi%20mengenai%20mobil%20Honda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Chat di WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection id="layanan" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Layanan Komprehensif Kami</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Semua yang Anda butuhkan untuk memiliki Honda impian, ada di sini.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Apa Kata Mereka Tentang Saya</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Kepercayaan dan kepuasan pelanggan adalah prioritas utama.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 italic">"{testimonial.text}"</blockquote>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Pemilik {testimonial.car} dari {testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="bg-red-700">
          <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Siap Memulai Perjalanan Anda Bersama Honda?
            </h2>
            <p className="mt-4 text-lg text-red-100">
              Hubungi saya hari ini untuk mendapatkan penawaran eksklusif, jadwal test drive, atau sekadar konsultasi. Saya siap membantu Anda.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/6285936562657?text=Halo%20Pak%20Sayuti%2C%20saya%20tertarik%20dengan%20mobil%20Honda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default About;
