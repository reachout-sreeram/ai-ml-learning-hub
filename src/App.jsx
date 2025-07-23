import Header from './components/Header'
import Hero from './components/Hero'
import LearningPaths from './components/LearningPaths'
import Resources from './components/Resources'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LearningPaths />
        <Resources />
      </main>
      <Footer />
    </div>
  )
}

export default App
