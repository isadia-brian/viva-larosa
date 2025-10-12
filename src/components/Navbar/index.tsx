import { Menu } from "lucide-react";
import { useState } from "react";
import NavbarLarge from "./NavbarLarge";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<>
			<NavbarLarge />
			<div className="md:hidden fixed top-0 left-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 h-16 flex items-center justify-between px-4 z-50">
				<h4 className="text-xl font-bold text-white">VivaLarosa</h4>
				<button
					type="button"
					onClick={toggleMenu}
					className="text-white p-2"
					aria-label="Toggle menu"
				>
					<Menu size={24} />
				</button>
			</div>
			<NavbarMobile isOpen={isOpen} toggleMenu={toggleMenu} />
		</>
	);
};

export default Navbar;
