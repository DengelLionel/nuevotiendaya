import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
export default function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
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
	return (
		<section className="testimonial-wrapper section-padding fix">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInDown" data-wow-duration="1.2s">
							<h2>¿Qué dicen nuestros clientes?</h2>
						</div>
					</div>
				</div>
				<div >
					<div className="testimonial-carousel-active">
						<Slider {...settings}>
							<div className="single-testimoinal-item" style={{width:'300px'}}>
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
									></div>
									<div className="client-name">
										<h6>María G.</h6>
										<span>Comerciante</span>
									</div>
								</div>
								<div className="feedback">
									“Gracias a Crea Tienda Ya, mi sueño de tener una tienda en línea se hizo realidad. Su diseño personalizado y soporte técnico impecable me han ayudado a destacar en el competitivo mundo de la moda. ¡Los recomiendo ampliamente!”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/2.jpg" }}
									></div>
									<div className="client-name">
										<h6>Juan M.</h6>
										<span>Empresario</span>
									</div>
								</div>
								<div className="feedback">
									“Crear mi tienda en línea con Crea Tienda Ya ha sido una experiencia increíble. Su plataforma fácil de usar y el equipo de diseño han hecho que mi negocio crezca exponencialmente. ¡Gracias por llevar mi tienda al siguiente nivel”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/3.jpg" }}
									></div>
									<div className="client-name">
										<h6>Jhon R.</h6>
										<span>Empresario</span>
									</div>
								</div>
								<div className="feedback">
									“ Estoy encantada con mi tienda en línea de Crea Tienda Ya. La optimización para móviles y el enfoque en la experiencia del cliente han aumentado mis ventas significativamente. ¡Definitivamente recomendaría a Crea Tienda Ya a otros emprendedores! ”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
									></div>
									<div className="client-name">
										<h6>Eduard Dias</h6>
										<span>Comerciante</span>
									</div>
								</div>
								<div className="feedback">
									“Tenia solo tienda fisica y necesitaba subir a un siguiente nivel para que mas clientes vean mi marca. A si que Crea tienda ya me ayudo a crear mi tienda online en menos de dos semanas”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
						
							
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
}
