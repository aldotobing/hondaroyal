import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { cars } from '../data/cars';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['all', ...Array.from(new Set(cars.map(car => car.category)))];

  // Flatten all images from all cars
  const allImages = cars.flatMap(car => 
    car.images.gallery.map((image, index) => ({
      url: image,
      carName: car.name,
      category: car.category,
      id: `${car.id}-${index}`
    }))
  );

  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(image => image.category === selectedCategory);

  const openLightbox = (imageUrl: string) => {
    const index = filteredImages.findIndex(img => img.url === imageUrl);
    setCurrentImageIndex(index);
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].url);
  };

  const goToNext = () => {
    const newIndex = currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].url);
  };

  return (
    <div className="py-8 lg:py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Galeri Honda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Koleksi foto premium berbagai model Honda dengan detail interior, eksterior, dan fitur-fitur canggih
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
              }`}
            >
              {category === 'all' ? 'Semua Kategori' : category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(image.url)}
            >
              <img
                src={image.url}
                alt={`${image.carName} gallery`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-medium">{image.carName}</div>
                  <div className="text-xs opacity-80">{image.category}</div>
                </div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white">
                  <div className="font-semibold text-sm">{image.carName}</div>
                  <div className="text-xs opacity-80">{image.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Eye className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Tidak ada gambar ditemukan
            </h3>
            <p className="text-gray-500">
              Coba pilih kategori yang berbeda
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">{allImages.length}+</div>
            <div className="text-gray-600">Foto Berkualitas Tinggi</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">{cars.length}</div>
            <div className="text-gray-600">Model Honda</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">4K</div>
            <div className="text-gray-600">Resolusi Premium</div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery lightbox"
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Image Info */}
            <div className="text-white text-center mt-4">
              <div className="font-semibold text-lg">
                {filteredImages[currentImageIndex]?.carName}
              </div>
              <div className="text-sm opacity-80">
                {filteredImages[currentImageIndex]?.category}
              </div>
              <div className="text-xs opacity-60 mt-2">
                {currentImageIndex + 1} dari {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;