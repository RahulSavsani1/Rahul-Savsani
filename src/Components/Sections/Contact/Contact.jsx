import React, { useState } from 'react'
import { HiMail, HiPhone } from 'react-icons/hi'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import ScrollAnimation from '../../ScrollAnimation'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:savsanirahul1@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
  }

  const contactMethods = [
    {
      icon: <HiPhone />,
      title: "Phone",
      value: "+91-7608836864",
      link: "tel:+917608836864",
      colorClass: "emerald-teal",
      iconColorClass: "emerald-teal-dark"
    },
    {
      icon: <HiMail />,
      title: "Email",
      value: "savsanirahul1@gmail.com",
      link: "mailto:savsanirahul1@gmail.com",
      colorClass: "amber-orange",
      iconColorClass: "amber-orange-dark"
    },
    {
      icon: <AiFillLinkedin />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/rahul-savsani-57198b251",
      colorClass: "blue-indigo",
      iconColorClass: "blue-indigo-dark"
    },
    {
      icon: <AiFillGithub />,
      title: "GitHub",
      value: "View my code",
      link: "https://github.com/savrahul",
      colorClass: "gray",
      iconColorClass: "gray-dark"
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <ScrollAnimation direction="up" delay={0}>
          <div className="contact-header">
            <h2 className="contact-title">
              Get In <span className="contact-title-accent">Touch</span>
            </h2>
            <div className="title-underline center"></div>
            <p className="contact-subtitle">Let's discuss your next project or just say hello!</p>
          </div>
        </ScrollAnimation>

        <div className="contact-content">
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <ScrollAnimation key={index} direction="right" delay={index * 100}>
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-method-link"
                >
                  <div className={`contact-method-card ${method.colorClass}`}>
                    <div className="contact-method-content">
                      <div className={`contact-method-icon-wrapper ${method.iconColorClass}`}>
                        <div className="contact-method-icon">
                          {method.icon}
                        </div>
                      </div>
                      <div className="contact-method-info">
                        <h3 className="contact-method-title">{method.title}</h3>
                        <p className="contact-method-value">{method.value}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation direction="left" delay={200}>
            <div className="contact-form-wrapper">
              <h3 className="contact-form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Your message here..."
                  />
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
