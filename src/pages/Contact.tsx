import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Halo Kak Sayuti, saya ${formData.name} ingin konsultasi Honda.

📱 Phone: ${formData.phone}
📧 Email: ${formData.email}
🚗 Minat: ${formData.interest}

💬 Pesan:
${formData.message}

Mohon bantuannya untuk informasi lebih lanjut. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6285936562657?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: ["+62 859-3656-2657"],
      description: "Tersedia 24/7 untuk konsultasi"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sayuti.honda@gmail.com", "info@honda-indonesia.com"],
      description: "Respon dalam 2-4 jam kerja"
    },
    {
      icon: MapPin,
      title: "Alamat Showroom",
      details: ["Jl. Royal Residence B2 No. 1-5 Surabaya, Jawa Timur"],
      description: "Buka Senin-Minggu 08:00-20:00"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Sabtu: 08:00 - 20:00", "Minggu: 09:00 - 18:00"],
      description: "Konsultasi WhatsApp 24/7"
    }
  ];

  const carModels = [
    "Honda Brio",
    "Honda Jazz", 
    "Honda City",
    "Honda HR-V",
    "Honda CR-V",
    "Honda Civic",
    "Belum Yakin / Konsultasi"
  ];

  return (
    <div className="py-8 lg:py-12 bg-gray-50 min-h-screen">
      <SEO 
        title="Hubungi Kami - Honda Royal"
        description="Hubungi sales representatif kami untuk informasi lebih lanjut, test drive, atau konsultasi. Kami siap membantu Anda 24/7."
        keywords="kontak honda, hubungi kami, alamat dealer honda, telepon honda, email honda"
        url="https://hondawiyung.web.id/kontak"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu Anda menemukan Honda yang tepat. Konsultasi gratis dengan sales expert kami!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Konsultasi Gratis
              </h2>
              <p className="text-gray-600">
                Isi form di bawah ini dan Sayuti akan segera menghubungi Anda via WhatsApp
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800">Pesan berhasil dikirim! Sayuti akan segera menghubungi Anda.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Model Honda yang Diminati
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Pilih model Honda</option>
                  {carModels.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan / Pertanyaan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Ceritakan kebutuhan Anda, budget, atau pertanyaan lainnya..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kirim via WhatsApp</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Dengan mengirim form ini, Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan dengan Sayuti
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl text-white p-8">
              <h3 className="text-xl font-bold mb-4">Butuh Respon Cepat?</h3>
              <p className="mb-6 opacity-90">
                Langsung chat dengan Sayuti untuk konsultasi real-time dan penawaran terbaik
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/6285936562657?text=Halo%20Kak%20Sayuti%2C%20saya%20butuh%20konsultasi%20Honda%20segera.%20Bisa%20bantu%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
                <a
                  href="tel:+6285936562657"
                  className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Telepon Langsung</span>
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-gray-700 font-medium">{detail}</div>
                      ))}
                      <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 w-full">
                <iframe
                  title="Honda Royal Wiyung - Lokasi Showroom"
                  width="100%"
                  height="100%"
                  className="border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1893116202505!2d112.6771281!3d-7.312027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc57f917e0cb%3A0x52931ceb91a836fd!2sHonda%20Royal%20Wiyung!5e0!3m2!1sen!2sid!4v1718080923000!5m2!1sen!2sid"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cara ke Showroom</h4>
                <p className="text-sm text-gray-600">
                  Dekat dengan Royal Residence, mudah diakses dengan kendaraan pribadi atau transportasi umum.
                  Tersedia parkir luas dan gratis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-gray-600">
              Jawaban untuk pertanyaan umum seputar pembelian Honda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Apakah bisa test drive dulu?</h4>
              <p className="text-gray-600 text-sm">
                Tentu saja! Kami menyediakan layanan test drive gratis untuk semua model Honda. 
                Hubungi Sayuti untuk mengatur jadwal test drive yang sesuai.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Bagaimana proses kredit Honda?</h4>
              <p className="text-gray-600 text-sm">
                Proses kredit sangat mudah dan cepat. Sayuti akan membantu mengurus semua dokumen 
                dan mencarikan skema pembiayaan terbaik sesuai kemampuan Anda.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Apakah ada layanan trade-in?</h4>
              <p className="text-gray-600 text-sm">
                Ya, kami menerima trade-in untuk semua merek mobil dengan harga terbaik. 
                Penilaian dilakukan secara transparan dan profesional.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Berapa lama proses delivery?</h4>
              <p className="text-gray-600 text-sm">
                Untuk unit ready stock, delivery bisa dilakukan 1-3 hari setelah pembayaran. 
                Untuk unit indent, waktu tunggu sekitar 2-4 minggu tergantung model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;