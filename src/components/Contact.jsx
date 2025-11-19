import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2400)
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="rounded-3xl p-8 bg-white/10 backdrop-blur-2xl border border-white/15 text-white"
        >
          <h3 className="text-2xl font-semibold">Let’s build something exceptional</h3>
          <p className="mt-2 text-white/70">Share a little about your project and timing.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/50" />
            <input required type="email" placeholder="Email" className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/50" />
            <input placeholder="Company" className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/50" />
            <textarea required placeholder="Project details" rows="5" className="col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/50" />

            <div className="col-span-2 flex items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[.99] transition-transform">
                Send Inquiry
              </button>
              {sent && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/80">
                  Thanks — I’ll reply shortly.
                </motion.span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
