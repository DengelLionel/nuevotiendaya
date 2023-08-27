import Link from 'next/link'
import React from 'react'

export default function Cta() {
  return (
    
    <section className="cta-banner-wrapper">
        <div className="container">
            <div className="cta-banner style-2 text-white">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
                        <div className="cta-contents">
                            <h2 className="fs-1">¿Listo para comenzar tu viaje de comercio electrónico? </h2>
                            <p className="fs-3"> ¡Contáctanos hoy mismo y comienza a construir tu tienda en línea con Crea Tienda Ya! </p>
                            <Link href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".3s"><img src="https://res.cloudinary.com/darps1cta/image/upload/v1693007819/creatiendaya/contactanos-por-whatsapp-shopify_kn10ef.png" className='w-50' alt="" /></Link>
                            <Link href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".3s"><img src="https://res.cloudinary.com/darps1cta/image/upload/v1693007819/creatiendaya/formulario-contacto-shopify_fevep0.png" className='w-50' alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="white-arrow-icon d-none d-md-block  wow fadeInDown" data-wow-delay=".8s">
                    <img src="/img/icons/white-arrow-icon.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
