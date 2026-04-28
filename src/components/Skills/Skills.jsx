import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const categories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', level: 92, color: '#61DAFB' },
      { name: 'JavaScript', level: 90, color: '#F7DF1E' },
      // { name: 'TypeScript', level: 78, color: '#3178C6' },
      { name: 'HTML / CSS', level: 95, color: '#E34F26' },
      // { name: 'Next.js', level: 75, color: '#ffffff' },
      { name: 'Tailwind CSS', level: 88, color: '#38B2AC' },
    ]
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Java', level: 83, color: '#68A063' },
      { name: 'Spring Boot', level: 80, color: '#ffffff' },
      // { name: 'Python', level: 70, color: '#3776AB' },
      { name: 'REST APIs', level: 88, color: '#FF6B6B' },
      { name: 'GraphQL', level: 65, color: '#E535AB' },
      { name: 'Socket.io', level: 72, color: '#010101' },
    ]
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', level: 82, color: '#4DB33D' },
      { name: 'MySQL', level: 75, color: '#4479A1' },
      { name: 'PostgreSQL', level: 70, color: '#336791' },
      { name: 'Redis', level: 62, color: '#DC382D' },
      { name: 'Firebase', level: 78, color: '#FFCA28' },
      // { name: 'Prisma', level: 68, color: '#2D3748' },
    ]
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 90, color: '#F05032' },
      { name: 'Docker', level: 65, color: '#2496ED' },
      { name: 'VS Code', level: 95, color: '#007ACC' },
      { name: 'Figma', level: 72, color: '#F24E1E' },
      { name: 'Linux', level: 70, color: '#FCC624' },
      // { name: 'AWS', level: 58, color: '#FF9900' },
    ]
  },
]

const techIcons = [
  { name: 'React', emoji: '⚛️' },
  { name: 'Java', emoji: '☕' },
  { name: 'JavaScript', emoji: '📜' },
  { name: 'Spring', emoji: '🌱' },
  // { name: 'Node.js', emoji: '🟢' },
  // { name: 'Python', emoji: '🐍' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Git', emoji: '🔀' },
  // { name: 'Next.js', emoji: '▲' },
  { name: 'GraphQL', emoji: '◈' },
  { name: 'Figma', emoji: '🎨' },
  // { name: 'AWS', emoji: '☁️' },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="skills section-padding" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A broad toolkit honed through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Tech scroll strip */}
        <motion.div
          className="tech-strip"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="tech-track">
            {[...techIcons, ...techIcons].map((t, i) => (
              <div key={i} className="tech-chip">
                <span>{t.emoji}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              className={`tab-btn ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          className="skills-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {categories[activeTab].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <motion.div
                  className="skill-bar-fill"
                  style={{ background: skill.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: i * 0.07 + 0.2, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
