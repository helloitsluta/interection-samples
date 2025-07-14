import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './AccordionCard.module.css'

interface AccordionCardProps {
  title: string
  children: React.ReactNode
}

export default function AccordionCard({ title, children }: AccordionCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        {title}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.content}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
