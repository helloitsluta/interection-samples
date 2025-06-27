import { useEffect, useState } from 'react'
import styles from './TypeEffectCard.module.css'

interface TypeEffectCardProps {
  messages: string[]
  speed?: number
  delay?: number // 시작 지연 시간
  pause?: number // 문장 끝 대기 시간
}

export default function TypeEffectCard({
  messages,
  speed = 60,
  delay = 500,
  pause = 2000
}: TypeEffectCardProps) {
  const [messageIndex, setMessageIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const currentMessage = messages[messageIndex] ?? ''

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i <= currentMessage.length) {
          setDisplayText(currentMessage.slice(0, i))
          i++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setMessageIndex(prev => (prev + 1) % messages.length)
          }, pause)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [messageIndex, currentMessage, speed, delay, pause, messages.length])

  return (
    <div className={styles.card}>
      {displayText}
      <span className={styles.blinkingCursor}>|</span>
    </div>
  )
}
