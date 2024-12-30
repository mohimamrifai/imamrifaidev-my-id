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
import Loading from '@/components/commons/Loading'

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
          <Loading />
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
