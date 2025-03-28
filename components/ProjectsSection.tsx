"use client"

import { motion } from 'framer-motion'
import { FaGithub, FaEye } from 'react-icons/fa'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Blog Website',
      description: 'Full-stack blog platform with user authentication',
      technologies: ['Flask', 'SQLite', 'Bootstrap'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Fashion Recommender',
      description: 'AI-powered fashion recommendation system',
      technologies: ['ResNet', 'Django', 'Gemini API'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio with animated interactions',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#'
    }
  ]

  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center bg-black text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 
            bg-gradient-to-r from-green-500 
            to-teal-500 
            text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex justify-center space-x-2 mb-4">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-gray-700 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  className="text-2xl hover:text-green-500 transition-colors"
                >
                  <FaGithub />
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  className="text-2xl hover:text-green-500 transition-colors"
                >
                  <FaEye />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}