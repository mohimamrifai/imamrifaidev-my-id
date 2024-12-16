"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pemilik Bakso Mang Budi",
    content: "Imam berhasil membuat website yang sangat bagus untuk bisnis bakso saya. Desainnya menarik dan mudah digunakan oleh pelanggan. Sangat puas dengan hasilnya!",
  },
  {
    id: 2, 
    name: "Siti Rahayu",
    role: "Pemilik Seblak Prasmanan Lubis",
    content: "Website yang dibuat Imam sangat membantu bisnis seblak saya. Tampilan modern dan responsif membuat pelanggan mudah melihat menu dan lokasi kami.",
  },
  {
    id: 3,
    name: "Ahmad Hidayat", 
    role: "CEO Topupaja.com",
    content: "Kolaborasi dengan Imam menghasilkan platform topup game yang luar biasa. Fitur-fiturnya lengkap dan performa website sangat cepat. Terima kasih Imam!",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Marketing Manager Digify",
    content: "Landing page yang dibuat Imam untuk bisnis digital marketing kami sangat profesional. Animasinya smooth dan desainnya modern. Sangat memuaskan!",
  },
  {
    id: 5,
    name: "Rudi Hartono",
    role: "Owner Mirland",
    content: "Website jasa pembuatan website yang dibuatkan Imam sangat membantu bisnis saya. Desainnya elegan dan profesional. Terima kasih Imam!",
  },
  {
    id: 6,
    name: "Linda Wijaya",
    role: "CEO Easy Rent",
    content: "Platform rental mobil yang dibuat Imam benar-benar memudahkan operasional bisnis kami. Sistemnya user-friendly dan performa sangat baik.",
  },
  {
    id: 7,
    name: "Hendra Kusuma",
    role: "Owner Umahku Furniture",
    content: "Desain UI/UX yang dibuat Imam untuk toko furniture online kami sangat memukau. Pengalaman berbelanja pelanggan jadi lebih menyenangkan.",
  },
  {
    id: 8,
    name: "Sarah Putri",
    role: "Digital Marketing Specialist",
    content: "Website portfolio yang dibuatkan Imam membantu saya mendapatkan lebih banyak klien. Tampilannya profesional dan mudah diupdate.",
  },
  {
    id: 9,
    name: "Bambang Wijaya",
    role: "CEO Digital Bank",
    content: "Prototype UI/UX untuk aplikasi digital banking kami sangat inovatif. Imam berhasil menerjemahkan visi kami ke dalam desain yang modern.",
  },
  {
    id: 10,
    name: "Maya Sari",
    role: "Restaurant Owner",
    content: "Website restoran yang dibuat Imam meningkatkan pesanan online kami secara signifikan. Sistemnya mudah digunakan baik oleh pelanggan maupun staff.",
  }
];

export default function Testimoni() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <div className="mt-24 px-6 md:px-16 relative">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-bold text-white custom-outline md:ps-5 opacity-25 mb-10"
      >
        My Testimoni, What They Say About Me 
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto relative">
        <AnimatePresence mode="wait">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index < 4 || showAll ? 1 : 0.2,
                y: 0,
                filter: index < 4 || showAll ? "blur(0px)" : "blur(2px)", 
                background: index < 4 || showAll ? "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))" : "",
                height: index < 4 || showAll ? "auto" : "150px",
                pointerEvents: index < 4 || showAll ? "auto" : "none",
              }}
              exit={{
                opacity: 0,
                y: 50,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: showAll ? index * 0.1 : 0 }}
              viewport={{ once: true }}
              whileHover={index < 4 || showAll ? { 
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              } : {}}
              className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden
                ${index < 4 || showAll ? 'hover:border-purple-500 hover:border cursor-pointer' : ''}`}
            >
              <FaQuoteLeft className="text-purple-500 text-xl mb-4 transition-transform group-hover:scale-110" />
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold transition-transform hover:scale-110">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900 dark:text-white hover:text-purple-500 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-purple-500 text-sm hover:text-purple-600 transition-colors">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <motion.div 
        className="flex justify-center mt-8"
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          onClick={() => setShowAll(!showAll)}
          className="text-purple-500 hover:text-purple-700 font-medium cursor-pointer"
        >
          {showAll ? "Show Less" : "View More"}
        </div>
      </motion.div>
    </div>
  );
}
