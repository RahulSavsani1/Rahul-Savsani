import React from 'react'
import { FaGraduationCap, FaVolleyballBall, FaPlane, FaGamepad, FaLanguage } from 'react-icons/fa'
import ScrollAnimation from '../../ScrollAnimation'
import './About.css'

export default function About() {
  const educa = [
    {
      institution: "International Institute of Information Technology, Bhubaneswar",
      year: "(2019-2023)",
      description: "Bachelor of Technology - B.Tech Information Technology",
      icon: <FaGraduationCap className="edu-icon emerald" />
    },
    {
      institution: "ODM PUBLIC SCHOOL, Bhubaneswar",
      year: "(2017-2019)",
      description: "Senior Secondary Education, Class-XII",
      icon: <FaGraduationCap className="edu-icon amber" />
    },
    {
      institution: "Siddhartha Public School, Kumelsingha",
      year: "(2008-2017)",
      description: "MATRICULATION",
      icon: <FaGraduationCap className="edu-icon orange" />
    }
  ]

  const activities = [
    { name: "Volleyball", icon: <FaVolleyballBall /> },
    { name: "Travelling", icon: <FaPlane /> },
    { name: "Esports Gaming", icon: <FaGamepad /> }
  ]

  const languages = ["English", "Hindi", "Odia", "Gujarati"]

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <ScrollAnimation direction="up" delay={0}>
          <div className="about-header">
            <h2 className="about-title">
              <span className="about-title-accent">About</span> Me
            </h2>
            <div className="title-underline"></div>
          </div>
        </ScrollAnimation>

        <div className="about-cards">
          <ScrollAnimation direction="up" delay={100}>
            <div className="about-card">
              <h3 className="about-card-title emerald">Who I Am</h3>
              <p className="about-card-text">
                I'm an IT graduate from IIIT, BBSR, and a passionate web developer with 2+ years of experience in the Full stack. I thrive on creating innovative solutions and bringing ideas to life through code.
              </p>
              <p className="about-card-text">
                My journey in web development has been driven by curiosity and a commitment to continuous learning. I'm always exploring new technologies and best practices to enhance my skills.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="about-card">
              <h3 className="about-card-title amber">My Approach</h3>
              <p className="about-card-text">
                I'm a proactive and fast-learning individual, eager to work with dynamic organizations that value innovation. I believe in collaborative work environments where I can contribute my technical expertise while growing professionally.
              </p>
              <p className="about-card-text">
                With strong leadership and teamwork abilities, I excel at bridging the gap between technical and non-technical stakeholders, ensuring clear communication and successful project outcomes.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation direction="up" delay={0}>
          <div className="education-header">
            <h2 className="education-title">
              <span className="education-title-accent">Education</span>
            </h2>
            <div className="title-underline"></div>
          </div>
        </ScrollAnimation>

        <div className="education-grid">
          {educa.map((edu, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 100}>
              <div className="education-card">
                <div className="education-icon">{edu.icon}</div>
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-year">{edu.year}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="about-bottom">
          <ScrollAnimation direction="up" delay={0}>
            <div className="activities-card">
              <div className="activities-header">
                <FaVolleyballBall className="activities-icon emerald" />
                <h2 className="activities-title">Extra Activities</h2>
              </div>
              <div className="activities-grid">
                {activities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon emerald">{activity.icon}</div>
                    <p className="activity-name">{activity.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={100}>
            <div className="languages-card">
              <div className="languages-header">
                <FaLanguage className="languages-icon amber" />
                <h2 className="languages-title">Languages</h2>
              </div>
              <div className="languages-grid">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <p className="language-name">{lang}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
