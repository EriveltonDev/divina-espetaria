import { FaLocationDot } from 'react-icons/fa6'
import styles from './style.module.css'

export function Banner() {
  return (
    <section className={styles.banner}>
      <h2>Espetinho de Churrasco Melhor Preço</h2>

      <div className={styles.location}>
        <FaLocationDot />
        <p>Diadema - SP</p>
      </div>
    </section>
  )
}