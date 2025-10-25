import { Image } from "@unpic/react";
import LinkWithIcon from "@/components/LinkWithIcon";
import SectionHeader from "@/components/SectionHeader";

const AboutSection = () => {
	return (
		<div className="section-center">
			<SectionHeader
				title="Where Exclusivity Becomes Experience"
				subtitle="Vivalarosa represents a rare breed of coastal retreat—one that
				transcends the impersonal grandeur of luxury resorts to offer something
				far more precious: intimacy, privacy, and genuine connection."
			/>
			<div className="grid grid-cols-3 grid-rows-5 gap-4 md:h-[48vh]">
				<div className="row-span-3 pr-4">
					<p className=" text-lg font-medium leading-[20px] text-pretty">
						Nestled in the heart of Diani, Kenya, our exclusive villa has been
						designed for those who appreciate that true luxury lies not in
						opulence alone, but in the art of personalized service.
					</p>
				</div>
				<div className="row-span-5 rounded-md">
					<Image
						src="/images/sideview.png"
						alt="side-view"
						layout="fullWidth"
						background="auto"
						className="object-cover h-full w-full rounded-md"
					/>
				</div>
				<div className="row-span-3 rounded-md pt-6">
					<Image
						src="/images/rooms/MB.png"
						alt="master-bedroom"
						layout="fullWidth"
						background="auto"
						className="object-cover rounded-md h-full"
					/>
				</div>
				<div className="col-start-1 row-start-5">
					<LinkWithIcon content="More About Us" href="#" />
				</div>
				<div className="row-span-2 col-start-3 row-start-4 leading-tight">
					<p>
						This is where discerning travelers come to truly unwind, where
						families mark life's milestones in privacy, and where couples
						discover the romance of having an entire paradise to themselves.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
