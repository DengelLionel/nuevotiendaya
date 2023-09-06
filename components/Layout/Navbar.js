import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MenuItems from "./Menu/MenuItems";
import { menuItems } from "./menuItems";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="header-1">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-2 col-sm-5 col-md-4 col-6">
						<div className="logo">
							<Link href="/">
							
									<img width={280} src="https://res.cloudinary.com/darps1cta/image/upload/v1693100399/LOGO_CTY_blanco_horizontal_idlbrf.png" alt="Ayudamos a crear tu tienda online en Crea tienda ya " />
							
							</Link>
						</div>
					</div>
					<div className="col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center">
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
											<MenuItems Click={()=>setIsOpen(!isOpen)} isOpenMenu={isOpen} key={index} items={menu} />
										))}
									</ul>

									<Link className="theme-btn d-block mt-4 text-center ms-0" href="/contact">
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
