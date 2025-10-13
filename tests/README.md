# E2E Testing with Playwright

This project uses Playwright for end-to-end testing of UI components and features.

## Running Tests

### Run all tests (headless)
```bash
bun run test:e2e
```

### Run tests in UI mode (visual)
```bash
bun run test:e2e:ui
```

### Run tests in debug mode
```bash
bun run test:e2e:debug
```

### View test report
```bash
bun run test:e2e:report
```

## Test Structure

Tests are located in `tests/e2e/` directory:
- `about-section.spec.ts` - Tests for the About section including BlurredImage effect

## Writing Tests

Example test structure:
```typescript
import { test, expect } from '@playwright/test'

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/')
    // Test assertions here
  })
})
```

## Configuration

Playwright configuration is in `playwright.config.ts`:
- Tests run against `http://localhost:3000`
- Dev server starts automatically
- Screenshots taken on failure
- HTML report generated after test run

## Useful Commands

```bash
# Install additional browsers
bunx playwright install

# Run specific test file
bunx playwright test tests/e2e/about-section.spec.ts

# Run tests in headed mode (see browser)
bunx playwright test --headed

# Run tests in specific browser
bunx playwright test --project=chromium
```
