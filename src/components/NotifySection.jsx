import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NotifySection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    // For now, store in localStorage until Supabase is connected
    try {
      const subscribers = JSON.parse(localStorage.getItem('v3-subscribers') || '[]')
      subscribers.push({ email, timestamp: new Date().toISOString() })
      localStorage.setItem('v3-subscribers', JSON.stringify(subscribers))
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Try again.')
    }
  }

  return (
    <section id="notify" className="py-16 sm:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,207,255,0.04)_0%,_transparent_60%)]" />

      <div className="relative max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <p className="text-altered-text text-xs tracking-[0.3em] mb-4">DON'T MISS THE DROP</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            BE FIRST TO KNOW
          </h2>
          <p className="text-altered-text text-sm max-w-md mx-auto mb-8">
            Get notified the moment V3 drops. Early access. Launch-day exclusives. 
            No spam — just the goods.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 border border-shark/20 bg-shark/5"
            >
              <div className="text-4xl mb-4">🦈</div>
              <h3 className="text-white font-bold text-lg mb-2">YOU'RE IN.</h3>
              <p className="text-altered-text text-sm">
                We'll hit your inbox the moment V3 drops. Get ready to alter your state.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR EMAIL"
                  className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/10 text-white text-sm tracking-[0.05em] placeholder:text-altered-text/50 focus:outline-none focus:border-shark/50 transition-colors"
                />
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-white text-black font-bold text-sm tracking-[0.1em] hover:bg-white/90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  NOTIFY ME
                </motion.button>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-tornado text-xs mt-3 tracking-[0.05em]"
                >
                  {error}
                </motion.p>
              )}

              <p className="text-altered-text/30 text-xs mt-4 tracking-[0.05em]">
                No spam. Unsubscribe anytime. Your data stays private.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
