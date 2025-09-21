'use client'

import { achievements } from '@/data/portfolio'

const Achievements = () => {
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'award':
        return '🏆'
      case 'certification':
        return '📜'
      case 'recognition':
        return '⭐'
      default:
        return '🎯'
    }
  }

  const getAchievementColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'from-yellow-400 to-orange-500'
      case 'certification':
        return 'from-blue-400 to-purple-500'
      case 'recognition':
        return 'from-green-400 to-teal-500'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and certifications that validate my expertise and dedication
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Achievement Header */}
              <div className={`h-24 bg-gradient-to-r ${getAchievementColor(achievement.type)} flex items-center justify-center`}>
                <span className="text-4xl">{getAchievementIcon(achievement.type)}</span>
              </div>

              <div className="p-6">
                {/* Achievement Type Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full capitalize ${
                    achievement.type === 'award' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : achievement.type === 'certification'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {achievement.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {achievement.description}
                </p>

                {/* Issuer and Date */}
                <div className="space-y-2 mb-4">
                  {achievement.issuer && (
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Issued by:</span> {achievement.issuer}
                    </p>
                  )}
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Date:</span> {new Date(achievement.date).toLocaleDateString()}
                  </p>
                </div>

                {/* Credential Link */}
                {achievement.credentialUrl && (
                  <a
                    href={achievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Credential
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Add Achievement Placeholder */}
          <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center p-8 text-center hover:border-primary-300 transition-colors duration-200">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <p className="text-gray-500 mb-2">More achievements coming soon!</p>
              <p className="text-sm text-gray-400">Stay tuned for updates</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {achievements.filter(a => a.type === 'certification').length}
            </div>
            <div className="text-gray-600">Certifications</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-white rounded-xl border border-yellow-100">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {achievements.filter(a => a.type === 'award').length}
            </div>
            <div className="text-gray-600">Awards</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {achievements.filter(a => a.type === 'recognition').length}
            </div>
            <div className="text-gray-600">Recognitions</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {achievements.length}
            </div>
            <div className="text-gray-600">Total Achievements</div>
          </div>
        </div>

        {/* Professional Development Note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-3xl mx-auto border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 mb-6">
              I believe in continuous learning and staying updated with the latest technologies. 
              These achievements represent my commitment to professional growth and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm shadow">
                📚 Always Learning
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm shadow">
                🚀 Innovation Focused
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm shadow">
                🎯 Results Driven
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements