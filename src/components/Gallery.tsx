import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1519085114548-ae81a273c59f?q=80&w=1974&auto=format&fit=crop', title: 'Ambition' },
  { id: 2, url: 'https://i.ibb.co/PZQt81kC/PSX20260321-092916.jpg', title: 'Focus' },
  { id: 3, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', title: 'Brilliance' },
  { id: 4, url: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974&auto=format&fit=crop', title: 'Leadership' },
  { id: 5, url: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1974&auto=format&fit=crop', title: 'Vision' },
  { id: 6, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', title: 'Impact' },
]

export const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const handleNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((prev) => (prev! + 1) % photos.length)
    }
  }

  const handlePrev = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((prev) => (prev! - 1 + photos.length) % photos.length)
    }
  }

  return (
    <section className="py-24 px-4 bg-[#050505]" id="gallery">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">Captured Moments</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(index)}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group glass-card"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-gold-400 font-bold tracking-widest uppercase text-xs mb-1">{photo.title}</p>
                <h3 className="text-xl font-bold">Anwar Dahir</h3>
                <Maximize2 className="absolute top-4 right-4 text-white/50 w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 md:p-8"
          >
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white z-[120]"
            >
              <X size={40} />
            </button>

            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors"
            >
              <ChevronLeft size={60} />
            </button>

            <motion.div
              key={selectedPhoto}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20"
            >
              <img 
                src={photos[selectedPhoto].url} 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h4 className="text-3xl font-black">{photos[selectedPhoto].title}</h4>
                <p className="text-gray-400 mt-2">Personal Excellence & Dedication</p>
              </div>
            </motion.div>

            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors"
            >
              <ChevronRight size={60} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
