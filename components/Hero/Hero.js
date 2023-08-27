import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-contents">
								<h1>Impulsa tu Negocio con Nuestra Experiencia en Tiendas Online: </h1>
								<p>
								Woocommerce, Shopify y Más. En 'Crea Tienda Ya', somos tus aliados para llevar tu negocio al mundo digital. Nuestro equipo de expertos te guiará a través de la creación de tu tienda online, ya sea en Woocommerce, Shopify o con un enfoque de código personalizado. Da vida a tu visión en minutos y experimenta un crecimiento acelerado con nuestras soluciones personalizadas.
								</p>

								<div className="d-flex justify-content-center">
  <Link href="#" className=" mx-2 mb-2">
    <img
      src="https://res.cloudinary.com/darps1cta/image/upload/v1693007819/creatiendaya/contactanos-por-whatsapp-shopify_kn10ef.png"
      alt="contactanos al WhatsApp"
      className="w-50"
    />
  </Link>
  <Link href="/contactanos" className="mx-2 mb-2">
    <img
      src="https://res.cloudinary.com/darps1cta/image/upload/v1693007819/creatiendaya/formulario-contacto-shopify_fevep0.png"
      alt="Formulario contacto"
      className="w-50"
    />
  </Link>

</div>

								
							</div>
						</div>
						<div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-mobile d-block d-lg-none mt-5">
								<Image width={320} height={300} src="https://res.cloudinary.com/darps1cta/image/upload/v1693009590/creatiendaya/mobile-store_vlulwm.png" alt="crea tienda ya" />
							</div>
							<div className="hero-mobile d-none d-lg-block mt-xl-0 ">
								<Image width={350} height={500} src="https://res.cloudinary.com/darps1cta/image/upload/v1693009590/creatiendaya/mobile-store_vlulwm.png" alt="crea tienda ya" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
