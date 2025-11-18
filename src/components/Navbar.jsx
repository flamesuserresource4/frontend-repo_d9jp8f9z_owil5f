import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="relative text-sm md:text-[15px] text-slate-100/80 hover:text-white transition-colors px-3 py-2"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/40 via-blue-500/40 to-amber-400/40 blur-md animate-pulse-slow" />
              <div className="relative size-9 md:size-10 rounded-full bg-slate-900/70 border border-white/10 flex items-center justify-center">
                <Sparkles className="size-5 text-white" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight text-lg md:text-xl">Aurelius Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-2 group">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="button-neon">
              <span>Start a Project</span>
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-2">
            <a href="#services" className="mobile-link">Services</a>
            <a href="#work" className="mobile-link">Work</a>
            <a href="#about" className="mobile-link">About</a>
            <a href="#contact" className="mobile-link">Contact</a>
            <a href="#contact" className="button-neon w-full justify-center">Start a Project</a>
          </div>
        )}
      </div>
    </header>
  )
}
