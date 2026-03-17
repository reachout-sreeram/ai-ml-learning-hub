import { BookOpen, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    'Learning Paths': [
      { name: 'AI Engineer', href: '#ai-engineer' },
      { name: 'Data Scientist', href: '#data-scientist' },
      { name: 'Data Analyst', href: '#data-analyst' },
      { name: 'MLOps Engineer', href: '#mlops' }
    ],
    'Resources': [
      { name: 'Free Courses', href: '#courses' },
      { name: 'YouTube Channels', href: '#videos' },
      { name: 'Blogs & Articles', href: '#blogs' },
      { name: 'Community', href: '#community' }
    ],
    'Company': [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@aimlhub.com' }
  ]

  return (
    <footer id="community" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AI/ML Hub</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your comprehensive gateway to mastering AI, Machine Learning, Data Science, and Python. Free resources, 
              structured roadmaps, and a supportive community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest resources and learning tips delivered to your inbox.
              </p>
            </div>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-r-lg transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-400 text-sm">
              <p className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> for the learning community
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                © 2025 AI/ML Learning Hub. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


// Tracker: index=212, date=2026-03-17 10:29:07 +0530