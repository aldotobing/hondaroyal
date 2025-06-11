import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { Car, getPriceRange } from '../data/cars';

interface CarCardProps {
  car: Car;
  showVariants?: boolean;
}

const CarCard = ({ car, showVariants = false }: CarCardProps) => {
  const hasPromo = car.variants.some(variant => variant.promo_price) || car.promo;
  const priceRange = getPriceRange(car);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden group">
        <img
          src={car.images.main}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {hasPromo && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md">
            PROMO SPESIAL!
          </div>
        )}
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-gray-100">
          {car.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-3 sm:mb-4 border-b border-gray-100 pb-3 sm:pb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-1.5">{car.name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">{car.description}</p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5 text-xs sm:text-sm">
          <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
            <div className="text-gray-500 text-2xs sm:text-xs font-medium mb-0.5 sm:mb-1">Mesin</div>
            <div className="font-medium text-gray-900 text-sm sm:text-base">{car.engine}</div>
          </div>
          <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
            <div className="text-gray-500 text-2xs sm:text-xs font-medium mb-0.5 sm:mb-1">Transmisi</div>
            <div className="font-medium text-gray-900 text-sm sm:text-base">{car.transmission}</div>
          </div>
          <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
            <div className="text-gray-500 text-2xs sm:text-xs font-medium mb-0.5 sm:mb-1">Bahan Bakar</div>
            <div className="font-medium text-gray-900 text-sm sm:text-base">{car.fuel_type}</div>
          </div>
          <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
            <div className="text-gray-500 text-2xs sm:text-xs font-medium mb-0.5 sm:mb-1">Kapasitas</div>
            <div className="font-medium text-gray-900 text-sm sm:text-base">{car.seating} Kursi</div>
          </div>
        </div>

        {/* Variants (if showVariants is true) */}
        {showVariants && car.variants.length > 1 && (
          <div className="mb-4 sm:mb-5 bg-blue-50 p-3 sm:p-4 rounded-lg">
            <h4 className="text-xs sm:text-sm font-semibold text-blue-800 mb-2 sm:mb-3 flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Varian Tersedia
            </h4>
            <div className="space-y-2">
              {car.variants.slice(0, 3).map((variant, index) => (
                <div key={index} className="flex justify-between items-center text-xs sm:text-sm bg-white p-1.5 sm:p-2 rounded-md shadow-xs">
                  <span className="text-gray-700 font-medium truncate pr-2">{variant.name}</span>
                  <span className="font-semibold whitespace-nowrap">
                    {variant.promo_price ? (
                      <span className="text-red-600">{variant.promo_price}</span>
                    ) : (
                      <span className="text-gray-900">{variant.price}</span>
                    )}
                  </span>
                </div>
              ))}
              {car.variants.length > 3 && (
                <div className="text-2xs sm:text-xs text-center text-blue-600 font-medium mt-1">
                  +{car.variants.length - 3} varian lainnya tersedia
                </div>
              )}
            </div>
          </div>
        )}

        {/* Highlights */}
        {car.highlights.length > 0 && (
          <div className="mb-4 sm:mb-5">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">Fitur Unggulan</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {car.highlights.slice(0, 4).map((highlight, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-2xs sm:text-xs font-medium flex items-center"
                >
                  <svg className="w-3.5 h-3.5 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price & Rating */}
        <div className="flex justify-between items-center mb-4 sm:mb-5 p-3 sm:p-4 bg-gray-50 rounded-lg mt-auto">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">{priceRange}</div>
            {hasPromo && (
              <div className="text-2xs sm:text-xs text-green-600 font-medium flex items-center mt-1">
                <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 00-.894.553L3.382 4H2a1 1 0 000 2v1a1 1 0 00.553.894L4 8.618V15a1 1 0 001 1h10a1 1 0 001-1V8.618l1.447-.724A1 1 0 0018 7V6a1 1 0 00-1-1h-1.382l-.724-1.447A1 1 0 0014 2H5z" clipRule="evenodd" />
                </svg>
                Harga spesial terbatas!
              </div>
            )}
          </div>
          <div className="flex items-center bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-700 ml-0.5 sm:ml-1">4.8</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 sm:space-x-3 mt-auto">
          <Link
            to={`/katalog/${car.id}`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              window.location.href = `/katalog/${car.id}`;
            }}
            className="flex-1 bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium text-center transition-all duration-200 flex items-center justify-center space-x-1.5 sm:space-x-2 group"
          >
            <span className="truncate">Detail Mobil</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href={`https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20dengan%20${car.name}.%20Bisa%20minta%20info%20harga%20dan%20promo%20terbaru%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-center transition-all duration-200 flex items-center justify-center space-x-1 shadow-sm hover:shadow-md"
            title="Chat via WhatsApp"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span className="truncate">Chat Sayuti</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;