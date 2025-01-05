import Image from 'next/image'
import styles from './style.module.css'

export function ProductItem() {
  return (
    <div className={styles.item}>
      <Image
        className={styles.item__image}
        src="/images/item.webp"
        width={200}
        height={279}
        alt="Churrasco"
      />

      <div className={styles.item__titles}>
        <h3>Carne</h3>
        <p>10 Unidades</p>
      </div>

      <div className={styles.item__descriptions}>
        <p>R$ 25,00 (Dinheiro)</p>
        <p>R$ 27,00 (Cartão)</p>
      </div>
    </div>
  )
}