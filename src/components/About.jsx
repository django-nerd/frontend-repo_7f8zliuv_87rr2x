import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { year: '2021', text: 'Founded studio, focused on premium interfaces.' },
    { year: '2022', text: 'Scaled motion systems and AI-driven workflows.' },
    { year: '2023', text: 'Led experiences for fintech and SaaS brands.' },
    { year: '2024', text: 'Built cinematic web interactions at scale.' },
  ]

  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative w-40 h-40 rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white tracking-tight">Meet the developer</h2>
            <p className="mt-3 text-white/70">Design-engineer crafting elegant products with precision. I combine frontend craft, motion design and AI to deliver experiences that feel effortless and premium.</p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((it, i) => (
                <motion.div
                  key={it.year}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/15 text-white"
                >
                  <div className="text-sm text-white/60">{it.year}</div>
                  <div className="mt-2 font-medium">{it.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
