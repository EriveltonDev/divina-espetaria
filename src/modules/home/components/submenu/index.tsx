import Link from "next/link";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaMoneyBill1, FaMotorcycle } from "react-icons/fa6";
import { GiBarbecue } from "react-icons/gi";
import styles from './style.module.css'

export function SubMenu() {
  return (
    <section className={styles.submenu}>
      <Link className={styles.submenu__link} href="">
        <FaMoneyBill1 className={styles.submenu__icon} />
        <p>Ofertas</p>
      </Link>

      <Link className={styles.submenu__link} href="">
        <GiBarbecue className={styles.submenu__icon} />
        <p>Kit Churrasco</p>
      </Link>

      <Link className={styles.submenu__link} href="">
        <BiSolidFoodMenu className={styles.submenu__icon} />
        <p>Cardápio</p>
      </Link>

      <Link className={styles.submenu__link} href="">
        <FaMotorcycle className={styles.submenu__icon} />
        <p>Entrega</p>
      </Link>
    </section>
  )
}