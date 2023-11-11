import React from 'react'
import { motion } from "framer-motion"

const initial = { y: -600 }
const animate = { y: 0 }

function DisplayRole() {
    return (
        <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: .5, ease: "backInOut" }}
            className='mt-3 text-4xl font-bold tracking-wider font-Poppins lg:text-6xl dark:text-gray-100'>
            Fullstack Web Developer
        </motion.p>
    )
}

export default DisplayRole
