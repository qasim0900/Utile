import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

export interface HeaderProps {
  brandName?: string
  className?: string
}

export const Header: React.FC<HeaderProps> = ({
  className = '',
}) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Price', href: '#price' },
    { label: 'Contact Us', href: '#contact' },
  ]

  return (
    <nav 
      id="header" 
      className={clsx(
        "fixed w-full z-50 top-0 transition-all duration-500 px-6",
        scrolled ? "bg-black/80 backdrop-blur-2xl py-2 shadow-2xl" : "bg-transparent py-4",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            className="text-white no-underline hover:no-underline font-black text-3xl md:text-4xl tracking-tighter group flex items-center gap-3" 
            to={ROUTES.HOME}
          >
            <div className="w-10 h-10 bg-[#4ADEDE] rounded-xl flex items-center justify-center text-black text-2xl group-hover:rotate-12 transition-transform duration-500">U</div>
            UTILE
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="flex items-center mr-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  className={clsx(
                    "relative px-5 py-2 text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 group overflow-hidden",
                    location.pathname === item.href ? "text-[#4ADEDE]" : "text-white/70 hover:text-white"
                  )} 
                  href={item.href}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4ADEDE] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                </a>
              </li>
            ))}
          </ul>
          <Link 
            className="bg-white text-black font-black py-4 px-10 rounded-2xl text-sm uppercase tracking-widest hover:bg-[#4ADEDE] hover:shadow-[0_0_30px_rgba(74,222,222,0.4)] transition-all transform hover:scale-105 active:scale-95 shadow-xl" 
            to={ROUTES.LOGIN}
          >
            Login
          </Link>
          <button
            className="bg-transparent border-2 border-white/20 text-white font-black py-4 px-10 rounded-2xl text-sm uppercase tracking-widest hover:bg-white/10 transition-all ml-4"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 text-white hover:text-[#4ADEDE] transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-6 flex flex-col justify-between overflow-hidden">
              <span className={clsx("w-full h-1 bg-current rounded-full transition-all duration-300 transform origin-left", isMobileMenuOpen && "rotate-45 translate-x-1")} />
              <span className={clsx("w-full h-1 bg-current rounded-full transition-all duration-300", isMobileMenuOpen && "opacity-0 -translate-x-full")} />
              <span className={clsx("w-full h-1 bg-current rounded-full transition-all duration-300 transform origin-left", isMobileMenuOpen && "-rotate-45 translate-x-1")} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-3xl border-t border-white/10 overflow-hidden absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="px-8 py-12 flex flex-col gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black text-white hover:text-[#4ADEDE] transition-colors tracking-tighter"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-4">
                <Link 
                  to={ROUTES.LOGIN}
                  className="w-full bg-[#4ADEDE] text-black text-center font-black py-6 rounded-3xl text-xl uppercase tracking-widest shadow-2xl shadow-[#4ADEDE]/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <button className="w-full bg-white/5 border-2 border-white/10 text-white text-center font-black py-6 rounded-3xl text-xl uppercase tracking-widest">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

Header.displayName = 'Header'
