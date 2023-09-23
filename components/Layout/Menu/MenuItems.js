import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

export default function MenuItems({ items, isOpenMenu,Click,setOpen }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	useEffect(() => {
		if (isOpenMenu === false) {
			setIsDropdownOpen(false);
		}
	}, [isOpenMenu]);

	return (
		<li>
			{items.submenu ? (
				<>
					<button
						className="dropdown-button"
						aria-expanded={isDropdownOpen ? "true" : "false"}
						type="button"
						role="button"
						aria-haspopup="menu"
						onClick={() => setIsDropdownOpen((prev) => !prev)}
					>
						{items.title}
						<span className="dropdown-arrow">
							{isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowBack />}
						</span>
					</button>

					<Dropdown open={isOpenMenu} setOpen={setOpen}  submenus={items.submenu} isDropdownOpen={isDropdownOpen} />
				</>
			) : (
				<Link onClick={Click} href={`${items.path}`}>
					{items.title}
				</Link>
			)}
		</li>
	);
}
