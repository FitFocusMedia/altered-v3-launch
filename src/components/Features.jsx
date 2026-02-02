import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: 'TRIPLE STIM SYSTEM',
    description: 'Choose your intensity. MID for smooth focus, HIGH for the push, MAX for full send. One tub, three experiences.',
    color: '#00CFFF',
  },
  {
    icon: '🧪',
    title: 'TRANSPARENT FORMULA',
    description: 'Every ingredient dosed. Every dose disclosed. No proprietary blends. No hidden fillers. Just science you can see.',
    color: '#F59E0B',
  },
  {
    icon: '🎯',
    title: 'DIALLED-IN FOCUS',
    description: 'Nootropic-loaded for razor-sharp concentration. The kind of focus that makes you forget your phone exists.',
    color: '#EF4444',
  },
  {
    icon: '💪',
    title: 'PERFORMANCE PUMPS',
    description: 'Clinical-dose pump matrix for skin-splitting vascularity. Look as good as you perform.',
    color: '#FFFFFF',
  },
]

const stats = [
  { value: '40', label: 'SCOOPS', suffix: '' },
  { value: '600', label: 'GRAMS', suffix: 'G' },
  { value: '3', label: 'STIM LEVELS', suffix: '' },
  { value: '3', label: 'NEW FLAVOURS', suffix: '' },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-altered-text text-xs tracking-[0.3em] mb-4">ENGINEERED FOR</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            THE CHOSEN FEW
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative p-6 sm:p-8 border border-white/5 bg-altered-dark hover:border-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Hover gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 0% 0%, ${feature.color}05 0%, transparent 50%)` }}
              />
              
              <div className="relative">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="text-white font-bold text-sm tracking-[0.1em] mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-altered-text text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div 
                className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(135deg, transparent 50%, ${feature.color}08 50%)` 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-white/5 bg-altered-dark p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                {stat.value}<span className="text-altered-text text-lg">{stat.suffix}</span>
              </div>
              <div className="text-altered-text text-[10px] sm:text-xs tracking-[0.2em] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
