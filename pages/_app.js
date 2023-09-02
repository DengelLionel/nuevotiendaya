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
import Script from "next/script"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "../lib/gtag"
import TiktokPixel from 'tiktok-pixel';
function MyApp({ Component, pageProps }) {
	const router = useRouter()
	TiktokPixel.init ( 'CJP96PJC77U1G7J3MO8G' );

	useEffect(() => {
	  const handleRouteChange = url => {
		gtag.pageview(url)
	  }
	  router.events.on("routeChangeComplete", handleRouteChange)
	  return () => {
		router.events.off("routeChangeComplete", handleRouteChange)
	  }
	}, [router.events])
	return (
		<>
			<Head>
				<link rel="icon" href="/crea_tienda_ya_favicon.ico" />
				<meta name="facebook-domain-verification" content="esfie7810pj6f3jpp8wjwmtzzludkc" />
				<Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />


			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default withFBQ("148805974935526", Router)(MyApp);
