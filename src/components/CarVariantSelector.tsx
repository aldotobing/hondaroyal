import { useState } from 'react';
import { Car, CarVariant } from '../data/cars';
import { CheckCircle, Phone } from 'lucide-react';

interface CarVariantSelectorProps {
  car: Car;
}

const CarVariantSelector = ({ car }: CarVariantSelectorProps) => {
  const [selectedVariant, setSelectedVariant] = useState<CarVariant>(car.variants[0]);

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Pilih Varian</h3>
      
      {/* Variant Selection */}
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {car.variants.map((variant, index) => (
          <button
            key={index}
            onClick={() => setSelectedVariant(variant)}
            className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedVariant === variant
                ? 'border-red-600 bg-red-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex justify-between items-start sm:items-center">
              <div className="pr-2">
                <div className="font-semibold text-sm sm:text-base text-gray-900">{variant.name}</div>
                {variant.transmission && (
                  <div className="text-xs sm:text-sm text-gray-600">{variant.transmission}</div>
                )}
                {variant.features && variant.features.length > 0 && (
                  <div className="text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 line-clamp-1">
                    {variant.features.slice(0, 2).join(', ')}
                    {variant.features.length > 2 && '...'}
                  </div>
                )}
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                {variant.promo_price ? (
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500 line-through">{variant.price}</div>
                    <div className="text-base sm:text-lg font-bold text-red-600">{variant.promo_price}</div>
                  </div>
                ) : (
                  <div className="text-base sm:text-lg font-bold text-gray-900">{variant.price}</div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Variant Details */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
        <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 sm:mb-3">Detail Varian Terpilih</h4>
        <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Varian:</span>
            <span className="font-medium text-right">{selectedVariant.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Harga:</span>
            <span className="font-medium">
              {selectedVariant.promo_price || selectedVariant.price}
            </span>
          </div>
          {selectedVariant.promo_price && (
            <div className="flex items-center space-x-1 sm:space-x-2 text-green-600 mt-1.5">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Hemat {
                (parseInt(selectedVariant.price.replace(/[^0-9]/g, '')) - 
                 parseInt(selectedVariant.promo_price.replace(/[^0-9]/g, ''))).toLocaleString('id-ID')
              } rupiah!</span>
            </div>
          )}
        </div>
      </div>

      {/* Financing Info */}
      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
        <div className="flex items-center justify-between">
          <span>Cicilan mulai dari:</span>
          <span className="font-semibold text-red-600">Rp 4.5 jt/bln</span>
        </div>
        <div className="flex items-center justify-between">
          <span>DP mulai dari:</span>
          <span className="font-semibold">15%</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Trade-in:</span>
          <span className="font-semibold text-green-600">Tersedia</span>
        </div>
      </div>

      {/* Action Button */}
      <a
        href={`https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20tertarik%20dengan%20${car.name}%20varian%20${selectedVariant.name}.%20Bisa%20minta%20info%20lengkap%20dan%20penawaran%20terbaik%3F`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 sm:py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 text-sm sm:text-base"
        title="Konsultasi via WhatsApp"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span>Konsultasi Sekarang</span>
      </a>
    </div>
  );
};

export default CarVariantSelector;