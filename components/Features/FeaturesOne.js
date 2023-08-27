import { TiSocialFacebook } from "react-icons/ti";

import { BsShop } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";

export default function FeaturesOne() {
	return (
		<section className="our-best-features-wrapper section-padding">
			<div className="container">
				<div className="col-xl-8 offset-xl-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h2>¿Por qué escoger "Crea tienda ya"?</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon1">
								<FaShopify /> 
							</div>
							<h3>Especialistas en Shopify y WooCommerce</h3>
							<p>Expertos en plataformas líderes de comercio electrónico.</p>
							
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon2">
								<TiSocialFacebook />
							</div>
							<h3>Social Media Friendly</h3>
							<p>Tu tienda lista para conectar con tus redes sociales.</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon3">
								<BsShop />
							</div>
							<h3>Tienda a tu medida</h3>
							<p>Nos adaptamos a lo que necesitas, no al revés.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
