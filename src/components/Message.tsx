import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export const Message = () => {
  return (
    <section className="py-24 px-4 relative" id="message">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-[40px] relative overflow-hidden group"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -ml-32 -mb-32 transition-transform group-hover:scale-110" />

          <Quote className="text-gold-400/20 w-24 h-24 absolute top-10 left-10" />

          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 leading-tight"
            >
              A Message for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                The Visionary
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6 text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic"
            >
              <p>
                "Dear Anwar Dahir Yahaya, your journey is a testament to the power of resilience and brilliance. Like your name suggests, you truly are a light that inspires everyone around you."
              </p>
              <p>
                "As you celebrate another year of greatness, may your path continue to be illuminated with success, joy, and boundless opportunities. Keep shining, keep leading, and keep being the incredible soul that you are."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <p className="text-gold-400 font-bold tracking-[0.3em] uppercase">Happy Birthday Anwar! 🎉</p>
              <div className="mt-4 flex justify-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-blue-500" />
                 <div className="w-2 h-2 rounded-full bg-purple-500" />
                 <div className="w-2 h-2 rounded-full bg-gold-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
