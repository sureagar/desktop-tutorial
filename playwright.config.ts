import { defineConfig, devices } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
/**
 * See https://playwright.dev/docs/test-configuration.
 */
const runId = new Date().toISOString().replace(/[:.]/g, '-');
const runOutputDir = `test-results/pwreport-${runId}`;

export default defineConfig({
  timeout: 500000, // 5 minutes
  expect: {
    timeout: 10000, // 10 seconds
  },
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  
    /* Reporter to use on CI. See https://playwright.dev/docs/test-reporters */
  /* Reporter to use on CI. See https://playwright.dev/docs/test-reporters */

  //  reporter:  [['html', {outputFolder: 'my-report'}], ['allure-playwright']],
  reporter: [['html', { outputFolder: "playwright-report" }],
['allure-playwright', { outputFolder: 'allure-results', detail: true, suiteTitle: true }],],
outputDir: `${runOutputDir}/artifacts`,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto("/")`. */
    baseURL: 'https://vibetestq-osondemand.orangehrm.com/',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

    // trace: 'on',
     trace: 'on-first-retry',
    actionTimeout: 10000,
    navigationTimeout: 60000,
    headless: process.env.CI ? true : false,
  },
  
  /* Configure projects for major browsers. See https://playwright.dev/docs/api/class-testproject. */
  projects: [
    {
       name: 'vibetestq',
      use: {
        baseURL: 'https://vibetestq-osondemand.orangehrm.com/',
        ...devices['Desktop Chrome'],
        
      },
      // grep: "@ind", // to run tests with @ind tag
      // testMatch: 'POMTestSerialMode.spec.ts', 
      testMatch: ['*POMTestSerialMode.spec.ts', '*Apsrtc.spec.ts']
      // testMatch:'CreateDelete.spec.ts'
 } ],
});