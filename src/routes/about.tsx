import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="page-layout">
			<div className="page-container mb-16">
				<h3>About page</h3>
			</div>
			<div
				className="flex gap-3 overflow-clip"
				style={{
					opacity: 1,
					transform:
						"translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
					transformStyle: "preserve-3d",
				}}
			>
				<div className="animate-loop-scroll gap-3 flex">
					{Array.from({ length: 10 }, (_, index) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <Avoid index key>
							key={index}
							className="bg-red-400 relative overflow-clip flex-none w-[25rem] aspect-[1/1.23]"
						></div>
					))}
				</div>
			</div>
		</div>
	);
}
