import React from 'react'
import { motion } from "framer-motion"

const initial = { opacity: 0 }
const animate = { opacity: 1 }

function ButtonFollow() {
    return (
        <motion.p
            initial={initial}
            animate={animate}
            className='text-gray-700 font-Poppins dark:text-gray-100'>
            Follow me
        </motion.p>
    )
}

export default ButtonFollow
