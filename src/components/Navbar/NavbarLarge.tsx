import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Links } from "./Links";

const NavbarLarge = () => {
	return (
		<header className="navbar">
			<div className="navbar-container">
				<h4 className=" logo">
					<Link to="/">VivaLarosa</Link>
				</h4>
				<nav className="flex items-center space-x-8 justify-center">
					{Links.map(({ name, link }) => (
						<Link
							to={link}
							key={name}
							className="px-2 text-sm hover:text-[#D4A574] transition-colors"
							activeProps={{
								className: "font-medium text-[#D4A574]",
							}}
						>
							{name}
						</Link>
					))}
				</nav>
				<div className=" flex items-center justify-end">
					<Button className="px-6 py-2 text-sm font-semibold bg-primary hover:bg-[#8B7355] transition-all duration-200 rounded-none">
						Book Now
					</Button>
				</div>
			</div>
		</header>
	);
};

export default NavbarLarge;
