import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi'
import ParticlesBg from '../ParticlesBg/ParticlesBg'
import './Hero.css'

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/WaiAgPhyo', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/wai-aung-phyo-a572a726a', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <FiMail />, href: 'mailto:waiagphyo90@email.com', label: 'Email' },
]

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-12, 12, -12],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticlesBg />
      <div className="hero-grid-overlay" />

      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.div variants={itemVariants} className="hero-greeting">
            <span className="glow-dot" />
            <span>Available for work</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-name">
            Hi, I'm <span className="gradient-text">Wai Aung Phyo</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-role">
            <span className="role-prefix">I'm a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Java Developer', 2000,
                'React Developer', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="typed-text"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="hero-desc">
            I craft beautiful, performant web experiences with modern technologies.
            Passionate about clean code, elegant design, and turning ideas into reality.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <Link to="projects" smooth duration={700} className="btn-primary">
              View My Work
              <FiArrowDown />
            </Link>
            <Link to="contact" smooth duration={700} className="btn-outline">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-icon"
                whileHover={{ y: -4, color: 'var(--accent-primary)' }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
            <div className="social-line" />
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          variants={itemVariants}
        >
          <motion.div
            className="hero-avatar-wrap"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            <div className="avatar-ring ring-1" />
            <div className="avatar-ring ring-2" />
            <div className="avatar-ring ring-3" />
            <div className="hero-avatar">
              <img
                src="/images/profile.jpg"
                alt="Wai Aung Phyo"
                className="avatar-photo"
              />
            </div>
            <div className="avatar-badge badge-1">
              <span>⚛️</span> React
            </div>
            <div className="avatar-badge badge-2">
              <span>🚀</span> Java
            </div>
            <div className="avatar-badge badge-3">
              <span>🎨</span> Spring
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link to="about" smooth duration={700}>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll Down</span>
        </Link>
      </motion.div>
    </section>
  )
}
