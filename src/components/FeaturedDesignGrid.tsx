import LinkWithIcon from "./LinkWithIcon";

const FeaturedDesignGrid = () => {
	return (
		<div className=" text-gray-800  max-w-6xl mx-auto">
			<div className="grid grid-cols-3 grid-rows-3 gap-4 h-60vh">
				<div className="row-span-2">
					<img
						src="/images/featured-grid/grid-image-1.png"
						alt="Featured design 1"
						className="w-full object-cover"
					/>
				</div>
				<div className="col-start-2 row-start-2 row-span-1 bg-amber-200">
					<img
						src="/images/featured-grid/grid-image-2.png"
						alt="Featured design 5"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="col-start-1 row-start-3">
					<img
						src="/images/featured-grid/grid-image-4.png"
						alt="Featured design 5"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="col-start-2 row-start-3">
					<img
						src="/images/featured-grid/grid-image-4.png"
						alt="Featured design 5"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="row-span-2 col-start-3 row-start-2">
					<img
						src="/images/featured-grid/grid-image-3.png"
						alt="Featured design 3"
						className="w-full object-cover"
					/>
				</div>
				<div className="col-start-2 row-start-1 flex flex-col justify-end">
					<div>
						<h3 className="text-2xl font-serif font-medium mb-2">PRIME SUIT</h3>
						<p className="text-sm text-foreground/70">
							Throughout this entire construction process, we paid special
							attention to every detail to create the perfect environment. From
							the selection of the highest quality materials to the precise
							installation of each element. We intended the sauna to be not only
							functional, but also visually appealing.
						</p>
					</div>
				</div>
				<div className="col-start-3 row-start-1 flex flex-col justify-end">
					<div>
						<h3 className="text-2xl font-headings font-medium">KSHS 25,000</h3>
						<div className="mt-2">
							<LinkWithIcon content="Check Availability" href="#" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedDesignGrid;
