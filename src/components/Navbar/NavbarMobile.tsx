import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Links } from "./Links";

interface NavbarMobileProps {
	isOpen: boolean;
	toggleMenu: () => void;
}

const menuVars: Variants = {
	initial: {
		scaleY: 0,
	},
	animate: {
		scaleY: 1,
		transition: {
			duration: 0.5,
			ease: [0.12, 0, 0.39, 0],
		},
	},
	exit: {
		scaleY: 0,
		transition: {
			delay: 0.5,
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};
const containerVars: Variants = {
	initial: {
		transition: {
			staggerChildren: 0.09,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.09,
			staggerDirection: 1,
		},
	},
	exit: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.09,
			staggerDirection: -1,
		},
	},
};

const NavbarMobile = ({ isOpen, toggleMenu }: NavbarMobileProps) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={menuVars}
					initial="initial"
					animate="animate"
					exit="exit"
					className="fixed  left-0 top-0 w-full h-screen origin-top bg-neutral-900 text-white py-8 px-4 z-400"
				>
					<div className="flex h-full flex-col z-600">
						<div className="flex justify-between items-center">
							<Link
								to="/"
								className={`text-xl font-black text-red-500 transition duration-300 ease-in-out ${
									scrolled ? "opacity-0" : "opacity-100"
								}`}
							>
								Viva Larosa
							</Link>
							<button
								type="button"
								onClick={toggleMenu}
								aria-label="Close menu"
							>
								<X />
							</button>
						</div>
						<motion.div
							variants={containerVars}
							initial="initial"
							animate="open"
							exit="exit"
							className="flex flex-col h-full mt-20 gap-7"
							role="dialog"
							aria-modal="true"
						>
							{Links.map((link) => {
								return (
									<motion.div
										className="overflow-hidden"
										onClick={toggleMenu}
										key={link.name}
									>
										<MobileNavLink title={link.name} href={link.link} />
									</motion.div>
								);
							})}
						</motion.div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const mobileLinkVars: Variants = {
	initial: {
		y: "30vh",
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1],
		},
	},
	open: {
		y: 0,
		transition: {
			ease: [0, 0.55, 0.45, 1],
			duration: 0.7,
		},
	},
	exit: {
		y: "30vh",
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1],
		},
	},
};
const MobileNavLink = ({ title, href }: { title: string; href: string }) => {
	return (
		<motion.div
			variants={mobileLinkVars}
			className="text-5xl uppercase font-extrabold"
		>
			<Link to={href}>{title}</Link>
		</motion.div>
	);
};

export default NavbarMobile;
