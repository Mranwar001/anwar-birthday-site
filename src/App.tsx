import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { Preloader } from './components/Preloader'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { Timeline } from './components/Timeline'
import { Message } from './components/Message'
import { Celebrate } from './components/Celebrate'
import { MusicPlayer } from './components/MusicPlayer'
import { useConfetti } from './hooks/useConfetti'

function App() {
  const [loading, setLoading] = useState(true)
  const { fireConfetti } = useConfetti()

  useEffect(() => {
    // Cinematic delay for the preloader
    const timer = setTimeout(() => {
      setLoading(false)
      // Small delay after loading for initial confetti pop
      setTimeout(fireConfetti, 500)
    }, 2800)
    return () => clearTimeout(timer)
  }, [fireConfetti])

  useEffect(() => {
    // Add smooth scroll behavior to the whole document
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-brand-glow selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <MusicPlayer />
            
            <Hero />
            
            <section id="gallery-container" className="relative z-10">
              <Gallery />
            </section>

            <section id="story-container" className="relative z-10 bg-[#070707]">
              <Timeline />
            </section>

            <Message />
            
            <Celebrate />
            
            {/* Custom Blur Blobs for deep background atmosphere */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-0 overflow-hidden opacity-20">
              <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-blue-600/30 blur-[150px] rounded-full animate-float" />
              <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-purple-600/20 blur-[150px] rounded-full animate-pulse-slow" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
    </main>
  )
}

export default App

