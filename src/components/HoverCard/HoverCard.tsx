import styles from './HoverCard.module.css'

interface HoverCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function HoverCard({
  title,
  description,
  icon
}: HoverCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
