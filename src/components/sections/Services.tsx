import { motion } from 'framer-motion'
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
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="container-rosenfeld">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                variants={fadeInUp}
                className="group"
              >
                <div className="h-full p-8 bg-gradient-to-br from-muted/30 to-white border border-border/50 rounded-2xl hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
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
      </div>
    </section>
  )
}
