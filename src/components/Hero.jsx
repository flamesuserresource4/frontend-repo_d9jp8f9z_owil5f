import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for depth (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs md:text-sm backdrop-blur-md"
          >
            <span className="relative inline-flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-amber-400 opacity-75 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-white" />
            </span>
            Premium Web Experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            Crafting digital brands that feel inevitable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 max-w-2xl text-lg md:text-xl text-white/70"
          >
            We design and build high-conversion websites with cinematic interaction, refined typography, and a tastefully bold aesthetic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a className="button-neon" href="#contact"><span>Start a Project</span></a>
            <a className="button-ghost" href="#work">See Our Work</a>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 opacity-50 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white">
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors" />
                ))}
              </div>
              <p className="mt-4 text-sm text-white/70">Motion-first components and bespoke interactions for brand lift.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb orb-purple" />
        <div className="orb orb-blue" />
        <div className="orb orb-amber" />
      </div>
    </section>
  )
}
