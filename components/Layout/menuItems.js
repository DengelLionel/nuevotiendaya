import { useToSlug } from "../../context/useConvierteLink";
export const menuItems = [

	{
		title: "Conócenos",
		path: "/conocenos",
	},
	
			{
				title: "Faq",
				path: "/faq",
			},
			/* {
				title: "Portfolio",
				path: "/projects",
			}, */
		
			
	
	{
		title: "Blog",
		path: "https://blog-y-mas.creatiendaya.com",
	},
	{
		title: "Contactanos",
		path: "/contactanos",
	},
	{
		title: "Servicios",
		path: "/servicios",
		submenu: [
			{
				title: "Desarrollo de tiendas shopify",
				path:useToSlug("Desarrollo de tiendas en línea shopify"),
			},
			
			{
				title: "Diseño Gráfico Orientado a Ecommerce",
				path: useToSlug("Diseño Gráfico Orientado a Ecommerce"),
			},
			{
				title: "Ayudamos a crear tienda online dropshipping",
				path: useToSlug("Ayudamos a desarrollar tienda online para dropshipping"),
			},
		],
	},
];
