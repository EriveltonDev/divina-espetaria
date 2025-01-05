import { FaWhatsapp } from "react-icons/fa6";
import styles from './style.module.css'

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5511987144046?text=Olá,%20gostaria%20de%20fazer%20um%20pedido"
      target="_blank"
      referrerPolicy="no-referrer"
      className={styles.whatsapp}
    >
      <FaWhatsapp className={styles.whatsapp__icon}/>
      <p>Faça seu pedido</p>
    </a>
  )
}