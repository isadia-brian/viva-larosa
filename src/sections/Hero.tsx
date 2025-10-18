import { Image } from "@unpic/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<div className="hero-container">
			<Image
				src="/images/hero.png"
				alt="hero-image"
				layout="fullWidth"
				priority={true}
				background="auto"
				className="absolute inset-0 object-cover h-full"
			/>
			{/* <div className="hero-overlay" /> */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/[.7] via-black/[.2] to-transparent"></div>
			<div className="absolute inset-0 bg-gradient-to-t from-black/[.7] via-black/[.2] to-transparent"></div>
			<div className="hero-content">
				<Badge variant={"default"} className="font-medium">
					Welcome to Paradise
				</Badge>
				<h1 className="hero-title">
					Your Private
					<br />
					Sanctuary Awaits
					<br />
				</h1>
				<p className="hero-subtitle">
					Experience unparalleled luxury in our exclusive collection of private
					villas, where every detail is crafted for your perfect escape.
				</p>
				<Button
					className="mt-8 px-6 py-4  w-fit font-semibold bg-primary hover:bg-[#8B7355] transition-all duration-200 rounded-none"
					size={"lg"}
				>
					Explore Our Villas
				</Button>
			</div>
		</div>
	);
};

export default Hero;
