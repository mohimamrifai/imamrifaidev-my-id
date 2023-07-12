import React from 'react'
import { motion } from "framer-motion"

const initial = { y: -350 }
const animate = { y: 0 }
const config = {
    duration: 1,
    ease: "backInOut",
}

const DivExtra = () => {
    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={config}
            className="w-4/12 bg-gray-800 h-[8px] dark:bg-gray-100">
        </motion.div>
    )
}

export default DivExtra
