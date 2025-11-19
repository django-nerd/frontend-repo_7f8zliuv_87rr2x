import { motion } from 'framer-motion'
import { Sparkles, Rocket, Cog, Handshake } from 'lucide-react'

const steps = [
  { icon: Sparkles, title: 'Discover', text: 'Align on objectives, user journeys and success metrics.' },
  { icon: Cog, title: 'Design', text: 'Systematic UI, motion language and interaction patterns.' },
  { icon: Rocket, title: 'Build', text: 'Production-ready code with accessible, robust components.' },
  { icon: Handshake, title: 'Launch', text: 'Observability, iteration, and measurable impact.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/15 text-white"
            >
              <s.icon />
              <div className="mt-4 font-medium">{s.title}</div>
              <div className="mt-2 text-white/70 text-sm">{s.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
