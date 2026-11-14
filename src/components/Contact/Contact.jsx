import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Contact.css'

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'waiagphyo90@email.com', href: 'mailto:waiagphyo90@email.com' },
  { icon: <FiMapPin />, label: 'Location', value: 'Myanmar 🇲🇲', href: null },
]

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/WaiAgPhyo', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/wai-aung-phyo-a572a726a', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('https://formspree.io/f/mnjlwbkr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        alert('Failed to send. Please try again.')
      }
    } catch {
      alert('Failed to send. Please check your connection.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact section-padding" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Let's Work Together</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-tagline">
              <h3>Let's Build Something <span className="gradient-text">Awesome</span></h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through the form or 
                any of my social channels.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info) => (
                <div key={info.label} className="contact-detail-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <p className="detail-label">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="detail-value link">{info.value}</a>
                    ) : (
                      <p className="detail-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <p>Follow me on</p>
              <div className="socials-row">
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ y: -4, scale: 1.1 }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="availability-badge">
              <span className="glow-dot" />
              <span>Available for freelance projects</span>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`submit-btn ${sent ? 'sent' : ''}`}
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                disabled={sending || sent}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : sending ? (
                  <><div className="btn-spinner" /> Sending...</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
