import Link from "next/link";
export default function Dropdown({ submenus, isDropdownOpen,open,setOpen }) {
	const style = {
		height: isDropdownOpen ? submenus.length * 49 : "0",
	};

	return (
		<ul className={`sub-menu ${isDropdownOpen ? "show" : ""}`} style={style}>
			{submenus.map((submenu, index) => (
				<li key={index}>
					<Link onClick={()=>setOpen(!open)} href={`/servicios/${submenu.path}`}>
						{submenu.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
