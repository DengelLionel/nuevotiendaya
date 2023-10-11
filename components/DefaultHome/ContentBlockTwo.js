import StepAccordion from "../Accordion/StepAccordion";

const data = [
	{
		id: 1,
		title: "Conceptualización Personalizada",
		body: "Comenzamos por entender tus metas y visión. Nuestro equipo de expertos diseña una estrategia personalizada para tu tienda online, ya sea en Woocommerce, Shopify o con código personalizado.",
	},
	{
		id: 2,
		title: "Desarrollo y Personalización Avanzada",
		body: "Nuestros desarrolladores convierten la estrategia en realidad. Creamos una tienda online única que refleje tu marca y atraiga a tus clientes. Aprovechamos las ventajas de Woocommerce y Shopify o creamos soluciones personalizadas según tus necesidades.",
	},
	{
		id: 3,
		title: "Lanzamiento y Optimización Continua",
		body: "Lanzamos tu tienda online con éxito, pero no nos detenemos ahí. Realizamos un seguimiento constante, ajustamos estrategias y optimizamos para garantizar el crecimiento sostenible de tu negocio en línea.",
	},
];
export default function ContentBlockTwo() {
	return (
		<section className="content-block fix faq-wrapper section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-xl-5 mt-5 mt-lg-0 order-2 order-lg-1">
						<div className="block-contents">
							<div className="section-title wow fadeInUp" data-wow-duration="1s">
								<h2>Nuestro proceso de desarrollo de tiendas:</h2>
							</div>
						</div>
						<div className="step-accordion">
							<StepAccordion content={data} />
						</div>
					</div>
					<div className="col-lg-6 col-xl-6 offset-xl-1 pe-xl-3 col-12 order-1 order-lg-2">
						<div
							className="block-img ms-xl-5 wow fadeInRight"
							data-wow-duration="1.2s"
							data-wow-delay=".3s"
						>
							<img src="https://res.cloudinary.com/darps1cta/image/upload/v1693019847/creatiendaya/servicios-crea-tienda-ya_ko50qc.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
