<!--
Sync Impact Report:
- Version change: 1.1.0 → 1.2.0
- Added sections:
  - VI. Styling and Theming
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
-->
# Vivalarosa Constitution

## Core Principles

### I. Uncompromising Code Quality
All code must adhere to the styles and standards defined in the project's Biome configuration. Code should be clear, concise, and well-documented where complex logic is present.

### II. Rigorous Testing Standards
Every new feature must be accompanied by unit or integration tests. All tests must pass before a pull request can be merged. Critical user flows must be covered by end-to-end tests.

### III. Consistent User Experience
The user interface and experience shall remain consistent across the application. Reusable components should be utilized wherever possible. Any new UI element must align with the existing design system.

### IV. High-Performance by Default
The application must be performant. Bundle sizes should be monitored, and code should be optimized for speed. Performance regressions are considered bugs and must be addressed with high priority.

### V. Dependency Management
`bun` is the default package manager. Before adding a new dependency, developers must verify it is not already listed in `package.json` to avoid duplication.

### VI. Styling and Theming
Inline styling using Tailwind CSS is the preferred method for styling components. For conditional styling, the `cn` helper function located in `src/lib/utils.ts` must be used.

## Governance
This Constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All pull requests and reviews must verify compliance with these principles.

**Version**: 1.2.0 | **Ratified**: 2025-11-15 | **Last Amended**: 2025-11-15