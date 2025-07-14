import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './AutoRotateCard.module.css'

interface AutoRotateCardProps {
  messages: string[]
  interval?: number
  autoPlay?: boolean
}

export default function AutoRotateCard({
  messages,
  interval = 3000,
  autoPlay = true
}: AutoRotateCardProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      goToNext()
    }, interval)
    return () => clearInterval(timer)
  }, [interval, autoPlay])

  const goToNext = () => {
    setDirection('right')
    setIndex(prev => (prev + 1) % messages.length)
  }

  const goToPrev = () => {
    setDirection('left')
    setIndex(prev => (prev - 1 + messages.length) % messages.length)
  }

  const variants = {
    right: {
      initial: { rotateY: -90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: 90, opacity: 0 }
    },
    left: {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: -90, opacity: 0 }
    }
  }

  return (
    <div className={styles.cardWrapper}>
      <button className={styles.navButton} onClick={goToPrev}>
        ←
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={styles.card}
          initial={variants[direction].initial}
          animate={variants[direction].animate}
          exit={variants[direction].exit}
          transition={{ duration: 0.6 }}
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>

      <button className={styles.navButton} onClick={goToNext}>
        →
      </button>
    </div>
  )
}
