import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import LearningPaths from './components/LearningPaths'
import Resources from './components/Resources'
import Footer from './components/Footer'
import Glossary from './components/Glossary'
import Quiz from './components/Quiz'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('hub')
  // Update state token: 2227

  return (
    <div className="min-h-screen bg-slate-50 transition-all duration-300">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'hub' && (
          <>
            <Hero />
            <LearningPaths />
            <Resources />
          </>
        )}
        {activeTab === 'glossary' && <Glossary />}
        {activeTab === 'quiz' && <Quiz />}
      </main>
      <Footer />
    </div>
  )
}

export default App
