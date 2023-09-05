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
								<h1>Potencia tu negocio con nuestra experiencia en tiendas online</h1>
								<p>
								Nuestro equipo de expertos te guiará a través de la creación de tu tienda online
								</p>

								<div className="d-flex justify-content-center">

  <Link href="/contactanos" className="mx-2 mb-2">
    <Image
      src="https://res.cloudinary.com/darps1cta/image/upload/v1693007819/creatiendaya/formulario-contacto-shopify_fevep0.png"
      alt="Formulario contacto"
     width={169}
	 height={60}
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
