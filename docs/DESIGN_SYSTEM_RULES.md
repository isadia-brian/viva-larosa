# Design System Rules

This document outlines the design system rules for the Vivalarosa project, intended to help integrate Figma designs using the Model Context Protocol.

## 1. Token Definitions

Design tokens (colors, typography, spacing, etc.) are defined as CSS custom properties (variables) in `src/styles.css`. This allows for a flexible and themeable design system that works seamlessly with Tailwind CSS.

### Color

Colors are defined in the `:root` and `.dark` selectors for light and dark modes, respectively. They are defined using the OKLCH color space for more perceptually uniform colors.

**File:** `src/styles.css`

```css
:root {
  --radius: 0.625rem;
  /* Background */
  --background: oklch(0.9711 0.0034 67.78);
  --foreground: oklch(0.145 0 0);

  --primary: oklch(85% 0.15 90);
  --primary-foreground: oklch(25% 0.01 270);

  /* ... more colors */
}

.dark {
  /* Background */
  --background: oklch(0.1776 0 0);
  --foreground: oklch(0.985 0 0);

  /* ... more colors */
}
```

### Typography

Fonts are defined using `@font-face` rules and then assigned to CSS custom properties.

**File:** `src/styles.css`

```css
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(@fontsource/poppins/files/poppins-latin-400-normal.woff2)
    format('woff2');
  /* ... */
}

:root {
  /* ... */
  --font-family-sans: 'Poppins', sans-serif;
  --font-headings: 'Cal Sans', sans-serif;
}
```

### Spacing and Radius

Spacing and border-radius are also defined as CSS custom properties.

**File:** `src/styles.css`

```css
:root {
  --radius: 0.625rem;
  /* ... */
}

@theme inline {
  /* ... */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  /* ... */
}
```

## 2. Component Library

UI components are defined in the `src/components` directory. The project uses a combination of custom components and components from the Radix UI library.

### Component Architecture

The component architecture is based on `class-variance-authority` (CVA) for creating variants of components. This allows for a high degree of flexibility and reusability.

**File:** `src/components/ui/button.tsx`

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90",
				// ... more variants
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md gap-1.5 px-3",
				// ... more sizes
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
```

### Component Documentation

There is no Storybook or other component documentation system in place at the moment.

## 3. Frameworks & Libraries

*   **UI Framework:** React
*   **Styling:** Tailwind CSS
*   **Build System:** Vite
*   **Component Primitives:** Radix UI

## 4. Asset Management

Assets like images and videos are stored in the `public` directory.

### Asset Referencing

Images are referenced using absolute paths from the `public` directory and optimized using the `@unpic/react` library.

**File:** `src/sections/Hero.tsx`

```tsx
import { Image } from "@unpic/react";

const Hero = () => {
	return (
		<div className="hero-container">
			<Image
				src="/images/hero.png"
				alt="hero-image"
				layout="fullWidth"
				priority={true}
				background="auto"
				className="absolute inset-0 object-cover h-full"
			/>
      {/* ... */}
    </div>
  );
};
```

### Asset Optimization

The `@unpic/react` library is used for image optimization, providing features like lazy loading, responsive images, and placeholders.

### CDN Configuration

There is no CDN configuration in place at the moment.

## 5. Icon System

Icons are provided by the `lucide-react` library.

### Icon Usage

Icons are imported as React components from `lucide-react` and used directly in the JSX.

**File:** `src/components/Navbar/NavbarMobile.tsx`

```tsx
import { X } from 'lucide-react';

const NavbarMobile = ({ isOpen, toggleMenu }) => {
  return (
    // ...
    <button
      type="button"
      onClick={toggleMenu}
      aria-label="Close menu"
    >
      <X />
    </button>
    // ...
  );
};
```

### Icon Naming Convention

The icon names follow the `lucide-react` naming convention, which is PascalCase (e.g., `X`, `Menu`, `Home`).

## 6. Styling Approach

### CSS Methodology

The project uses a combination of **Tailwind CSS** for utility-first styling and **global CSS** with custom properties for defining the design system tokens.

### Global Styles

Global styles are defined in `src/styles.css`. This file also includes Tailwind's base, components, and utilities layers.

### Responsive Design

Responsive design is implemented using Tailwind's responsive variants (e.g., `md:grid`, `lg:text-lg`).

## 7. Project Structure

The codebase is organized into the following main directories:

*   `src/components`: Reusable UI components.
*   `src/routes`: Page components and routing logic (file-based routing).
*   `src/sections`: Larger sections of pages, composed of multiple components.
*   `src/lib`: Utility functions.
*   `src/styles`: Global stylesheets.
*   `public`: Static assets like images and fonts.
