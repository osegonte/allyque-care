import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const values = [
  {
    title: 'Individualized Care',
    description: 'Every person\'s journey is unique, and we recognize that one-size-fits-all approaches simply don\'t work in care services. We take the time to understand each individual\'s specific needs, preferences, goals, and aspirations. Our personalized care plans are developed in collaboration with the person we serve, their families, and their support network. We continuously adapt our services as needs evolve, ensuring that care remains relevant, effective, and truly person-centered. From daily routines to long-term goals, everything we do is tailored to support each individual\'s unique path to independence and fulfillment.'
  },
  {
    title: 'Well-Trained Caregivers',
    description: 'Our team represents the heart of our organization, and we invest heavily in their ongoing professional development. Every caregiver undergoes comprehensive training in evidence-based care practices, communication techniques, crisis intervention, and person-centered support methodologies. We provide regular continuing education opportunities, specialized skill development workshops, and maintain industry certifications. Our caregivers are not just trained in technical skills—they are mentored in empathy, cultural competency, and the art of building meaningful relationships. This commitment to excellence ensures that every person we serve receives care from professionals who are both highly skilled and deeply compassionate.'
  },
  {
    title: 'Always On Support',
    description: 'Care needs don\'t follow a 9-to-5 schedule, which is why we provide 24/7 availability and support. Whether it\'s an urgent situation at 2 AM or a question during a holiday weekend, our team is always accessible. We maintain round-the-clock staffing, emergency response protocols, and continuous communication channels. Families gain peace of mind knowing that professional support is just a phone call away, any time of day or night. This constant presence means individuals receive consistent, reliable care without interruption, and families can rest easy knowing their loved ones are never without support when they need it most.'
  },
  {
    title: 'Dignity and Respect',
    description: 'We believe that dignity is not just a principle—it\'s a practice woven into every interaction and decision. We honor each person\'s autonomy, actively involving them in all decisions about their care and daily life. Their choices, preferences, and opinions are not just heard but genuinely valued and incorporated into their care experience. We protect privacy, maintain confidentiality, and always communicate with respect. Every individual has the right to self-determination, and we support them in exercising that right, even when choices involve calculated risks. We recognize that true dignity means being treated as a capable adult, not a problem to be managed.'
  },
  {
    title: 'Independence and Empowerment',
    description: 'Our goal is not to do things for people, but to empower them to do things for themselves. We focus on skill-building and capability development rather than creating dependency. Through patient teaching, supportive coaching, and adaptive strategies, we help individuals master daily living skills, develop self-advocacy abilities, and gain confidence in their own capabilities. We celebrate progress, encourage calculated risk-taking, and provide the scaffolding needed for growth while gradually reducing support as independence increases. This empowerment approach transforms lives, turning challenges into opportunities and dependence into self-sufficiency.'
  },
  {
    title: 'Inclusion and Community',
    description: 'True quality of life comes from being an active, valued member of a community. We don\'t just facilitate community access—we actively work to break down barriers to full inclusion. Our support helps individuals build and maintain meaningful relationships, participate in community activities, pursue hobbies and interests, and contribute to society in ways that are personally meaningful. We partner with local organizations, advocate for accessibility, and create opportunities for genuine social connection. Whether it\'s joining a local club, volunteering, pursuing education, or simply enjoying neighborhood activities, we ensure that the people we serve are fully integrated into the fabric of community life.'
  },
  {
    title: 'Safety and Protection',
    description: 'Safety is our unwavering commitment and highest priority. We implement comprehensive safeguards including rigorous staff screening and background checks, ongoing safety training, incident prevention protocols, and robust reporting systems. Our facilities and practices meet or exceed all regulatory standards. We maintain strict medication management protocols, infection control measures, and emergency preparedness plans. Beyond physical safety, we also prioritize emotional and financial protection through abuse prevention training, rights education, and oversight mechanisms. Families trust us because we\'ve built systems and cultivated a culture where safety is never compromised, and every potential risk is proactively addressed.'
  },
  {
    title: 'Collaboration',
    description: 'Exceptional care requires a team approach, and we excel at bringing everyone together. We actively partner with families, recognizing them as essential members of the care team and valuable sources of insight. We maintain open, frequent communication with case managers, ensuring coordinated service delivery and shared goals. Our collaboration extends to healthcare providers, therapists, educators, and other professionals in each person\'s support network. We participate in care coordination meetings, share relevant information appropriately, and work together to solve challenges and celebrate successes. This collaborative approach ensures consistency, prevents gaps in care, and creates a unified support system where everyone is working toward the same goals.'
  }
]

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-white">
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
            Why Choose Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
            Our Commitment to Quality Care
          </h2>
        </motion.div>

        {/* Interactive Accordion/Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                variants={fadeInUp}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  className={`w-full text-left transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-accent/10 to-accent/5 border-accent shadow-medium' 
                      : 'bg-white border-border/50 hover:border-accent/50 hover:shadow-soft'
                  } border-2 rounded-xl p-6 group`}
                >
                  <div className="flex items-center gap-4">
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-accent text-white scale-110' 
                        : 'bg-accent/10 text-accent group-hover:bg-accent/20'
                    }`}>
                      {index + 1}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-semibold flex-1 transition-colors duration-300 ${
                      activeIndex === index ? 'text-accent' : 'text-primary'
                    }`}>
                      {value.title}
                    </h3>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ${
                        activeIndex === index ? 'text-accent' : 'text-muted-foreground'
                      }`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expandable Description */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-base text-foreground leading-relaxed mt-6 pl-14 pr-4">
                          {value.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
