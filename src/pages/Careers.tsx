import { motion } from 'framer-motion'
import { Heart, Users, TrendingUp, Award, Clock, Briefcase } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const benefits = [
  {
    icon: Heart,
    title: 'Meaningful Work',
    description: 'Make a real difference in people\'s lives every single day.'
  },
  {
    icon: Users,
    title: 'Supportive Team',
    description: 'Join a collaborative environment where everyone is valued.'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Access ongoing training and professional development opportunities.'
  },
  {
    icon: Award,
    title: 'Competitive Benefits',
    description: 'Comprehensive benefits package including health insurance and paid time off.'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Work schedules that accommodate your life and commitments.'
  },
  {
    icon: Briefcase,
    title: 'Job Security',
    description: 'Stable employment in a growing healthcare organization.'
  }
]

export default function Careers() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/80">
        <div className="container-rosenfeld">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">
              Join Our Team
            </p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-white">
              Build a Career That Matters
            </h1>
            <p className="text-xl text-white leading-relaxed">
              At Allyque Care, we're more than just colleagues—we're a family united by 
              compassion, dedication, and a commitment to making a difference in people's lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container-rosenfeld">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              variants={fadeInUp}
              className="flex-1"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
                Our Culture & Values
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  At Allyque Care, we foster a workplace culture built on respect, collaboration, 
                  and shared purpose. Every team member plays a vital role in creating positive 
                  outcomes for the individuals and families we serve.
                </p>
                <p>
                  We believe in empowering our staff through comprehensive training, ongoing 
                  mentorship, and opportunities for professional advancement. Your growth is 
                  our priority.
                </p>
                <p>
                  Join a team where your contributions are recognized, your voice is heard, 
                  and your passion for helping others is celebrated every day.
                </p>
              </div>

              {/* Benefits List */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <div key={benefit.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-sm mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              variants={fadeInUp}
              className="w-full lg:w-2/5 flex-shrink-0"
            >
              <div className="h-[500px] rounded-2xl overflow-hidden shadow-medium bg-muted/30">
                <img 
                  src="/images/careers-team.jpg" 
                  alt="Allyque Care team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Employment Form Section */}
      <section className="py-24 bg-white">
        <div className="container-rosenfeld">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
              Apply Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to start your journey with us? Fill out the application form below 
              and take the first step toward a rewarding career.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-muted/30 to-white border border-border/50 rounded-2xl p-8 shadow-soft">
              {/* EMPLOYMENT FORM */}
              <div className="w-full">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfpzn26LOwyZjnbAyt9fT2NYx-7evP2Yf1bM5ytF95AQZ-6bQ/viewform?embedded=true" 
                  width="100%" 
                  height="1800" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full"
                >
                  Loading…
                </iframe>
              </div>

              {/* REQUIRED DOCUMENTS SECTION */}
              <div className="mt-12 p-8 bg-white border border-border/50 rounded-2xl">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4 text-center">
                  Required Documents
                </h3>
                <p className="text-muted-foreground text-center mb-8">
                  Please prepare the following documents to complete your application
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Valid Driver's License</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Social Security Card</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Resume/CV</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Certifications (if applicable)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Professional References</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Proof of Eligibility to Work</span>
                  </div>
                </div>

                <div className="text-center">
                  <a 
                    href="mailto:careers@allyquecare.com?subject=Employment Application Documents&body=Hello,%0D%0A%0D%0APlease find attached my application documents:%0D%0A%0D%0A☐ Driver's License%0D%0A☐ Social Security Card%0D%0A☐ Resume/CV%0D%0A☐ Certifications%0D%0A☐ References%0D%0A☐ Proof of Eligibility to Work%0D%0A%0D%0AName:%0D%0APhone:%0D%0AEmail:%0D%0A%0D%0AThank you!"
                    className="inline-flex items-center gap-2 h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all hover:shadow-strong"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Your Documents
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Click the button above to open your email client and send all required documents to:<br />
                    <span className="font-semibold text-accent">careers@allyquecare.com</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container-rosenfeld">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary mb-4">
              Questions About Employment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our HR team is here to help. Contact us to learn more about 
              current opportunities and the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13176423907"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all hover:shadow-strong"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a 
                href="mailto:careers@allyquecare.com"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-white hover:bg-muted/50 text-primary font-semibold rounded-lg border-2 border-border hover:border-accent transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
