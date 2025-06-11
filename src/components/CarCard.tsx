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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img
          src={car.images.main}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        {hasPromo && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            PROMO SPESIAL!
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
          {car.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{car.description}</p>
        </div>

        {/* Specifications */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Mesin:</span>
            <span className="font-medium">{car.engine}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Transmisi:</span>
            <span className="font-medium">{car.transmission}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Bahan Bakar:</span>
            <span className="font-medium">{car.fuel_type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tempat Duduk:</span>
            <span className="font-medium">{car.seating} orang</span>
          </div>
        </div>

        {/* Variants (if showVariants is true) */}
        {showVariants && car.variants.length > 1 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Varian Tersedia:</h4>
            <div className="space-y-1">
              {car.variants.slice(0, 3).map((variant, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <span className="text-gray-600">{variant.name}</span>
                  <span className="font-medium">
                    {variant.promo_price ? (
                      <span className="text-red-600">{variant.promo_price}</span>
                    ) : (
                      variant.price
                    )}
                  </span>
                </div>
              ))}
              {car.variants.length > 3 && (
                <div className="text-xs text-gray-500">+{car.variants.length - 3} varian lainnya</div>
              )}
            </div>
          </div>
        )}

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {car.highlights.slice(0, 2).map((highlight, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {highlight}
              </span>
            ))}
            {car.highlights.length > 2 && (
              <span className="text-gray-500 text-xs">+{car.highlights.length - 2}</span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="text-2xl font-bold text-gray-900">{priceRange}</div>
          {hasPromo && (
            <div className="text-xs text-green-600 font-medium">Hemat hingga jutaan rupiah!</div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
          <span className="text-sm text-gray-600 ml-1">(4.8/5)</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link
            to={`/katalog/${car.id}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium text-center transition-all duration-200 flex items-center justify-center space-x-1"
          >
            <span>Detail</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20dengan%20${car.name}.%20Bisa%20minta%20info%20harga%20dan%20promo%20terbaru%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-200 flex items-center justify-center space-x-1"
          >
            <Phone className="w-4 h-4" />
            <span>Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;