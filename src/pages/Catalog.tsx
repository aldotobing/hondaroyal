import { useState, useMemo } from 'react';
import { Search, ChevronDown, Car, Wallet, X } from 'lucide-react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

type CarData = typeof cars[0];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');

  const categories = useMemo(() => ['All', ...new Set(cars.map(car => car.category))], []);
  const priceRanges = [
    { label: 'Semua Harga', min: 0, max: Infinity },
    { label: 'Di bawah 300 jt', min: 0, max: 299999999 },
    { label: '300 - 500 jt', min: 300000000, max: 500000000 },
    { label: '500 - 700 jt', min: 500000000, max: 700000000 },
    { label: 'Di atas 700 jt', min: 700000001, max: Infinity }
  ];

  const getCarLowestPrice = (car: CarData) => {
    const prices = car.variants.map(variant => parseInt((variant.promo_price || variant.price).replace(/[^0-9]/g, '')));
    return Math.min(...prices);
  };

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || selectedCategory === 'All' || car.category === selectedCategory;
      
      const range = priceRanges.find(r => r.label === selectedPriceRange) || priceRanges[0];
      const carPrice = getCarLowestPrice(car);
      const matchesPrice = carPrice >= range.min && carPrice <= range.max;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case 'price-asc':
        return filtered.sort((a, b) => getCarLowestPrice(a) - getCarLowestPrice(b));
      case 'price-desc':
        return filtered.sort((a, b) => getCarLowestPrice(b) - getCarLowestPrice(a));
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, priceRanges]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedPriceRange('');
    setSortBy('name-asc');
  };

  return (
    <>
      <SEO 
        title="Katalog Mobil Honda - Harga Terbaru & Terlengkap"
        description="Jelajahi daftar lengkap mobil Honda terbaru. Bandingkan harga, spesifikasi, dan temukan mobil impian Anda dengan mudah."
        keywords="katalog honda, harga mobil honda, daftar mobil honda, mobil honda terbaru, spesifikasi honda"
        url="https://hondawiyung.web.id/katalog"
      />
      <div className="bg-gray-50">
        {/* Header */}
        <AnimatedSection className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Katalog Mobil Honda
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan mobil Honda yang paling sesuai dengan gaya hidup dan kebutuhan Anda.
            </p>
          </div>
        </AnimatedSection>

        {/* Filters Section */}
        <AnimatedSection className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Search */}
                <div className="lg:col-span-2">
                  <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Cari Mobil</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="search"
                      type="text"
                      placeholder="Contoh: Civic, Brio, HR-V..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
                {/* Price Range */}
                <div>
                  <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">Rentang Harga</label>
                  <div className="relative">
                    <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select id="price" value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                      {priceRanges.map(r => <option key={r.label} value={r.label}>{r.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              {/* Category Buttons */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Kategori</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-red-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          {/* Sort and Results Count */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-6">
            <p className="text-sm text-gray-600 w-full sm:w-auto">
              Menampilkan <span className="font-bold text-gray-900">{filteredAndSortedCars.length}</span> dari <span className="font-bold text-gray-900">{cars.length}</span> mobil
            </p>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative w-full sm:w-auto flex-grow">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg appearance-none text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent transition">
                  <option value="name-asc">Nama (A-Z)</option>
                  <option value="name-desc">Nama (Z-A)</option>
                  <option value="price-asc">Harga (Terendah)</option>
                  <option value="price-desc">Harga (Tertinggi)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <button onClick={resetFilters} className="p-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition" title="Reset Filter">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cars Grid */}
          {filteredAndSortedCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedCars.map((car) => (
                <CarCard key={car.id} car={car} showVariants={true} />
              ))}
            </div>
          ) : (
            <AnimatedSection className="text-center py-16">
              <div className="inline-block bg-red-100 p-6 rounded-full mb-6">
                <Search className="w-16 h-16 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Mobil Tidak Ditemukan</h2>
              <p className="mt-2 text-gray-600 max-w-md mx-auto">
                Coba sesuaikan filter atau kata kunci pencarian Anda. Jika masih kesulitan, kami siap membantu.
              </p>
            </AnimatedSection>
          )}
        </main>
        
        {/* CTA Section */}
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Masih Bingung Memilih Mobil?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              Jangan ragu untuk bertanya. Saya, Sayuti, siap memberikan rekomendasi terbaik sesuai kebutuhan dan budget Anda.
            </p>
            <a
              href="https://wa.me/6285936562657?text=Halo%20Pak%20Sayuti%2C%20saya%20butuh%20bantuan%20memilih%20mobil%20Honda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-105"
            >
              <Wallet className="w-6 h-6" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Catalog;
