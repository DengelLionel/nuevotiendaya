import Link from "next/link"
export default function CallToAction() {
  return (
     <section className="cta-banner-wrapper section-padding pt-0">
        <div className="container">
            <div className="cta-banner newsletter-box text-white">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
                        <div className="cta-contents">
                            <h2 className="wow fadeInUp">¿Estás interesado en hacer tu proyecto con nosotros?</h2>
                            <div className="newsletter-form wow fadeInUp">
                            <Link className="theme-btn black" href="/contactanos">
								Contactar ahora!
							</Link>
                            </div>

                            <div className="arrow-shape">
                                <img src="/img/arrow-shape.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
