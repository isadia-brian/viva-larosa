
import { createContext } from "react";

export const HeroSentinelContext = createContext<((node: HTMLDivElement) => void) | null>(
	null
);
