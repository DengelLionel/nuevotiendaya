import { useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
export default function Testimonial() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 950,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		lazyLoad: true,
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1191,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const sliderRef = useRef(null);

	return (
		<section className="testimonial-carousel-wrapper section-padding fix">
			<div className="container">
				<div className="row fix align-items-center">
					<div className="col-lg-8">
						<div className="block-contents text-center text-lg-start">
							<div className="section-title">
								<h2 className="wow fadeInLeft" data-wow-duration="1.1s">
								Tenemos una poderosa experiencia de usuario
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-none d-lg-block text-center text-lg-end">
						<div className="testimoinial-nav red-color">
							<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
								<FaArrowLeft />
							</div>
							<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
								<FaArrowRight />
							</div>
						</div>
					</div>
				</div>

				<div className="testimonial-nav-carousel-active">
					<Slider ref={sliderRef} {...settings}>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
							“Gracias a Crea Tienda Ya, mi sueño de tener una tienda en línea se hizo realidad. Su diseño personalizado y soporte técnico impecable me han ayudado a destacar en el competitivo mundo de la moda. ¡Los recomiendo ampliamente!”
							</div>
							<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/maria-g.jpg)" }}
								></div>
								<div className="client-name">
									<h6>María G.</h6>
									<span>Comerciante</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
							“Crear mi tienda en línea con Crea Tienda Ya ha sido una experiencia increíble. Su plataforma fácil de usar y el equipo de diseño han hecho que mi negocio crezca exponencialmente. ¡Gracias por llevar mi tienda al siguiente nivel”
							</div>
							<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(https://res.cloudinary.com/darps1cta/image/upload/v1693368724/creatiendaya/juan_okxci8.jpg)" }}
								></div>
								<div className="client-name">
									<h6>Juan M.</h6>
									<span>Empresario</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
							“ Estoy encantada con mi tienda en línea de Crea Tienda Ya. La optimización para móviles y el enfoque en la experiencia del cliente han aumentado mis ventas significativamente. ¡Definitivamente recomendaría a Crea Tienda Ya a otros emprendedores! ”
							</div>
							<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(https://res.cloudinary.com/darps1cta/image/upload/v1693368845/creatiendaya/jhon_d631ye.jpg)" }}
								></div>
								<div className="client-name">
									<h6>Jhon R.</h6>
									<span>Empresario</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
							“Tenia solo tienda fisica y necesitaba subir a un siguiente nivel para que mas clientes vean mi marca. A si que Crea tienda ya me ayudo a crear mi tienda online en menos de dos semanas”
							</div>
							<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(https://res.cloudinary.com/darps1cta/image/upload/v1693368739/creatiendaya/eduard_s78it4.jpg)" }}
								></div>
								<div className="client-name">
									<h6>Eduard Dias</h6>
									<span>Comerciante</span>
								</div>
							</div>
						</div>
					</Slider>
				</div>

				<div className="col-lg-4 d-block mt-5 mr-lg-0 d-lg-none text-center">
					<div className="testimoinial-nav red-color">
						<div className="testimonial-nav-prev" onClick={() => sliderRef.current?.slickPrev()}>
							<FaArrowLeft />
						</div>
						<div className="testimonial-nav-next" onClick={() => sliderRef.current?.slickNext()}>
							<FaArrowRight />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
