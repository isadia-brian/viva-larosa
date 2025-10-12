import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/sections/Hero";
import AboutSection from "@/sections/About";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div>
			<Hero />
			<AboutSection />
		</div>
	);
}
