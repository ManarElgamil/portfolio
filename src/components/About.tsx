'use client'

import { personalInfo } from '@/data/portfolio'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-terminal-700">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4 font-mono">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-terminal-300 leading-relaxed font-mono">
                {personalInfo.bio}
              </p>
              
              <p className="text-lg text-gray-600 dark:text-terminal-300 leading-relaxed font-mono">
                I specialize in creating scalable web applications using modern technologies 
                like React, Next.js, and Node.js. My passion lies in writing clean, 
                maintainable code and delivering exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-terminal-300 leading-relaxed font-mono">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-gray-100 dark:bg-terminal-700 rounded-lg border border-gray-200 dark:border-terminal-600">
                  <div className="text-2xl font-bold text-primary-600 mb-1">5+</div>
                  <div className="text-sm text-gray-600 dark:text-terminal-300 font-mono">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-terminal-700 rounded-lg border border-gray-200 dark:border-terminal-600">
                  <div className="text-2xl font-bold text-primary-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600 dark:text-terminal-300 font-mono">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-80 rounded-2xl shadow-xl overflow-hidden border-2 border-primary-500">
                  <img 
                    src="/images/me-me.jpg" 
                    alt="Manar Elgamil" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary-200 rounded-2xl -z-10"></div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-primary-300 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Technologies I Love */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-accent-600 dark:text-accent-400 mb-8 font-mono">
              Technologies I Love Working With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-terminal-700 text-primary-600 dark:text-primary-400 rounded-full text-sm font-mono font-medium hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-terminal-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About