import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import ScrollAnimation from '../../ScrollAnimation'
import './Hero.css'

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
      </div>

      <div className="hero-container">
        <ScrollAnimation direction="up" delay={100} className="hero-content">
          <div className="hero-greeting">
            <span className="hero-greeting-text">Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-name">Rahul </span>
            <span className="hero-name-accent">Savsani</span>
          </h1>
          <div className="hero-subtitle">
            <h2 className="hero-role">
              Full Stack Developer
            </h2>
            <p className="hero-description">
              Crafting beautiful and functional web experiences with modern technologies
            </p>
          </div>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
              <HiArrowRight className="btn-icon" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={300} className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <div className="hero-image-inner">
              <img
                src="./images/Rahul_photo.jpg"
                className="hero-image"
                alt="Rahul Savsani"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
