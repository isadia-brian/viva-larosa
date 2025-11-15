# Quickstart: Dynamic Navbar Implementation

**Date**: 2025-11-15
**Spec**: [spec.md](./spec.md)

This document provides a high-level guide to implementing the dynamic navbar feature based on the decisions in `research.md`.

## 1. Update Root Layout (`src/routes/__root.tsx`)

The root layout will manage the state of the hero section's visibility.

-   **State**: Add a state to track if the hero section is visible.
    ```tsx
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    ```
-   **Sentinel Ref**: Create a `ref` for a sentinel element that will be observed.
    ```tsx
    const heroSentinelRef = useRef(null);
    ```
-   **Observer Logic**: Use a `useEffect` hook to create and manage an `IntersectionObserver`.
    -   The observer will watch the `heroSentinelRef`.
    -   The observer's callback will update the `isHeroVisible` state.
    -   The `useEffect` cleanup function must disconnect the observer.
-   **Prop Drilling**: Pass the `isHeroVisible` state down to the `<Navbar />` component.
-   **Render Sentinel**: Render a `<div>` with the `heroSentinelRef` immediately after the `<Hero />` component in the JSX.

## 2. Update Navbar Wrapper (`src/components/Navbar/index.tsx`)

This component needs to relay the visibility state to the large-screen navbar.

-   **Accept Prop**: Modify the component to accept a new boolean prop, `isHeroVisible`.
-   **Pass Prop**: Pass the `isHeroVisible` prop down to the `<NavbarLarge />` component.

## 3. Update Navbar Component (`src/components/Navbar/NavbarLarge.tsx`)

This is where the conditional styling will be applied.

-   **Accept Prop**: Modify the component to accept the new `isHeroVisible: boolean` prop.
-   **Conditional Styling**: Use the `cn` utility (from `src/lib/utils.ts`) to conditionally apply the styles for the scrolled state.
    -   When `isHeroVisible` is `false`, add the following classes to the navbar's root element:
        -   `bg-[rgba(20,20,20,0.8)]`
        -   `text-white`
        -   A class for smooth transition, e.g., `transition-colors duration-300`

## 4. Create Tests

A new test file should be created to validate the `NavbarLarge` component's new behavior.

-   **Test Case 1 (Default State)**: Render the component with `isHeroVisible={true}`. Assert that the scrolled-state classes are **not** present.
-   **Test Case 2 (Scrolled State)**: Render the component with `isHeroVisible={false}`. Assert that the scrolled-state classes (`bg-[rgba(20,20,20,0.8)]`, `text-white`) **are** present.
