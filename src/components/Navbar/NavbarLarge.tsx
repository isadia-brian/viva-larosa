import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

const NavbarLarge = () => {
	const Links: Array<{ name: string; link: string }> = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Rooms",
			link: "/rooms",
		},
	];

	return (
		<header className="navbar">
			<h4 className="text-xl font-bold">
				<Link to="/">VivaLarosa</Link>
			</h4>
			<nav className="flex items-center space-x-8 justify-center">
				{Links.map(({ name, link }) => (
					<Link
						to={link}
						key={name}
						className="font-medium px-2 text-sm hover:text-[#D4A574] transition-colors"
					>
						{name}
					</Link>
				))}
			</nav>
			<div className=" flex items-center justify-end">
				<Button className="px-6 py-2 text-sm font-semibold bg-[#D4A574] text-white hover:bg-[#8B7355] transition-all duration-200 rounded-none">
					Book Now
				</Button>
			</div>
		</header>
	);
};

export default NavbarLarge;
