import { HTMLAttributes } from "react"
import styles from "./Avatar.module.css"

interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  hasBoarder?: boolean
  src: string
  alt?: string
}

export function Avatar({ hasBoarder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBoarder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
