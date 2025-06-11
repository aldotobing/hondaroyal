import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const categories = ['City Car', 'Hatchback', 'Sedan', 'SUV'];
  const priceRanges = [
    { label: 'Di bawah 300 juta', min: 0, max: 300000000 },
    { label: '300 - 500 juta', min: 300000000, max: 500000000 },
    { label: '500 - 700 juta', min: 500000000, max: 700000000 },
    { label: 'Di atas 700 juta', min: 700000000, max: Infinity }
  ];

  const parsePrice = (priceString: string) => {
    return parseInt(priceString.replace(/[^0-9]/g, ''));
  };

  const getCarLowestPrice = (car: any) => {
    const prices = car.variants.map((variant: any) => 
      parsePrice(variant.promo_price || variant.price)
    );
    return Math.min(...prices);
  };

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || car.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        const carPrice = getCarLowestPrice(car);
        matchesPrice = carPrice >= range.min && carPrice <= range.max;
      }
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="py-8 lg:py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Katalog Mobil Honda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan mobil Honda yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari model Honda..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Semua Kategori</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Semua Harga</option>
                {priceRanges.map((range) => (
                  <option key={range.label} value={range.label}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory || selectedPriceRange) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategory && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('')}
                    className="ml-2 hover:text-red-600"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedPriceRange && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {selectedPriceRange}
                  <button
                    onClick={() => setSelectedPriceRange('')}
                    className="ml-2 hover:text-red-600"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan {filteredCars.length} dari {cars.length} model Honda
          </p>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} showVariants={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Tidak ada hasil yang ditemukan
            </h3>
            <p className="text-gray-500 mb-4">
              Coba ubah filter pencarian atau kata kunci Anda
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedPriceRange('');
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white p-8 mt-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Butuh Bantuan Memilih?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Konsultasi gratis dengan sales expert kami untuk mendapatkan rekomendasi terbaik
          </p>
          <a
            href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20butuh%20bantuan%20untuk%20memilih%20mobil%20Honda%20yang%20cocok.%20Bisa%20bantu%20konsultasi%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Konsultasi dengan Sayuti</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catalog;