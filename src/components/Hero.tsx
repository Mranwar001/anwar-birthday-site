import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const images = [
  'https://i.ibb.co/jvrmpPZ5/PSX-20260322-0163116.jpg?q=80&w=1974&auto=format&fit=crop',
  'https://i.ibb.co/NgRGzxTf/PSX-20260322-163452.jpg?q=80&w=1974&auto=format&fit=crop', 
  



export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentImage === index ? 0.4 : 0,
              scale: currentImage === index ? 1 : 1.1,
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-transparent" />
      </div>

      {/* Floating Particles/Light Streaks */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100, y: Math.random() * 100 + "%" }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: ["0%", "120%"],
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute h-[1px] w-[300px] bg-gradient-to-r from-transparent via-brand-glow to-transparent blur-sm"
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-blue-400 font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            The Light of Anwar
          </h2>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            Happy Birthday, <br />
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-purple-500 to-blue-500">
              Anwar Dahir Yahaya
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            A Light That Inspires the World ✨
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              Our Journey
            </button>
            <button className="px-8 py-4 border border-white/20 hover:bg-white/5 backdrop-blur-md rounded-full transition-all">
              Send Wishes
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
