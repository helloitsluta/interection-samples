import styles from './HoverGlowCard.module.css'

interface HoverGlowCardProps {
  text: string
  icon?: React.ReactNode
}

export default function HoverGlowCard({ text, icon }: HoverGlowCardProps) {
  return (
    <div className={styles.card}>
      {text} {icon}
    </div>
  )
}
