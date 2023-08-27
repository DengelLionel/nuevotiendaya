import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useToSlug } from "../../context/useConvierteLink";
export default function SingleService({ service }) {
	return (
		<div className="service-box-item">
			<div className="icon icon1">
				<service.icon />
			</div>
			<div className="content">
				<h4>{service.title}</h4>
				<p>{service.content}</p>
				<Link href={`/servicios/${useToSlug(service.title)}`}>
					
						Más detalles <BsArrowRight />
				
				</Link>
			</div>
		</div>
	);
}
