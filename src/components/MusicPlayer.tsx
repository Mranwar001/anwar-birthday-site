import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Note: Autoplay might be blocked by browsers until user interaction
    // We'll show a prompt or wait for first click
    const timer = setTimeout(() => setShowTooltip(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked:", err))
      }
      setIsPlaying(!isPlaying)
      setShowTooltip(false)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex items-center gap-4">
      <audio 
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Cinematic placeholder
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        onClick={togglePlay}
        className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-2xl transition-all ${
          isPlaying ? 'bg-brand-glow/20 text-brand-glow' : 'bg-white/5 text-white/60'
        }`}
      >
        {isPlaying ? (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Pause size={24} fill="currentColor" />
          </motion.div>
        ) : (
          <Play size={24} fill="currentColor" className="ml-1" />
        )}
      </motion.button>

      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/5 flex items-center justify-center text-white/40 hover:text-white"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-20 left-0 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap"
          >
            Tap for Music Experience 🎵
            <div className="absolute top-full left-6 -mt-1 border-8 border-transparent border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visualizer bars when playing */}
      {isPlaying && (
        <div className="flex items-end gap-1 h-6 ml-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [4, 24, 8, 16, 4] }}
              transition={{ 
                duration: 0.8 + Math.random(), 
                repeat: Infinity,
                delay: i * 0.1
              }}
              className="w-1 bg-brand-glow rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  )
}
