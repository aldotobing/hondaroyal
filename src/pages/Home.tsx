import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { cars, getCarsWithPromo } from '../data/cars';
import CarCard from '../components/CarCard';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

const Home = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);
  const intervalRef = useRef<number>();

  const heroBanners = [
    '/hero_banner.jpg',
    '/hero_banner_2.jpg',
    '/hero_banner_3.jpg',
    '/hero_banner_4.jpg',
    '/hero_banner_5.jpg',
  ];

  const goToBanner = useCallback((index: number) => {
    setCurrentBanner(index);
  }, []);

  const goToNextBanner = useCallback(() => {
    setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
  }, [heroBanners.length]);

  // Auto-advance effect
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set new interval
    intervalRef.current = window.setInterval(() => {
      goToNextBanner();
    }, 5000);

    // Clear interval on unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNextBanner]);

  // Pause auto-advance when user interacts with the carousel
  const handleDotClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    goToBanner(index);
    
    // Restart auto-advance after a delay
    setTimeout(() => {
      intervalRef.current = window.setInterval(goToNextBanner, 5000);
    }, 10000); // Wait longer before resuming auto-advance
  };

  const features = [
    {
      icon: Shield,
      title: "Keamanan Terdepan",
      description: "Honda SENSING dan fitur keselamatan canggih untuk melindungi keluarga Anda"
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description: "Teknologi mesin terdepan dengan efisiensi bahan bakar yang optimal"
    },
    {
      icon: Users,
      title: "Layanan Terpercaya",
      description: "Jaringan servis resmi dan suku cadang original di seluruh Indonesia"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      model: "Honda CR-V",
      rating: 5,
      text: "Sangat puas dengan Honda CR-V! Nyaman untuk keluarga dan irit BBM. Pelayanan Sayuti juga sangat membantu dari awal hingga selesai."
    },
    {
      name: "Sari Wijaya",
      model: "Honda Brio",
      rating: 5,
      text: "Honda Brio cocok banget untuk daily use di Jakarta. Compact tapi kabin luas, parkir mudah. Recommended!"
    },
    {
      name: "Ahmad Rahman",
      model: "Honda Civic RS",
      rating: 5,
      text: "Performa Honda Civic RS turbo luar biasa! Desain sporty dan fitur lengkap. Worth it untuk upgrade dari mobil lama."
    }
  ];

  const featuredCars = cars.slice(0, 3);

  return (
    <div>
      <SEO 
        title="Honda Royal - Dealer Resmi Mobil Honda di Indonesia"
        description="Temukan mobil Honda impian Anda dengan kualitas terbaik, teknologi canggih, dan layanan purna jual terpercaya. Dapatkan promo dan cicilan menarik untuk semua tipe mobil Honda."
        keywords="Honda, Mobil Honda, Dealer Honda, Mobil Baru, Mobil Murah, Mobil Keluarga, Mobil Irit, Mobil Terbaik, Harga Honda, Promo Honda"
        image="/hero_banner.jpg"
        url="https://hondawiyung.web.id/"
      />
      {/* Hero Section */}
      <AnimatedSection className="w-full">
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white overflow-hidden">
          {/* Car Image */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[2000px] mx-auto">
                <img 
                  src={heroBanners[currentBanner]} 
                  alt="Honda Showcase" 
                  className="w-full h-full object-cover object-center scale-110 transition-transform duration-1000 ease-in-out"
                  style={{ transform: 'scale(1.1) translateY(5%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Dynamic Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(239,68,68,0.1)_180deg,transparent_360deg)] animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-12">
                <div className="space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-red-300 text-sm font-medium">Honda Premium Dealer</span>
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                    Temukan Mobil Honda Impian Anda
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.6s_both] opacity-0">
                    Rasakan pengalaman berkendara premium dengan teknologi terdepan, 
                    <span className="text-red-300 font-semibold"> kualitas terpercaya</span>, 
                    dan layanan purna jual terbaik untuk keluarga Indonesia
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 animate-[fadeInUp_0.6s_ease-out_0.8s_both] opacity-0">
                  <Link
                    to="/katalog"
                    className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center space-x-3 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-red-500/25 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">Lihat Katalog</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20dengan%20mobil%20Honda.%20Bisa%20minta%20info%20lebih%20lanjut%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center space-x-3 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-green-500/25 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <Phone className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Chat Sayuti</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-8 animate-[fadeInUp_0.6s_ease-out_1s_both] opacity-0">
                  <div className="text-center group">
                    <div className="text-4xl font-black bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {cars.length}+
                    </div>
                    <div className="text-sm text-gray-400 font-medium mt-1">Model Tersedia</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      1000+
                    </div>
                    <div className="text-sm text-gray-400 font-medium mt-1">Pelanggan Puas</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      5★
                    </div>
                    <div className="text-sm text-gray-400 font-medium mt-1">Rating Layanan</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Image Carousel */}
              <div className="relative animate-[fadeInRight_0.8s_ease-out_0.4s_both] opacity-0">
                {/* Glassmorphism Container */}
                <div className="relative z-20 p-1 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <div className="relative aspect-video w-full">
                      {heroBanners.map((banner, index) => (
                        <img
                          key={banner}
                          src={banner}
                          alt={`Honda Car ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-1000 ease-in-out transform ${
                            index === currentBanner
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        />
                      ))}
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                    </div>
                    
                    {/* Enhanced Dots */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-30">
                      {heroBanners.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                            index === currentBanner 
                              ? 'w-12 h-3 bg-white shadow-lg' 
                              : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        >
                          {index === currentBanner && (
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-4 w-6 h-24 bg-gradient-to-b from-red-500/40 to-transparent rounded-full blur-sm animate-pulse delay-500"></div>
              </div>
            </div>
          </div>

          {/* Custom CSS for animations */}
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes fadeInRight {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </section>
      </AnimatedSection>

      {/* Featured Cars Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Model Honda Terpopuler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilihan terbaik dari lineup Honda dengan teknologi terdepan dan harga terjangkau
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 0.7, 0.2, 1]
                    }
                  }
                }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/katalog"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Lihat Semua Model</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Explore Pages Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Jelajahi Lebih Lanjut
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan informasi lengkap tentang Honda Royal
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <Link to="/katalog" className="flex flex-col items-center p-6 rounded-2xl bg-red-50 hover:bg-red-100 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg">
              <img src="/city.jpg" alt="Katalog" className="w-24 h-24 object-cover rounded-full mb-4 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Katalog</h3>
              <p className="text-gray-600 text-center">Lihat semua model mobil Honda</p>
            </Link>
            <Link to="/promo" className="flex flex-col items-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg">
              <img src="/BRVnx7.jpg" alt="Promo" className="w-24 h-24 object-cover rounded-full mb-4 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Promo</h3>
              <p className="text-gray-600 text-center">Dapatkan penawaran terbaik</p>
            </Link>
            <Link to="/galeri" className="flex flex-col items-center p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg">
              <img src="/civicrs.jpg" alt="Galeri" className="w-24 h-24 object-cover rounded-full mb-4 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Galeri</h3>
              <p className="text-gray-600 text-center">Lihat koleksi foto mobil Honda</p>
            </Link>
            <Link to="/tentang" className="flex flex-col items-center p-6 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg">
              <img src="/accord.jpg" alt="Tentang Kami" className="w-24 h-24 object-cover rounded-full mb-4 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tentang Kami</h3>
              <p className="text-gray-600 text-center">Kenali Honda Royal lebih dekat</p>
            </Link>
            <Link to="/kontak" className="flex flex-col items-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg">
              <img src="/city_hatchback.jpg" alt="Kontak" className="w-24 h-24 object-cover rounded-full mb-4 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kontak</h3>
              <p className="text-gray-600 text-center">Hubungi kami sekarang</p>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Honda?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami untuk memberikan yang terbaik bagi keluarga Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Honda Royal Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tentang Honda Royal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dealer Resmi Honda Terpercaya untuk Kebutuhan Otomotif Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Honda Royal adalah dealer resmi mobil Honda terkemuka di Indonesia, berkomitmen untuk menyediakan pengalaman kepemilikan mobil yang luar biasa bagi setiap pelanggan. Dengan dedikasi terhadap kualitas, inovasi, dan kepuasan pelanggan, kami menawarkan rangkaian lengkap mobil Honda terbaru yang dirancang untuk memenuhi berbagai gaya hidup dan kebutuhan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kami memahami bahwa membeli mobil adalah investasi besar, oleh karena itu tim profesional kami siap membantu Anda di setiap langkah, mulai dari pemilihan model yang tepat, penawaran harga terbaik, hingga layanan purna jual yang komprehensif. Kami bangga menjadi bagian dari jaringan Honda yang luas, memastikan Anda mendapatkan dukungan dan suku cadang asli di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Di Honda Royal, kami tidak hanya menjual mobil; kami membangun hubungan jangka panjang dengan pelanggan kami. Kunjungi showroom kami hari ini atau hubungi sales representative kami untuk merasakan langsung perbedaan Honda Royal. Dapatkan penawaran eksklusif, cicilan ringan, dan berbagai promo menarik yang hanya bisa Anda temukan di sini. Percayakan kebutuhan mobil Honda Anda kepada kami, dan rasakan kenyamanan serta keamanan berkendara bersama keluarga tercinta.
              </p>
            </div>
            <div className="relative">
              <img src="/hero_banner.jpg" alt="About Honda Royal" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Pengalaman Terbaik</h3>
                <p className="text-lg">Layanan profesional dan terpercaya</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Testimoni Pelanggan
            </h2>
            <p className="text-xl text-gray-600">
              Dengarkan pengalaman pelanggan yang telah mempercayai Honda
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center">
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[selectedTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[selectedTestimonial].text}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[selectedTestimonial].name}
                  </div>
                  <div className="text-red-600 font-medium">
                    Pemilik {testimonials[selectedTestimonial].model}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === selectedTestimonial ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Membawa Pulang Honda Impian Anda?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hubungi sales representative kami sekarang untuk konsultasi gratis dan penawaran terbaik
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20untuk%20membeli%20mobil%20Honda.%20Bisa%20minta%20info%20lengkap%20dan%20penawaran%20terbaik%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Chat Sayuti Sekarang</span>
            </a>
            <Link
              to="/kontak"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Atau Kunjungi Showroom
            </Link>
          </div>

          <div className="mt-8 flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Cicilan 0% tersedia</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Trade-in dengan harga terbaik</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Garansi resmi Honda</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;