import { BlurredImage } from "@/components/BlurredImage";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
	return (
		<div className="py-20 max-w-6xl mx-auto">
			<div className="text-center flex flex-col items-center gap-5 mb-12">
				<Badge variant={"outline"}>Our Story</Badge>
				<h3 className="text-5xl tracking-tight font-medium max-w-4xl">
					Crafting Unforgettable Experiences Since 2012
				</h3>
			</div>
			<div className="grid grid-cols-3 gap-8">
				<div className="flex flex-col space-y-4 text-black max-w-[290px]">
					<h5 className="text-black font-semibold max-w-[290px] text-pretty">
						Born from a passion for exceptional hospitality and breathtaking
						destinations, we curate a collection of exclusive villas that
						redefine luxury living
					</h5>
					<div className="text-sm text-pretty text-neutral-700 flex flex-col space-y-2">
						<p>
							Every property is hand-selected, every detail thoughtfully
							considered, and every guest treated like family.{" "}
						</p>
						<p>
							Our commitment goes beyond providing a place to stay—we create
							sanctuaries where memories are made.
						</p>
					</div>
				</div>
				<div className="relative w-[400px] h-full rounded-sm">
					<BlurredImage
						src="/images/rooms/master-bedroom.png"
						alt="master-bedroom"
					/>
				</div>
				<div className="relative w-[400px] h-full rounded-sm">
					<BlurredImage
						src="/images/rooms/master-bedroom.png"
						alt="master-bedroom"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
