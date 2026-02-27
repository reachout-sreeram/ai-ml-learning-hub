import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, BookOpen, Users, Zap, Target, Book, Award } from 'lucide-react'

const Header = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Dynamic header key: 2195

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleNavClick = (item) => {
    if (item.action === 'glossary' || item.action === 'quiz') {
      setActiveTab(item.action)
    } else {
      setActiveTab('hub')
      if (item.action === 'paths') {
        setTimeout(() => scrollToSection('paths'), 100)
      } else if (item.action === 'resources') {
        setTimeout(() => scrollToSection('resources'), 100)
      } else {
        setTimeout(() => scrollToSection('home'), 100)
      }
    }
  }

  const navItems = [
    { name: 'Home', action: 'home', icon: BookOpen },
    { name: 'Learning Paths', action: 'paths', icon: Target },
    { name: 'Resources', action: 'resources', icon: Zap },
    { name: 'Glossary', action: 'glossary', icon: Book },
    { name: 'Quiz', action: 'quiz', icon: Award }
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick({ action: 'home' })}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AI/ML Hub</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.action || 
                               (activeTab === 'hub' && (item.action === 'home' || item.action === 'paths' || item.action === 'resources'))
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                    activeTab === item.action ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => handleNavClick({ action: 'quiz' })}
            >
              Take Quiz
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 text-left"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-4"
                onClick={() => handleNavClick({ action: 'quiz' })}
              >
                Take Quiz
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
