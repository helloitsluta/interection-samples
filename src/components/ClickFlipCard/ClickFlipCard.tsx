import { useState } from 'react'
import styles from './ClickFlipCard.module.css'

export default function ClickFlipCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={styles.cardContainer} onClick={() => setFlipped(!flipped)}>
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ''}`}>
        <div className={styles.cardFace}>
          <strong>Front</strong>
        </div>
        <div className={`${styles.cardFace} ${styles.back}`}>
          <strong>Back</strong>
        </div>
      </div>
    </div>
  )
}
