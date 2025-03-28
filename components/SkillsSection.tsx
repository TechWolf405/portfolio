"use client"

import { motion } from 'framer-motion'
import { 
 
  FaPython, 
  FaDatabase, 
  FaFigma, 
  FaCode, 
  FaGit,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa'
import { SiPostman, SiNumpy, SiPandas, SiFlask, SiCanva } from 'react-icons/si'

export default function SkillsSection() {
  const skills = [
    { icon: FaFigma, name: 'Figma', level: 95, category: 'UI/UX Design' },
    { icon: SiCanva, name: 'Canva', level: 85, category: 'UI/UX Design' },
    { icon: FaCode, name: 'UI/UX Design', level: 90, category: 'UI/UX Design' },
    { icon: FaPython, name: 'Python', level: 85, category: 'Programming' },
    { icon: FaJsSquare, name: 'JavaScript', level: 80, category: 'Web Development' },
    { icon: FaHtml5, name: 'HTML', level: 90, category: 'Web Development' },
    { icon: FaCss3Alt, name: 'CSS', level: 85, category: 'Web Development' },
    { icon: SiFlask, name: 'Flask', level: 75, category: 'Web Development' },
    { icon: FaDatabase, name: 'MySQL', level: 70, category: 'Databases' },
    { icon: SiNumpy, name: 'NumPy', level: 70, category: 'Data Tools' },
    { icon: SiPandas, name: 'Pandas', level: 70, category: 'Data Tools' },
    { icon: FaGit, name: 'Git/GitHub', level: 85, category: 'Tools' },
    { icon: SiPostman, name: 'Postman', level: 80, category: 'API Tools' }
  ]

  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center justify-center bg-black text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 
            bg-gradient-to-r from-blue-500 
            to-green-500 
            text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <skill.icon className="text-5xl mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{skill.category}</p>
              <div className="bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}