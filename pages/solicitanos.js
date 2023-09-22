import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
import {FaShoppingBag} from 'react-icons/fa'
import {GiShoppingBag} from 'react-icons/gi'
import {SiGooglemeet} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import Head from "next/head";
const solicitanos = () => {
    useEffect(() => {
        // Deshabilitar el scroll vertical al montar el componente
        document.body.style.overflowY = 'hidden';
        
        // Habilitar el scroll vertical al desmontar el componente
        return () => {
          document.body.style.overflowY = 'auto';
        };
      }, []);
    
  return (
    <>
    <Head>
				<title>Desarrollamos y/o mejoramos tu tienda online</title>
				<meta name="description" content="En Crea Tienda Ya, desarrollamos y mejoramos tu tienda online con amplia experiencia en programación web en tiendas online"/>
				<meta name="keywords" content="crear tienda online,desarrollamos,mejoramos, tienda,tienda virtual, tiendas virtuales peru,tiendas virtuales gratis, tienda online, ecommerce, tienda en línea, creación de tiendas, negocio en línea,dropshipping"/>
				<meta name="robots" content="index, follow"/>
			</Head>
    
    <div className="scroll-disabled"> {/* Agrega una clase única al elemento contenedor */}
      <div className="container solicitanos-container">
        <div className="contenedor-solicitado">
          <div className="col-md-6 col-lg-3">
            <Link className="boton-solicita1" href="https://wa.link/vhwbh5">
              Mejora tu tienda
              <FaShoppingBag style={{width:20,height:20}}/>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link className="boton-solicita2" href="https://wa.link/zuvuho">
              Crea tu tienda
              <GiShoppingBag style={{width:20,height:20}}/>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link className="boton-solicita3" href="https://creatiendaya.com/contactanos">
              Solicita una consulta
              <SiGooglemeet style={{width:20,height:20}}/>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link className="boton-solicita4" href="https://whatsapp.com/channel/0029Va4Mv1R7dmeZFcIhxn3C">
              Aprende más
              <IoLogoWhatsapp style={{width:20,height:20}}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default solicitanos