import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi'
import './Education.css'

const education = [
  {
    id: 1,
    school: 'University of Greenwich',
    degree: 'Bachelor of Science (Hons) in Computing',
    location: 'London, United Kingdom',
    period: 'Higher Education',
    desc: 'Studied computing fundamentals, software development, and modern web technologies with a focus on building practical, real-world applications.',
  },
]

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className="education section-padding" id="education" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            The foundation that shaped my journey as a developer.
          </p>
        </motion.div>

        <div className="education-timeline">
          {education.map((item, i) => (
            <motion.article
              key={item.id}
              className="education-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
            >
              <div className="education-icon">
                <FiBookOpen />
              </div>
              <div className="education-body">
                <div className="education-meta">
                  <span className="education-period">
                    <FiCalendar /> {item.period}
                  </span>
                  <span className="education-location">
                    <FiMapPin /> {item.location}
                  </span>
                </div>
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                <p className="education-desc">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
