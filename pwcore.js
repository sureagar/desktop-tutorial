const assert = require('node:assert');
const { chromium, devices } = require('playwright');

(async () => {
  // Setup
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(devices['Desktop Chrome']);
  const page = await context.newPage();

  await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
  await page.getByRole("textbox", { name: "Username" }).fill("testuser");
  await page.getByRole("textbox", { name: "Password" }).fill("Vibetestq@123#");
  await page.getByRole("button", { name: "Login" }).click();

  // Teardown
  await context.close();
  await browser.close();
})();