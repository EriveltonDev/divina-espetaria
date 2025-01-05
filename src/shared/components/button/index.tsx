import { ReactNode } from "react";
import styles from './style.module.css'

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  )
}