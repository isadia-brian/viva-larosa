import { getPixels } from "@unpic/pixels";
import { encode } from "blurhash";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { readFile } from "node:fs/promises";
import { createServerFn } from "@tanstack/react-start";
import path from "node:path";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function generateBlurhash(src: string) {
	const file = await readFile(src);
	const jpgData = await getPixels(file);
	const data = Uint8ClampedArray.from(jpgData.data);
	const blurhash = encode(data, jpgData.width, jpgData.height, 4, 4);
	return blurhash;
}

export const getBlurhashForImage = createServerFn({ method: "GET" })
	.inputValidator((src: string) => src)
	.handler(async ({ data: src }) => {
		try {
			// Convert URL path to file system path
			const publicDir = path.join(process.cwd(), "public");
			const filePath = path.join(publicDir, src);
			const blurhash = await generateBlurhash(filePath);
			return blurhash;
		} catch (error) {
			console.error("Error generating blurhash:", error);
			return null;
		}
	});
