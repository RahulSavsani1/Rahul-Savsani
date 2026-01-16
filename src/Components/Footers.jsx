import React from 'react'
import { AiOutlineCopyrightCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import ScrollAnimation from './ScrollAnimation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const socialLinks = [
    {
      icon: <AiFillLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/rahul-savsani-57198b251",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: <AiFillGithub className="text-2xl" />,
      href: "https://github.com/savrahul",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <AiFillInstagram className="text-2xl" />,
      href: "https://instagram.com/rahulsavsani?igshid=MzNlNGNkZWQ4Mg==",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: <AiFillFacebook className="text-2xl" />,
      href: "https://www.facebook.com/profile.php?id=100008424421762&mibextid=ZbWKwL",
      label: "Facebook",
      color: "hover:text-blue-600"
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-900 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <ScrollAnimation direction="up" delay={0}>
            <div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-4">Rahul Savsani</h3>
              <p className="text-gray-600 mb-4">
                Full Stack Developer passionate about creating innovative web solutions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Quick Links */}
          <ScrollAnimation direction="up" delay={100}>
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 hover:translate-x-2 inline-block text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation direction="up" delay={200}>
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">Get In Touch</h4>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href="mailto:savsanirahul1@gmail.com"
                    className="hover:text-emerald-600 transition-colors duration-300"
                  >
                    savsanirahul1@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917608836864"
                    className="hover:text-emerald-600 transition-colors duration-300"
                  >
                    +91-7608836864
                  </a>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-gray-200 my-8"></div> */}

        {/* Copyright */}
        {/* <ScrollAnimation direction="up" delay={300}>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <AiOutlineCopyrightCircle />
              <p>{currentYear} Rahul Savsani. All rights reserved.</p>
            </div>
            <p className="text-center md:text-right">
              Built with <span className="text-emerald-500">❤</span> using React & Tailwind CSS
            </p>
          </div>
        </ScrollAnimation> */}
      </div>
    </footer>
  )
}