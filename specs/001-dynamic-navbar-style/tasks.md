# Tasks: Dynamic Navbar Style on Scroll

**Input**: Design documents from `/specs/001-dynamic-navbar-style/`
**Prerequisites**: plan.md, spec.md, research.md, quickstart.md

**Tests**: Test tasks are included as requested by the `quickstart.md` document.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

---

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Prepare the development environment.

- [x] T001 Create the feature branch `001-dynamic-navbar-style`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: No foundational tasks are required for this feature as the work is self-contained within a single user story.

---

## Phase 3: User Story 1 - Navbar Style Change on Scroll (Priority: P1) 🎯 MVP

**Goal**: As a user on a desktop device, the navigation bar should change its appearance when scrolling past the hero section to ensure it remains visible and legible.

**Independent Test**: Load the homepage, scroll down past the hero section, and verify the navbar background becomes dark and translucent with white text. Scroll back up to the hero section and verify the navbar reverts to its original state. All links must remain clickable throughout.

### Tests for User Story 1 ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T002 [P] [US1] Create test file `src/components/Navbar/NavbarLarge.test.tsx`.
- [x] T003 [US1] Write a test in `src/components/Navbar/NavbarLarge.test.tsx` to assert that the scrolled-state classes are NOT present when `isHeroVisible={true}`.
- [x] T004 [US1] Write a test in `src/components/Navbar/NavbarLarge.test.tsx` to assert that the scrolled-state classes ARE present when `isHeroVisible={false}`.

### Implementation for User Story 1

- [x] T005 [US1] In `src/routes/__root.tsx`, create a `useState` variable `isHeroVisible` initialized to `true`.
- [x] T006 [US1] In `src/routes/__root.tsx`, create a `useRef` for the `heroSentinelRef`.
- [x] T007 [US1] In `src/routes/__root.tsx`, implement a `useEffect` hook to manage an `IntersectionObserver` that watches the `heroSentinelRef` and updates the `isHeroVisible` state.
- [x] T008 [US1] In `src/routes/__root.tsx`, render a sentinel `<div />` with the `heroSentinelRef` immediately after the `<Hero />` component.
- [x] T009 [US1] In `src/routes/__root.tsx`, pass the `isHeroVisible` state as a prop to the `<Navbar />` component.
- [x] T010 [US1] In `src/components/Navbar/index.tsx`, accept the `isHeroVisible` prop and pass it down to the `<NavbarLarge />` component.
- [x] T011 [US1] In `src/components/Navbar/NavbarLarge.tsx`, accept the `isHeroVisible: boolean` prop.
- [x] T012 [US1] In `src/components/Navbar/NavbarLarge.tsx`, use the `cn` utility to conditionally apply `bg-[rgba(20,20,20,0.8)]`, `text-white`, and `transition-colors duration-300` when `isHeroVisible` is `false`.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final review and validation.

- [x] T013 Perform a final review of the implementation, ensuring the scroll animation is smooth and free of "jank".
- [x] T014 Validate the feature by following the steps in `specs/001-dynamic-navbar-style/quickstart.md`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **User Story 1 (Phase 3)**: Depends on Setup completion.
- **Polish (Phase 4)**: Depends on User Story 1 completion.

### Within User Story 1

- Tests (T002-T004) should be written first and fail before implementation begins.
- Root layout logic (T005-T009) should be implemented before the Navbar component changes.
- Navbar component changes (T010-T012) depend on the root layout passing the required prop.

### Parallel Opportunities

- **[P] T002**: The test file can be created in parallel with other tasks.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 3: User Story 1.
3. **STOP and VALIDATE**: Test User Story 1 independently by running the application and performing the manual tests described.
4. Complete Phase 4: Polish.
5. Deploy/demo.

---
