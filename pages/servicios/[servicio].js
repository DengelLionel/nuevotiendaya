import Image from "next/image";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { servicesData } from "../../components/Services/servicesData";
import { useToSlug } from "../../context/useConvierteLink";
import FeaturesTwo from "../../components/Features/FeaturesTwo";
import TestimonialTres from "../../components/Testimonial/TestimonialTres";
import Cta from "../../components/HomeTwo/Cta";
import BlackFriday from "/public/images/black_friday.png";
import Partners from "/public/images/partners.svg";
import { HeroHeader } from "../../components/Develop-Store/HeroHeader";
import { YourIdea } from "../../components/Develop-Store/YourIdea";

export default function servicesDetails() {
  const ruta = useRouter()
  const { servicio } = ruta.query
  const [contenidoServicio, setContenidoServicio] = useState([])
  useEffect(() => {
    setContenidoServicio(servicesData.filter((service) => servicio === useToSlug(service.title)))
  }, [servicio])

  console.log("link e", contenidoServicio?.[0]?.cta.whatsapp)
  return (
    <>
      <Head>
        <title>{contenidoServicio?.[0]?.seotitle}</title>
        <meta name="robots" content="index, follow"></meta>
        <meta name="description" content={contenidoServicio?.[0]?.seodescription} />
        <meta name="keywords" content={contenidoServicio?.[0]?.seokeywords} />
      </Head>
      <PageBanner
        title={contenidoServicio?.[0]?.title}
        content={contenidoServicio?.[0]?.descripcion}
      />

      <section className="services-details-wrapper section-padding pt-0">
        <HeroHeader />
        <YourIdea />

        <div className="container">
          <div className="col-lg-10 col-12 offset-lg-1">
            <div className="services-contents">
              <img src={contenidoServicio?.[0]?.imagen} alt={contenidoServicio?.[0]?.title} />
              <h3>Lo que ofrecemos</h3>
              <div className="container">
                <div className="row">
                  {contenidoServicio?.[0]?.loQueOfrecemos?.map((ofrecezco, index) => (
                    <div className="col-lg-4 col-md-6 col-12" key={index}>
                      <FeaturesTwo title={ofrecezco.title} descripcion={ofrecezco.descripcion} />
                    </div>
                  ))}
                </div>
              </div>


              <h3 className="mt-4">
                Proceso de trabajo
              </h3>

              <div className="work-process-wrapper row fw500">
                {contenidoServicio?.[0]?.procesoDeTrabajo?.map((proceso, index) => (
                  <div key={index} className="col-xl-4 col-md-6 text-center">
                    <div className="single-work-process">
                      <div className="icon">{index + 1}</div>
                      <div className="content">
                        <h5>{proceso.title}</h5>
                        <p>
                          {proceso.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="wave-line d-none d-xl-block">
                  <img src="/img/wave.png" alt="" />
                </div>
              </div>

              <h3>¿Por qué elegirnos?</h3>
              <div className="container">
                <div className="row">
                  {contenidoServicio?.[0]?.porQueElegirnos?.map((elegirnos, index) => (
                    <div className="col-lg-4 col-md-6 col-12" key={index}>
                      <FeaturesTwo title={elegirnos.title} descripcion={elegirnos.descripcion} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-success text-white p-4 mt-4 fs-5 font-weight-bold rounded mb-4">
                {contenidoServicio?.[0]?.precios}
              </div>

              {contenidoServicio?.[0]?.testimonios != null && (
                <TestimonialTres testimonios={contenidoServicio} />
              )}
              <Cta titulo={contenidoServicio?.[0]?.cta.pregunta} respuesta={contenidoServicio?.[0]?.cta.respuesta} link={contenidoServicio?.[0]?.cta.whatsapp ? contenidoServicio?.[0]?.cta.whatsapp : ""} />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
