import styles from "./Avatar.module.css"

interface AvatarProps {
  hasBoarder?: boolean
  src: string
  alt?: string
}

export function Avatar({ hasBoarder = true, src, alt }: AvatarProps) {
  return (
    <img
      className={hasBoarder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}
