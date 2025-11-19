import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* global subtle gradients */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-10 text-center text-white/50">
        © {new Date().getFullYear()} Flames.Blue — All rights reserved.
      </footer>
    </div>
  )
}

export default App
