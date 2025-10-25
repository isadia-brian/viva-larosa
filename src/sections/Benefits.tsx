import BentoGrid from "@/components/mvpblocks/bento-grid-2";
import SectionHeader from "@/components/SectionHeader";

const BenefitsSection = () => {
	return (
		<div className="section-center">
			<SectionHeader
				title="The Vivalarosa Difference"
				subtitle="Discover why discerning travelers choose intimacy over anonymity"
			/>
			<BentoGrid />
		</div>
	);
};

export default BenefitsSection;
