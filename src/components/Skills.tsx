'use client'

import { useState } from 'react'
import { skills } from '@/data/portfolio'
import { Skill } from '@/types'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'data', name: 'Data & ML' },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const getSkillLevel = (level: number) => {
    const labels = ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert']
    return labels[level - 1] || 'Unknown'
  }

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-terminal-800">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-primary-400 mb-4 font-mono">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-terminal-300 max-w-2xl mx-auto font-mono">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 font-mono ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-terminal-700 text-gray-600 dark:text-terminal-300 hover:bg-primary-50 dark:hover:bg-primary-800 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-terminal-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-gray-200 dark:border-terminal-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Skill Icon and Name */}
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-terminal-100 font-mono">{skill.name}</h3>
              </div>

              {/* Skill Level */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-terminal-300 font-mono">{getSkillLevel(skill.level)}</span>
                  <span className="text-sm font-medium text-primary-600">{skill.level}/5</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-terminal-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Category Tag */}
              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-terminal-600 text-gray-600 dark:text-terminal-300 text-xs rounded-full capitalize font-mono">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-terminal-700 rounded-xl shadow-lg border border-gray-200 dark:border-terminal-600">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {skills.filter(s => s.level >= 4).length}+
            </div>
            <div className="text-gray-600 dark:text-terminal-300 font-mono">Advanced Skills</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-terminal-700 rounded-xl shadow-lg border border-gray-200 dark:border-terminal-600">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {skills.length}+
            </div>
            <div className="text-gray-600 dark:text-terminal-300 font-mono">Technologies</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-terminal-700 rounded-xl shadow-lg border border-gray-200 dark:border-terminal-600">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {new Set(skills.map(s => s.category)).size}
            </div>
            <div className="text-gray-600 dark:text-terminal-300 font-mono">Specializations</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills