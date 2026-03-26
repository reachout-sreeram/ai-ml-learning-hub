import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Star, Users, BookOpen, Award } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { icon: Users, value: '50K+', label: 'Learners' },
    { icon: BookOpen, value: '200+', label: 'Resources' },
    { icon: Award, value: '4.9/5', label: 'Rating' },
    { icon: Star, value: '100%', label: 'Free' }
  ]

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 50,000+ learners worldwide
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Gateway to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI & Data Science</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master AI, Machine Learning, Data Science, and Python with our comprehensive roadmaps, 
            curated free resources, and step-by-step learning paths designed for every skill level.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('paths')}
            >
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
              onClick={() => scrollToSection('resources')}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
    </section>
  )
}

export default Hero


// Tracker: index=326, date=2026-03-26 10:18:41 +0530