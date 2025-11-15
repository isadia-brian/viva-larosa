# Research: Dynamic Navbar Style

**Date**: 2025-11-15
**Spec**: [spec.md](./spec.md)

This document outlines the research and decisions made for implementing the dynamic navbar feature.

## 1. Accessing Sibling Component's DOM Node

**Problem**: The `NavbarLarge.tsx` component needs to know the position of the `Hero.tsx` component to react to the user scrolling past it. These are sibling components rendered in `__root.tsx`.

**Decision**: Use the `IntersectionObserver` API with a sentinel element.

**Rationale**: Instead of passing refs and manually calculating positions, a more modern and performant approach is to use the `IntersectionObserver` API. We can place a "sentinel" or "trigger" element at the point of interest (e.g., at the bottom of the hero section). The `IntersectionObserver` can then efficiently notify us when this sentinel element enters or leaves the viewport. This avoids manual scroll event handling, position calculations, and throttling, as the browser handles the observation optimally. The state of visibility can be held in the common ancestor component (`__root.tsx`) and passed down as a simple boolean prop (`isHeroVisible`) to the navbar.

**Alternatives Considered**:

-   **Passing Refs**: A `ref` could be created in the parent (`__root.tsx`), attached to the `Hero` component, and then passed to the `Navbar` to read its position. This requires a manual scroll listener and position calculation (`getBoundingClientRect`), which is less performant and more complex than using an `IntersectionObserver`.
-   **Context API**: Using context to share the ref or position would be overkill for this scenario and could lead to unnecessary re-renders for components that don't need the information.
-   **`document.querySelector`**: An imperative escape hatch that should be avoided in React. It's brittle and breaks the declarative paradigm.

## 2. Handling Scroll Events for Performance

**Problem**: Reacting to scroll events can be a performance bottleneck if not handled correctly.

**Decision**: Use the `IntersectionObserver` API.

**Rationale**: This decision complements the one above. The `IntersectionObserver` is the purpose-built browser API for this exact use case. It is highly performant and moves the detection logic from our application code (and the main thread) to the browser's optimized internal implementation. It completely eliminates the need for scroll event listeners and the associated complexity of throttling or debouncing them.

**Alternatives Considered**:

-   **Throttled Scroll Listener**: This was the traditional approach. It involves adding a `scroll` event listener to the window and using a `throttle` function to limit how often the handler is called. While effective, it is more complex to implement correctly and less performant than the `IntersectionObserver`.
-   **Debounced Scroll Listener**: Debouncing would only trigger the style change *after* the user stops scrolling, which is not the desired user experience.
