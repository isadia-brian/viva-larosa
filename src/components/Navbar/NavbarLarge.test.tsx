
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavbarLarge from "./NavbarLarge";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../../routeTree.gen";

const router = createRouter({ routeTree });

describe("NavbarLarge", () => {
	it("should not have scrolled classes when hero is visible", () => {
		render(
			<RouterProvider router={router}>
				<NavbarLarge isHeroVisible={true} />
			</RouterProvider>
		);

		const header = screen.getByRole("banner");
		expect(header.classList.contains("bg-[rgba(20,20,20,0.8)]")).toBe(false);
		expect(header.classList.contains("text-white")).toBe(false);
	});

	it("should have scrolled classes when hero is not visible", () => {
		render(
			<RouterProvider router={router}>
				<NavbarLarge isHeroVisible={false} />
			</RouterProvider>
		);

		const header = screen.getByRole("banner");
		// This test will fail until the component is updated
		// We are expecting the classes to be added, but the component doesn't do that yet
		expect(header.classList.contains("bg-[rgba(20,20,20,0.8)]")).toBe(true);
		expect(header.classList.contains("text-white")).toBe(true);
	});
});
