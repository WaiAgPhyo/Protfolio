import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    desc: 'A feature-rich e-commerce platform with product management, cart, and payment integration using Stripe.',
    longDesc: 'Built a full-stack e-commerce solution with React frontend, Java/Spring Boot backend, MongoDB database. Features include user authentication, product search/filter, shopping cart, Stripe payment integration, order tracking, and admin dashboard.',
    tags: ['React', 'Java', 'Spring Boot', 'MongoDB', 'Stripe', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#6c63ff',
    emoji: '🛒',
  },
  {
    id: 2,
    title: 'Real-Time Chat App',
    category: 'Full Stack',
    desc: 'WebSocket-powered chat app with rooms, direct messages, and emoji reactions.',
    longDesc: 'Real-time messaging application built with Socket.io. Features include group rooms, private chats, file sharing, emoji reactions, typing indicators, read receipts, and user online status.',
    tags: ['React', 'Socket.io', 'Java', 'MongoDB', 'JWT'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#ff6584',
    emoji: '💬',
  },
  {
    id: 3,
    title: 'Task Manager Pro',
    category: 'Frontend',
    desc: 'Drag-and-drop Kanban board with team collaboration, deadlines, and analytics.',
    longDesc: 'A productivity app with intuitive Kanban boards, drag-and-drop tasks, team member assignment, deadline tracking, priority labels, and a beautiful analytics dashboard.',
    tags: ['React', 'TypeScript', 'DnD Kit', 'Chart.js', 'Firebase'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#43e97b',
    emoji: '📋',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    category: 'Frontend',
    desc: 'Beautiful weather app with 7-day forecasts, radar maps, and location search.',
    longDesc: 'Weather application consuming OpenWeatherMap API. Features include current conditions, hourly/weekly forecasts, interactive radar maps, location search, and favorite locations management.',
    tags: ['React', 'OpenWeatherMap API', 'Chart.js', 'Leaflet', 'CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#667eea',
    emoji: '🌤️',
  },
  {
    id: 5,
    title: 'Blog CMS Platform',
    category: 'Full Stack',
    desc: 'Headless CMS for blogging with rich text editor, SEO tools, and analytics.',
    longDesc: 'A complete content management system with a rich text editor (TipTap), image uploads to Cloudinary, tag/category management, SEO meta editor, view counts, comment system, and an admin panel.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary', 'TipTap'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#f093fb',
    emoji: '✍️',
  },
  {
    id: 6,
    title: 'Crypto Tracker',
    category: 'Frontend',
    desc: 'Live cryptocurrency price tracker with portfolio management and alerts.',
    longDesc: 'Cryptocurrency dashboard pulling live data from CoinGecko API. Features live price updates, portfolio tracking, price alerts, interactive charts, market cap rankings, and dark/light mode.',
    tags: ['React', 'CoinGecko API', 'Recharts', 'Context API', 'PWA'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#4facfe',
    emoji: '📈',
  },
]

const filters = ['All', 'Full Stack', 'Frontend']

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
            A selection of projects showcasing my skills in web development and design.
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link primary"
                      onClick={e => e.stopPropagation()}
                    >
                      <FiExternalLink /> Live
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
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
                  <a href={selected.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
