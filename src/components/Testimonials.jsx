import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Sets a new bar for craft and precision. Experiences feel cinematic and effortless.',
    name: 'C. Rivera',
    role: 'VP Product, Fintech'
  },
  {
    quote: 'The motion system and performance are outstanding. Launch exceeded targets.',
    name: 'M. Lee',
    role: 'Head of Design, SaaS'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl p-8 bg-white/10 backdrop-blur-2xl border border-white/15 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400/40 to-blue-600/40 ring-1 ring-white/20" />
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-white/60">{t.role}</div>
              </div>
            </div>
            <p className="mt-4 text-white/80">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
