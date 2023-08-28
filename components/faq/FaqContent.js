import Accordion from "../Accordion/Accordion";

export const faqsData = [
	{
	  id: 1,
	  question: " ¿Cómo puedo comenzar a trabajar con Crea Tienda Ya para desarrollar mi tienda en línea?",
	  answer: "Comienza tu proyecto de tienda en línea con nosotros en tres simples pasos: Contacto Inicial: Comunícate con nosotros para discutir tus necesidades y objetivos.Propuesta Personalizada: Te proporcionamos una propuesta detallada adaptada a tu proyecto. Desarrollo y Lanzamiento: Nuestro equipo trabaja en el diseño y desarrollo de tu tienda en línea y la lanzamos cuando estés listo.Estamos aquí para hacer que tu tienda en línea sea un éxito. ¡Contáctanos hoy mismo!",
	},
	{
	  id: 2,
	  question: " ¿Qué opciones de pago puedo ofrecer en mi tienda virtual?",
	  answer: "Tienes flexibilidad para ofrecer una amplia variedad de opciones de pago en tu tienda en línea. Puedes aceptar tarjetas de crédito, débito, transferencias bancarias y otros métodos según tus preferencias y las de tus clientes. También podemos ayudarte a integrar pasarelas de pago populares como PayPal y Stripe para facilitar las transacciones en tu tienda virtual. ¡Tú decides qué opciones se adaptan mejor a tu negocio!",
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
	  answer: "Ofrecemos soporte técnico en línea planes solo anuales y recursos de ayuda para responder a tus preguntas y resolver problemas. También tenemos un equipo de soporte dedicado que puede ayudarte con consultas más específicas sobre tu tienda virtual.",
	},
	{
	  id: 6,
	  question: " ¿Cuánto cuesta utilizar sus servicios para una tienda virtual?",
	  answer: "El costo de nuestros servicios varía según tus necesidades específicas. No ofrecemos un precio fijo ya que cada proyecto es único y los requisitos pueden diferir. Contamos con una variedad de planes de precios, desde opciones básicas hasta planes más avanzados con características adicionales. Te recomendamos visitar nuestro sitio web para obtener información detallada sobre los precios y, si deseas, podemos discutir tus requerimientos para proporcionarte un presupuesto personalizado que se adapte a tu proyecto específico.",
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
