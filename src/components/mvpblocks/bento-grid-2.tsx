import { motion } from "framer-motion";
import {
	ChefHat,
	HeartHandshake,
	ShieldCheck,
	Sparkles,
	Waves,
} from "lucide-react";
import type React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { benefits } from "@/data/benefits";
import { cn } from "@/lib/utils";

interface BentoItem {
	title: string;
	description: string;
	icon: React.ReactNode;
	status?: string;
	tags?: string[];
	meta?: string;
	cta?: string;
	colSpan?: number;
	hasPersistentHover?: boolean;
}

interface BentoGridProps {
	items?: BentoItem[];
}

const itemsSample: BentoItem[] = [
	...benefits.map((benefit, index) => ({
		...benefit,
		icon:
			index === 0 ? (
				<ShieldCheck className="text-primary h-4 w-4" />
			) : index === 1 ? (
				<ChefHat className="text-primary h-4 w-4" />
			) : index === 2 ? (
				<Sparkles className="text-primary h-4 w-4" />
			) : index === 3 ? (
				<HeartHandshake className="text-primary h-4 w-4" />
			) : (
				<Waves className="text-primary h-4 w-4" />
			),
		colSpan: index === 0 ? 2 : 1,
		hasPersistentHover: index === 0,
	})),
];

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
	return (
		<section className="relative overflow-hidden">
			{/* Decorative elements */}
			<div className="bg-primary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
			<div className="bg-primary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

			<div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-3">
				{items.map((item, index) => (
					<motion.div
						key={`${item.title}-${item.status || item.meta}`}
						className={cn(
							item.colSpan || "col-span-1",
							item.colSpan === 2 ? "md:col-span-2" : "",
						)}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
					>
						<Card
							className={cn(
								"group bg-card/40 relative h-full transition-all duration-300 hover:shadow-md",
								"will-change-transform hover:-translate-y-1",
								"border-border/60 overflow-hidden",
								{
									"-translate-y-1 shadow-md": item.hasPersistentHover,
								},
							)}
						>
							<div
								className={cn(
									"absolute inset-0",
									item.hasPersistentHover
										? "opacity-100"
										: "opacity-0 group-hover:opacity-100",
									"transition-opacity duration-300",
								)}
							>
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:4px_4px] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
							</div>

							<CardHeader className="relative space-y-0 p-4">
								<div className="flex items-center justify-between">
									<div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
										{item.icon}
									</div>
								</div>
							</CardHeader>

							<CardContent className="relative space-y-2 p-4 pt-0">
								<h3 className="text-foreground text-[15px] font-medium tracking-tight">
									{item.title}
									{item.meta && (
										<span className="text-muted-foreground ml-2 text-xs font-normal">
											{item.meta}
										</span>
									)}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{item.description}
								</p>
							</CardContent>

							<div
								className={cn(
									"via-primary/10 absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent to-transparent p-px",
									item.hasPersistentHover
										? "opacity-100"
										: "opacity-0 group-hover:opacity-100",
									"transition-opacity duration-300",
								)}
							/>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
}
