import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
export default function CallToAction() {
  return (
		<section className="cta-banner-wrapper style-1 section-padding pt-0">
			<div className="container">
				<div className="cta-banner text-white">
					<div className="row">
						<div className="col-xxl-6 text-center text-xxl-start offset-xxl-1">
							<div className="cta-contents">
								<h2 className="wow fadeInUp">Potencia tu tienda online existente:</h2>
								<p className="wow fadeInUp" data-wow-delay=".3s">
								Mejoramos tu tienda online con un rediseño espectacular. Escribenos para más información.
								</p>
								<div className="d-flex justify-content-center">
  <Link href="/contactanos" className="app-download-btn wow fadeInUp" data-wow-delay=".6s">
    <Image
      src="https://res.cloudinary.com/darps1cta/image/upload/v1693007819/creatiendaya/formulario-contacto-shopify_fevep0.png" // Ruta de la imagen en tu proyecto
      alt="Formulario contacto"
      width={196} // Define el ancho deseado
      height={60} // Define la altura deseada
    />
  </Link>
  <Link href="https://wa.link/v7t6ed" target='_blank' className="app-download-btn wow fadeInUp" data-wow-delay=".8s">
    <Image
      src="https://res.cloudinary.com/darps1cta/image/upload/v1693007819/creatiendaya/contactanos-por-whatsapp-shopify_kn10ef.png" // Ruta de la imagen en tu proyecto
      alt="Contactanos al WhatsApp"
      width={196} // Define el ancho deseado
      height={60} // Define la altura deseada
    />
  </Link>

</div>
							</div>
						</div>
						<div className="col-xxl-5 pe-xxl-5">
							<div className="cta-mobile-app wow fadeInUp " data-wow-delay=".4s" data-wow-duration="1.2">
								<div className='d-block d-lg-none'>
								<Image width={300} height={300}  src="https://res.cloudinary.com/darps1cta/image/upload/v1693014550/creatiendaya/cta-right-img_dbkme9.png" alt="Rediseñamos tu tienda online" />
								</div>
								<div className='d-none d-lg-block'>
								<Image width={360} height={400}  src="https://res.cloudinary.com/darps1cta/image/upload/v1693014550/creatiendaya/cta-right-img_dbkme9.png" alt="Rediseñamos tu tienda online" />
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
