import Link from "next/link";
export default function ContentBlockOne() {
	return (
		<section className="content-block section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
						<div className="block-img wow fadeInLeft" data-wow-duration="1.1s">
							<img src="https://res.cloudinary.com/darps1cta/image/upload/v1693019847/creatiendaya/redes-sociales-crea_1_yh8cmi.png" alt="" />
						</div>
					</div>
					<div className="col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5">
						<div className="block-contents ms-xl-3 mt-5 mt-lg-0">
							<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h2>Elevate sobre el ruido de las redes sociales</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
							¿Instagram, Facebook o TikTok?
							</p>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
							Desarrolla una estrategia robusta en medios digitales para propulsar tu negocio a nuevas alturas.
							</p>
							<Link
								href="/servicios/estrategia-de-marketing-digital-y-seo"
								className="theme-btn mt-30 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".6s"
							>
								Empezar ahora!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
