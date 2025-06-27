import { motion } from 'framer-motion'
import { useRef } from 'react'
import styles from './DragCard.module.css'

interface DragCardProps {
  content: string
}

export default function DragCard({ content }: DragCardProps) {
  const constraintRef = useRef(null)

  return (
    <div
      ref={constraintRef}
      style={{
        width: '100%',
        height: '300px',
        position: 'relative',
        border: '1px dashed #ddd',
        borderRadius: '1rem',
        overflow: 'hidden',
        padding: '1rem'
      }}
    >
      <motion.div
        drag
        dragConstraints={constraintRef}
        whileTap={{ cursor: 'grabbing', scale: 0.95 }}
        className={styles.card}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <span style={{ fontWeight: 600 }}>{content}</span>
      </motion.div>
    </div>
  )
}
