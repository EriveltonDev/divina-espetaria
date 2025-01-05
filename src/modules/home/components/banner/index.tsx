import { FaLocationDot } from 'react-icons/fa6'
import styles from './style.module.css'

export function Banner() {
  return (
    <section className={styles.banner}>
      <h2 className={styles.banner__title}>Espetinho de Churrasco Melhor Preço</h2>

      <div className={styles.location}>
        <FaLocationDot className={styles.location__icon} />
        <p className={styles.location__text}>Diadema - SP</p>
      </div>
    </section>
  )
}