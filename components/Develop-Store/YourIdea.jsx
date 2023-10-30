import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import PartnerPhoto from "/public/images/dengel.png";
import ArrowRight from "/public/images/arrow_right.svg";
import styles from './style/YourIdea.module.css'; 


export const YourIdea = () => {
  const router = useRouter();

  const handleButtonClick = () => router.push('#');

  return (
    <section className={styles.main_container}>
      <div className={styles.flex_container}>
        <div className={styles.submain_container}>
          <h1 className={styles.title}>
            Diseño de tienda online a código shopify para mejorar tu visibilidad online
          </h1>

          <div className={styles.grid_container}>
            <Image className={styles.partner_photo} src={PartnerPhoto} alt="Foto de Dengel" />
            <p className={styles.partner_title}>Dengel - Shopify partner</p>
            <p className={styles.partner_subtitle}>¿Quieres un diseño personalizado para tu tienda online?</p>
          </div>

          <div className={styles.button_container}>
            <button className={styles.button} onClick={handleButtonClick}>
              Cuéntanos tu ídea
            </button>
            <Image className={styles.button_icon} src={ArrowRight} alt="Flecha Derecha" />
          </div>
        </div>

        {/* NOTE: ==============  ¡Beneficios Aqui! ================ */}
        {/* ========================================================== */}
        <div 
          style={{ 
            height: 'auto', border: '2px dashed transparent', 
            textAlign: 'center', color: 'green', maxWidth: '200px',
          }}
        >
          {/* Beneficios */}
        </div>
      </div>

    </section>
  )
}

