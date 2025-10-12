import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<div className="hero-container">
			<img
				src="/images/hero.png"
				alt="hero-image"
				className="absolute inset-0 object-cover h-full"
			/>
			{/* <div className="hero-overlay" /> */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/[.6] via-black/[.2] to-transparent"></div>
			<div className="absolute inset-0 bg-gradient-to-t from-black/[.1] via-black/[.2] to-transparent"></div>
			<div className="hero-content">
				<h1 className="hero-title">
					Experience the
					<br />
					Perfect Stay
					<br />
					in Diani
				</h1>
				<p className="hero-subtitle">
					We promise to make your stay unforgettable
				</p>
				<Button
					className="mt-8 px-6 py-4  w-fit font-semibold bg-primary hover:bg-[#8B7355] transition-all duration-200 rounded-none"
					size={"lg"}
				>
					Reserve your stay
				</Button>
			</div>
		</div>
	);
};

export default Hero;
