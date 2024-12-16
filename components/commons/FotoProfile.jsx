"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function FotoProfile() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
                duration: 1.5,
                delay: 0.5,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: {
                    rotate: {
                        duration: 0.5,
                        repeat: Infinity
                    }
                }
            }}
            className="fixed top-5 right-5 z-10 rounded-full shadow-lg overflow-hidden h-12 w-12 md:h-24 md:w-24 cursor-pointer 
                      bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1"
        >
            <div className="relative w-full h-full rounded-full overflow-hidden group">
                <Image 
                    src="/profile.jpg" 
                    alt="Profile" 
                    width={1000} 
                    height={1000}
                    className="object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" 
                />
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{
                        background: ["linear-gradient(to top right, rgba(168,85,247,0.5), transparent)", 
                                   "linear-gradient(to top right, rgba(236,72,153,0.5), transparent)"],
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }
                    }}
                />
            </div>
        </motion.div>
    )
}