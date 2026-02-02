import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LAUNCH_DATE = new Date('2026-02-09T09:00:00+10:00')

function getTimeLeft() {
  const now = new Date()
  const diff = LAUNCH_DATE - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true }
  
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    launched: false
  }
}

function CountdownUnit({ value, label, color }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center border border-white/10 bg-white/[0.02]`}>
        <span className={`text-2xl sm:text-3xl md:text-4xl font-black ${color}`}>
          {String(value).padStart(2, '0')}
        </span>
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
      </div>
      <span className="text-altered-text text-[10px] sm:text-xs tracking-[0.2em] mt-2">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (time.launched) {
    return (
      <section id="countdown" className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-black text-white glow-shark"
        >
          IT'S HERE.
        </motion.div>
      </section>
    )
  }

  return (
    <section id="countdown" className="py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.p
          className="text-altered-text text-xs tracking-[0.3em] mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          THE DROP
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CountdownUnit value={time.days} label="DAYS" color="text-shark" />
          <span className="text-white/20 text-2xl font-light mt-[-20px]">:</span>
          <CountdownUnit value={time.hours} label="HOURS" color="text-goldy" />
          <span className="text-white/20 text-2xl font-light mt-[-20px]">:</span>
          <CountdownUnit value={time.minutes} label="MINS" color="text-tornado" />
          <span className="text-white/20 text-2xl font-light mt-[-20px]">:</span>
          <CountdownUnit value={time.seconds} label="SECS" color="text-white" />
        </motion.div>

        <motion.p
          className="text-white/60 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          February 9, 2026 — 9:00 AM AEST
        </motion.p>
      </div>
    </section>
  )
}
