import { useState } from "react";

const cards = [
	{
		id: 1,
		title: "SPA-комплекс",
		img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 2,
		title: "Прогулки на воде и земле",
		img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 3,
		title: "Ресторан «Две чайки»",
		img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
		description:
			"Место, где каждый гость найдет блюдо для себя. Местные продукты и атмосфера вкуса.",
		tags: ["Меню", "Броня карта", "Шведский стол"],
	},
	{
		id: 4,
		title: "Квесты для всей семьи",
		img: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=80",
	},
];

const ServicesComponent = () => {
	const [active, setActive] = useState(3); // middle card expanded by default
	return (
		<div className="flex w-full h-[500px] gap-4 overflow-hidden p-4 rounded-3xl bg-[#f1f4ef]">
			{cards.map((card) => (
				<div
					key={card.id}
					onMouseEnter={() => setActive(card.id)}
					className={`
            relative flex flex-col justify-end 
            rounded-3xl overflow-hidden transition-all duration-500 ease-in-out 
            bg-cover bg-center cursor-pointer
            ${active === card.id ? "flex-[3]" : "flex-[0.8]"}
          `}
					style={{ backgroundImage: `url(${card.img})` }}
				>
					<div className="absolute inset-0 bg-black/30 transition-all duration-500 rounded-3xl"></div>

					{/* Card Content */}
					<div
						className={`relative z-10 text-white p-6 transition-opacity duration-500 ${
							active === card.id ? "opacity-100" : "opacity-0"
						}`}
					>
						{card.tags && (
							<div className="flex gap-2 mb-3">
								{card.tags.map((tag) => (
									<span
										key={tag}
										className="bg-white/20 backdrop-blur-sm text-sm px-3 py-1 rounded-full"
									>
										{tag}
									</span>
								))}
							</div>
						)}
						<h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
						{card.description && (
							<p className="text-sm leading-relaxed">{card.description}</p>
						)}
					</div>

					{/* Title for collapsed cards */}
					{active !== card.id && (
						<div className="absolute bottom-6 left-1/2 -translate-x-1/2 rotate-[-90deg] origin-left text-white font-medium whitespace-nowrap">
							{card.title}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ServicesComponent;
