"use client"

import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'

export default function FooterSection() {
  return (
    <footer 
      className="min-h-[50vh] flex items-center justify-center bg-black text-white py-20 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center z-10 relative"
      >
        <h2 
          className="text-4xl font-bold mb-8
            bg-gradient-to-r from-[var(--color-primary)] 
            to-[var(--color-accent)] 
            text-transparent bg-clip-text"
        >
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl glow-border">
          <FaEnvelope className="text-5xl mx-auto mb-6 text-[var(--color-primary)]" />
          
          <p className="text-xl mb-4 text-[var(--color-text-secondary)]">
            Feel free to reach out for collaboration, opportunities, or just to say hello!
          </p>
          
          <motion.a
            href="mailto:anushkajadhavwrk@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[var(--color-secondary)] 
              text-white font-semibold 
              px-6 py-3 rounded-full 
              hover:bg-[var(--color-accent)] 
              transition-all duration-300"
          >
            Contact Me: anushkajadhavwrk@gmail.com
          </motion.a>
        </div>
      </motion.div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-20 z-0" />
    </footer>
  )
}