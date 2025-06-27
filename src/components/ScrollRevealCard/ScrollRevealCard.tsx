import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ScrollRevealCard.module.css'

interface ScrollRevealCardProps {
  title: string
  children: React.ReactNode
}

export default function ScrollRevealCard({
  title,
  children
}: ScrollRevealCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h3
        style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem'
        }}
      >
        {title}
      </h3>
      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>{children}</div>
    </motion.div>
  )
}
