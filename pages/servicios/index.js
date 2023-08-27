import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import FaqWithVideoModal from "../../components/Faq/FaqWithVideoModal";
/* import PricingContent from "../components/Pricing/PricingContent"; */
import Services from "../../components/Services/Services";

export default function services() {
	return (
		<>
			<Head>
				<title>Servicios de eCommerce y Dropshipping - Crea Tienda Ya: Tu Socio en el Éxito Digital</title>
				<meta name="description" content="Descubre nuestros servicios especializados en eCommerce y dropshipping en Crea Tienda Ya. Desde la creación de tiendas en línea hasta estrategias de dropshipping y marketing digital, estamos aquí para impulsar tu éxito en el mundo del comercio electrónico. Aprovecha nuestra experiencia sin importar en qué país te encuentres."/>
    <meta name="keywords" content="servicios eCommerce, servicios dropshipping, creación de tiendas en línea, estrategias de dropshipping, marketing digital, éxito en eCommerce,diseño grafico, facebook ads"/>

    <meta name="robots" content="index, follow"/>
			</Head>
			<PageBanner
				title="Nuestros servicios para tu tienda online"
				content="Explora Nuestro Catálogo de Soluciones Personalizadas"

			/>
			<Services />
			{/* <PricingContent /> */}
			<FaqWithVideoModal />
		</>
	);
}