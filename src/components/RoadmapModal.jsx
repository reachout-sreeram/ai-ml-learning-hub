import { useState } from 'react'
import { X, CheckCircle, Clock, Users, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const RoadmapModal = ({ isOpen, onClose, roadmapData }) => {
  if (!isOpen || !roadmapData) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${roadmapData.color} flex items-center justify-center`}>
              <roadmapData.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{roadmapData.title} Roadmap</h2>
              <p className="text-gray-600">{roadmapData.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="font-semibold text-gray-900">{roadmapData.duration}</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <div className="font-semibold text-gray-900">{roadmapData.learners}</div>
              <div className="text-sm text-gray-600">Learners</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="w-6 h-6 mx-auto mb-2 text-purple-600" />
              <div className="font-semibold text-gray-900">{roadmapData.projects}</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
          </div>

          {/* Roadmap Steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Path</h3>
            
            {roadmapData.roadmapSteps?.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {step.topics && (
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">Key Topics:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {step.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.resources && (
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Recommended Resources:</h5>
                        <div className="space-y-2">
                          {step.resources.map((resource, resourceIndex) => (
                            <a
                              key={resourceIndex}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>{resource.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1">
              Start Learning Path
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapModal

