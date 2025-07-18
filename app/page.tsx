"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { GoalsSection } from "@/components/goals-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScrollProvider, SectionTransition } from "@/components/smooth-scroll-provider"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <motion.main
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <CustomCursor />
        <Navbar />

        <section id="hero">
          <SectionTransition id="hero">
            <HeroSection />
          </SectionTransition>
        </section>

        <section id="projects">
          <SectionTransition id="projects">
            <ProjectsSection />
          </SectionTransition>
        </section>

        <section id="skills">
          <SectionTransition id="skills">
            <SkillsSection />
          </SectionTransition>
        </section>

        <section id="about">
          <SectionTransition id="about">
            <AboutSection />
          </SectionTransition>
        </section>

        <section id="goals">
          <SectionTransition id="goals">
            <GoalsSection />
          </SectionTransition>
        </section>

        <section id="contact">
          <SectionTransition id="contact">
            <ContactSection />
          </SectionTransition>
        </section>

        <Footer />
      </motion.main>
    </SmoothScrollProvider>
  )
}
