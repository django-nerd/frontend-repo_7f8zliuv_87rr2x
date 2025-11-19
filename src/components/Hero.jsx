import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            Building premium experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 text-lg text-white/70 max-w-xl"
          >
            Frontend · AI-Driven · Web Animations · Portfolio 2025
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[.99] transition-transform">
              Explore Work
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 backdrop-blur-xl hover:bg-white/15 transition-colors">
              Get in Touch
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/30 to-white/5">
            <div className="rounded-3xl bg-slate-900/30 backdrop-blur-2xl border border-white/10 p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-600/10 ring-1 ring-white/10 shadow-2xl"
              />
              <div className="mt-4 text-white/70 text-sm">
                Silhouette • Crafted with glass, gradients and soft light.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
