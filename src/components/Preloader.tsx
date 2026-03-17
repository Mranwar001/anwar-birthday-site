import { motion } from 'framer-motion'

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
    >
      <div className="relative">
        {/* Animated Rings */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-10 rounded-full border-2 border-brand-glow/20 border-t-brand-glow"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-16 rounded-full border border-blue-500/10 border-b-blue-500/40"
        />
        
        {/* Glowing Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-gold-500"
          style={{
            backgroundImage: 'linear-gradient(to right, #60A5FA, #A855F7, #EAB308)',
            filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.6))'
          }}
        >
          ANWAR
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-4 text-brand-glow/60 uppercase tracking-[0.5em] text-sm font-medium"
        >
          Brilliance Loading
        </motion.p>
      </div>
    </motion.div>
  )
}
