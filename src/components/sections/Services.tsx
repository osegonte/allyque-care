import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Users, Heart, Car, Calendar, HeartHandshake, Hand, Clock } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const services = [
  {
    title: 'Residential Habilitation',
    description: 'Providing supportive living environments that promote independence and life skill development.',
    icon: Home
  },
  {
    title: 'Community Transition',
    description: 'Helping individuals successfully transition into community-based living settings.',
    icon: Users
  },
  {
    title: 'Wellness Coordination',
    description: 'Comprehensive health and wellness support coordination.',
    icon: Heart
  },
  {
    title: 'Transportation',
    description: 'Safe and reliable transportation to appointments and community activities.',
    icon: Car
  },
  {
    title: 'Day Habilitation',
    description: 'Structured daytime programs focused on skill building and community engagement.',
    icon: Calendar
  },
  {
    title: 'Structured Family Caregiving',
    description: 'Supporting families who provide care to their loved ones at home.',
    icon: HeartHandshake
  },
  {
    title: 'Participant Assistance & Care (PAC)',
    description: 'Individualized personal care and daily living support.',
    icon: Hand
  },
  {
    title: 'Respite Services',
    description: 'Temporary relief care for primary caregivers.',
    icon: Clock
  }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/services-background.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Animated Overlay - Waits 2s, then fades IN */}
        <motion.div 
          className="absolute inset-0 bg-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ 
            duration: 1.2, 
            ease: 'easeOut',
            delay: 2.0  // 2 SECOND PAUSE before overlay appears
          }}
        />
      </div>

      {/* Content - Waits 2.3s, then fades IN */}
      <motion.div 
        className="container-rosenfeld relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ 
          duration: 1, 
          ease: 'easeOut', 
          delay: 2.3  // Starts slightly after overlay
        }}
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ 
            duration: 0.8, 
            ease: 'easeOut', 
            delay: 2.5  // Heading appears
          }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
            Comprehensive Care Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ 
                  duration: 0.6, 
                  ease: 'easeOut', 
                  delay: 2.7 + (index * 0.1)  // Cards start appearing
                }}
                variants={fadeInUp}
                className="group"
              >
                <div className="h-full p-8 bg-white/90 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
