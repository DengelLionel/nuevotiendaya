import Head from "next/head";
import BlogContent from "../components/DefaultHome/BlogContent";
import CallToAction from "../components/DefaultHome/CallToAction";
import ContentBlockTwo from "../components/DefaultHome/ContentBlockTwo";
import Banner from "../components/Hero/Banner";
import PopularCryptoCurrencies from "../components/DefaultHome/PopularCryptoCurrencies";
import FaqWithVideoModal from "../components/faq/FaqWithVideoModal";
import FeaturesOne from "../components/Features/FeaturesOne";
import Testimonial from "../components/Testimonial/Testimonial";
import SliderService from "../components/Hero/SliderService";

export default function Home() {
	return (
		<>
			<Head>
			<title>Crea tienda ya | Creación y mejora de tiendas online</title>
<meta name="description" content="Crea Tienda Ya es tu aliado para desarrollar, crear y mejorar tu tienda online. Convierte tus sueños en realidad digital. Somos expertos en el crecimiento de tiendas en línea y estamos comprometidos en ayudarte a lanzar y hacer prosperar tu negocio en línea de manera efectiva y exitosa. ¡Descubre cómo podemos hacer que tu visión cobre vida en el mundo digital hoy mismo!" />
<meta name="keywords" content="crear tienda online, tienda virtual, tiendas virtuales Perú, tiendas virtuales gratis, tienda en línea, ecommerce, creación de tiendas, negocio en línea, dropshipping, emprendimiento,emprendedor,tienda virtual ecuador,tienda virtual colombia, tienda virtual chile, tienda virtual mexico" />
<meta name="robots" content="index, follow" />
			</Head>
			<SliderService/>
			<Banner/>
			<FeaturesOne />
			
			<PopularCryptoCurrencies />
			<ContentBlockTwo />
			<Testimonial />
			<FaqWithVideoModal />
			<BlogContent />
			<CallToAction />
		</>
	);
}
