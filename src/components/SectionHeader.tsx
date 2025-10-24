interface SectionHeaderProps {
	title: string;
	subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
	return (
		<div className="text-center max-w-3xl mx-auto flex flex-col space-y-4 mb-16">
			<h2 className="font-headings text-5xl">{title}</h2>
			<p>{subtitle}</p>
		</div>
	);
};

export default SectionHeader;
