import React from 'react'
import Hero from '../Components/Sections/Hero/Hero'
import About from '../Components/Sections/About/About'
import Skills from '../Components/Sections/Skills/Skills'
import Projects from '../Components/Sections/Projects/Projects'
import Contact from '../Components/Sections/Contact/Contact'

export default function HomePage() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="homepage">
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
