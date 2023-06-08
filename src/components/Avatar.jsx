import styles from "./Avatar.module.css"

export function Avatar({ hasBoarder = true, src }) {
  return (
    <img
      className={hasBoarder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
