import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, BarChart3, Database, Cog, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react'
import RoadmapModal from './RoadmapModal'

const LearningPaths = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openRoadmap = (path) => {
    setSelectedRoadmap(path)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedRoadmap(null)
  }

  const paths = [
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      description: 'Build and deploy AI applications using modern frameworks and tools',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      duration: '6-8 months',
      level: 'Intermediate',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'MLOps'],
      projects: 3,
      learners: '15K+',
      features: [
        'Pre-trained Models & APIs',
        'OpenAI Integration',
        'AI Safety & Ethics',
        'Multimodal AI Applications'
      ],
      roadmapSteps: [
        {
          title: 'Programming Fundamentals',
          description: 'Master Python programming and essential libraries',
          topics: ['Python basics', 'NumPy', 'Pandas', 'Data structures', 'Object-oriented programming'],
          resources: [
            { name: 'Python for Beginners - Microsoft', url: 'https://docs.microsoft.com/en-us/learn/paths/beginner-python/' },
            { name: 'Python.org Tutorial', url: 'https://docs.python.org/3/tutorial/' }
          ]
        },
        {
          title: 'Using Pre-trained Models',
          description: 'Learn to work with existing AI models and APIs',
          topics: ['OpenAI API', 'Hugging Face models', 'Model fine-tuning', 'API integration'],
          resources: [
            { name: 'OpenAI API Documentation', url: 'https://platform.openai.com/docs' },
            { name: 'Hugging Face Course', url: 'https://huggingface.co/course' }
          ]
        },
        {
          title: 'AI Safety and Ethics',
          description: 'Understand responsible AI development practices',
          topics: ['Bias detection', 'Prompt injection', 'Content moderation', 'Privacy concerns'],
          resources: [
            { name: 'OpenAI Safety Best Practices', url: 'https://platform.openai.com/docs/guides/safety-best-practices' },
            { name: 'AI Ethics Course - MIT', url: 'https://ocw.mit.edu/courses/artificial-intelligence/' }
          ]
        },
        {
          title: 'Multimodal AI',
          description: 'Work with text, images, audio, and video',
          topics: ['Vision APIs', 'Speech recognition', 'Text-to-speech', 'Image generation'],
          resources: [
            { name: 'OpenAI Vision API', url: 'https://platform.openai.com/docs/guides/vision' },
            { name: 'Whisper API Documentation', url: 'https://platform.openai.com/docs/guides/speech-to-text' }
          ]
        },
        {
          title: 'Deployment and MLOps',
          description: 'Deploy AI applications to production',
          topics: ['Docker containers', 'Cloud deployment', 'Monitoring', 'CI/CD pipelines'],
          resources: [
            { name: 'Docker Tutorial', url: 'https://docs.docker.com/get-started/' },
            { name: 'MLOps Course - Coursera', url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops' }
          ]
        }
      ]
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'Extract insights from data using statistical methods and machine learning',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      duration: '8-12 months',
      level: 'Advanced',
      skills: ['Python', 'Statistics', 'Machine Learning', 'Deep Learning', 'SQL'],
      projects: 5,
      learners: '25K+',
      features: [
        'Statistical Analysis',
        'Machine Learning Algorithms',
        'Deep Learning & Neural Networks',
        'Data Visualization'
      ],
      roadmapSteps: [
        {
          title: 'Mathematics & Statistics',
          description: 'Build strong mathematical foundations',
          topics: ['Linear algebra', 'Calculus', 'Probability', 'Statistical inference', 'Hypothesis testing'],
          resources: [
            { name: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability' },
            { name: 'Mathematics for Machine Learning', url: 'https://mml-book.github.io/' }
          ]
        },
        {
          title: 'Programming & Data Manipulation',
          description: 'Master Python and data handling libraries',
          topics: ['Python', 'Pandas', 'NumPy', 'SQL', 'Data cleaning'],
          resources: [
            { name: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
            { name: 'SQL Tutorial - W3Schools', url: 'https://www.w3schools.com/sql/' }
          ]
        },
        {
          title: 'Machine Learning',
          description: 'Learn supervised and unsupervised learning algorithms',
          topics: ['Regression', 'Classification', 'Clustering', 'Model evaluation', 'Feature engineering'],
          resources: [
            { name: 'Scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html' },
            { name: 'Machine Learning Course - Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning' }
          ]
        },
        {
          title: 'Deep Learning',
          description: 'Understand neural networks and deep learning',
          topics: ['Neural networks', 'CNNs', 'RNNs', 'Transfer learning', 'TensorFlow/PyTorch'],
          resources: [
            { name: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning' },
            { name: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials' }
          ]
        },
        {
          title: 'MLOps & Deployment',
          description: 'Deploy and maintain ML models in production',
          topics: ['Model deployment', 'Monitoring', 'A/B testing', 'Model versioning', 'CI/CD'],
          resources: [
            { name: 'MLOps Specialization', url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops' },
            { name: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/index.html' }
          ]
        }
      ]
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      description: 'Analyze data to drive business decisions and create compelling visualizations',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      duration: '4-6 months',
      level: 'Beginner',
      skills: ['Excel', 'SQL', 'Python', 'Tableau', 'Power BI'],
      projects: 4,
      learners: '30K+',
      features: [
        'Data Collection & Cleaning',
        'Statistical Analysis',
        'Data Visualization',
        'Business Intelligence'
      ],
      roadmapSteps: [
        {
          title: 'Excel & Spreadsheet Mastery',
          description: 'Master advanced Excel functions and data analysis',
          topics: ['VLOOKUP/HLOOKUP', 'Pivot tables', 'Data validation', 'Statistical functions', 'Charts'],
          resources: [
            { name: 'Excel for Data Analysis - Microsoft', url: 'https://support.microsoft.com/en-us/office/excel-for-data-analysis' },
            { name: 'ExcelJet Training', url: 'https://exceljet.net/' }
          ]
        },
        {
          title: 'SQL for Data Analysis',
          description: 'Learn to query databases and manipulate data',
          topics: ['SELECT statements', 'JOINs', 'Aggregations', 'Window functions', 'Data cleaning'],
          resources: [
            { name: 'SQL Tutorial - W3Schools', url: 'https://www.w3schools.com/sql/' },
            { name: 'SQLBolt Interactive Tutorial', url: 'https://sqlbolt.com/' }
          ]
        },
        {
          title: 'Python for Analysis',
          description: 'Use Python for data manipulation and analysis',
          topics: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter notebooks'],
          resources: [
            { name: 'Python Data Analysis Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/' },
            { name: 'Pandas Tutorial', url: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/' }
          ]
        },
        {
          title: 'Data Visualization',
          description: 'Create compelling visualizations and dashboards',
          topics: ['Tableau', 'Power BI', 'Chart selection', 'Dashboard design', 'Storytelling'],
          resources: [
            { name: 'Tableau Public Training', url: 'https://public.tableau.com/en-us/s/resources' },
            { name: 'Power BI Learning Path', url: 'https://docs.microsoft.com/en-us/learn/powerplatform/power-bi' }
          ]
        },
        {
          title: 'Business Intelligence',
          description: 'Apply analytics to business problems',
          topics: ['KPIs', 'Business metrics', 'A/B testing', 'Report automation', 'Stakeholder communication'],
          resources: [
            { name: 'Google Analytics Academy', url: 'https://analytics.google.com/analytics/academy/' },
            { name: 'Business Analytics Course - Coursera', url: 'https://www.coursera.org/specializations/business-analytics' }
          ]
        }
      ]
    },
    {
      id: 'mlops',
      title: 'MLOps Engineer',
      description: 'Deploy, monitor, and maintain machine learning models in production',
      icon: Cog,
      color: 'from-orange-500 to-red-500',
      duration: '6-9 months',
      level: 'Advanced',
      skills: ['Docker', 'Kubernetes', 'AWS/GCP', 'CI/CD', 'Monitoring'],
      projects: 3,
      learners: '8K+',
      features: [
        'Model Deployment',
        'CI/CD Pipelines',
        'Monitoring & Observability',
        'Infrastructure as Code'
      ],
      roadmapSteps: [
        {
          title: 'Programming & Version Control',
          description: 'Master programming fundamentals and Git',
          topics: ['Python', 'Go', 'Bash scripting', 'Git', 'GitHub Actions'],
          resources: [
            { name: 'Git Tutorial - Atlassian', url: 'https://www.atlassian.com/git/tutorials' },
            { name: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' }
          ]
        },
        {
          title: 'Cloud Computing',
          description: 'Learn cloud platforms and services',
          topics: ['AWS/Azure/GCP', 'Cloud-native ML services', 'Storage solutions', 'Compute resources'],
          resources: [
            { name: 'AWS Machine Learning', url: 'https://aws.amazon.com/machine-learning/' },
            { name: 'Google Cloud ML', url: 'https://cloud.google.com/ml-engine' }
          ]
        },
        {
          title: 'Containerization',
          description: 'Package applications with Docker and Kubernetes',
          topics: ['Docker', 'Kubernetes', 'Container orchestration', 'Microservices'],
          resources: [
            { name: 'Docker Documentation', url: 'https://docs.docker.com/' },
            { name: 'Kubernetes Tutorial', url: 'https://kubernetes.io/docs/tutorials/' }
          ]
        },
        {
          title: 'ML Pipeline Development',
          description: 'Build automated ML workflows',
          topics: ['Data pipelines', 'Model training', 'Experiment tracking', 'Model registry'],
          resources: [
            { name: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/' },
            { name: 'Kubeflow Pipelines', url: 'https://www.kubeflow.org/docs/components/pipelines/' }
          ]
        },
        {
          title: 'Monitoring & Observability',
          description: 'Monitor ML models and infrastructure',
          topics: ['Model monitoring', 'Data drift', 'Performance metrics', 'Alerting', 'Logging'],
          resources: [
            { name: 'Prometheus Monitoring', url: 'https://prometheus.io/docs/' },
            { name: 'Grafana Documentation', url: 'https://grafana.com/docs/' }
          ]
        }
      ]
    }
  ]

  return (
    <section id="paths" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured roadmaps designed to take you from beginner to professional in your chosen field
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {paths.map((path) => (
            <Card key={path.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center mb-4`}>
                    <path.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">{path.learners} learners</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {path.duration}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {path.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {path.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Level & Projects */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    path.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    path.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {path.level}
                  </span>
                  <span className="text-sm text-gray-500">{path.projects} Projects</span>
                </div>

                {/* Key Skills */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn</h4>
                  <ul className="space-y-1">
                    {path.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
                  onClick={() => openRoadmap(path)}
                >
                  Start This Path
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Not sure which path to choose?</p>
          <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Take Our Quiz
          </Button>
        </div>
      </div>

      {/* Roadmap Modal */}
      <RoadmapModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        roadmapData={selectedRoadmap} 
      />
    </section>
  )
}

export default LearningPaths


// Tracker: index=318, date=2026-03-25 12:12:52 +0530