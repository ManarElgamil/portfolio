'use client'

import Image from 'next/image'
import { personalInfo } from '@/data/portfolio'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-terminal-700">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4 font-mono">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6 flex flex-col justify-center min-h-[400px]">
              {/* <p className="text-base text-gray-600 dark:text-terminal-300 leading-relaxed font-mono">
                {personalInfo.bio}
              </p> */}
              
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 dark:text-terminal-300 leading-relaxed font-mono">
                I love building cloud solutions with AWS, creating serverless apps, and 
                making systems that just work. From Docker containers to REST APIs, 
                I enjoy turning complex problems into simple, elegant solutions.
              </p>
              
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 dark:text-terminal-300 leading-relaxed font-mono">
                When I&apos;m not coding, you&apos;ll find me wandering through nature trails, 
                breathing in the fresh air, or watching the waves by the ocean. 
                These peaceful moments keep me grounded and inspired.
              </p>

            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-80 rounded-2xl shadow-xl overflow-hidden border-2 border-primary-500 relative">
                  <Image 
                    src="/images/me-me.jpg" 
                    alt="Manar Elgamil" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary-200 rounded-2xl -z-10"></div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-primary-300 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Quick Stats - Centered across full width */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-6">
              <div className="text-center p-4 bg-gray-100 dark:bg-terminal-700 rounded-lg border border-gray-200 dark:border-terminal-600">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600 mb-1">1+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-terminal-300 font-mono">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-100 dark:bg-terminal-700 rounded-lg border border-gray-200 dark:border-terminal-600">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600 mb-1">10+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-terminal-300 font-mono">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Technologies I Love */}
          <div className="mt-16 text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-accent-600 dark:text-accent-400 mb-8 font-mono">
              Technologies I Love Working With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS', 'Python', 'Docker', 'AWS Lambda', 'DynamoDB', 'React', 'Flask', 'boto3', 'GitHub Actions', 'Streamlit', 'Microsoft Graph API', 'Oracle EBS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-terminal-700 text-primary-600 dark:text-primary-400 rounded-full text-xs sm:text-xs lg:text-sm font-mono font-medium hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-terminal-600"
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