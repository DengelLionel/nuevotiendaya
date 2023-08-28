import Head from "next/head";
import "react-image-lightbox/style.css";
import "react-modal-video/css/modal-video.min.css";
import "slick-carousel/slick/slick.css";
import Layout from "../components/Layout/Layout";
import "../styles/animate.css";
import "../styles/bootstrap.min.css";
import "../styles/icons.css";
import "../styles/scss/style.scss";
import Router from "next/router";
import withFBQ from "next-fbq";
function MyApp({ Component, pageProps }) {
	
	return (
		<>
			<Head>
				<link rel="icon" href="/crea_tienda_ya_favicon.ico" />
				<meta name="facebook-domain-verification" content="esfie7810pj6f3jpp8wjwmtzzludkc" />
			
			

			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default withFBQ("148805974935526", Router)(MyApp);
