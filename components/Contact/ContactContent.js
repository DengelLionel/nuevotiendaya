import { AiTwotonePhone } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import ContactCard from "./ContactCard";
import Form from "./Form";

export default function ContactContent() {
	return (
		<section className="contact-us-wrapper section-padding">
			<div className="container">
				<div className="row text-center d-flex justify-content-center">
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<AiTwotonePhone />}
							contentOne="+51906064049"
							ContentTwo="---"
							className="box1"
						/>
					</div>
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaEnvelope />}
							contentOne="info@creatiendaya.com"
							ContentTwo="---"
							className="box2"
						/>
					</div>
				{/* 	<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaMapMarkerAlt />}
							contentOne="2118 Thornridge Cir, New York."
							ContentTwo="4140 Rd. Allentown, Mexico."
							className="box3"
						/>
					</div> */}
				</div>

				<div className="row mt-4 mt-lg-5">
					<div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
						<div className="block-contents">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">¡Ponte en contacto ahora!</h2>
							
							</div>
						</div>
					</div>
				</div>

				<div className="row d-flex justify-content-center">
				
					<div className="col-lg-6 pls-lg-4 wow fadeInUp order-1 order-lg-2">
						<Form />
					</div>
				</div>
			</div>
		</section>
	);
}
