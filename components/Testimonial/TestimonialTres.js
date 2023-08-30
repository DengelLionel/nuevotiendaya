import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
export default function TestimonialTres({testimonios}) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
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
                            {testimonios?.[0]?.testimonios?.map((testimonio,index)=>(
                                <div key={index} className="single-testimoinal-item" style={{width:'300px'}}>
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: `url(${testimonio.perfil})` }}
									></div>
									<div className="client-name">
										<h6>{testimonio.cliente}</h6>
									{/* 	<span>Comerciante</span> */}
									</div>
								</div>
								<div className="feedback">
									“{testimonio.testimonio}”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
                            ))}
							
							
						
							
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
}
