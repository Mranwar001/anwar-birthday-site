import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Star, Lightbulb } from 'lucide-react'

const milestones = [
  {
    year: 'The Beginning',
    title: 'A Vision Born',
    desc: 'The start of a journey fueled by curiosity and the drive to excel.',
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    year: 'Growth Era',
    title: 'Academic Excellence',
    desc: 'Pushing boundaries in learning and mastering new disciplines.',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: 'Professional Path',
    title: 'Impact & Leadership',
    desc: 'Setting new standards in professional pursuits and community building.',
    icon: <Briefcase className="w-6 h-6" />,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    year: 'Current Chapter',
    title: 'Inspiring Others',
    desc: 'Becoming a beacon of light for those following in his footsteps.',
    icon: <Star className="w-6 h-6" />,
    color: 'from-gold-400 to-yellow-600'
  }
]

export const Timeline = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="story">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full -z-1" />

      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">The Journey</h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Chronicles of Greatness</p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-16 md:w-1/2 ${
                index % 2 === 0 
                  ? 'md:ml-auto md:pl-12' 
                  : 'md:mr-auto md:pr-12 md:text-right'
              }`}
            >
              {/* Dot on Timeline */}
              <div className={`absolute top-0 w-8 h-8 rounded-full bg-black border-4 border-white flex items-center justify-center -left-[17px] md:left-auto ${
                index % 2 === 0 ? 'md:-left-[17px]' : 'md:-right-[17px]'
              }`}>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>

              <div className="glass-card p-8 rounded-3xl relative hover:border-white/20 transition-colors group">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <span className="block text-gold-400 font-bold mb-2 tracking-tighter text-2xl">{item.year}</span>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                
                {/* Visual Accent */}
                <div className={`absolute top-0 bottom-0 w-1 ${
                   index % 2 === 0 ? 'left-0 rounded-l-3xl' : 'right-0 rounded-r-3xl'
                } bg-gradient-to-b ${item.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
