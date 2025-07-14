import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './MagneticButton.module.css'

interface MagneticButtonProps {
  label: string
  strength?: number
}

export default function MagneticButton({
  label,
  strength = 30
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = wrapperRef.current?.getBoundingClientRect()
    if (!bounds) return

    const x = e.clientX - bounds.left - bounds.width / 2
    const y = e.clientY - bounds.top - bounds.height / 2
    setPos({ x: x / strength, y: y / strength })
  }

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 })
  }

  return (
    <div
      ref={wrapperRef}
      className={styles.buttonWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        className={styles.button}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {label}
      </motion.button>
    </div>
  )
}
