import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Protfolio',
    category: 'Frontend',
    desc: 'Personal portfolio website with animated sections, particle background, and contact form.',
    longDesc: 'A React + Vite personal portfolio featuring Framer Motion animations, custom cursor, particle canvas background, skills tabs, project gallery with modal details, and Formspree-powered contact form.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS', 'Framer Motion'],
    github: 'https://github.com/WaiAgPhyo/Protfolio',
    live: null,
    color: '#6c63ff',
    emoji: '💼',
  },
  {
    id: 2,
    title: 'JavaTesting',
    category: 'Backend',
    desc: 'Gradle-based Java project with Docker support for testing and build automation practice.',
    longDesc: 'A Java testing workspace built with Gradle. Includes Dockerfile setup for containerized builds and a structured src layout for practicing unit testing and backend fundamentals.',
    tags: ['Java', 'Gradle', 'Docker'],
    github: 'https://github.com/WaiAgPhyo/JavaTesting',
    live: null,
    color: '#68A063',
    emoji: '☕',
  },
  {
    id: 3,
    title: 'api-demo',
    category: 'Backend',
    desc: 'Maven Spring Boot style Java API demo exploring REST endpoints and backend structure.',
    longDesc: 'A Java API demonstration project using Maven. Focuses on backend API structure, request handling, and building a foundation for REST services.',
    tags: ['Java', 'Maven', 'REST APIs'],
    github: 'https://github.com/WaiAgPhyo/api-demo',
    live: null,
    color: '#ff6584',
    emoji: '🔌',
  },
  {
    id: 4,
    title: 'Talent-Program',
    category: 'Frontend',
    desc: 'HTML & CSS assignments and mini projects from a talent / training program.',
    longDesc: 'Collection of frontend training work including day-by-day HTML/CSS assignments, styling practice, and a MiniProject folder. Built while learning core web fundamentals.',
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/WaiAgPhyo/Talent-Program',
    live: null,
    color: '#E34F26',
    emoji: '🎓',
  },
  {
    id: 5,
    title: 'CodeWallExam',
    category: 'Backend',
    desc: 'Java coding exam / practice solutions organized in a clean source structure.',
    longDesc: 'Java practice and exam solutions written during coding assessments. Focuses on problem-solving, core Java syntax, and structured source organization.',
    tags: ['Java'],
    github: 'https://github.com/WaiAgPhyo/CodeWallExam',
    live: null,
    color: '#667eea',
    emoji: '📝',
  },
  {
    id: 6,
    title: 'workspace',
    category: 'Frontend',
    desc: 'React + Vite workspace for experimenting with modern frontend tooling and components.',
    longDesc: 'A React + Vite development workspace used for frontend experiments, component practice, and exploring modern build tooling with HMR and ESLint.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/WaiAgPhyo/workspace',
    live: null,
    color: '#61DAFB',
    emoji: '⚛️',
  },
  {
    id: 7,
    title: 'Inbound Travel Accident Insurance',
    category: 'Full Stack',
    desc: 'Inbound travel accident insurance project repository started on GitHub.',
    longDesc: 'Repository for an inbound travel accident insurance concept. Currently early-stage on GitHub and reserved for insurance-related product work.',
    tags: ['Insurance', 'Project'],
    github: 'https://github.com/WaiAgPhyo/Inbound-Travel-Accident-Insurance',
    live: null,
    color: '#43e97b',
    emoji: '🛡️',
  },
]

const filters = ['All', 'Frontend', 'Backend', 'Full Stack']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section className="projects section-padding" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real repositories from my GitHub —{' '}
            <a
              href="https://github.com/WaiAgPhyo"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-link"
            >
              @WaiAgPhyo
            </a>
          </p>
        </motion.div>

        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {filters.map(f => (
            <button
              key={f}
              className={`tab-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
              >
                <div
                  className="project-thumb"
                  style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}
                >
                  <div className="project-emoji">{project.emoji}</div>
                  <div className="project-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="tag tag-more">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={e => e.stopPropagation()}
                    >
                      <FiGithub /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link primary"
                        onClick={e => e.stopPropagation()}
                      >
                        <FiExternalLink /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelected(null)}>
                <FiX />
              </button>
              <div
                className="modal-thumb"
                style={{ background: `linear-gradient(135deg, ${selected.color}30, ${selected.color}10)` }}
              >
                <div className="modal-emoji">{selected.emoji}</div>
              </div>
              <div className="modal-body">
                <span className="project-category">{selected.category}</span>
                <h2>{selected.title}</h2>
                <p>{selected.longDesc}</p>
                <div className="project-tags">
                  {selected.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="modal-actions">
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FiGithub /> View Code
                  </a>
                  {selected.live && (
                    <a href={selected.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
