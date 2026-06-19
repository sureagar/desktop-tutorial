import { test, expect } from '@playwright/test';
// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test('login test', { tag: "@ind" }, async ({ page }) => {

    await test.step("Navigate to Application and login", async () => {
        await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
        await page.getByRole("textbox", { name: "Username" }).fill("testadmin");
        await page.getByRole("textbox", { name: "Password" }).fill("Vibetestq@123#");
        await page.getByRole("button", { name: "Login" }).click();
    });

   await test.step("Verify login successful", async () => {
        await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
    });

    await test.step("Add Employee", async () => {

        await page.getByRole("link", { name: "PIM" }).click();
        await page.getByRole("button", { name: "Add" }).click();
        await page.getByRole("textbox", { name: "First Name" }).fill("John");
        await page.getByRole("textbox", { name: "Last Name" }).fill("Doe");
        let empId = await page.locator("//label[text()='Employee Id']/../..//input").getAttribute("value");
        await page.getByRole("button", { name: "Save" }).click();
        await expect(page.getByRole("heading", { name: "Personal Details" })).toBeVisible({ timeout: 10000 });

    });

   await test.step("Add User", async () => {
        await page.getByRole("link", { name: "Admin" }).click();
        await page.getByRole("button", { name: "Add" }).click();
        await page.getByText("-- Select --").first().click();
        await page.getByText("ESS").first().click();
        await page.getByRole("textbox", { name: "Type for hints..." }).fill("john doe");
        await page.getByText("John Doe").nth(1).click();
        await page.getByText("-- Select --").nth(2).click();
        await page.getByText("Enabled").first().click();

        await page.locator("//label[normalize-space()='Username']/following::input[1]").fill("johndoe123");
        await page.locator("//label[normalize-space()='Password']/following::input[1]").fill("JohnDoe@123#");
        await page.locator("//label[normalize-space()='Confirm Password']/following::input[1]").fill("JohnDoe@123#");
        await page.getByRole("button", { name: "Save" }).click();

    });

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

