import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface LinkWithIconProps {
	content?: string;
	href: string;
}

const LinkWithIcon = ({ content, href }: LinkWithIconProps) => {
	return (
		<Link
			to={href}
			className="group h-[40px] gap-2 inline-flex items-center border-[0.8px] border-neutral-400 text-sm transition-all rounded-full pl-4 pr-2 font-medium"
		>
			{content}
			<span className="rounded-full bg-amber-300 h-8 w-8 inline-flex items-center justify-center group-hover:transition duration-300 ease-in-out">
				<ArrowRight className="block group-hover:hidden h-4 w-4" />
				<ArrowUpRight className="hidden group-hover:block h-4 w-4" />
			</span>
		</Link>
	);
};

export default LinkWithIcon;
