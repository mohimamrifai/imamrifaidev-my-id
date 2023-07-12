import React from 'react'
import { motion } from "framer-motion"

const initial = { y: -450 }
const animate = { y: 0 }

function DisplayBio() {
    return (
        <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: .8, ease: "backInOut" }}
            className='mt-6 mb-10 text-gray-700 font-Poppins w-10/12 dark:text-gray-100'>
            Lover of JavaScript, coding enthusiast, constantly learning and growing, building amazing projects.
        </motion.p>
    )
}

export default DisplayBio
