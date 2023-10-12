

import { BsShop } from "react-icons/bs";
import { FaShopify,FaLaptopCode } from "react-icons/fa";

export default function FeaturesOne() {
	return (
		<section className="our-best-features-wrapper section-padding">
			<div className="container">
				<div className="col-xl-8 offset-xl-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h2>¿Por qué elegir a "Crea tienda ya"?</h2>
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
								<FaLaptopCode />
							</div>
							<h3>Expertos en programación web</h3>
							<p>Tu tienda lista con tus requerimientos.</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon3">
								<BsShop />
							</div>
							<h3>Tienda a tu medida</h3>
							<p>Diseñomos tu tienda según tu nicho</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
