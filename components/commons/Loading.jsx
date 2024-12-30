import { motion } from "framer-motion"

export default function Loading() {
    return <motion.div
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
}
