# Vivalarosa Development Guidelines

## Commands

**Package Manager**: Bun (default)

- `bun dev` - Start dev server on port 3000
- `bun build` - Build production bundle
- `bun test` - Run all tests (Vitest), use `bun test -- {pattern}` for single test
- `bun lint` - Lint with Biome
- `bun format` - Format with Biome
- `bun check` - Type check with Biome

## Project Structure

- `public/` - Static assets (images, icons, fonts)
- `src/` - Main source code directory
  - `assets/` - Fonts and media files
  - `components/` - Reusable UI components organized by type:
    - `Navbar/` - Navigation components
    - `blocks/` - Content blocks and sections
    - `mvpblocks/` - MVP-specific components
    - `ui/` - Base UI components (buttons, cards, etc.)
  - `data/` - Static data files and constants
  - `lib/` - Utility functions and helpers
  - `routes/` - Page components and routing logic
  - `sections/` - Page sections and layouts
- `.specify/` - Development templates and agent scripts
- Root config files - `biome.json`, `tsconfig.json`, `vite.config.ts`, etc.

## Code Style

- **Formatting**: Biome with tabs, double quotes for JS/TS, single quotes for JSX
- **Imports**: Organize with Biome assist, use absolute paths with `@/`
- **Types**: Strict TypeScript, explicit return types, no unused vars/params
- **Naming**: camelCase vars, PascalCase components, kebab-case files
- **Error Handling**: try-catch for async, validate inputs
- **Components**: Functional components with TypeScript props
- **Styling**: Tailwind CSS v4 with CSS custom properties

## Visual Testing

- After adding or changing components or pages, first start the dev server
  and use `playwright` and its tools to open a browser and ensure you see changes.

## Package Documentation

- When you need to search docs, use `context7` tools.
