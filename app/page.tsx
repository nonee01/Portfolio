import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HorizontalProjects } from "@/components/horizontal-projects"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HorizontalProjects />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
