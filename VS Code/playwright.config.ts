import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directory where your test files live
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in source
  forbidOnly: !!process.env.CI,

  // Retry failed tests once on CI
  retries: process.env.CI ? 1 : 0,

  // Reporter: 'html' generates a nice visual report
  reporter: 'html',

  use: {
    // Base URL so you can use relative paths like page.goto('/')
    baseURL: 'https://example.com',

    // Save trace on first retry (helps debug failures)
    trace: 'on-first-retry',

    // Take screenshot only on failure
    screenshot: 'only-on-failure',

    // ✅ This makes the browser open visibly when tests run
    headless: false,
 
    // ✅ Slow down actions by 500ms so you can see what's happening
    launchOptions: {
      slowMo: 500,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});