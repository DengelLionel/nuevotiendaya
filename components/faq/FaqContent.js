import Accordion from "../Accordion/Accordion";

export const faqsData = [
	{
	  id: 1,
	  question: "¿Cómo puedo comenzar a crear una tienda virtual?",
	  answer: "Para crear una tienda virtual con nosotros, primero debes registrarte en nuestro sitio web y seleccionar el plan que mejor se adapte a tus necesidades. Luego, sigue los pasos de configuración que te guiaremos a través del proceso de creación de tu tienda en línea.",
	},
	{
	  id: 2,
	  question: "¿Qué opciones de pago aceptan?",
	  answer: "Aceptamos una amplia variedad de métodos de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias. También ofrecemos integraciones con pasarelas de pago populares como PayPal y Stripe para facilitar las transacciones en tu tienda virtual.",
	},
	{
		id: 3,
		question: "¿Ofrecen servicios de diseño web personalizado?",
		answer: "Sí, ofrecemos servicios de diseño web personalizado para adaptarnos a las necesidades específicas de tu negocio. Nuestro equipo de diseñadores puede trabajar contigo para crear una tienda virtual única y atractiva que refleje tu marca.",
	  },
	{
  id: 4,
  question: "¿Cuánto tiempo toma desarrollar una tienda virtual con ustedes?",
  answer: "El tiempo de desarrollo de una tienda virtual puede variar según la complejidad del proyecto y tus requisitos específicos. En general, trabajaremos contigo para establecer un cronograma que se ajuste a tus necesidades. Las tiendas virtuales más simples pueden estar listas en unas pocas semanas, mientras que proyectos más grandes pueden llevar más tiempo. Contáctanos para obtener un estimado más preciso basado en tu caso particular.",
},

	{
	  id: 5,
	  question: "¿Qué tipo de soporte ofrecen?",
	  answer: "Ofrecemos soporte técnico en línea y recursos de ayuda para responder a tus preguntas y resolver problemas. También tenemos un equipo de soporte dedicado que puede ayudarte con consultas más específicas sobre tu tienda virtual.",
	},
	{
	  id: 6,
	  question: "¿Cuál es el costo de usar sus servicios?",
	  answer: "Tenemos una variedad de planes de precios disponibles, desde opciones básicas hasta planes más avanzados con características adicionales. Puedes encontrar información detallada sobre nuestros precios en nuestro sitio web.",
	},
  ];
  

export default function FaqContent() {
	return (
		<section className="faq-ask-wrapper section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents fw500">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>Si quieres saber algo, pregúntanos</h2>
						</div>
					</div>
				</div>

				<div className="row faq-ask justify-content-center align-items-center">
  <div className="col-lg-6 col-md-12 col-12">
    <div className="faq-accordion  ">
      <Accordion content={faqsData} />
    </div>
  </div>
</div>


			</div>
		</section>
	);
}
