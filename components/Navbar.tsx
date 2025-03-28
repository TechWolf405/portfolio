"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // Scroll to the top of the page for Home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Anushka Jadhav
        </motion.div>
        
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                text-sm uppercase tracking-wider
                transition-colors duration-300
                cursor-pointer
                ${activeSection === item.id
                  ? 'text-purple-500 font-bold'
                  : 'text-gray-400 hover:text-white'
                }
              `}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  )
}