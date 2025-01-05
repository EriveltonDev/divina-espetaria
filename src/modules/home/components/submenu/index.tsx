import Link from "next/link";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaMoneyBill1, FaMotorcycle } from "react-icons/fa6";
import { GiBarbecue } from "react-icons/gi";
import styles from './style.module.css'

export function SubMenu() {
  return (
    <section className={styles.submenu}>
      <Link href="">
        <FaMoneyBill1 />
        <p>Ofertas</p>
      </Link>

      <Link href="">
        <GiBarbecue />
        <p>Kit Churrasco</p>
      </Link>

      <Link href="">
        <BiSolidFoodMenu />
        <p>Cardápio</p>
      </Link>

      <Link href="">
        <FaMotorcycle />
        <p>Entrega</p>
      </Link>
    </section>
  )
}