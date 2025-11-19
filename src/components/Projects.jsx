import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Motion Suite',
    tag: 'Web • Motion • AI',
    image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Vision OS Concept',
    tag: '3D • WebGL • R&D',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'SaaS Growth Engine',
    tag: 'Product • Design System',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Realtime Data Studio',
    tag: 'Dashboards • Streaming',
    image: 'https://images.unsplash.com/photo-1628977177128-a1da7464aa02?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWFsdGltZSUyMERhdGElMjBTdHVkaW98ZW58MHwwfHx8MTc2MzU1MzA3NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_55%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-3xl overflow-hidden bg-white/10 border border-white/15 backdrop-blur-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xs text-white/60">{p.tag}</div>
                <div className="text-xl text-white font-medium mt-1">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
