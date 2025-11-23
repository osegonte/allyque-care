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
          {/* LEFT: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInLeft}
            className="w-full lg:w-2/5 flex-shrink-0"
          >
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-medium">
              <img 
                src="/images/about-section.jpg" 
                alt="Allyque Care integrated care services"
                className="w-full h-full object-cover"
              />
            </div>
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

            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              As a trusted partner to families, communities, and case management teams, 
              we are committed to delivering services that honor individuality, strengthen 
              connections, and enhance overall quality of life. At Allyque Care, everyone 
              belongs, everyone is valued, and everyone is supported to reach their fullest 
              potential.
            </p>

            {/* Our Commitment Section */}
            <div className="pt-4 space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-primary">
                Our Commitment
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed font-sans">
                When you choose Allyque Care Integrated Services LLC, you are choosing 
                a partner dedicated to uplifting individuals and empowering them to reach 
                their fullest potential. We promise to maintain the highest level of care, 
                demonstrate unwavering compassion, and continuously innovate to better 
                serve our community.
              </p>
              <p className="text-base text-primary leading-relaxed font-sans italic">
                Your loved one's journey matters to us. Their goals become our goals. 
                Their success becomes our success.
              </p>
            </div>

            {/* CQL Accreditation Badge */}
            <div className="pt-6 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/logos/cql-logo.png" 
                    alt="CQL Accreditation" 
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      // Fallback if logo not found
                      e.currentTarget.style.display = 'none'
                      const parent = e.currentTarget.parentElement
                      if (parent) {
                        parent.innerHTML = '<svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>'
                      }
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Accredited by</p>
                  <p className="text-base font-semibold text-accent">
                    CQL | The Council on Quality and Leadership
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
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
