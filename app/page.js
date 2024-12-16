'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '../components/commons/Hero'
import Projects from '../components/commons/Projects'
import Footer from '../components/commons/Footer'
import CtaContact from '../components/commons/CtaContact'
import FotoProfile from '@/components/commons/FotoProfile'
import Skills from '@/components/commons/Skills'
import Testimoni from '@/components/commons/Testimoni'
import Layanan from '@/components/commons/Layanan'
import SocialMedia from '@/components/commons/SocialMedia'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-white text-lg font-medium"
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <main className='dark:bg-gray-900 dark:text-white'>
            <FotoProfile />
            <Hero />
            <Projects />
            <Skills />
            <Testimoni />
            <Layanan />
            <CtaContact />
            <SocialMedia />
          </main>
        )}
      </AnimatePresence>
      <Footer />
    </>
  )
}
