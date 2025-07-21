import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cars } from '../data/cars';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const intervalRef = useRef<number>();

  const heroBanners = [
    '/hero_banner_2.jpg',
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
      intervalRef.current = window.setInterval(goToNextBanner, 10000); // Wait longer before resuming auto-advance
    }, 10000); 
  };

  return (
    <AnimatedSection className="w-full">
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-gray-900 via-zinc-900 to-black text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentBanner}
              src={heroBanners[currentBanner]}
              alt="Honda Showcase"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.2, 0, 0, 1] }}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-600/30 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-red-300 text-sm font-medium">Honda Premium Dealer</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              >
                Mobil Honda <span className="text-red-500">Impian</span> Anda
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 mt-3 block">
                  Hanya di <span className="text-white font-extrabold">Honda Royal</span>
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
              >
                Rasakan pengalaman berkendara premium dengan teknologi terdepan, 
                kualitas terpercaya, dan layanan purna jual terbaik di kelasnya.
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md"
              >
                <div className="flex items-center bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 shadow-inner">
                  <div className="bg-red-500/10 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-md font-medium text-white">Garansi Resmi</div>
                    <div className="text-sm text-gray-400">Honda Indonesia</div>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 shadow-inner">
                  <div className="bg-red-500/10 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-md font-medium text-white">DP Ringan</div>
                    <div className="text-sm text-gray-400">Mulai 10%</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link 
                  to="/katalog" 
                  className="flex-1 flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
                >
                  Lihat Semua Mobil
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20dengan%20mobil%20Honda.%20Bisa%20minta%20info%20lebih%20lanjut%3F" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Chat Sayuti</span>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center justify-between pt-6"
              >
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {cars.length}+
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 font-medium mt-1">Model Tersedia</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    1000+
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 font-medium mt-1">Pelanggan Puas</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    5★
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 font-medium mt-1">Rating Layanan</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image Carousel Dots */}
            <div className="relative hidden lg:block">
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-3 z-30">
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
        </div>
      </section>
    </AnimatedSection>
  );
};

export default HeroSection;