import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MobileMenu from '../ui/MobileMenu'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInHero, setIsInHero] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Check if we're still in hero section (assuming hero is viewport height)
    const heroHeight = window.innerHeight
    const isStillInHero = latest < heroHeight - 100
    
    setIsInHero(isStillInHero)
    setIsScrolled(latest > 50 && !isStillInHero)
  })

  useEffect(() => {
    // Reset on route change
    setIsInHero(location.pathname === '/')
  }, [location.pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    } else {
      navigate(href)
    }
  }

  const showTransparent = isInHero && location.pathname === '/'

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          backgroundColor: showTransparent ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0.95)',
          borderBottomColor: showTransparent ? 'rgba(255, 255, 255, 0)' : 'rgba(214, 219, 226, 0.5)'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backdropFilter: showTransparent ? 'none' : 'blur(8px)' }}
      >
        <div className="container-rosenfeld h-24 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center"
          >
            <img 
              src="/logo.svg" 
              alt="Allyque Care" 
              className="h-24 w-auto"
            />
          </a>
          
          {/* Center: Navigation - Desktop Only */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <a 
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="relative text-sm font-medium transition-colors group"
              style={{ color: showTransparent ? 'white' : 'hsl(220, 25%, 18%)' }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            
            <a 
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="relative text-sm font-medium transition-colors group"
              style={{ color: showTransparent ? 'white' : 'hsl(220, 25%, 18%)' }}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            
            <a 
              href="/careers"
              onClick={(e) => handleNavClick(e, '/careers')}
              className="relative text-sm font-medium transition-colors group"
              style={{ color: showTransparent ? 'white' : 'hsl(220, 25%, 18%)' }}
            >
              Careers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
          
          {/* Right: Contact - Desktop / Hamburger - Mobile */}
          <div className="flex items-center gap-4">
            {/* Contact Button - Desktop Only */}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
              style={{ color: showTransparent ? 'white' : 'hsl(220, 25%, 18%)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact</span>
            </a>

            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: showTransparent ? 'white' : 'hsl(220, 25%, 18%)' }}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
