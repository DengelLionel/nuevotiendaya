import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MenuItems from "./Menu/MenuItems";
import { menuItems } from "./menuItems";
import Image from "next/legacy/image";
import { servicesData } from "../Services/servicesData";
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="header-1">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-2 col-sm-5 col-md-4 col-6">
						<div className="logo">
							<Link className="relativo" href="/">
							
									<Image layout="fill" objectFit="contain" src="https://res.cloudinary.com/dh9etf988/image/upload/v1695404889/creatiendaya/LOGO_CTY_bordes_blancos_horizontal_u00ee6.png" alt="Ayudamos a crear tu tienda online en shopify o woocommerce " />
							
							</Link>
						</div>
					</div>
					<div className="col-lg-8 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center ">
						<div className="menu-wrap">
							<div className="main-menu">
								<ul>
									{/* <li>
										<Link href="#">demos</Link>
										<ul className="sub-menu">
											<li>
												<Link href="/">
												Home 1
												</Link>
											</li>
											<li>
												<Link href="/index-two">
													Home 2
												</Link>
											</li>
											<li>
												<Link href="/index-three">
													Home 3
												</Link>
											</li>
										</ul>
									</li> */}
									<li>
										<Link href="/conocenos">
											Conocenos
										</Link>
									</li>
									<li>
										{" "}
										<Link href="/servicios">
											Servicios
										</Link>
										<ul className="sub-menu">
											{servicesData?.map((servicio,index)=>(
												<li key={index}>
												<Link href={`/servicios/${servicio.link}`}>
												{servicio.title}
												</Link>
											</li>
											))}
											
										
										</ul>
									</li>
								
										
										
											<li>
												<Link href="/faq">
													Faq
												</Link>
											</li>
											{/* <li>
												<Link href="/team">
												team
												</Link>
											</li> */}
											{/* <li>
												<Link href="/proyectos">
													portfolio
												</Link>
											</li> */}
										
											
									
								
									<li>
										<Link href="https://blog-y-mas.creatiendaya.com">
											Blog
										</Link>
									</li>
									<li>
										<Link href="/contactanos">
											Contactanos
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="header-right-element text-white">
						{/* 	<Link href="#">login</Link> */}
							<Link className="theme-btn black" href="/contactanos">
								Empezar ahora!
							</Link>
						</div>
					</div>
					<div className="d-block d-lg-none col-sm-1 col-md-8 col-6">
						<div className="mobile-nav-wrap">
							<div id="hamburger" onClick={() => setIsOpen((prev) => !prev)}>
								<FaBars />
							</div>

							<div className={`mobile-nav ${isOpen ? "show" : ""}`}>
								<button type="button" className="close-nav" onClick={() => setIsOpen((prev) => !prev)}>
									<FaTimesCircle />
								</button>
								<nav className="sidebar-nav">
									<ul className="metismenu" id="mobile-menu">
										{menuItems.map((menu, index) => (
											<MenuItems Click={()=>setIsOpen(!isOpen)} isOpenMenu={isOpen} setOpen={setIsOpen} key={index} items={menu} />
										))}
									</ul>

									<Link className="theme-btn d-block mt-4 text-center ms-0" href="/contactanos">
									Empezar ahora!
									</Link>
								</nav>
							</div>
						</div>
						<div
							className={`overlay ${isOpen ? "active" : ""}`}
							onClick={() => setIsOpen((prev) => !prev)}
						></div>
					</div>
				</div>
			</div>
		</header>
	);
}
