import { motion } from 'framer-motion'
import { Heart, Mail, MessageCircle, Share2 } from 'lucide-react'
import { useConfetti } from '../hooks/useConfetti'

export const Celebrate = () => {
  const { fireFireworks } = useConfetti()

  const handleCelebrate = () => {
    fireFireworks()
    // Small delay before opening links
    setTimeout(() => {
      const message = encodeURIComponent("Happy Birthday Anwar! I'm celebrating your greatness today! 🎉✨")
      const whatsappUrl = `https://wa.me/2348109770991?text=${message}`
      window.open(whatsappUrl, '_blank')
    }, 1500)
  }

  const handleEmail = () => {
    window.location.href = "mailto:anwarcscience@gmail.com?subject=Happy Birthday Anwar!&body=Wishing you a brilliant birthday!"
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-t from-brand-navy to-[#050505] text-center" id="celebrate">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 rounded-[40px] border-brand-glow/20 relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex p-6 rounded-full bg-brand-glow/10 text-brand-glow mb-8"
          >
            <Heart size={48} fill="currentColor" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">Join the Celebration</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Bring some digital fireworks to the party and send your best wishes to Anwar!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCelebrate}
              className="px-10 py-5 bg-brand-glow text-white font-black rounded-2xl flex items-center gap-3 text-lg"
            >
              Celebrate Anwar <Star className="w-5 h-5 fill-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmail}
              className="px-8 py-5 glass-card rounded-2xl flex items-center gap-3 text-lg font-bold hover:bg-white/5"
            >
              <Mail className="w-5 h-5" /> Send Quote
            </motion.button>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 text-gray-400">
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle size={20} /> WhatsApp
            </button>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Share2 size={20} /> Share Page
            </button>
          </div>
        </motion.div>

        <footer className="mt-20 py-10 opacity-40 text-sm tracking-widest uppercase">
          <p>&copy; 2026 Anwar Dahir Yahaya • The Light of Anwar</p>
        </footer>
      </div>
    </section>
  )
}

const Star = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
  </svg>
)
