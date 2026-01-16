import React from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import ScrollAnimation from '../../ScrollAnimation'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      name: "Mycalc",
      link: "https://savrahul.github.io/Mycalc/",
      description: "A simple and intuitive calculator app with modern UI design for quick arithmetic operations.",
      techstack: ["HTML", "CSS", "JavaScript"],
      type: "Web App"
    },
    {
      name: "Covid Dashboard",
      link: "https://savrahul.github.io/covid-dashboard/",
      description: "Real-time COVID-19 dashboard with interactive map visualization showing active cases, deaths, and recovery data for India and worldwide.",
      techstack: ["HTML", "CSS", "JavaScript", "Mapbox GL API", "REST APIs"],
      type: "Dashboard"
    },
    {
      name: "Personal Portfolio (Desktop)",
      link: "https://www.figma.com/proto/izPUOwjRO8jkFIaKM5OQmt/Untitled?type=design&node-id=1-3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3",
      description: "Modern and attractive portfolio interface design following UI/UX best practices for an engaging user experience.",
      techstack: ["Figma"],
      type: "UI/UX Design"
    },
    {
      name: "Personal Portfolio (Mobile)",
      link: "https://www.figma.com/proto/izPUOwjRO8jkFIaKM5OQmt/Untitled?type=design&node-id=2-189&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A189&show-proto-sidebar=1",
      description: "Mobile-optimized portfolio design with responsive layouts and intuitive navigation for seamless mobile experience.",
      techstack: ["Figma"],
      type: "UI/UX Design"
    },
    {
      name: "College Website Design",
      link: "https://app.visily.ai/projects/9125776a-e2c6-48e0-878f-2c611d81d589/boards/483878/presenter?play-mode=Prototype",
      description: "Comprehensive college website interface design with modern aesthetics and user-friendly navigation structure.",
      techstack: ["Visily.ai"],
      type: "UI/UX Design"
    },
    {
      name: "College Website (Full)",
      link: "https://iiit-website.onrender.com/",
      description: "Full-stack college website with admin panel, user management, and dynamic content management system built with Full stack.",
      techstack: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JSX", "JSON"],
      type: "Full Stack"
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <ScrollAnimation direction="up" delay={0}>
          <div className="projects-header">
            <h2 className="projects-title">
              My <span className="projects-title-accent">Projects</span>
            </h2>
            <div className="title-underline"></div>
            <p className="projects-subtitle">A collection of projects showcasing my skills and experience</p>
          </div>
        </ScrollAnimation>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 100}>
              <div className="project-card">
                <div className="project-content">
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>

                  <div className="project-tech">
                    <div className="project-tech-header">
                      <HiCode className="project-tech-icon" />
                      <span className="project-tech-label">Tech Stack</span>
                    </div>
                    <div className="project-tech-tags">
                      {project.techstack.map((tech, techIndex) => (
                        <span key={techIndex} className="project-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <HiExternalLink className="project-link-icon" />
                  </a>
                </div>

                <div className="project-hover-overlay"></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
