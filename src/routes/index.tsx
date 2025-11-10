import { createFileRoute } from "@tanstack/react-router";
import AboutSection from "@/sections/About";
import BenefitsSection from "@/sections/Benefits";
import FAQSection from "@/sections/FAQ";
import FeaturedAccommodation from "@/sections/FeaturedAccommodation";
import FeaturesSection from "@/sections/Features";
import Hero from "@/sections/Hero";
import ServicesSection from "@/sections/Services";
import Reviews from "@/sections/Reviews";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div>
			<Hero />
			<AboutSection />
			<FeaturesSection />
			<ServicesSection />
			<BenefitsSection />
			<FeaturedAccommodation />
			<Reviews />
			<FAQSection />
		</div>
	);
}
