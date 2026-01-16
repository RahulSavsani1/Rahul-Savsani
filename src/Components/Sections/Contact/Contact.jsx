import React from 'react'
import { HiMail, HiPhone } from 'react-icons/hi'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import ScrollAnimation from '../../ScrollAnimation'
import './Contact.css'

export default function Contact() {

  const contactMethods = [
    {
      icon: <HiPhone />,
      title: "Phone",
      value: "+91-7608836864",
      clickable: false,
      colorClass: "emerald-teal",
      iconColorClass: "emerald-teal-dark"
    },
    {
      icon: <HiMail />,
      title: "Email",
      value: "savsanirahul1@gmail.com",
      clickable: false,
      colorClass: "amber-orange",
      iconColorClass: "amber-orange-dark"
    },
    {
      icon: <AiFillLinkedin />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/rahul-savsani-57198b251",
      clickable: true,
      colorClass: "blue-indigo",
      iconColorClass: "blue-indigo-dark"
    },
    {
      icon: <AiFillGithub />,
      title: "GitHub",
      value: "View my code",
      link: "https://github.com/savrahul",
      clickable: true,
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
            <p className="contact-subtitle">
              Let's discuss your next project or just say hello!
            </p>
          </div>
        </ScrollAnimation>

        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 100}>
              {method.clickable ? (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-link"
                >
                  <ContactCard method={method} />
                </a>
              ) : (
                <div className="contact-method-link non-clickable">
                  <ContactCard method={method} />
                </div>
              )}
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  )
}

function ContactCard({ method }) {
  return (
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
  )
}
