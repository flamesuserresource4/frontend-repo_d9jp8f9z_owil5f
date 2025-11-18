import { motion } from 'framer-motion'
import { Sparkles, Code2, Zap, Rocket } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Brand-First Design',
    desc: 'Identity systems, visual direction, and UI that feels inevitable.'
  },
  {
    icon: Code2,
    title: 'Engineering Excellence',
    desc: 'Lightning-fast web apps with modern stacks and scalable architecture.'
  },
  {
    icon: Zap,
    title: 'Interaction & Motion',
    desc: 'Cinematic scroll, micro-interactions, and delightful movement.'
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    desc: 'Core Web Vitals, accessibility, and technical SEO baked in.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(168,85,247,0.07),transparent),radial-gradient(600px_300px_at_80%_60%,rgba(56,189,248,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold text-white text-center"
        >
          Services that move brands forward
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-amber-400/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="size-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
                <button className="mt-5 text-sm text-white/80 hover:text-white inline-flex items-center gap-1">Learn more →</button>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-transparent group-hover:border-white/20" style={{
                background: 'linear-gradient(120deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
                WebkitMask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
                WebkitMaskComposite: 'xor'
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
