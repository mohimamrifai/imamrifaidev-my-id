"use client"
import React from 'react'
import { motion, useScroll } from "framer-motion";

export default function Scroll() {

  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className='h-[5px] origin-left w-full text-left bg-blue-600 fixed top-0 z-30'></motion.div>
  )
}


