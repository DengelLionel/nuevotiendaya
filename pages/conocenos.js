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
				<meta name="description" content="Somos un equipo de expertos dedicados a ayudarte a crear y potenciar tu tienda virtual, sin importar el país en el que te encuentres. Conoce nuestra historia, nuestros valores y nuestra pasión por el ecommerce. Estamos aquí para hacer realidad tus espectativas."/>
				<meta name="keywords" content="Conócenos, crea tienda ya, crear tienda virtual, potenciar tienda online, ecommerce, emprendimiento, shopify,woocommerce,dropshipping"/>
    <meta name="robots" content="index, follow"/>

			</Head>
			<PageBanner
				title="Desarrollo de tiendas online - Aliado para tu negocio"
				content="Somos un equipo apasionado por transformar negocio online. Con experiencia en diseño, desarrollo web, estamos comprometidos en impulsar tu éxito en el mundo del ecommerce."
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
