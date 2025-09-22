'use client'

import { useState, useEffect } from 'react'
import { personalInfo } from '@/data/portfolio'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Set dark mode as default and apply it to the document
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'light') {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      // Default to dark mode
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-terminal-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
            />
            <div className="font-bold text-xl text-primary-600 dark:text-primary-400 font-mono">
              {personalInfo.name}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden custom:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 dark:text-terminal-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium font-mono"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Resume Button and Dark Mode Toggle */}
          <div className="hidden custom:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
                className="relative p-2 rounded-lg bg-gray-100 dark:bg-terminal-800 hover:bg-gray-200 dark:hover:bg-terminal-700 transition-all duration-300 transform hover:scale-110 group"
              aria-label="Toggle dark mode"
            >
              <div className="w-5 h-5 relative">
                {/* Sun Icon */}
                <svg
                  className={`w-5 h-5 text-yellow-500 transition-all duration-300 ${
                    isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                {/* Moon Icon */}
                <svg
                  className={`w-5 h-5 text-blue-400 absolute top-0 left-0 transition-all duration-300 ${
                    isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400 to-nude-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="custom:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-terminal-800 hover:bg-gray-200 dark:hover:bg-terminal-700 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              <div className="w-5 h-5 relative">
                <svg
                  className={`w-5 h-5 text-yellow-500 transition-all duration-300 ${
                    isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                <svg
                  className={`w-5 h-5 text-blue-400 absolute top-0 left-0 transition-all duration-300 ${
                    isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </button>

            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="custom:hidden bg-white dark:bg-terminal-800 border-t border-gray-200 dark:border-terminal-700">
            <div className="py-4 px-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-600 dark:text-terminal-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium font-mono"
                >
                  {item.name}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block mt-4"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header