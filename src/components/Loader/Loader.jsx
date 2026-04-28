import { motion } from 'framer-motion'
import './Loader.css'

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loader-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-logo">
          <span className="lb">&lt;</span>
          <motion.span
            className="ln"
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Kenny
          </motion.span>
          <span className="lb"> /&gt;</span>
        </div>
        <div className="loader-bar-wrap">
          <motion.div
            className="loader-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
          />
        </div>
        <p className="loader-text">Loading Portfolio...</p>
      </motion.div>
    </motion.div>
  )
}
