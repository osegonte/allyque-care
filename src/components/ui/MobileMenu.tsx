import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          onClose()
        }, 100)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        onClose()
      }
    } else {
      navigate(href)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-strong z-50 md:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-serif font-semibold text-lg text-primary">Menu</span>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
              >
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col p-6 space-y-1">
              <button
                onClick={() => handleNavClick('#about')}
                className="px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('#services')}
                className="px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('/careers')}
                className="px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all font-medium text-left"
              >
                Careers
              </button>
              
              <div className="h-px bg-border my-4" />
              
              <button
                onClick={() => handleNavClick('#contact')}
                className="px-4 py-3 bg-accent text-white hover:bg-accent/90 rounded-lg transition-all font-semibold text-center"
              >
                Contact Us
              </button>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-muted/30">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+13176423907" className="hover:text-accent transition-colors">
                    (317) 642-3907
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@allyquecare.com" className="hover:text-accent transition-colors">
                    info@allyquecare.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
