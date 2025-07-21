import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, CheckCircle, Phone, Car, Tag, Image as ImageIcon, CarFront } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    
    // Set new interval with longer duration
    intervalRef.current = window.setInterval(() => {
      goToNextBanner();
    }, 10000); // Increased to 10 seconds for even slower transitions

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
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white overflow-hidden">
          {/* Car Image */}
          <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[2000px] mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentBanner}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, ease: [0.2, 0, 0, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img 
                        src={heroBanners[currentBanner]} 
                        alt="Honda Showcase" 
                        className="w-full h-full object-cover object-center scale-110"
                        style={{ transform: 'scale(1.2) translateY(0)' }}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
                </div>
              </div>
          </div>
          
          {/* Dynamic Background Pattern */}
          <div className="absolute inset-0 opacity-20 md:opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(239,68,68,0.1)_180deg,transparent_360deg)] animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
          
          {/* Animated Grid - Removed on mobile */}
          <div className="hidden md:block absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          </div>

          {/* Floating Elements - Smaller and fewer on mobile */}
          <div className="absolute top-8 left-4 w-16 h-16 md:top-20 md:left-10 md:w-32 md:h-32 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="hidden md:block absolute top-20 right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-12 left-4 w-20 h-20 md:bottom-32 md:left-10 md:w-40 md:h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  {/* Badge - Smaller on mobile */}
                  <div className="inline-flex items-center px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-1.5 md:mr-2 animate-pulse"></div>
                    <span className="text-red-300 text-xs font-medium">Honda Premium Dealer</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black leading-tight tracking-tight">
                        Mobil Honda <span className="text-red-400">Impian</span> Anda
                        <br />
                        <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mt-2 block">
                          Hanya di <span className="text-white font-bold">Honda Royal</span>
                        </span>
                      </h1>
                      
                      <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.6s_both] opacity-0">
                        Rasakan pengalaman berkendara premium dengan teknologi terdepan, 
                        kualitas terpercaya, dan layanan purna jual terbaik di kelasnya.
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-4 max-w-md">
                      <div className="flex items-center bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/5">
                        <div className="bg-red-500/10 p-2 rounded-lg mr-3">
                          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Garansi Resmi</div>
                          <div className="text-xs text-gray-400">Honda Indonesia</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/5">
                        <div className="bg-red-500/10 p-2 rounded-lg mr-3">
                          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">DP Ringan</div>
                          <div className="text-xs text-gray-400">Mulai 10%</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link 
                        to="/katalog" 
                        className="flex-1 flex items-center justify-center px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20"
                      >
                        Lihat Semua Mobil
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <a 
                        href="tel:+6281234567890" 
                        className="flex-1 flex items-center justify-center px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-all duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-[fadeInUp_0.6s_ease-out_0.8s_both] opacity-0">
                  <Link
                    to="/katalog"
                    className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all duration-500 flex items-center justify-center space-x-2 sm:space-x-3 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-red-500/25 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">Lihat Katalog</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20dengan%20mobil%20Honda.%20Bisa%20minta%20info%20lebih%20lanjut%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all duration-500 flex items-center justify-center space-x-2 sm:space-x-3 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-green-500/25 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Chat Sayuti</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 md:pt-6 animate-[fadeInUp_0.6s_ease-out_1s_both] opacity-0">
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {cars.length}+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Model Tersedia</div>
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

      {/* Quick Links Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/katalog" className="group p-6 rounded-xl bg-white hover:bg-red-50 transition-colors duration-200 border border-gray-100 hover:border-red-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 group-hover:bg-red-100 flex items-center justify-center mb-4 transition-colors duration-200">
                  <Car className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Katalog</h3>
                <p className="text-sm text-gray-600">Lihat semua model mobil Honda</p>
              </div>
            </Link>
            
            <Link to="/promo" className="group p-6 rounded-xl bg-white hover:bg-blue-50 transition-colors duration-200 border border-gray-100 hover:border-blue-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-4 transition-colors duration-200">
                  <Tag className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Promo</h3>
                <p className="text-sm text-gray-600">Dapatkan penawaran terbaik</p>
              </div>
            </Link>
            
            <Link to="/galeri" className="group p-6 rounded-xl bg-white hover:bg-green-50 transition-colors duration-200 border border-gray-100 hover:border-green-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 group-hover:bg-green-100 flex items-center justify-center mb-4 transition-colors duration-200">
                  <ImageIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Galeri</h3>
                <p className="text-sm text-gray-600">Lihat koleksi foto mobil</p>
              </div>
            </Link>
            
            <Link to="/test-drive" className="group p-6 rounded-xl bg-white hover:bg-amber-50 transition-colors duration-200 border border-gray-100 hover:border-amber-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-4 transition-colors duration-200">
                  <CarFront className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Test Drive</h3>
                <p className="text-sm text-gray-600">Jadwalkan test drive</p>
              </div>
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