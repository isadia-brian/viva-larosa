# Vivalarosa Development Guidelines

## Commands

**Package Manager**: Bun (default)

- `bun dev` - Start dev server on port 3000
- `bun build` - Build production bundle
- `bun test` - Run all tests (Vitest)
- `bun test:unit` - Run unit tests only
- `bun lint` - Lint with Biome
- `bun format` - Format with Biome
- `bun check` - Type check with Biome

## Code Style

- **Formatting**: Biome (tabs, double quotes for JS/TS, single quotes for JSX)
- **Imports**: Organize with Biome assist, use absolute paths with `@/`
- **Types**: Strict TypeScript, explicit return types for functions
- **Naming**: camelCase for variables, PascalCase for components, kebab-case for files
- **Error Handling**: Use try-catch for async operations, validate user inputs
- **Components**: Functional components with TypeScript props
- **Styling**: Tailwind CSS v4 with design tokens from CSS custom properties

## Visual Testing

- After adding or changing components or pages, first start the dev server
  and use `playwright` and its tools to open a browser and ensure you see changes.

## Package Documentation

- When you need to search docs, use `context7` tools.
