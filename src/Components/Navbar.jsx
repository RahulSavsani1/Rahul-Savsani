import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setNav(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="flex items-center justify-between w-full h-20 px-4 md:px-8 text-gray-900 max-w-screen-xl mx-auto">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-3xl font-bold text-emerald-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Rahul
        </button>
        
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  activeSection === link.id
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300 ${
                    activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-50 text-gray-700 hover:text-gray-900 transition-colors duration-300 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-gradient-to-b from-white via-gray-50 to-white transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col justify-center items-center h-full gap-8 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full text-center">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-2xl font-semibold transition-all duration-300 block py-4 w-full ${
                    activeSection === link.id
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'hover:text-gray-900 hover:scale-110'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay */}
        {nav && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setNav(false)}
          />
        )}
      </div>
    </nav>
  );
}