import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import AboutSection from "@/sections/About";
import BenefitsSection from "@/sections/Benefits";
import FAQSection from "@/sections/FAQ";
import FeaturedAccommodation from "@/sections/FeaturedAccommodation";
import FeaturesSection from "@/sections/Features";
import Hero from "@/sections/Hero";
import ServicesSection from "@/sections/Services";
import Reviews from "@/sections/Reviews";
import { HeroSentinelContext } from "../context/HeroSentinelContext";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const setHeroSentinel = useContext(HeroSentinelContext);
	return (
		<div>
			<Hero />
			<div ref={setHeroSentinel} />
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
