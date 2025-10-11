import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div>
			<div className="hero-container">
				<img
					src="/images/hero.png"
					alt="hero-image"
					className="absolute inset-0 object-cover h-full"
				/>
				<div className="hero-overlay" />
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
						type="button"
						className="hero-button rounded-none"
						size={"lg"}
					>
						Reserve your stay
					</Button>
				</div>
			</div>
		</div>
	);
}
