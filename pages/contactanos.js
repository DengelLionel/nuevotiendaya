import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "../components/Common/PageBanner";

export default function contact() {
	return (
		<>
			<Head>
				<title>Contáctanos - Crea Tienda Ya: Comunícate con Expertos en ecommerce y dropshipping</title>
				<meta name="description" content="¿Necesitas ayuda con tu tienda online? En Crea Tienda Ya, te ofrecemos diversas opciones de soluciones. Utiliza nuestro formulario para solicitar una cotización, recibir soporte técnico o comunicarte con un asesor. Nos pondremos en contacto contigo por teléfono o WhatsApp según tus preferencias. ¡Estamos aquí para ayudarte a alcanzar tus metas en el comercio en línea desde cualquier ubicación!"/>
    <meta name="keywords" content="contacto, contáctanos,cotización tienda online, ecommerce, dropshipping, asesoramiento, soporte tienda online, cotización, WhatsApp"/>
    <meta name="robots" content="index, follow"/>
			</Head>
			<PageBanner
				title="Contáctanos y te ayudaremos en tu tienda online"
				content="Envia sus datos y número de celular a traves del formulario para agendarle una llamada por celular o whatsapp."
			/>
			<ContactContent />
		</>
	);
}
