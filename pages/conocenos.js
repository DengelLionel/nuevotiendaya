import Head from "next/head";
import ContentOne from "../components/AboutPage/ContentOne";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FeaturesThree from "../components/Features/FeaturesThree";
/* import TeamTwo from "../components/Team/TeamTwo"; */
import Testimonial from "../components/HomeTwo/Testimonial";
import ContentTwo from "../components/AboutPage/ContentTwo";

export default function about() {
	return (
		<>
			<Head>
				<title>Conócenos - Crea Tienda Ya: Expertos en Crear y Potenciar Tiendas en Línea</title>
				<meta name="description" content="Descubre quiénes somos en Crea Tienda Ya. Somos un equipo de expertos dedicados a ayudarte a crear y potenciar tu tienda en línea, sin importar el país en el que te encuentres. Conoce nuestra historia, nuestros valores y nuestra pasión por el eCommerce. Estamos aquí para hacer realidad tus sueños digitales."/>
				<meta name="keywords" content="Conócenos, Crea Tienda Ya, crear tienda en línea, potenciar tienda online, eCommerce, equipo de expertos, shopify,woocommerce,dropshipping"/>
    <meta name="robots" content="index, follow"/>

			</Head>
			<PageBanner
				title="Conócenos para ser aliado de tu tienda online"
				content="Somos un equipo apasionado por transformar negocios en línea. Con experiencia en diseño, desarrollo y estrategias de ventas, estamos comprometidos en impulsar tu éxito en el mundo del ecommerce."
			/>
			<ContentOne />
			<FeaturesThree />
			<ContentTwo />
			<Testimonial />
		{/* 	<TeamTwo /> */}
			<CallToAction />
		</>
	);
}
