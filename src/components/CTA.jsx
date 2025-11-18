import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_0%,rgba(251,191,36,0.09),transparent),radial-gradient(800px_400px_at_10%_80%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 opacity-40 blur-3xl" />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative text-3xl md:text-5xl font-semibold text-white text-center"
          >
            Ready to make something extraordinary?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mt-4 text-white/70 text-center max-w-2xl mx-auto"
          >
            Tell us about your goals. We’ll assemble the team, define the strategy, and craft a brand experience that plays in people’s heads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a className="button-neon" href="#"><span>Book a Discovery Call</span></a>
            <a className="button-ghost" href="#"><span>Get Capabilities Deck</span></a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
