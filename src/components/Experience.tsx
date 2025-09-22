'use client'

import { experience } from '@/data/portfolio'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-terminal-700">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-primary-400 mb-4 font-mono">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 dark:text-terminal-300 max-w-2xl mx-auto font-mono">
            My professional journey and the impact I&apos;ve made along the way
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            {experience.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-terminal-800 shadow-lg z-10"></div>

                {/* Content */}
                <div className="ml-20 bg-white dark:bg-terminal-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full border border-gray-200 dark:border-terminal-600">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-terminal-100 mb-1 font-mono">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold font-mono">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium font-mono">
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                       <p className="text-base text-gray-600 dark:text-terminal-300 mb-6 leading-relaxed font-mono">
                         {exp.description}
                       </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-terminal-100 mb-3 font-mono">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-terminal-600 text-gray-700 dark:text-terminal-300 rounded-full text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-terminal-100 mb-3 font-mono">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                             <li
                               key={achIndex}
                               className="flex items-start text-base text-gray-600 dark:text-terminal-300 font-mono"
                             >
                          <span className="text-primary-600 mr-3 mt-1">✦</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-terminal-700 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-200 dark:border-terminal-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-primary-400 mb-4 font-mono">
              Let&apos;s Work Together
            </h3>
                   <p className="text-base text-gray-600 dark:text-terminal-300 mb-6 font-mono">
                     I&apos;m always open to discussing new opportunities and exciting projects.
                   </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary px-8 py-3"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience