import SectionHeader from "@/components/SectionHeader";

const AboutSection = () => {
	return (
		<div className="py-20 max-w-[1128px] mx-auto">
			<SectionHeader
				title="Where Exclusivity Becomes Experience"
				subtitle="Vivalarosa represents a rare breed of coastal retreat—one that
				transcends the impersonal grandeur of luxury resorts to offer something
				far more precious: intimacy, privacy, and genuine connection."
			/>
			<div className="grid grid-cols-3 grid-rows-5 gap-4 md:h-[40vh]">
				<div className="row-span-3 pr-4">
					<p className=" text-lg font-medium leading-[20px] text-pretty">
						Nestled in the heart of Diani, Kenya, our exclusive villa has been
						designed for those who appreciate that true luxury lies not in
						opulence alone, but in the art of personalized service.
					</p>
				</div>
				<div className="row-span-5 bg-gray-600">3</div>
				<div className="row-span-3 bg-blue-200">5</div>
				<div className="col-start-1 row-start-5 bg-black">7</div>
				<div className="row-span-2 col-start-3 row-start-4 bg-green-200">8</div>
			</div>
		</div>
	);
};

export default AboutSection;
