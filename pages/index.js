import Head from "next/head";
import BlogContent from "../components/DefaultHome/BlogContent";
import CallToAction from "../components/DefaultHome/CallToAction";
import ContentBlockOne from "../components/DefaultHome/ContentBlockOne";
import ContentBlockTwo from "../components/DefaultHome/ContentBlockTwo";
import Hero from "../components/Hero/Hero";
import PopularCryptoCurrencies from "../components/DefaultHome/PopularCryptoCurrencies";
import FaqWithVideoModal from "../components/Faq/FaqWithVideoModal";
import FeaturesOne from "../components/Features/FeaturesOne";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
	return (
		<>
			<Head>
				<title>Crea Tienda Online | Expertos en eCommerce | Crea Tienda Ya</title>
				<meta name="description" content="En Crea Tienda Ya, convertimos tus sueños en realidad digital. Como expertos en la creación y crecimiento de tiendas en línea, estamos comprometidos en ayudarte a lanzar y hacer prosperar tu negocio en línea de manera efectiva y exitosa. ¡Descubre cómo podemos hacer que tu visión cobre vida en el mundo digital hoy mismo!"/>
				<meta name="keywords" content="crea tienda online, expertos eCommerce, eCommerce, tienda en línea, creación de tiendas, negocio en línea,dropshipping"/>
				<meta name="robots" content="index, follow"/>
			</Head>
			<Hero/>
			<FeaturesOne />
			<ContentBlockOne />
			<PopularCryptoCurrencies />
			<ContentBlockTwo />
			<Testimonial />
			<FaqWithVideoModal />
			<BlogContent />
			<CallToAction />
		</>
	);
}
