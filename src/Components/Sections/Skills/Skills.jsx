import React, { useState } from 'react'
import ScrollAnimation from '../../ScrollAnimation'
import './Skills.css'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const techs = [
    { id: 1, title: "HTML5", category: "Front-end", colorClass: "orange-red" },
    { id: 2, title: "CSS", category: "Front-end", colorClass: "blue-cyan" },
    { id: 3, title: "JavaScript", category: "Front-end", colorClass: "yellow-amber" },
    { id: 4, title: "TypeScript", category: "Front-end", colorClass: "blue-indigo" },
    { id: 5, title: "React.js", category: "Front-end", colorClass: "cyan-teal" },
    { id: 6, title: "Next.js", category: "Front-end", colorClass: "gray" },
    { id: 7, title: "React Native", category: "Front-end", colorClass: "cyan-blue" },
    { id: 8, title: "Context", category: "Front-end", colorClass: "purple-indigo" },
    { id: 9, title: "Node.js", category: "Back-end", colorClass: "emerald-green" },
    { id: 10, title: "Express.js", category: "Back-end", colorClass: "gray" },
    { id: 11, title: "REST APIs", category: "Back-end", colorClass: "blue-cyan" },
    { id: 12, title: "socket.io", category: "Back-end", colorClass: "orange-amber" },
    { id: 13, title: "Redis", category: "Back-end", colorClass: "red-orange" },
    { id: 14, title: "Kafka", category: "Back-end", colorClass: "purple-pink" },
    { id: 15, title: "MongoDB", category: "Database", colorClass: "green-emerald" },
    { id: 16, title: "MySQL", category: "Database", colorClass: "blue-indigo" },
    { id: 17, title: "Bootstrap", category: "UI Frameworks / Libraries", colorClass: "purple-indigo" },
    { id: 18, title: "Tailwind CSS", category: "UI Frameworks / Libraries", colorClass: "teal-cyan" },
    { id: 19, title: "Material-UI (MUI)", category: "UI Frameworks / Libraries", colorClass: "blue-indigo" },
    { id: 20, title: "NetLify", category: "Cloud Hosting Platform", colorClass: "teal-cyan" },
    { id: 21, title: "Render", category: "Cloud Hosting Platform", colorClass: "gray" },
    { id: 22, title: "AWS", category: "Cloud Hosting Platform", colorClass: "orange-amber" },
    { id: 23, title: "Git", category: "Other", colorClass: "orange-red" },
    { id: 24, title: "Github", category: "Other", colorClass: "gray" },
    { id: 25, title: "3rd party integrations", category: "Other", colorClass: "purple-pink" },
    { id: 26, title: "Sprints", category: "Tools", colorClass: "blue-cyan" },
    { id: 27, title: "Postman", category: "Tools", colorClass: "orange-red" },
    { id: 28, title: "Bugasura", category: "Tools", colorClass: "red-pink" },
  ]

  const categories = ["All", "Front-end", "Back-end", "Database", "UI Frameworks / Libraries", "Cloud Hosting Platform", "Other", "Tools"]
  const filteredTechs = selectedCategory === "All" ? techs : techs.filter(tech => tech.category === selectedCategory)

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <ScrollAnimation direction="up" delay={0}>
          <div className="skills-header">
            <h2 className="skills-title">
              <span className="skills-title-accent">Technical</span> Skills
            </h2>
            <div className="title-underline"></div>
            <p className="skills-subtitle">Technologies and tools I work with</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={100}>
          <div className="skills-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <div className="skills-grid">
          {filteredTechs.map((tech, index) => (
            <ScrollAnimation key={tech.id} direction="up" delay={index * 50}>
              <div className={`skill-card ${tech.colorClass}`}>
                <h3 className="skill-title">{tech.title}</h3>
                <p className="skill-category">{tech.category}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={200}>
          <div className="skills-summary">
            <div className="summary-card">
              <div className="summary-number emerald">2+</div>
              <div className="summary-label">Years Experience</div>
            </div>
            <div className="summary-card">
              <div className="summary-number amber">28+</div>
              <div className="summary-label">Technologies</div>
            </div>
            <div className="summary-card">
              <div className="summary-number orange">Full</div>
              <div className="summary-label">Stack Specialist</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
