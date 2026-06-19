import { test, expect } from '@playwright/test';
// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test('login test using CSS Selectors', async ({ page }) => {
    // Navigate to Application
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
   
    // using page.locator() method to locate the username input field and fill it
    await page.locator('input[name="username"]').fill("testadmin");

    // using page.fill() method to locate the password input field and fill it
    await page.fill("input[placeholder='Password']", "Vibetestq@123#");
    await page.locator("input[placeholder='Password']").press("Enter");

    // await page.click("button[type='submit']");

    // verify login successful
    await expect(page.locator("h6")).toHaveText("Dashboard");
})

// Playwright Selectors
// 1. Role based selector
// 2. Text based selector
// 3. CSS selector
// 4. XPath selector

// getByRole() is a role based selector,
// it is used to select elements based on their role and name.
// It is the most recommended selector as it is more stable and less prone to changes in the UI. It also makes the test more readable and maintainable.

// getbyText() is a text based selector,
// it is used to select elements based on their text content.
// It is less stable than getByRole() as it can be affected by changes in the UI, such as changes in the text content of the element.
// It is also less readable and maintainable than getByRole() as it does not provide any context about the element being selected.

