import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

const footerLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Education', to: 'education' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/WaiAgPhyo', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/wai-aung-phyo-a572a726a', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:waiagphyo90@email.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="lb">&lt;</span>Kenny<span className="lb"> /&gt;</span>
            </div>
            <p>Building digital experiences, one line of code at a time. Based in Myanmar, working globally.</p>
            <div className="footer-socials">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ y: -3 }}
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {footerLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} smooth duration={600}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-info">
            <h4>Contact</h4>
            <p>waiagphyo90@email.com</p>
            <p>Myanmar 🇲🇲</p>
            <div className="availability-badge" style={{ marginTop: '1rem' }}>
              <span className="glow-dot" />
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Wai Aung Phyo. Crafted with{' '}
            <FiHeart className="heart-icon" /> using React & Framer Motion
          </p>
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
