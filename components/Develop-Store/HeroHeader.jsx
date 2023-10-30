import React from 'react';
import Image from "next/image";
import BlackFriday from "/public/images/black_friday.png";
import Partners from "/public/images/partners.svg";
import styles from './style/HeroHeader.module.css'; 

export const HeroHeader = () => {
  return (
  <div className={styles.main_container}>
      <div className={styles.grid_container}>
        <h1 className={styles.title}>
          Diseño de tiendas online Shopify
        </h1>

        <p className={styles.subtitle}>
          Somos expertos diseñando tiendas online, somos
        </p>

        <Image className={styles.partner_img} src={Partners} alt="Partners Logo" />
        <Image className={styles.black_friday_img} src={BlackFriday} alt="Black Friday Image" />
      </div>
    </div>
  )
}
