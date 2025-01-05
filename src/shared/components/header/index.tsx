'use client'

import Image from "next/image";
import styles from './style.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMedia } from "../../hooks/useMedia";

export function Header() {
  const [mobileIsOpen, setMobileIsOpen] = useState(false)
  const isMobile = useMedia('(max-width: 1042px)')

  useEffect(() => {
    if(!isMobile) {
      setMobileIsOpen(false)
    }
  }, [isMobile])

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={105}
          height={110}
          alt="Divino Espetaria"
        />
      </Link>

      <nav className={styles.nav}>
        <div className={`${styles.hamburger} ${mobileIsOpen ? styles.open : ''}`} onClick={() => setMobileIsOpen(prevState => !prevState)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <ul className={mobileIsOpen ? styles.active : undefined}>
          <li>
            <Link href="">
              Lojas
            </Link>
          </li>

          <li>
            <Link href="">
              Preços
            </Link>
          </li>

          <li>
            <Link href="">
              Ofertas
            </Link>
          </li>

          <li>
            <Link href="">
              Kit Churrasco
            </Link>
          </li>

          <li>
            <Link href="">
              Churrasqueiras
            </Link>
          </li>

          <li>
            <Link href="">
              Revenda
            </Link>
          </li>

          <li>
            <Link href="">
              Artigos
            </Link>
          </li>

          <li>
            <Link href="">
              Distribuidora
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}