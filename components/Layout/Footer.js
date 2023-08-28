import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link className="footer-logo d-block" href="/">
									
											<img src="https://res.cloudinary.com/darps1cta/image/upload/v1693100399/LOGO_CTY_blanco_horizontal_idlbrf.png" alt="crea tienda ya - logo" />
									
									</Link>
									<p>
										Crea tienda ya E.I.R.L.  .
									Tu solución completa para el comercio en línea. Desarrollamos tiendas virtuales a medida para tu negocio, potenciando tus ventas en el mundo digital.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".2s">
								<div className="widget-title">
									<h5>Compañia</h5>
								</div>
								<ul>
									<li>
										<Link href="/conocenos">
											Conocenos
										</Link>
									</li>
									<li>
										<Link href="/contactanos">
											Contactanos
										</Link>
									</li>
									<li>
										<Link href="/politica-de-privacidad">
										Politica de privacidad
										</Link>
									</li>
									<li>
										<Link href="terminos-y-condiciones">
										Terminos y condiciones
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
								<div className="widget-title">
									<h5>Servicios</h5>
								</div>
								<ul>
								
									<li>
										<Link href="/servicios">
										Nuestros servicios
										</Link>
									</li>
									{/* <li>
										<Link href="#">
										Locker security
										</Link>
									</li> */}
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
								<div className="widget-title">
									<h5>Recursos</h5>
								</div>
								<ul>
									{/* <li>
										<Link href="#">
											Integracion planes
										</Link>
									</li> */}
									<li>
										<Link href="https://blog-y-mas.creatiendaya.com/">
											Blog
										</Link>
									</li>
									<li>
										<Link href="#">
										Soporte premium
										</Link>
									</li>
									<li>
										<Link href="#">
										Nuestros productos
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 2023{" "}
								<Link href="#">
								Crea tienda ya
								</Link>{" "}
								Todos los derechos reservados
							</p>
						</div>
						<div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<Link href="https://www.facebook.com/creatiendaya">
							
									<FaFacebookF />
							
							</Link>
						
							<Link href="https://www.instagram.com/creatiendaya">
							
									<FaInstagram />
							
							</Link>
						{/* 	<Link href="#">
							
									<FaLinkedinIn />
							
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
