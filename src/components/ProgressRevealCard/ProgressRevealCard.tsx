import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import styles from './ProgressRevealCard.module.css'

interface ProgressRevealCardProps {
  content: string
  delayStep?: number
}

export default function ProgressRevealCard({
  content,
  delayStep = 0.2
}: ProgressRevealCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const lines = content.split('\n')

  return (
    <div ref={ref} className={styles.card}>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          className={styles.line}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * delayStep, duration: 0.4 }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  )
}
