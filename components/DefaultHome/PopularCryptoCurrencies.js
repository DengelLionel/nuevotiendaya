import Link from "next/link";
import { FaShopify} from "react-icons/fa";
import { MdDesignServices} from 'react-icons/md'

import { SiWoocommerce } from "react-icons/si";
export default function PopularCryptoCurrencies() {
	return (
		<section className="crypto-currencies-wrapper fix section-black section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents text-white">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>Nuestros servicios</h2>
						</div>
					</div>
				</div>
				<div className="nice-arrow-icon d-none d-lg-block wow fadeInDown" data-wow-duration="1.2s">
					<img src="img/icons/nice-arrow-down.svg" alt="" />
				</div>

				<div className="row">
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".2s"
						>
							<div className="currency-header">
								<div className="icon icon1">
									<FaShopify className="icon-bitcoin" />
								</div>
								<div className="currency-name">
									<h6>Desarrollo de tiendas online</h6>
									<span>Shopify</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Te ayudamos a crear tu tienda online más personalizado.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
							
								<div className="currency-buy-now">
									<Link href="https://wa.link/aihr3u">Cotizar ahora!</Link>
								</div>
								<div className="text-success">
									<Link href="/servicios/desarrollo-de-tiendas-en-linea-shopify">Ver más</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".4s"
						>
							<div className="currency-header">
								<div className="icon icon2">
								<FaShopify className="icon-bitcoin" />
								</div>
								<div className="currency-name">
									<h6>Diseño de tienda online</h6>
									<span>Shopify</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Te ayudamos a diseñar con un diseño auténtico tu tienda online.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
							
								<div className="currency-buy-now">
								<Link href="https://wa.link/aihr3u">Cotizar ahora!</Link>
								</div>
								{/* <div className="text-success">
									<Link href="/servicios/desarrollo-de-tiendas-online-woocommerce">Ver más</Link>
								</div> */}
							</div>
						</div>
					</div>
			
			
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".3s"
						>
							<div className="currency-header">
								<div className="icon icon5">
									<MdDesignServices />
								</div>
								<div className="currency-name">
									<h6>Diseño gráfico para tu ecommerce</h6>
									<span>Banners, logos, posts, feeds.</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Creamos diseños para tu tienda online
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
							
								<div className="currency-buy-now">
									<Link href="https://wa.link/u1dzjp">Cotizar ahora!</Link>
								</div>
								<div className="text-success">
									<Link href="/servicios/diseno-grafico-orientado-a-ecommerce">Ver más</Link>
								</div>
							</div>
						</div>
					</div>
				
				</div>
			</div>
		</section>
	);
}
