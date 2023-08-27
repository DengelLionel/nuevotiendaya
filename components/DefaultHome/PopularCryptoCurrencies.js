import Link from "next/link";
import { FaShopify, FaGoogle} from "react-icons/fa";
import {MdWeb, MdDesignServices} from 'react-icons/md'
import {BsFillFileCodeFill} from 'react-icons/bs'
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
									<h6>Desarrollo de tiendas en línea</h6>
									<span>Shopify</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Te ayudamos a crear tu tienda online.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
							
								<div className="currency-buy-now">
									<Link href="#">Ver planes</Link>
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
									<SiWoocommerce className="icon-eth" />
								</div>
								<div className="currency-name">
									<h6>Desarrollo de tiendas en línea</h6>
									<span>WooCommerce</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Te ayudamos a crear tu tienda online sin necesidad de pagar mensualidad.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
							
								<div className="currency-buy-now">
									<Link href="#">Ver planes</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".6s"
						>
							<div className="currency-header">
								<div className="icon icon3">
									<MdWeb className="" />
								</div>
								<div className="currency-name">
									<h6>Creación de páginas web personalizadas</h6>
									<span>Diseño + desarrollo</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Diseñamos sitios web profesionales personalizados a tus necesidades.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								
								<div className="currency-buy-now">
									<Link href="#">Ver planes</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".1s"
						>
							<div className="currency-header">
								<div className="icon icon4">
									<BsFillFileCodeFill/>
								</div>
								<div className="currency-name">
									<h6>Desarrollo web (creación paginas web) </h6>
									<span>A código</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Desarrollamos soluciones web personalizadas desde cero para cumplir tus objetivos específicos.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
							
								<div className="currency-buy-now">
									<Link href="#">Ver planes</Link>
								</div>
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
									<h6>Diseño gráfico</h6>
									<span>Banners, logos, etc.</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Creamos diseños atractivos y funcionales para potenciar tu marca en el entorno digital.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
							
								<div className="currency-buy-now">
									<Link href="#">Ver planes</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".6s"
						>
							<div className="currency-header">
								<div className="icon icon6">
									<FaGoogle/>
								</div>
								<div className="currency-name">
									<h6>Estrategia de marketing digital y SEO</h6>
									<span>Analisis y optimización web</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Creamos estrategias personalizadas para aumentar tu visibilidad online y atraer a más clientes.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								
								<div className="currency-buy-now">
									<Link href="#">Ver planes</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
