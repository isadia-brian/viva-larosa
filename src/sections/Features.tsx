import {
	Activity,
	Compass,
	CookingPot,
	Palmtree,
	Plane,
	UserCheck,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const FeaturesSection = () => {
	return (
		<div className="section-center">
			<SectionHeader title="Crafted for the Connoisseur of Luxury" />
			<div className="relative grid border-border/20 border-l border-t md:grid-cols-3">
				<div className="border-border/20 border-b border-r py-10 md:px-6">
					<CookingPot className="text-greenish mb-6" size={"24"} />
					<div className="flex flex-col gap-1">
						<div className="mb-6">
							<h4 className="text-xl font-normal leading-1 tracking-normal">
								Private Culinary Artistry
							</h4>
						</div>
						<div className="flex flex-col gap-8">
							<p>
								Your villa chef personalizes every menu, sourcing the best local
								and global ingredients for memorable, flexible alfresco dining
								experiences.
							</p>
						</div>
					</div>
				</div>
				<div className="border-border/20 border-b border-r py-10 md:px-6">
					<UserCheck className="text-greenish mb-6" size={"24"} />
					<div className="flex flex-col gap-1">
						<div className="mb-6">
							<h4 className="text-xl font-normal leading-1 tracking-normal">
								Dedicated Attentive Service
							</h4>
						</div>
						<div className="flex flex-col gap-8">
							<p>
								A highly trained staff anticipates your every preference, from
								groceries to private transfers, so you can simply relax
								together.{" "}
							</p>
						</div>
					</div>
				</div>
				<div className="border-border/20 border-b border-r py-10 md:px-6">
					<Palmtree className="text-greenish mb-6" size={"24"} />
					<div className="flex flex-col gap-1">
						<div className="mb-6">
							<h4 className="text-xl font-normal tracking-normal leading-1">
								Pristine Beachfront Sanctuary
							</h4>
						</div>
						<div className="flex flex-col gap-8">
							<p>
								Step onto soft sand from your villa; enjoy exclusive, uncrowded
								beach access for peaceful moments and endless ocean views.
							</p>
						</div>
					</div>
				</div>
				<div className="border-border/20 border-b border-r py-10 md:px-6">
					<Activity className="text-greenish mb-6" size={"24"} />
					<div className="flex flex-col gap-1">
						<div className="mb-6">
							<h4 className="text-xl font-normal tracking-normal leading-1">
								Wellness & Rejuvenation
							</h4>
						</div>
						<div className="flex flex-col gap-8">
							<p>
								Enjoy in-villa spa sessions by skilled therapists, offering
								relaxing massages and rejuvenating treatments for ultimate
								comfort and privacy.
							</p>
						</div>
					</div>
				</div>
				<div className="border-border/20 border-b border-r py-10 md:px-6">
					<Compass className="text-greenish mb-6" size={"24"} />
					<div className="flex flex-col gap-1">
						<div className="mb-6">
							<h4 className="text-xl font-normal tracking-normal leading-1">
								Curated Local Experiences
							</h4>
						</div>
						<div className="flex flex-col gap-8">
							<p>
								Staff arrange custom excursions—sunset cruises, snorkeling, or
								cultural tours—designed entirely around your interests and
								preferred pace.
							</p>
						</div>
					</div>
				</div>
				<div className="border-border/20 border-b border-r py-10 md:px-6">
					<Plane className="text-greenish mb-6" size={"24"} />
					<div className="flex flex-col gap-1">
						<div className="mb-6">
							<h4 className="text-xl font-normal tracking-normal leading-1">
								Seamless Arrival Experience
							</h4>
						</div>
						<div className="flex flex-col gap-8">
							<p>
								Arrive stress-free to a fully prepared villa, complete with
								airport transfer, stocked pantry, and every comfort thoughtfully
								arranged.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
