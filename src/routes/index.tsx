import { createFileRoute } from "@tanstack/react-router";
import AboutSection from "@/sections/About";
import BenefitsSection from "@/sections/Benefits";
import FAQSection from "@/sections/FAQ";
import FeaturesSection from "@/sections/Features";
import Hero from "@/sections/Hero";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div>
			<Hero />
			<AboutSection />
			<FeaturesSection />
			<BenefitsSection />
			<FAQSection />
		</div>
	);
}
