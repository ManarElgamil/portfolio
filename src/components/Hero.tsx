'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { personalInfo } from '@/data/portfolio'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-terminal-900 dark:via-terminal-800 dark:to-terminal-900 pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/images/hijabi-girl-coding.jpg" 
          alt="Coding inspiration" 
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container-max section-padding text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Centerpiece Visual Element - Terminal Window */}
          <div className="mb-8 relative">
            <div className="relative group">
              {/* Terminal Window */}
              <div className="w-96 h-64 mx-auto bg-terminal-800 rounded-lg shadow-2xl border border-terminal-600 overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-terminal-700 px-4 py-2 flex items-center space-x-2 border-b border-terminal-600">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-terminal-300 text-sm font-mono ml-4">terminal</div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-4 h-full bg-terminal-800">
                  <div className="space-y-2 text-left">
                    <div className="text-primary-400 font-mono text-sm">
                      <span className="text-accent-400">$</span> whoami
                    </div>
                    <div className="text-primary-300 font-mono text-sm animate-terminal-blink">
                      {personalInfo.name}
                    </div>
                    <div className="text-primary-400 font-mono text-sm">
                      <span className="text-accent-400">$</span> cat about.txt
                    </div>
                    <div className="text-primary-300 font-mono text-sm">
                      Cloud and Application Specialist
                    </div>
                    <div className="text-primary-300 font-mono text-sm">
                      Building exceptional digital experiences
                    </div>
                    <div className="text-primary-400 font-mono text-sm">
                      <span className="text-accent-400">$</span> <span className="animate-code-typing">npm run build</span>
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                      ✓ Build completed successfully
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 w-96 h-64 mx-auto rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4 font-mono">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-accent-600 dark:text-accent-400 font-semibold mb-6 font-mono">
            {personalInfo.title}
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-terminal-300 mb-8 max-w-2xl mx-auto leading-relaxed font-mono">
            {personalInfo.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col custom:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-primary-600 hover:bg-primary-700 text-white font-mono text-lg px-8 py-3 rounded-lg transition-colors duration-200 border border-primary-500"
            >
              $ contact
            </button>
            <button
              onClick={scrollToProjects}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-terminal-700 dark:hover:bg-terminal-600 text-primary-600 dark:text-primary-400 font-mono text-lg px-8 py-3 rounded-lg transition-colors duration-200 border border-gray-300 dark:border-terminal-600"
            >
              $ projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-terminal-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-terminal-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {personalInfo.social.twitter && (
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-terminal-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button
            onClick={() => scrollToProjects()}
            className="text-gray-600 dark:text-terminal-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero