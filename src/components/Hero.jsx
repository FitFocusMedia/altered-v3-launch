import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,207,255,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(245,158,11,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,_rgba(239,68,68,0.05)_0%,_transparent_50%)]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Tagline */}
        <motion.p
          className="text-altered-text text-xs sm:text-sm tracking-[0.3em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          THE CHOSEN FEW
        </motion.p>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
            <span className="text-white/20">ALTERED</span>
            <br />
            <span className="text-white">STATE</span>
          </h1>
          {/* Decorative slashes */}
          <div className="flex items-center justify-center gap-[2px] my-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.span
                key={i}
                className="text-shark text-lg font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.05 }}
              >
                /
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.1em] text-white/80 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          HIGH STIM PRE WORKOUT
        </motion.h2>

        <motion.p
          className="text-altered-text text-sm sm:text-base max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Three new flavours. One altered state. Dropping February 9th.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="#flavours"
            className="px-8 py-3 bg-white text-black font-bold text-sm tracking-[0.1em] hover:bg-white/90 transition-all duration-200"
          >
            EXPLORE FLAVOURS
          </a>
          <a
            href="#notify"
            className="px-8 py-3 border border-white/20 text-white font-bold text-sm tracking-[0.1em] hover:border-white/40 transition-all duration-200"
          >
            GET NOTIFIED
          </a>
        </motion.div>

        {/* Product silhouettes */}
        <motion.div
          className="flex items-end justify-center gap-4 sm:gap-8 mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {[
            { src: 'images/goldy-juice.jpg', color: 'goldy', alt: 'Goldy Juice' },
            { src: 'images/blue-gummy-shark.jpg', color: 'shark', alt: 'Blue Gummy Shark' },
            { src: 'images/tornado-ice-block.jpg', color: 'tornado', alt: 'Tornado Ice Block' },
          ].map((product, i) => (
            <motion.div
              key={product.alt}
              className="relative group"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Glow behind product */}
              <div className={`absolute -inset-4 bg-${product.color}/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <img
                src={product.src}
                alt={product.alt}
                className={`relative h-32 sm:h-48 md:h-56 lg:h-64 w-auto object-contain ${i === 1 ? 'h-40 sm:h-56 md:h-64 lg:h-72' : ''}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-5 h-5 text-altered-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
