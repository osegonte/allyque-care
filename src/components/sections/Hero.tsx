import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image - RIGHT ALIGNED */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-background.jpg" 
          alt="" 
          className="w-full h-full object-cover object-right"
        />
        {/* Dark gradient overlay - stronger on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>
      
      {/* Content on LEFT - positioned more to the left edge */}
      <div className="w-full relative z-10 pl-6 lg:pl-8">
        <div className="w-full lg:w-1/2 max-w-3xl">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Main Headline - SERIF FONT */}
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-left font-serif"
            >
              <span className="text-white">Empowered Living Through</span>
              <br />
              <span className="text-white">Compassion, Support,</span>
              <br />
              <span className="text-accent">And Community</span>
            </motion.h1>
            
            {/* Tagline - SERIF FONT */}
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-2xl text-white/90 font-serif font-medium text-left"
            >
              Dignified · Independent · Purposeful
            </motion.p>
            
            {/* CTA Button - slightly indented */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="pt-4 ml-8"
            >
              <motion.button
                onClick={() => navigate('/careers')}
                whileHover={{ 
                  y: -2, 
                  boxShadow: '0 10px 25px rgba(79, 134, 198, 0.35)' 
                }}
                whileTap={{ scale: 0.98 }}
                className="h-14 px-12 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all text-base"
              >
                Join Our Care Team
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
