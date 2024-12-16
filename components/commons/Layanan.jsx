"use client"
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaSearchPlus, FaCheck, FaTimes, FaCrown } from "react-icons/fa";
import { useState } from "react";

const services = [
    {
        icon: <FaPaintBrush className="text-4xl text-purple-500" />,
        title: "UI/UX Design",
        description: "Merancang antarmuka dan pengalaman pengguna yang menarik, intuitif dan efektif menggunakan Figma dengan prinsip desain modern",
        price: "Rp 200.000",
        levels: {
            basic: [
                { feature: "Desain UI 3 halaman", available: true },
                { feature: "Wireframing", available: true },
                { feature: "File sumber Figma", available: true },
                { feature: "Konsultasi desain", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Design system", available: false },
                { feature: "Revisi desain", available: false },
                { feature: "Interactive prototype", available: false },
                { feature: "Style guide & dokumentasi", available: false },
                { feature: "After-service support", available: false }
            ],
            intermediate: [
                { feature: "Desain UI 6 halaman", available: true },
                { feature: "Wireframing", available: true },
                { feature: "File sumber Figma", available: true },
                { feature: "Konsultasi desain", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Design system", available: true },
                { feature: "Revisi desain", available: true },
                { feature: "Interactive prototype", available: true },
                { feature: "Style guide & dokumentasi", available: false },
                { feature: "After-service support", available: false }
            ],
            pro: [
                { feature: "Desain UI 10+ halaman", available: true },
                { feature: "Wireframing", available: true },
                { feature: "File sumber Figma", available: true },
                { feature: "Konsultasi desain", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Design system", available: true },
                { feature: "Revisi desain", available: true },
                { feature: "Interactive prototype", available: true },
                { feature: "Style guide & dokumentasi", available: true },
                { feature: "After-service support", available: true }
            ]
        }
    },
    {
        icon: <FaCode className="text-4xl text-blue-500" />,
        title: "Web Development",
        description: "Membangun website profesional yang responsif, cepat dan optimal menggunakan teknologi modern seperti Next.js dan Laravel",
        price: "Rp 600.000",
        levels: {
            basic: [
                { feature: "Jumlah halaman website", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Form & fitur interaktif", available: true },
                { feature: "Setup hosting & domain", available: true },
                { feature: "SEO optimization", available: false },
                { feature: "Revisi", available: false },
                { feature: "CMS integration", available: false },
                { feature: "Fitur e-commerce", available: false },
                { feature: "API integration", available: false },
                { feature: "Maintenance support", available: false }
            ],
            intermediate: [
                { feature: "Jumlah halaman website", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Form & fitur interaktif", available: true },
                { feature: "Setup hosting & domain", available: true },
                { feature: "SEO optimization", available: true },
                { feature: "Revisi", available: true },
                { feature: "CMS integration", available: true },
                { feature: "Fitur e-commerce", available: true },
                { feature: "API integration", available: false },
                { feature: "Maintenance support", available: false }
            ],
            pro: [
                { feature: "Jumlah halaman website", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Form & fitur interaktif", available: true },
                { feature: "Setup hosting & domain", available: true },
                { feature: "SEO optimization", available: true },
                { feature: "Revisi", available: true },
                { feature: "CMS integration", available: true },
                { feature: "Fitur e-commerce", available: true },
                { feature: "API integration", available: true },
                { feature: "Maintenance support", available: true }
            ]
        }
    },
    {
        icon: <FaSearchPlus className="text-4xl text-green-500" />,
        title: "SEO Optimization",
        description: "Mengoptimalkan website Anda untuk mesin pencari dengan teknik SEO terbaik untuk meningkatkan peringkat dan visibilitas online",
        price: "Rp 600.000",
        levels: {
            basic: [
                { feature: "Riset keyword", available: true },
                { feature: "On-page SEO", available: true },
                { feature: "Laporan performa", available: true },
                { feature: "Local SEO optimization", available: true },
                { feature: "Technical SEO audit", available: false },
                { feature: "Content strategy", available: false },
                { feature: "Backlink building", available: false },
                { feature: "Competitor analysis", available: false },
                { feature: "Conversion optimization", available: false },
                { feature: "Konsultasi & support", available: false }
            ],
            intermediate: [
                { feature: "Riset keyword", available: true },
                { feature: "On-page SEO", available: true },
                { feature: "Laporan performa", available: true },
                { feature: "Local SEO optimization", available: true },
                { feature: "Technical SEO audit", available: true },
                { feature: "Content strategy", available: true },
                { feature: "Backlink building", available: true },
                { feature: "Competitor analysis", available: true },
                { feature: "Conversion optimization", available: false },
                { feature: "Konsultasi & support", available: false }
            ],
            pro: [
                { feature: "Riset keyword", available: true },
                { feature: "On-page SEO", available: true },
                { feature: "Laporan performa", available: true },
                { feature: "Local SEO optimization", available: true },
                { feature: "Technical SEO audit", available: true },
                { feature: "Content strategy", available: true },
                { feature: "Backlink building", available: true },
                { feature: "Competitor analysis", available: true },
                { feature: "Conversion optimization", available: true },
                { feature: "Konsultasi & support", available: true }
            ]
        }
    }
];

export default function Layanan() {
    const [selectedLevel, setSelectedLevel] = useState({});

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
                                        {service.price}
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
                >
                    Konsultasi Gratis
                </motion.button>
            </motion.div>
        </div>
    );
}
