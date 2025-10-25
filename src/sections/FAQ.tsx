import FAQAccordion from "@/components/FAQAccordion";
import SectionHeader from "@/components/SectionHeader";

const FAQSection = () => {
	return (
		<div className="section-center">
			<SectionHeader title="Your Questions Answered" />
			<FAQAccordion />
		</div>
	);
};

export default FAQSection;
