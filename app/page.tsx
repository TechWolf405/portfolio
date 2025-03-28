"use client"

import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import CustomCursor from '@/components/CustomCursor'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  )
}