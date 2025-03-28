"use client"

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effect calculations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <motion.section 
      ref={containerRef}
      style={{
        scale: scale,
        transformOrigin: 'top center'
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <motion.div 
        style={{ 
          y: backgroundY 
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#4338ca] to-[#9333ea] opacity-20 z-0"
      />

      {/* Hero Content */}
      <motion.div 
        style={{ 
          y: textY,
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0])
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        className="relative z-10 text-center max-w-4xl px-4"
      >
        {/* Profile Image with Hover Effect */}
        <motion.div 
          whileHover={{ 
            scale: 1.05,
            transition: { 
              duration: 0.3,
              type: "spring"
            }
          }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto mb-8 w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
        >
          <img 
            src="/profile.jpeg" 
            alt="Anushka Jadhav"
            onLoad={() => setIsImageLoaded(true)}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Dynamic Typing Introduction */}
        <h1 className="text-5xl font-bold mb-4 text-white">
          <TypeAnimation
            sequence={[
              'Hi, I\'m Anushka Jadhav', 
              1000, 
              'A UI/UX Designer', 
              1000,
              'A Web Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {/* Subtitle with Gradient */}
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Crafting digital experiences that blend creativity with cutting-edge technology
        </p>

        {/* Interactive Buttons */}
        <div className="flex justify-center space-x-6">
          {[
            { 
              icon: FaDownload, 
              text: 'Download CV', 
              color: 'bg-blue-600 hover:bg-blue-700',
              href: '/resume.pdf'
            },
            { 
              icon: FaLinkedin, 
              text: 'LinkedIn', 
              color: 'bg-[#0A66C2] hover:bg-[#0A66C2]/80',
              href: 'https://linkedin.com/in/anushka-jadhav-a45411257'
            },
            { 
              icon: FaGithub, 
              text: 'GitHub', 
              color: 'bg-gray-800 hover:bg-gray-700',
              href: 'https://github.com/TechWolf405'
            }
          ].map((button, index) => (
            <motion.a
              key={button.text}
              href={button.href}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full 
                text-white font-semibold tracking-wider
                transition-all duration-300 ease-in-out
                transform hover:shadow-xl ${button.color}
              `}
            >
              <button.icon className="text-xl" />
              {button.text}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1,
          type: "spring",
          stiffness: 100
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        Scroll Down ↓
      </motion.div>
    </motion.section>
  )
}