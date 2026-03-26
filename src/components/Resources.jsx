import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Video, Globe, Users, ExternalLink, Star, Filter } from 'lucide-react'

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources', icon: Globe },
    { id: 'courses', name: 'Courses', icon: BookOpen },
    { id: 'videos', name: 'YouTube', icon: Video },
    { id: 'blogs', name: 'Blogs', icon: Globe },
    { id: 'community', name: 'Community', icon: Users }
  ]

  const resources = [
    // Courses
    {
      id: 1,
      title: 'Machine Learning Crash Course',
      description: 'Google\'s fast-paced, practical introduction to machine learning',
      category: 'courses',
      provider: 'Google',
      rating: 4.8,
      students: '500K+',
      url: 'https://developers.google.com/machine-learning/crash-course',
      tags: ['Machine Learning', 'Beginner', 'Free'],
      featured: true
    },
    {
      id: 2,
      title: 'Python for Data Science, AI & Development',
      description: 'Learn Python programming for data science and AI applications',
      category: 'courses',
      provider: 'IBM (Coursera)',
      rating: 4.6,
      students: '200K+',
      url: 'https://www.coursera.org/learn/python-for-applied-data-science-ai',
      tags: ['Python', 'Data Science', 'Beginner']
    },
    {
      id: 3,
      title: 'Kaggle Learn',
      description: 'Practical data skills you can apply immediately',
      category: 'courses',
      provider: 'Kaggle',
      rating: 4.7,
      students: '1M+',
      url: 'https://www.kaggle.com/learn',
      tags: ['Data Science', 'Python', 'Machine Learning'],
      featured: true
    },
    // YouTube Channels
    {
      id: 4,
      title: '3Blue1Brown',
      description: 'Visual and intuitive explanations of math and machine learning concepts',
      category: 'videos',
      provider: 'YouTube',
      rating: 4.9,
      students: '5M+',
      url: 'https://www.youtube.com/channel/UCYO_jab_2j4riCZUe8iP7gQ',
      tags: ['Math', 'Machine Learning', 'Visual Learning'],
      featured: true
    },
    {
      id: 5,
      title: 'Krish Naik',
      description: 'Complete data science and machine learning tutorials',
      category: 'videos',
      provider: 'YouTube',
      rating: 4.7,
      students: '800K+',
      url: 'https://www.youtube.com/user/krishnaik06',
      tags: ['Data Science', 'Machine Learning', 'Python']
    },
    {
      id: 6,
      title: 'StatQuest with Josh Starmer',
      description: 'Statistics and machine learning concepts made simple',
      category: 'videos',
      provider: 'YouTube',
      rating: 4.8,
      students: '1M+',
      url: 'https://www.youtube.com/user/joshstarmer',
      tags: ['Statistics', 'Machine Learning', 'Beginner']
    },
    // Blogs
    {
      id: 7,
      title: 'Towards Data Science',
      description: 'A Medium publication sharing concepts, ideas and codes',
      category: 'blogs',
      provider: 'Medium',
      rating: 4.6,
      students: '600K+',
      url: 'https://towardsdatascience.com/',
      tags: ['Data Science', 'Machine Learning', 'AI'],
      featured: true
    },
    {
      id: 8,
      title: 'KDnuggets',
      description: 'Leading site on AI, Analytics, Big Data, Data Mining, and Data Science',
      category: 'blogs',
      provider: 'KDnuggets',
      rating: 4.5,
      students: '400K+',
      url: 'https://www.kdnuggets.com/',
      tags: ['Data Science', 'AI', 'Analytics']
    },
    {
      id: 9,
      title: 'Analytics Vidhya',
      description: 'Knowledge hub for AI and data science professionals',
      category: 'blogs',
      provider: 'Analytics Vidhya',
      rating: 4.4,
      students: '300K+',
      url: 'https://www.analyticsvidhya.com/blog/',
      tags: ['Data Science', 'Machine Learning', 'AI']
    },
    // Community
    {
      id: 10,
      title: 'r/MachineLearning',
      description: 'Reddit community for machine learning discussions',
      category: 'community',
      provider: 'Reddit',
      rating: 4.3,
      students: '2M+',
      url: 'https://www.reddit.com/r/MachineLearning/',
      tags: ['Machine Learning', 'Research', 'Discussion']
    },
    {
      id: 11,
      title: 'Kaggle Community',
      description: 'World\'s largest data science community',
      category: 'community',
      provider: 'Kaggle',
      rating: 4.7,
      students: '8M+',
      url: 'https://www.kaggle.com/',
      tags: ['Data Science', 'Competitions', 'Community'],
      featured: true
    }
  ]

  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeFilter)

  const featuredResources = resources.filter(resource => resource.featured)

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Learning Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated collection of the best free resources to accelerate your learning journey
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-500" />
            Featured Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {resource.provider}
                      </CardDescription>
                    </div>
                    <div className="ml-2">
                      <div className="flex items-center text-sm text-yellow-600">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {resource.rating}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{resource.students} learners</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white"
                    onClick={() => window.open(resource.url, '_blank')}
                  >
                    Visit Resource
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* All Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-1">
                      {resource.provider}
                    </CardDescription>
                  </div>
                  <div className="ml-2">
                    <div className="flex items-center text-sm text-yellow-600">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {resource.rating}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm line-clamp-2">{resource.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{resource.students} learners</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {resource.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group"
                  onClick={() => window.open(resource.url, '_blank')}
                >
                  Visit Resource
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to suggest a resource?</p>
          <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Submit Resource
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Resources


// Tracker: index=325, date=2026-03-26 10:07:24 +0530