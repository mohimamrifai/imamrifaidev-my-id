"use client"
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaCrown } from "react-icons/fa";
import { useState } from "react";
import { services } from "@/lib/service-packages";

export default function Layanan() {
    const [selectedLevel, setSelectedLevel] = useState({});

    const handleConsultation = (service, level) => {
        const selectedMessage = service.message.find(msg => msg.type === level)?.message || 'Halo, saya tertarik dengan layanan Anda';
        window.open(`https://wa.me/6282118668919?text=${selectedMessage}`, '_blank');
    };

    return (
        <div className="mt-14 md:p-10 p-3">
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-bold text-white custom-outline md:ps-5 opacity-25 mb-10"
            >
                My Services, Let's Create Magic!
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800"
                    >
                        <div className="relative z-10 p-8">
                            <div className="flex flex-col items-start space-y-4">
                                <motion.div
                                    className="p-4 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-purple-600">
                                        Mulai dari:
                                    </p>
                                    <p className="text-2xl font-bold text-purple-600">
                                        {service.price.find(p => p.title.toLowerCase() === (selectedLevel[index] || 'basic')).price}
                                    </p>
                                </div>

                                <div className="w-full mt-4">
                                    <div className="flex gap-4 mb-4">
                                        {['basic', 'intermediate', 'pro'].map((level) => (
                                            <button
                                                key={level}
                                                onClick={() => setSelectedLevel({ ...selectedLevel, [index]: level })}
                                                className={`px-4 py-2 rounded-lg capitalize ${(selectedLevel[index] || 'basic') === level
                                                        ? 'bg-purple-600 text-white'
                                                        : 'bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="space-y-2"
                                    >
                                        {service.levels[selectedLevel[index] || 'basic'].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                {item.available ? (
                                                    <FaCheck className="text-green-500" />
                                                ) : (
                                                    <FaTimes className="text-red-500" />
                                                )}
                                                <span className={item.available ? 'text-gray-700' : 'text-gray-400'}>
                                                    {item.feature}
                                                </span>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                <motion.button
                                    onClick={() => handleConsultation(service, selectedLevel[index] || 'basic')}
                                    whileHover={{ scale: 1.05 }}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-700 transition-colors mt-4"
                                >
                                    Konsultasi Sekarang
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 mt-20 mb-8 max-w-7xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-6">
                    <FaCrown className="text-5xl text-yellow-400" />
                    <h3 className="text-3xl font-bold">Paket Custom</h3>
                </div>
                <p className="text-lg mb-6">
                    Dapatkan solusi yang disesuaikan dengan kebutuhan spesifik bisnis Anda. Paket custom memberikan fleksibilitas penuh untuk memilih fitur dan layanan.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold mb-4">Keuntungan Paket Custom:</h4>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-400" />
                            <span>Solusi yang disesuaikan dengan kebutuhan spesifik</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-400" />
                            <span>Kombinasi bebas dari semua layanan yang tersedia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-400" />
                            <span>Konsultasi prioritas dan dedicated support</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold mb-4">Proses Pengerjaan:</h4>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-400" />
                            <span>Konsultasi mendalam untuk memahami kebutuhan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-400" />
                            <span>Proposal dan estimasi biaya yang transparan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheck className="text-green-400" />
                            <span>Timeline pengerjaan yang fleksibel</span>
                        </div>
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-8 px-8 py-3 bg-white text-purple-600 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition-colors"
                    onClick={() => handleConsultation({
                        message: [{
                            type: 'custom',
                            message: 'Halo, saya tertarik dengan paket custom. Saya ingin berkonsultasi lebih lanjut.'
                        }]
                    }, 'custom')}
                >
                    Konsultasi Gratis
                </motion.button>
            </motion.div>
        </div>
    );
}
