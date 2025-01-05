import { Button } from '@/shared/components/button'
import { ProductItem } from './components/item'
import styles from './style.module.css'

export function Products() {
  return (
    <main className={styles.products}>
      <h2 className={styles.products__title}>
        Preço dos Espetinhos de Churrasco
      </h2>

      <p className={styles.products__description}>
        Mais de 20 sabores para sua casa, festa ou confraternização. Práticos, sem conservantes e suculentos. Confira e economize!
      </p>

      <div className={styles.products__list}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <Button>
        Cardápio Completo
      </Button>
    </main>
  )
}