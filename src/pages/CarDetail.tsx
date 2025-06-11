import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Phone, Shield, Fuel, Users, Settings, Camera, CheckCircle, Star, Car, Share2 } from 'lucide-react';
import { shareContent, updateMetaTags } from '../utils/shareUtils';
import { getCarById } from '../data/cars';
import CarVariantSelector from '../components/CarVariantSelector';

const CarDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const car = getCarById(id || '');

  const handleShare = async () => {
    if (!car) return;
    
    const shareUrl = `${window.location.origin}${location.pathname}`;
    const shareText = `Lihat ${car.name} di Honda Royal - ${car.description.substring(0, 100)}...`;
    
    await shareContent(car.name, shareText, shareUrl);
  };

  // Update meta tags when car data is loaded
  useEffect(() => {
    if (car) {
      const shareUrl = `${window.location.origin}${location.pathname}`;
      updateMetaTags(
        `${car.name} - Honda Royal`,
        car.description,
        car.images.gallery[0],
        shareUrl
      );
    }
  }, [car, location.pathname]);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mobil tidak ditemukan</h2>
          <Link to="/katalog" className="text-red-600 hover:text-red-700">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Car },
    { id: 'specs', label: 'Spesifikasi', icon: Settings },
    { id: 'safety', label: 'Keamanan', icon: Shield },
    { id: 'gallery', label: 'Galeri', icon: Camera }
  ];

  const hasPromo = car.variants.some(variant => variant.promo_price) || car.promo;

  return (
    <div className="py-6 sm:py-8 lg:py-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-1.5 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">
          <Link to="/katalog" className="hover:text-red-600 flex items-center space-x-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="truncate">Katalog</span>
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">{car.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12">
          {/* Image Gallery */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={car.images.gallery[selectedImage]}
                alt={`${car.name} - Image ${selectedImage + 1}`}
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              {hasPromo && (
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg">
                  PROMO SPESIAL!
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-1.5 sm:gap-2">
              {car.images.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden aspect-square transition-all ${
                    selectedImage === index 
                      ? 'ring-2 ring-red-600 scale-[1.02]' 
                      : 'hover:ring-1 hover:ring-gray-300'
                  }`}
                  aria-label={`Lihat gambar ${index + 1} dari ${car.images.gallery.length}`}
                >
                  <img
                    src={image}
                    alt={`${car.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Car Info & Variant Selector */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="bg-red-50 text-red-700 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-red-100">
                  {car.category}
                </span>
                <div className="flex items-center space-x-0.5 sm:space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs sm:text-sm text-gray-600 ml-0.5">4.8/5</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 sm:mb-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{car.name}</h1>
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center space-x-1.5 bg-white hover:bg-gray-50 text-red-600 border border-red-200 hover:border-red-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto"
                  aria-label="Bagikan"
                  title="Bagikan"
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Bagikan</span>
                </button>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed sm:leading-loose">{car.description}</p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Mesin</div>
                <div className="text-sm sm:text-base font-semibold text-gray-900">{car.engine}</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Transmisi</div>
                <div className="text-sm sm:text-base font-semibold text-gray-900">{car.transmission}</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Tempat Duduk</div>
                <div className="text-sm sm:text-base font-semibold text-gray-900">{car.seating} Orang</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-1.5 sm:mb-2" />
                <div className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Bahan Bakar</div>
                <div className="text-sm sm:text-base font-semibold text-gray-900">{car.fuel_type}</div>
              </div>
            </div>

            {/* Variant Selector */}
            <CarVariantSelector car={car} />

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 xs:gap-3 mt-4 sm:mt-5">
              <a
                href={`https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20ingin%20test%20drive%20${car.name}.%20Kapan%20bisa%20diatur%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 px-1.5 xs:px-2.5 py-1.5 rounded-lg text-[11px] xs:text-xs sm:text-sm font-medium text-center transition-all duration-200 flex items-center justify-center space-x-1 shadow-sm hover:shadow-md whitespace-nowrap"
                title="Jadwalkan Test Drive"
              >
                <Car className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="truncate">Test Drive</span>
              </a>
              <a
                href={`https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20ingin%20tahu%20info%20cicilan%20untuk%20${car.name}.%20Bisa%20bantu%20simulasi%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-1.5 xs:px-2.5 py-1.5 rounded-lg text-[11px] xs:text-xs sm:text-sm font-medium text-center transition-all duration-200 flex items-center justify-center space-x-1 shadow-sm hover:shadow-md whitespace-nowrap"
                title="Simulasi Kredit"
              >
                <CheckCircle className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="truncate">Simulasi Kredit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mt-8 sm:mt-10">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex px-4 sm:px-6 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 sm:py-4 px-2 sm:px-3 border-b-2 font-medium text-xs sm:text-sm transition-all duration-200 flex items-center space-x-1.5 sm:space-x-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600 font-semibold'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                  <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Keunggulan {car.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {car.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Variants Overview */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Varian Tersedia</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {car.variants.map((variant, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{variant.name}</h4>
                          <div className="text-right">
                            {variant.promo_price ? (
                              <div>
                                <div className="text-sm text-gray-500 line-through">{variant.price}</div>
                                <div className="text-lg font-bold text-red-600">{variant.promo_price}</div>
                              </div>
                            ) : (
                              <div className="text-lg font-bold text-gray-900">{variant.price}</div>
                            )}
                          </div>
                        </div>
                        {variant.features && (
                          <div className="text-sm text-gray-600">
                            {variant.features.slice(0, 3).join(', ')}
                            {variant.features.length > 3 && '...'}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Spesifikasi Mesin</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Tipe Mesin</span>
                        <span className="font-semibold">{car.engine}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Transmisi</span>
                        <span className="font-semibold">{car.transmission}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Bahan Bakar</span>
                        <span className="font-semibold">{car.fuel_type}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Kapasitas Tempat Duduk</span>
                        <span className="font-semibold">{car.seating} orang</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dimensi</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">{car.dimensions.length}</div>
                      <div className="text-sm text-gray-600">Panjang</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">{car.dimensions.width}</div>
                      <div className="text-sm text-gray-600">Lebar</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">{car.dimensions.height}</div>
                      <div className="text-sm text-gray-600">Tinggi</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">{car.dimensions.wheelbase}</div>
                      <div className="text-sm text-gray-600">Wheelbase</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'safety' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fitur Keselamatan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.safety_features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Shield className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Galeri Foto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {car.images.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${car.name} gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white p-8 mt-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Tertarik dengan {car.name}?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Hubungi Sayuti sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20serius%20ingin%20membeli%20${car.name}.%20Bisa%20dibantu%20untuk%20proses%20selanjutnya%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Hubungi Sayuti Sekarang</span>
            </a>
            <Link
              to="/kontak"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Kunjungi Showroom
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;