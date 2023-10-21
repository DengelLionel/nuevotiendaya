import { useToSlug } from "../../context/useConvierteLink";
import { FaShopify, FaGoogle} from "react-icons/fa";
import {MdWeb, MdDesignServices} from 'react-icons/md'
import {BsFillFileCodeFill, BsShop} from 'react-icons/bs'

import { SiWoocommerce } from "react-icons/si";
export const servicesData = [
	{
		id: 1,
		title: "Desarrollo de tiendas online shopify",
		link:useToSlug("Desarrollo de tiendas online shopify"),
		seotitle:"Desarrollo de Tiendas en Línea Shopify - Crea Tienda Ya: Tu Socio en eCommerce",
		seodescription:"Descubre nuestros servicios de desarrollo de tiendas en línea Shopify en Crea Tienda Ya. Creamos tiendas personalizadas en la plataforma Shopify para ayudarte a alcanzar el éxito en el eCommerce. Desde la configuración inicial hasta la integración de aplicaciones, estamos aquí para hacer que tu tienda en línea destaque en Shopify.",
		seokeywords:"desarrollo de tiendas en línea Shopify, Shopify, tiendas personalizadas, eCommerce, configuración Shopify, integración de aplicaciones",
		content: "Te ayudamos a crear tu tienda online.",
		icon:  FaShopify,
		descripcion: "Nuestro servicio de Desarrollo de Tiendas en Línea Shopify está diseñado para llevar tu negocio al mundo del comercio electrónico con una tienda en línea de alto rendimiento y atractivo. Convierte tus ideas en una realidad digital y aprovecha al máximo la versatilidad de Shopify.",
		imagen:"https://res.cloudinary.com/darps1cta/image/upload/v1692927813/creatiendaya/desarrollo_tiendas_shopify_pcmuyz.jpg",
		loQueOfrecemos: [
		 {title:"Diseño Personalizado",
		  descripcion:"Creamos tiendas Shopify a medida que reflejen tu marca y atraigan a tus clientes ideales."
		},
		  {title:"Configuración Integral",
		  descripcion:"Configuramos y personalizamos todas las características de tu tienda, desde la página de inicio hasta el proceso de compra.",
			},
		{
		 title:"Integración de Aplicaciones",
		 descripcion:"Potenciamos tu tienda con aplicaciones Shopify para mejorar la funcionalidad y la experiencia del usuario."
		},
		{
		title:"Optimización SEO",
		  descripcion:"Optimizamos tu tienda para motores de búsqueda, lo que te ayuda a destacar en las búsquedas en línea.",
		},
		{
		  title:"Soporte Técnico Experto",
		  descripcion:"Ofrecemos asistencia continua y soluciones rápidas para cualquier problema técnico que surja."
		}
		],
		procesoDeTrabajo: [
			{
				title:"Consulta Inicial",
				descripcion:"Nos reunimos contigo para comprender tus objetivos y necesidades específicas."
			},
		  {
			title:"Diseño y Desarrollo",
			descripcion: "Creamos y personalizamos tu tienda, incorporando tu visión y garantizando la funcionalidad."
		  },
		  {
			title:"Pruebas y Optimización",
			descripcion:"Probamos exhaustivamente tu tienda para garantizar un funcionamiento perfecto y la máxima eficiencia."
		  },
		  {
			title:"Entrega y Soporte",
			descripcion:"Entregamos tu tienda lista para funcionar y proporcionamos soporte continuo."
		  }
		 	  
		],
		precios: "Los precios varían según el alcance y la complejidad del proyecto. Contáctanos para una cotización personalizada.",
		porQueElegirnos: [
			{
				title:"Experiencia Comprobada",
				descripcion: "Hemos ayudado a numerosas empresas a tener éxito en línea con tiendas Shopify."
			  },
			  {
				title:"Compromiso con la Calidad",
				descripcion: "Nos enorgullece ofrecer resultados de alta calidad y atención al cliente excepcional."
			  },
			  {
				title:"Enfoque Personalizado",
				descripcion: "Cada proyecto es único, y nos adaptamos a tus necesidades específicas."
			  }
		  
		],
		testimonios:null,
		  cta:{
			pregunta:"¿Listo para comenzar tu viaje de comercio electrónico?",
			respuesta:"¡Contáctanos hoy mismo y comienza a construir tu tienda en línea con Crea Tienda Ya!",
			whatsapp:"https://wa.link/aihr3u"
		  }
	},
	{
		id: 2,
		title: "Desarrollo de tiendas online woocommerce",
		link:useToSlug("Desarrollo de tiendas online woocommerce"),
		seotitle: "Desarrollo de Tiendas online WooCommerce - Crea Tienda Ya",
		seodescription: "Descubre nuestros servicios de desarrollo de tiendas online WooCommerce en Crea Tienda Ya. Creamos tiendas personalizadas en la plataforma WooCommerce para ayudarte a alcanzar el éxito de tu emprendimiento. Desde la configuración inicial hasta la integración de extensiones.",
		seokeywords: "desarrollo de tiendas online WooCommerce, Woocommerce, tiendas personalizadas,creación de tiendas online woocommerce,mejorar woocommerce, integración de extensiones,tienda virtual woocommerce, crea tienda online",
		
		content: "Te ayudamos a crear tu tienda online sin necesidad de pagar mensualidad.",
		icon: SiWoocommerce,
		descripcion: "Nuestro servicio de Desarrollo de Tiendas online WooCommerce es la solución perfecta para llevar tu negocio al mundo digital con una tienda virtual poderosa y atractiva. En Crea Tienda Ya, estamos comprometidos a convertir tus ideas en una realidad digital, brindándote una plataforma de comercio electrónico flexible y personalizada.",
		imagen:"https://res.cloudinary.com/darps1cta/image/upload/v1692927814/creatiendaya/Desarrollo_de_tiendas_en_l%C3%ADnea_woocommerce_brqjyi.jpg",
		loQueOfrecemos: [
			{
				title:"Diseño Personalizado",
				descripcion: "Creamos tiendas WooCommerce únicas que se adaptan a la identidad de tu marca y atraen a tus clientes ideales."
			  },
			  {
				title:"Configuración Integral",
				descripcion: "Nos encargamos de la configuración completa de tu tienda, desde la página de inicio hasta el proceso de compra, para que puedas centrarte en tu negocio."
			  },
			  {
				title:"Integración de Aplicaciones",
				descripcion: " Potenciamos tu tienda con extensiones de WooCommerce que mejoran la funcionalidad y la experiencia del usuario."
			  },
			  {
				title:"Optimización SEO",
				descripcion: "Optimizamos tu tienda para los motores de búsqueda, lo que te ayuda a destacar en las búsquedas en línea y atraer más tráfico."
			  },
			  {
				title:"Soporte Técnico Experto",
				descripcion: "Ofrecemos asistencia continua y soluciones rápidas para cualquier problema técnico que puedas enfrentar en tu tienda en línea."
			  }
		
			
		],
		precios: "Los precios varían según el alcance y la complejidad del proyecto. Contáctanos para obtener una cotización personalizada que se ajuste a tus necesidades.",
		procesoDeTrabajo: [
			{
				title:"Consulta Inicial",
				descripcion: "Nos reunimos contigo para comprender tus objetivos y necesidades específicas."
			  },
			  {
				title:"Diseño y Desarrollo",
				descripcion: "Creamos y personalizamos tu tienda, incorporando tu visión y garantizando la funcionalidad."
			  },
			  {
				title:"Pruebas y Optimización",
				descripcion: "Probamos exhaustivamente tu tienda para garantizar un funcionamiento perfecto y la máxima eficiencia."
			  },
			  {
				title:"Entrega y Soporte",
				descripcion: "Entregamos tu tienda lista para funcionar y proporcionamos soporte continuo para asegurarnos de que todo funcione sin problemas."
			  }
		  ],
		porQueElegirnos: [
			{
				title:"Experiencia Comprobada",
				descripcion: " Hemos ayudado a numerosas empresas a tener éxito en línea con tiendas WooCommerce."
			  },  
			  {
				title:"Compromiso con la Calidad",
				descripcion: " Nos enorgullece ofrecer resultados de alta calidad y atención al cliente excepcional."
			  },  
			  {
				title:"Enfoque Personalizado",
				descripcion: "Cada proyecto es único, y nos adaptamos a tus necesidades específicas para brindarte una solución a medida."
			  }
		],
		
		testimonios:[
			{
				testimonio:"Crea Tienda Ya transformó completamente nuestra presencia en línea. Su equipo hizo un trabajo excepcional en la creación de nuestra tienda WooCommerce.",
				cliente:"Sebastian",
				perfil:"https://res.cloudinary.com/darps1cta/image/upload/v1693371437/creatiendaya/sebastian_kmyqhr.jpg"
			},
			{
				testimonio:"El soporte técnico que recibimos de Crea Tienda Ya es inigualable. Siempre están disponibles para ayudarnos.",
				cliente:"Matias",
				perfil:"https://res.cloudinary.com/darps1cta/image/upload/v1693371423/creatiendaya/matias_t4z7a3.jpg"
			}
			
		],
		cta:{
			pregunta:"¿Listo para llevar tu negocio al siguiente nivel en línea?",
			respuesta:" ¡Contáctanos hoy mismo y comienza tu viaje hacia una tienda en línea de éxito!",
			whatsapp:"https://wa.link/3ggxg8"
		  }

	},
	
	{
		id: 3,
		title: "Diseño Gráfico Orientado a Ecommerce",
		link:useToSlug("Diseño Gráfico Orientado a Ecommerce"),
		seotitle: "Diseño Gráfico Orientado a eCommerce - Crea Tienda Ya: Imágenes que Impulsan tus Ventas",
seodescription: "Descubre nuestros servicios de diseño gráfico orientado a eCommerce en Crea Tienda Ya. Creamos imágenes y gráficos impactantes para tu tienda en línea. Desde banners y logotipos hasta imágenes de productos, estamos aquí para mejorar la apariencia de tu negocio en línea y aumentar tus ventas.",
seokeywords: "diseño gráfico eCommerce, imágenes para tiendas en línea, diseño de banners, logotipos para eCommerce, imágenes de productos, diseño gráfico impactante, aumentar ventas en línea",

		content: "	Creamos diseños atractivos y funcionales para potenciar tu marca en el entorno digital.",
		icon: MdDesignServices,
		descripcion:"Nuestro servicio de Diseño Gráfico Orientado a Ecommerce está diseñado específicamente para impulsar tu negocio en línea al siguiente nivel. En Crea Tienda Ya, comprendemos la importancia de la presentación visual en el comercio electrónico y estamos aquí para ayudarte a crear diseños atractivos y efectivos que conviertan visitantes en clientes.",
		imagen:"https://res.cloudinary.com/darps1cta/image/upload/v1693098785/creatiendaya/dise%C3%B1o-grafico-crea-tienda-ya_lknmwb.jpg",
		loQueOfrecemos: [
			{
				title:"Diseño de Producto Impactante",
				descripcion:"Creamos imágenes de producto que resaltan las características y beneficios de tus productos, aumentando las tasas de conversión."
			  },
			  {
				title:"Optimización para Tiendas en Línea",
				descripcion:"Diseñamos banners, botones de llamado a la acción (CTA) y elementos visuales que mejoran la navegación y la experiencia del usuario en tu tienda en línea."
			  },
			  {
				title:"Diseño de Publicidad Digital",
				descripcion:"Desarrollamos anuncios visuales atractivos para tus campañas publicitarias en línea."
			  },
			  {
				title:"Diseño de Contenido para Redes Sociales",
				descripcion:" Creamos imágenes y gráficos de alta calidad para tus perfiles de redes sociales que aumentan la participación y el seguimiento."
			  }
		
		],
		precios: "Los precios varían según la cantidad y la complejidad de los diseños requeridos. Contáctanos para obtener una cotización personalizada.",
		procesoDeTrabajo: [
			{
				title:"Consulta Inicial",
				descripcion:"Comenzamos con una consulta detallada para entender tus objetivos de diseño y las necesidades de tu tienda en línea."
			  },
			  {
				title:"Conceptualización y Diseño",
				descripcion:"Nuestro equipo creativo desarrolla conceptos y diseños iniciales para tu aprobación."
			  },
			  {
				title:"Revisiones y Ajustes",
				descripcion:"Realizamos revisiones y ajustes según tus comentarios para garantizar que los diseños sean efectivos.",
			  },
			  {
				title:"Entrega de Diseño Final",
				descripcion:"Entregamos los diseños finales en los formatos necesarios para su uso en tu plataforma de ecommerce."
			  }
		
		
		  ],
		  porQueElegirnos: [
			{
				title:"Experiencia en Ecommerce",
				descripcion:"Tenemos experiencia en diseño gráfico específico para tiendas en línea y comprendemos las necesidades únicas del comercio electrónico."
			  },
			  {
				title:"Diseño Creativo",
				descripcion:"Nuestro equipo de diseñadores gráficos está capacitado para crear diseños que generen conversiones."
			  },
			  {
				title:"Compromiso con la Calidad",
				descripcion:"Nos enorgullece ofrecer diseños de alta calidad que aumentan la efectividad de tu tienda en línea."
			  }
			
			
		  ],
		  
		  testimonios:null,
		  
		  cta:{
			pregunta:"¿Listo para mejorar la apariencia de tu tienda en línea y aumentar tus ventas?",
			respuesta:"¡Contáctanos hoy mismo y descubre cómo podemos ayudarte con el diseño gráfico orientado a ecommerce!",
			whatsapp:"https://wa.link/u1dzjp"
		  }


	},
	{
		id: 4,
		title: "Ayudamos a desarrollar tienda online para dropshipping",
		link:useToSlug("Ayudamos a desarrollar tienda online para dropshipping"),
		seotitle: "Ayudamos a desarrollar tienda online para dropshipping - Perú ",
seodescription: "Expertos en desarrollo de tiendas online para dropshipping en Perú, Colombia, Ecuador, Chile y toda latinoamerica. Maximiza tus oportunidades de comercio electrónico con nuestra ayuda especializada.",
seokeywords: "Desarrollo de tiendas online, Dropshipping en Perú, Dropshipping en Colombia, Dropshipping en Ecuador,Dropshipping en Chile,Comercio electrónico en América Latina,Soluciones de comercio electrónico",

		content: "Soluciones de E-commerce para Dropshipping en América Latina",
		icon: BsShop,
		descripcion:"Potenciamos tu presencia en el comercio electrónico. Creamos tiendas en línea personalizadas y efectivas para tu negocio de dropshipping en Perú, Colombia, Ecuador, Chile y toda latinoamerica. ¡Convierte tu visión en realidad con nuestra experiencia en e-commerce | dropshipping !",
		imagen:"https://res.cloudinary.com/darps1cta/image/upload/v1694312493/creatiendaya/Ayudamos-a-desarrollar-tienda-online-para-dropshipping_dcxa0u.png",
		loQueOfrecemos: [
			{
				title:"Diseño y Desarrollo Personalizado",
				descripcion:"Creación de tiendas en línea a medida, adaptadas a las necesidades específicas de cada cliente, con un diseño atractivo y funcional."
			  },
			  {
				title:"Integración de Plataformas de Dropshipping",
				descripcion:"Configuración y sincronización de plataformas de dropshipping confiables para asegurar un flujo de productos eficiente."
			  },
			  {
				title:"Optimización SEO",
				descripcion:"Optimización de la tienda en línea para motores de búsqueda para aumentar la visibilidad y el tráfico orgánico."
			  },
			  {
				title:"Selección de Nicho y Productos",
				descripcion:"Asesoramiento en la elección de un nicho de mercado rentable y la selección de productos de alta calidad."
			  },
			  {
				title:" Capacitación y Soporte",
				descripcion:" Formación y asistencia para que los clientes puedan administrar su tienda en línea de manera efectiva."
			  },
			  {
				title:"Personalización y Branding",
				descripcion:"Personalización de la tienda con la marca del cliente, incluyendo logotipos, colores y elementos visuales."
			  },
			  {
				title:"Integración de Pasarelas de Pago",
				descripcion:"Configuración de pasarelas de pago seguras para facilitar las transacciones."
			  }
			  
		],
		precios: "Los precios varían según la complejidad y el alcance del desarrollo de la tienda online. Contáctanos para obtener una cotización personalizada.",
		procesoDeTrabajo: [
			{
				title:"Consulta Inicial",
				descripcion:"Inicia con una reunión o consulta con el cliente para comprender sus objetivos, necesidades y visión para la tienda en línea."
			  },
			  {
				title:" Investigación de Mercado",
				descripcion:"Realiza un análisis de mercado para identificar nichos potenciales y oportunidades en América Latina."
			  },
			  {
				title:" Planificación Estratégica",
				descripcion:"Basado en la consulta y la investigación, crea una estrategia detallada que incluya la elección del nicho, la selección de productos y la planificación del sitio web."
			  },
			  {
				title:"Diseño y Desarrollo",
				descripcion:"Diseña y desarrolla la tienda en línea, asegurándote de que tenga una apariencia atractiva y una funcionalidad óptima. Esto incluye la personalización del diseño y la integración de las herramientas de dropshipping."
			  },
			  {
				title:"Capacitación del Cliente",
				descripcion:"Proporciona capacitación al cliente sobre cómo gestionar su tienda en línea, agregar productos y administrar pedidos."
			  }
			
	
		
		  ],
		  porQueElegirnos: [
			{
				title:"Experiencia en Ecommerce",
				descripcion:"Tenemos un historial exitoso de ayudar a los emprendedores del dropshipping a desarrollar su tienda online."
			  },
			  {
				title:"Equipo de Expertos",
				descripcion:" Nuestro equipo está formado por expertos en desarrollo de tiendas online para dropshipping."
			  },
			
		
		  ],
		  
		  testimonios:[  
			{
				testimonio:"Crea Tienda Ya ha transformado por completo nuestra presencia en línea. Sus estrategias de marketing nos han ayudado a alcanzar a más clientes y aumentar nuestras ventas.",
				cliente:"Luis",
				perfil:"https://res.cloudinary.com/darps1cta/image/upload/v1693371411/creatiendaya/luis_rxyxms.jpg"
			},
			{
				testimonio:"Estamos impresionados con los resultados que hemos logrado con Crea Tienda Ya. Sus estrategias de SEO realmente han elevado nuestra tienda en línea.",
				cliente:"Jose",
				perfil:"https://res.cloudinary.com/darps1cta/image/upload/v1693371391/creatiendaya/jose_ueknsq.jpg"

			}
		  ],
		  
		  cta:{
			pregunta:"¿Listo para desarrollarte tu tienda online dropshipping al siguiente nivel?",
			respuesta:" ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte en tu tienda dropshipping!",
			whatsapp:"https://wa.link/5ohwp6"
		  }
	},
];
