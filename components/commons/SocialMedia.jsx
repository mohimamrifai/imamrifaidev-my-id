'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

export default function SocialMedia() {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/imamrifai",
      label: "GitHub",
      color: "hover:text-gray-600"
    },
    {
      id: 2, 
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://linkedin.com/in/imamrifai",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      id: 3,
      icon: <FaInstagram className="text-2xl" />,
      href: "https://instagram.com/imamrifai.dev",
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    {
      id: 4,
      icon: <FaTwitter className="text-2xl" />,
      href: "https://twitter.com/imamrifai_dev",
      label: "Twitter",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <div className="mt-24 px-6 md:px-16 relative">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl text-center font-bold text-white custom-outline md:ps-5 opacity-25 mb-10"
      >
        Connect With Me
      </motion.p>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {socialLinks.map((social) => (
            <Link 
              key={social.id}
              href={social.href}
              target="_blank"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-all ${social.color}`}
              >
                <div className="mb-2">
                  {social.icon}
                </div>
                <span className="font-medium">{social.label}</span>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-gray-600 dark:text-gray-400"
        >
          Let's connect and collaborate on exciting projects together! 🤝✨
        </motion.p>
      </div>
    </div>
  )
}
