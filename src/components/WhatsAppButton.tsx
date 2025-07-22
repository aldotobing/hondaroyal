import { User } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton = ({
  phoneNumber = "6285936562657",
  message = "Halo Kak Sayuti, saya tertarik dengan mobil Honda yang ada di website. Bisa minta info lebih lanjut?"
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check on initial load

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const containerClasses = `
    fixed bottom-6 right-6 z-50
    transition-all duration-500
    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
  `;

  const buttonClasses = `
    group relative flex items-center justify-center
    bg-blue-600 hover:bg-blue-700 text-white
    rounded-full shadow-2xl hover:shadow-3xl
    transition-all duration-300
    transform hover:scale-105
    w-16 h-16
    lg:w-auto lg:h-auto lg:px-5 lg:py-3 lg:space-x-3
  `;

  const infoCardClasses = `
    absolute bottom-full right-0 mb-3
    bg-white rounded-lg shadow-xl p-4 w-72
    transition-all duration-300
    opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
    hidden lg:block pointer-events-none
  `;

  return (
    <div className={containerClasses.trim()}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses.trim()}
        aria-label="Chat di WhatsApp"
      >
        {/* Desktop Info Card on Hover */}
        <div className={infoCardClasses.trim()}>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/logo.png" alt="Honda Royal" className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Sayuti</h4>
              <p className="text-sm text-gray-600">Sales Executive Honda</p>
              <p className="text-xs text-green-600 font-semibold">Online - Siap Membantu!</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">💬 Klik untuk chat langsung, tanya promo, atau jadwal test drive.</p>
          </div>
        </div>

        {/* Main Button Content */}
        <User className="w-8 h-8 lg:w-7 lg:h-7 flex-shrink-0" />
        
        <div className="hidden lg:flex flex-col text-left">
          <span className="font-bold text-base">Butuh Bantuan?</span>
          <span className="text-sm opacity-90 -mt-1">Chat di WhatsApp</span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;