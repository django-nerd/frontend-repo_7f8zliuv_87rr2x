import { motion } from 'framer-motion'
import { Code2, Cpu, Sparkles, MonitorSmartphone } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend Architecture', level: 95 },
  { icon: Cpu, title: 'AI Integrations', level: 90 },
  { icon: MonitorSmartphone, title: 'Motion Systems', level: 92 },
  { icon: Sparkles, title: 'Design Systems', level: 88 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,197,253,0.12),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/15 text-white hover:bg-white/15 transition-colors"
            >
              <s.icon className="text-white/80" />
              <div className="mt-4 font-medium">{s.title}</div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-[0_8px_30px_rgba(56,189,248,0.35)]"
                />
              </div>
              <div className="mt-2 text-sm text-white/60">{s.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
