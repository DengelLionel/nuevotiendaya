import dynamic from "next/dynamic";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function ContentOne() {
	const [isOpen, setOpen] = useState(false);
	return (
		<section className="promo-content-block fix section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-12">
						<div className="video-cta">
							<img src="/img/home2/video-banner.jpg" alt="" />
							<div className="video-play-btn" onClick={() => setOpen(true)}>
								<BsFillPlayFill />
							</div>

							<ModalVideo
								channel="youtube"
								autoplay
								isOpen={isOpen}
								videoId="E1xkXZs0cAQ"
								onClose={() => setOpen(false)}
							/>
						</div>
					</div>
					<div className="col-xl-6 col-12 ps-xl-5 mt-5 mt-xl-0 ">
						<div className="block-contents ms-xl-5">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">La historia detrás de cómo se fundó nuestra empresa</h2>
								<p className="wow fadeInUp pt-15" data-wow-delay=".3s">
								Es nuestra experiencia la que nos equipa, nuestras emociones las que nos impulsan y nuestra creatividad
eso nos distingue.
								</p>
								<p className="mt-3">
								Para ayudar a mantener a nuestros clientes enfocados en el complejo mundo del ecommerce, creamos
campañas integradas digitales. Creemos que las pequeñas empresas crean más
único lugar atractivo y significativo para trabajar.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
