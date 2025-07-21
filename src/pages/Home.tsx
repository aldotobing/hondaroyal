import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Star, CheckCircle, Phone, Car, Tag, Image as ImageIcon, CarFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import AnimatedSection from '../components/AnimatedSection';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const Home = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

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
        title="Honda Royal Wiyung - Dealer Resmi Mobil Honda di Indonesia"
        description="Temukan mobil Honda impian Anda dengan kualitas terbaik, teknologi canggih, dan layanan purna jual terpercaya. Dapatkan promo dan cicilan menarik untuk semua tipe mobil Honda."
        keywords="Honda, Mobil Honda, Dealer Honda, Mobil Baru, Mobil Murah, Mobil Keluarga, Mobil Irit, Mobil Terbaik, Harga Honda, Promo Honda"
        image="/hero_banner.jpg"
        url="https://hondawiyung.web.id/"
      />
      {/* Hero Section */}
      <HeroSection />

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