import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Accordion from "../Accordion/Accordion";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
export const faqsData = [
	{
		id: 1,
		question: "¿Necesito tener habilidades técnicas para tener una tienda online?",
		answer: "No, en 'Crea Tienda Ya' manejamos todos los aspectos técnicos de la configuración y mantenimiento de tu tienda online.",
	},
	{
		id: 2,
		question: "¿Qué plataformas de comercio electrónico utilizas para crear las tiendas online?",
		answer: "Nos especializamos en crear tiendas online en Shopify y WooCommerce, dos de las plataformas de comercio electrónico más populares y confiables.",
	},
	{
		id: 3,
		question: "¿Puedo personalizar mi tienda online a mi gusto?",
		answer: "Absolutamente, trabajamos contigo para asegurarnos de que tu tienda online refleje la personalidad de tu marca y satisfaga tus necesidades comerciales.",
	},
];
export default function FaqWithVideoModal() {
	const [isOpen, setOpen] = useState(false);

	return (
		<section className="faq-video-block section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 pe-xl-5 col-12">
						<div
							className="faq-video-wrapper me-xl-4 d-flex justify-content-center align-items-center bg-cover bg-center"
							style={{ backgroundImage: "url(https://res.cloudinary.com/dh9etf988/image/upload/v1697059311/creatiendaya/faqss_ggvif0.png)" }}
						>
							<div className="video-play-btn" onClick={() => setOpen(true)}>
								<BsFillPlayFill />
							</div>
							<div className="arrow-icon">
								<img src="img/icons/video-arrow.svg" alt="" />
							</div>

							<ModalVideo
								channel="youtube"
								autoplay
								isOpen={isOpen}
								videoId="8aH_9y_63Wc"
								onClose={() => setOpen(false)}
							/>
						</div>
					</div>
					<div className="col-xl-6 ps-xl-5 col-12 mt-xl-0 mt-5">
						<div className="block-contents ms-xl-4">
							<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h2>Si quieres saber algo, pregúntanos</h2>
							</div>
						</div>
						<div className="faq-accordion ms-xl-4 me-xl-4">
							<div className="accordion" id="mainaccordion">
								<Accordion content={faqsData} />
							</div>
						</div>
						<div
							className="faq-bottom ms-xl-4 mt-4 wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".9s"
						>
							<span>¿Aún tienes preguntas?</span>
							<Link href="/contactanos">
							Ponte en contacto
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
