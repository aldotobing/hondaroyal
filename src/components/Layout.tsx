import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car, Phone, Mail, MapPin } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

// Helper function to generate structured data
const generateStructuredData = (pathname: string) => {
  const baseUrl = "https://hondawiyung.web.id";
  const currentUrl = `${baseUrl}${pathname}`;

  const website = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Honda Royal Wiyung - Dealer Resmi Honda Surabaya",
    url: currentUrl,
    mainEntityOfPage: currentUrl,
    description:
      "Dealer resmi Honda Surabaya menawarkan harga mobil Honda termurah 2025. Dapatkan promo & cicilan 0% untuk Brio, CR-V, HR-V, dan City Hatchback.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/katalog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${baseUrl}/#organization`,
    name: "Honda Royal Wiyung",
    alternateName: "Dealer Honda Surabaya",
    image: [`${baseUrl}/logo.png`, `${baseUrl}/hero_banner.jpg`],
    logo: `${baseUrl}/logo.png`,
    telephone: "+6285936562657",
    email: "sayuti@hondaroyalwiyung.com",
    priceRange: "Rp200jt - Rp1M",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Royal Residence No.B2 No.1-9 B2 No.1-9, Babatan, Wiyung",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      postalCode: "60227",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.3120196,
      longitude: 112.6795431,
    },
    url: baseUrl,
    sameAs: [
      "https://www.facebook.com/hondaroyalwiyung",
      "https://www.instagram.com/hondaroyalwiyung",
      "https://www.youtube.com/user/hondaroyalwiyung",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6285936562657",
      contactType: "sales",
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
  };

  return { website, organization };
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = useMemo(
    () => [
      { name: "Beranda", href: "/" },
      { name: "Katalog Mobil", href: "/katalog" },
      { name: "Galeri", href: "/galeri" },
      { name: "Promo", href: "/promo" },
      { name: "Tentang Kami", href: "/tentang" },
      { name: "Kontak", href: "/kontak" },
    ],
    []
  );

  const isActive = (path: string) => location.pathname === path;

  // Update document title and meta description based on route
  useEffect(() => {
    const pageTitle =
      navigation.find((item) => item.href === location.pathname)?.name ||
      "Honda Royal Wiyung";
    document.title = `${pageTitle} | Honda Royal - Dealer Resmi Honda`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Temukan mobil Honda impian Anda di Honda Royal Wiyung - ${pageTitle}. Dapatkan promo dan layanan terbaik untuk kendaraan Honda Anda.`
      );
    }
  }, [location, navigation]);

  const { website, organization } = generateStructuredData(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [website, organization],
          }),
        }}
      />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:underline"
      >
        Langsung ke konten utama
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-lg" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Honda Royal Wiyung"
                className="h-8 lg:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-red-600 border-b-2 border-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-red-600 bg-red-50 border-l-4 border-red-600"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Honda Royal</h3>
                  <p className="text-gray-400">
                    Mobil Impian Keluarga Indonesia
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Dealer Honda terpercaya dengan layanan terbaik untuk keluarga
                Indonesia. Kami menyediakan berbagai model Honda dengan kualitas
                premium dan harga terjangkau.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-pink-600 rounded"></div>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <div className="w-6 h-6 bg-red-600 rounded"></div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <a
                    href="tel:+6285936562657"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +62 859-3656-2657
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <a
                    href="mailto:sayuti@hondaroyalwiyung.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    sayuti@hondaroyalwiyung.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <a
                    href="https://www.google.com/maps/uv?pb=!1s0x2dd7fc57f917e0cb%3A0x52931ceb91a836fd!3m1!7e115!4s%2Fmaps%2Fplace%2Fhonda%2Broyal%2Bwiyung%2F%40-7.3120196%2C112.6795431%2C3a%2C75y%2C92.67h%2C90t%2Fdata%3D*213m4*211e1*213m2*211s38V1VdPtPSe7uHN7fBUInw*212e0*214m2*213m1*211s0x2dd7fc57f917e0cb%3A0x52931ceb91a836fd%3Fsa%3DX%26ved%3D2ahUKEwiGpOKJ5OiNAxVXzjgGHdeNGNsQpx96BAgVEAA!5shonda%20royal%20wiyung%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2s38V1VdPtPSe7uHN7fBUInw&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Jl. Royal Residence No.B2 No.1-9 B2 No.1-9, Babatan, Wiyung
                    <br />
                    Surabaya, Jawa Timur 60227
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Honda Royal Wiyung. Semua hak cipta dilindungi. |
              <span className="text-red-500"> Sayuti - Sales Executive</span>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
