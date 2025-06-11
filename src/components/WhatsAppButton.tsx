import { MessageCircle, Phone, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const pulseTimer = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseTimer);
    };
  }, []);

  const phoneNumber = "6285936562657";
  const message = "Halo Kak Sayuti, saya tertarik dengan mobil Honda yang ada di website. Bisa minta info lebih lanjut?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      {/* Sales Rep Info Card - Hidden on mobile, shown on hover on desktop */}
      <div className={`absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 min-w-[280px] transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hidden lg:block ${
        isPulsing ? 'animate-pulse' : ''
      }`}>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Sayuti</h4>
            <p className="text-sm text-gray-600">Sales Executive Honda</p>
            <p className="text-xs text-green-600">Online - Siap Membantu!</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">💬 Chat langsung untuk info dan konsultasi mobil Honda</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 px-4 py-3 lg:px-6 lg:py-4 transform hover:scale-105 ${
          isPulsing ? 'animate-pulse ring-4 ring-green-200' : ''
        }`}
      >
        <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7" />
        
        {/* Text - Hidden on mobile */}
        <div className="hidden lg:flex flex-col">
          <span className="font-semibold text-sm">Chat Sayuti</span>
          <span className="text-xs opacity-90">Tanya Mobil Honda</span>
        </div>
        
        {/* Mobile only icon */}
        <Phone className="w-4 h-4 lg:hidden" />
      </a>

      {/* Mobile Info Card */}
      <div className="lg:hidden absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 min-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="text-center">
          <p className="font-semibold text-gray-800 text-sm">Sayuti - Sales Honda</p>
          <p className="text-xs text-green-600">Online & Siap Membantu!</p>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;