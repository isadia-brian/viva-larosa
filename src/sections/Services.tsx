import SectionHeader from "@/components/SectionHeader";
import ServicesComponent from "@/components/ServicesComponent";

const ServicesSection = () => {
	return (
		<div className="section-center">
			<SectionHeader
				title="Tailored to perfection"
				subtitle="Every service designed around your comfort, every detail attended to with care"
			/>
			<ServicesComponent />
		</div>
	);
};

export default ServicesSection;
