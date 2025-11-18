import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 selection:text-white">
      {/* Global background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 bg-amber-400/10 blur-3xl rounded-full" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
