import Head from "next/head";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/faq/FaqContent";

export default function faq() {
	return (
		<>
			<Head>
				<title>Preguntas Frecuentes - Crea Tienda Ya: Respuestas a Tus Consultas sobre eCommerce y Dropshipping</title>
				<meta name="description" content="Encuentra respuestas a tus preguntas sobre eCommerce y dropshipping en nuestra sección de Preguntas Frecuentes en Crea Tienda Ya. Resolvemos tus dudas sobre la creación de tiendas en línea, estrategias de dropshipping y más. Obtén la información que necesitas para tener éxito en el mundo del comercio electrónico sin importar tu ubicación."/>
    <meta name="keywords" content="preguntas frecuentes, FAQ, eCommerce, dropshipping, respuestas, estrategias de dropshipping, creación de tiendas en línea"/>
    <meta name="robots" content="index, follow"/>
			</Head>
			<PageBanner
				title="FAQs"
				content="Trabajamos para crear algunos de los lugares más atractivos y significativos para las pequeñas empresas."
			/>
			<FaqContent />
			<CallToAction />
		</>
	);
}
