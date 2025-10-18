import { blurhashToCssGradientString } from "@unpic/placeholder";
import { Image } from "@unpic/react";
import { useEffect, useRef, useState } from "react";
import { getBlurhashForImage } from "@/lib/utils";

interface BlurredImageProps {
	src: string;
	alt: string;
}

export function BlurredImage({ src, alt }: BlurredImageProps) {
	const [placeholder, setPlaceholder] = useState<string | undefined>();
	const [isInView, setIsInView] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log(`[BlurredImage] Image "${alt}" is now in viewport`);
						setIsInView(true);
						observer.disconnect();
					}
				});
			},
			{
				rootMargin: "50px",
				threshold: 0.1,
			},
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [alt]);

	useEffect(() => {
		if (isInView && !isLoaded) {
			console.log(`[BlurredImage] Loading blurhash for "${alt}"`);
			getBlurhashForImage({ data: src }).then((blurhash) => {
				if (blurhash) {
					const gradient = blurhashToCssGradientString(blurhash);
					setPlaceholder(gradient);
					setIsLoaded(true);
					console.log(`[BlurredImage] Blurhash loaded for "${alt}"`);
				}
			});
		}
	}, [isInView, isLoaded, src, alt]);

	return (
		<div
			ref={containerRef}
			className="h-full"
			data-image-status={isLoaded ? "loaded" : "loading"}
		>
			<Image
				src={src}
				alt={alt}
				background={placeholder}
				layout="fullWidth"
				className="h-full object-cover rounded-sm"
			/>
		</div>
	);
}
