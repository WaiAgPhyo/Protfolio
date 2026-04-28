import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FiCode, FiLayout, FiDatabase, FiGlobe } from 'react-icons/fi'
import './About.css'

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Dedication' },
]

const highlights = [
  { icon: <FiCode />, title: 'Clean Code', desc: 'Writing maintainable, scalable code following best practices.' },
  { icon: <FiLayout />, title: 'Modern Design', desc: 'Building pixel-perfect UIs with attention to detail.' },
  { icon: <FiDatabase />, title: 'Backend Skills', desc: 'Java, Spring Boot, databases — full-stack solutions.' },
  { icon: <FiGlobe />, title: 'Web Standards', desc: 'Accessibility, performance, and cross-browser compatibility.' },
]

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' }
  })
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className="about section-padding" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get To Know Me</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer building digital experiences from Myanmar to the world.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-image-frame">
              <div className="about-initials-box">
                <span>Kenny</span>
                <p>Full Stack Dev</p>
              </div>
              <div className="about-image-deco deco-1" />
              <div className="about-image-deco deco-2" />
            </div>
            <div className="about-stats-grid">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  custom={i}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <div className="stat-number">
                    {inView && (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="about-bio">
              <p>
                Hey! I'm <strong>Wai Aung Phyo</strong>, a passionate Full Stack Developer 
                with a love for crafting beautiful digital experiences. Based in Myanmar, 
                I specialize in building modern web applications using React, Java, and 
                cutting-edge technologies.
              </p>
              <p>
                I believe that great software is not just about functionality — it's about 
                the experience. Every pixel, every interaction, every line of code matters. 
                I strive to write clean, efficient, and maintainable code that makes a 
                real difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source, or enjoying Myanmar's beautiful landscapes.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className="highlight-card"
                  custom={i}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
                >
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
