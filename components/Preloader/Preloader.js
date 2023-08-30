import { useEffect, useState } from "react";
import Image from "next/image";
export default function Preloader() {
	const [showLoader, setShowLoader] = useState(true);
	const [isLoded, setIsLoded] = useState(null);

	useEffect(() => {
		window.addEventListener("load", () => {
			setIsLoded("loaded");
		});

		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 700);

		return () => clearTimeout(timer);
	});
	return (
		showLoader && (
			<div id="preloader" className={`preloader ${isLoded}`}>
				<div className="animation-preloader">
					<div className="spinner"></div>
					
					<Image priority={true} width={250} height={100} src="https://res.cloudinary.com/darps1cta/image/upload/v1693100399/LOGO_CTY_horizontal_tta5gx.png" alt="crea tienda ya - logo" />
				
					<p className="text-center">Cargando</p>
				</div>
				<div className="loader">
					<div className="row">
						<div className="col-3 loader-section section-left">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-left">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg"></div>
						</div>
					</div>
				</div>
			</div>
		)
	);
}
