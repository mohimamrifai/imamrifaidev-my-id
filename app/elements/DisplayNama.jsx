import React from 'react'
import { motion } from "framer-motion"

const initial = { x: "-200%" }
const animate = { x: "0" }
const config = {
    duration: 1,
    ease: "backInOut",
}

const DisplayNama = () => {
  return (
    <motion.h3
      initial={initial}
      animate={animate}
      transition={config}
      className="mt-5 text-3xl font-medium tracking-widest font-Poppins dark:text-gray-100"
    >
      I'm Imam rifai 🖐
    </motion.h3>
  );
}

export default DisplayNama
