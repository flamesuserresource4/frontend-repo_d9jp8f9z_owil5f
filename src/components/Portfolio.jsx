import { motion } from 'framer-motion'

const projects = [
  { title: 'Mythos', tag: 'AI Voice Platform', cover: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Nimbus', tag: 'SaaS Analytics', cover: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Halo', tag: 'Fintech Identity', cover: 'https://images.unsplash.com/photo-1551281044-8e14685777af?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold text-white text-center"
        >
          Selected work
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-transparent opacity-90" />
              <div className="absolute bottom-0 p-6">
                <p className="text-sm text-white/70">{p.tag}</p>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 opacity-40 blur-2xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
