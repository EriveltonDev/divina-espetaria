import styles from './style.module.css'

export function Numbers() {
  return (
    <section className={styles.numbers}>
      <p className={styles.numbers__mini_title}>
        Quem experimenta, volta
      </p>

      <h2 className={styles.numbers__title}>
        15 tipos de espetinhos de Churrasco Perto de Você
      </h2>

      <div className={styles.numbers__details}>
        <div className={styles.numbers__details__item}>
          <h3 className={styles.numbers__details__item__title}>+10.000</h3>
          <p>Clientes Satisfeitos</p>
        </div>
  
        <div className={styles.numbers__details__item}>
          <h3 className={styles.numbers__details__item__title}>+12</h3>
          <p>Anos No Mercado</p>
        </div>
  
        <div className={styles.numbers__details__item}>
          <h3 className={styles.numbers__details__item__title}>+20</h3>
          <p>Sabores</p>
        </div>
  
        <div className={styles.numbers__details__item}>
          <h3 className={styles.numbers__details__item__title}>6</h3>
          <p>Lojas</p>
        </div>
      </div>
    </section>
  )
}