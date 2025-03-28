"use client"

import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa'

export default function AboutSection() {
  const features = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Creating responsive and performant web applications using modern technologies.'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and aesthetic user interfaces that enhance user experience.'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Continuously learning and applying cutting-edge technologies to solve complex problems.'
    }
  ]

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-black text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 
            bg-gradient-to-r from-purple-500 
            to-pink-500 
            text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <feature.icon className="text-5xl mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto text-lg text-gray-300"
        >
          I am a passionate developer and designer who loves creating digital solutions that make a difference. 
          With a blend of technical skills and creative vision, I transform ideas into beautiful, functional experiences.
        </motion.p>
      </div>
    </section>
  )
}