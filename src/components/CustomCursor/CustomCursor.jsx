import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const target = e.target
      setHovering(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable')
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  useEffect(() => {
    let animId
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [pos])

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y, transform: `translate(-50%, -50%) scale(${clicking ? 0.6 : 1})` }}
      />
      <div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ left: trail.x, top: trail.y, transform: `translate(-50%, -50%) scale(${clicking ? 0.8 : hovering ? 1.6 : 1})` }}
      />
    </>
  )
}
