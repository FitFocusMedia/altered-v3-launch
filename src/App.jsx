import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import FlavourShowcase from './components/FlavourShowcase'
import Features from './components/Features'
import NotifySection from './components/NotifySection'
import Footer from './components/Footer'
import Particles from './components/Particles'
import Navigation from './components/Navigation'

function App() {
  const [activeFlavour, setActiveFlavour] = useState(null)

  return (
    <div className="relative min-h-screen bg-altered-black">
      <Particles />
      <Navigation />
      <main>
        <Hero />
        <Countdown />
        <FlavourShowcase activeFlavour={activeFlavour} setActiveFlavour={setActiveFlavour} />
        <Features />
        <NotifySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
