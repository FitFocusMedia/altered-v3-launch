import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const flavours = [
  {
    id: 'blue-gummy-shark',
    name: 'Blue Gummy Shark',
    subtitle: 'Blue Raspberry',
    image: 'images/blue-gummy-shark.jpg',
    color: '#00CFFF',
    colorClass: 'shark',
    description: 'Sweet, tangy blue raspberry with a gummy candy twist. The flavour that started it all — reimagined for V3.',
    notes: ['Blue Raspberry', 'Sweet Gummy', 'Candy Finish'],
    badge: 'FAN FAVOURITE',
    stimLevel: 'MID / HIGH / MAX',
    scoops: '40 SCOOPS',
    weight: '600G',
  },
  {
    id: 'goldy-juice',
    name: 'Goldy Juice',
    subtitle: 'Pineapple Juice',
    image: 'images/goldy-juice.jpg',
    color: '#F59E0B',
    colorClass: 'goldy',
    description: 'Fresh-pressed tropical pineapple with golden honey undertones. Summer in a scoop, power in every sip.',
    notes: ['Pineapple Juice', 'Golden Honey', 'Tropical Finish'],
    badge: 'NEW FLAVOUR',
    stimLevel: 'MID / HIGH / MAX',
    scoops: '40 SCOOPS',
    weight: '600G',
  },
  {
    id: 'tornado-ice-block',
    name: 'Tornado Ice Block',
    subtitle: 'Peach, Pineapple & Blueberry',
    image: 'images/tornado-ice-block.jpg',
    color: '#EF4444',
    colorClass: 'tornado',
    description: 'The classic Aussie ice block flavour — peach, pineapple and blueberry collide in a frozen tornado of taste.',
    notes: ['Peach', 'Pineapple', 'Blueberry'],
    badge: 'NEW FLAVOUR',
    stimLevel: 'MID / HIGH / MAX',
    scoops: '40 SCOOPS',
    weight: '600G',
  },
]

function FlavourCard({ flavour, isActive, onClick }) {
  return (
    <motion.div
      className={`relative cursor-pointer group ${isActive ? 'z-10' : 'z-0'}`}
      onClick={onClick}
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Card */}
      <div 
        className={`relative overflow-hidden border transition-all duration-500 bg-altered-dark ${
          isActive ? 'border-white/20' : 'border-white/5 hover:border-white/10'
        }`}
        style={isActive ? { 
          borderColor: `${flavour.color}40`,
          boxShadow: `0 0 30px ${flavour.color}15, 0 0 60px ${flavour.color}05`
        } : {}}
      >
        
        {/* Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span 
            className="text-[10px] font-bold tracking-[0.15em] px-2 py-1"
            style={{ backgroundColor: `${flavour.color}20`, color: flavour.color }}
          >
            {flavour.badge}
          </span>
        </div>

        {/* Product image */}
        <div className="relative p-6 sm:p-8 flex items-center justify-center bg-gradient-to-b from-transparent to-black/20">
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            style={{ background: `radial-gradient(circle at 50% 80%, ${flavour.color}08 0%, transparent 70%)` }}
          />
          <motion.img
            src={flavour.image}
            alt={flavour.name}
            className="h-48 sm:h-56 md:h-64 w-auto object-contain relative z-10"
            whileHover={{ rotate: [-1, 1, -1, 0], transition: { duration: 0.5 } }}
          />
        </div>

        {/* Info */}
        <div className="p-4 sm:p-6 border-t border-white/5">
          <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">
            {flavour.name}
          </h3>
          <p className="text-sm tracking-[0.1em] mt-1" style={{ color: flavour.color }}>
            {flavour.subtitle}
          </p>

          {/* Expanded content */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-altered-text text-sm mt-4 leading-relaxed">
                  {flavour.description}
                </p>

                {/* Flavour notes */}
                <div className="mt-4">
                  <p className="text-xs text-altered-text tracking-[0.15em] mb-2">FLAVOUR NOTES</p>
                  <div className="flex flex-wrap gap-2">
                    {flavour.notes.map(note => (
                      <span
                        key={note}
                        className="text-xs px-3 py-1 border border-white/10 text-white/70"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div className="mt-4 flex items-center gap-4 text-xs text-altered-text">
                  <span className="tracking-[0.1em]">{flavour.scoops}</span>
                  <span className="text-white/10">|</span>
                  <span className="tracking-[0.1em]">{flavour.weight}</span>
                  <span className="text-white/10">|</span>
                  <span className="tracking-[0.1em]" style={{ color: flavour.color }}>
                    {flavour.stimLevel}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function FlavourShowcase({ activeFlavour, setActiveFlavour }) {
  return (
    <section id="flavours" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <p className="text-altered-text text-xs tracking-[0.3em] mb-4">THREE NEW WAYS TO</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            ALTER YOUR STATE
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            <div className="w-8 h-[1px] bg-shark" />
            <div className="w-8 h-[1px] bg-goldy" />
            <div className="w-8 h-[1px] bg-tornado" />
          </div>
        </motion.div>

        {/* Flavour grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {flavours.map((flavour, i) => (
            <motion.div
              key={flavour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: i * 0.15 }}
            >
              <FlavourCard
                flavour={flavour}
                isActive={activeFlavour === flavour.id}
                onClick={() => setActiveFlavour(
                  activeFlavour === flavour.id ? null : flavour.id
                )}
              />
            </motion.div>
          ))}
        </div>

        {/* Tap hint */}
        <motion.p
          className="text-center text-altered-text/50 text-xs mt-6 tracking-[0.1em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ delay: 0.6 }}
        >
          TAP A FLAVOUR TO EXPLORE
        </motion.p>
      </div>
    </section>
  )
}
