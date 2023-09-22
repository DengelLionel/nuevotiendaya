import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide ">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-contents">
								<h1 className="text-white">Potencia tu tienda online con nuestra experiencia en ecommerce</h1>
								<p className="text-white">
								Te ayudamos a desarrollar o mejorar tu tienda online. No importa si es shopify o woocommerce.
								</p>
								<Link href="/contactanos" className="btn-verde">
   Cotizar ahora !
  </Link>
								<div className="d-flex justify-content-center">

								

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
