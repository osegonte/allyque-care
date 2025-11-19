import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}

export default function About() {
  const navigate = useNavigate()
  const location = useLocation()

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

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="container-rosenfeld">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Clickable Satellite Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInLeft}
            className="w-full lg:w-2/5 flex-shrink-0"
          >
            <a 
              href="https://www.google.com/maps/search/?api=1&query=2021+E+9th+Street+Anderson+IN+46037"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-medium group-hover:shadow-strong transition-all duration-300">
                {/* Google Maps Satellite View Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.1!2d-85.68012!3d40.10512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814cd5e7e7e7e7e%3A0x1234567890abcdef!2s2021%20E%209th%20St%2C%20Anderson%2C%20IN%2046037!5e1!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Allyque Care Location - Satellite View"
                />
                
                {/* Overlay with hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 px-6 py-3 rounded-lg shadow-medium">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Get Directions</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            variants={fadeInUp}
            className="flex-1 space-y-6 text-left"
          >
            <p className="text-sm font-semibold text-accent tracking-wider uppercase">
              About Us
            </p>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
              Building Lives of Dignity and Purpose
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed font-sans">
              At Allyque Care Integrated Services LLC, we believe every individual 
              deserves a life filled with dignity, independence, and purpose. Rooted 
              in compassion and respect, we provide high-quality, person-centered 
              support that empowers those we serve to grow, thrive, and achieve their 
              personal goals.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              Our dedicated team creates safe, nurturing, and home-like environments 
              where each person's voice, choices, and aspirations guide the care they 
              receive. We build meaningful relationships, promote community inclusion, 
              and support individuals in developing life skills that foster confidence 
              and long-term independence.
            </p>
            
            {/* Single CTA */}
            <div className="pt-4">
              <a 
                href="/careers" 
                onClick={(e) => handleNavClick(e, '/careers')}
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
              >
                Join Our Team
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
