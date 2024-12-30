'use client'
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function CtaContact() {
  return (
    <div className="mt-24 px-6 md:px-16 relative">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-bold text-white text-center custom-outline md:ps-5 opacity-25 mb-10"
      >
        Let's Work Together
      </motion.p>

      <div className="max-w-6xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-left md:text-center text-4xl md:text-5xl font-bold"
        >
          Got a project or idea in mind? Let's make it happen—reach out, and let's
          create something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <Link 
            href={`https://wa.me/6282118668919?text=${encodeURIComponent('Halo, saya tertarik dengan layanan Anda. Saya ingin berkonsultasi lebih lanjut.')}`}
            target="_blank" 
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-8 text-white font-bold text-xl rounded-lg hover:scale-105 transition-transform"
          >
            Let's Collaborate
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
