// import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
// import { chromium, BrowserContext, Page, expect, Browser } from "@playwright/test";
// setDefaultTimeout(120 * 1000); // 60s
// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

// Given('I navigate to the login page', async function () {
//     // Write code here that turns the phrase above into concrete actions

//     browser = await chromium.launch({ headless: false });
//     context = await browser.newContext();
//     page = await context.newPage();
//     await page.goto('https://vibetestq-osondemand.orangehrm.com/',{timeout: 60000});

// });

// When('I login with valid credentials {string} and {string}', async function (username, password) {

//     await page.getByPlaceholder('Username').fill(username);
//     await page.getByPlaceholder('Password').fill(password);
//     await page.getByRole('button', { name: 'Login' }).click();
// });

// Then('I should be redirected to the dashboard page', async function () {
//     await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible({ timeout: 10000 });
// });

// When('I navigate to the employee list page', async function () {
//     await page.locator("//a[normalize-space()='PIM']").click();

// });

// Then('I should see the PIM module is accessible', async function () {
//     await expect(page.locator("//h6[text()='PIM']")).toBeVisible({ timeout: 10000 });
// });

// When('I click on add button', async function () {
//     await page.locator("//button[normalize-space()='Add']").click();
// });

// Then('I should see the add employee form', async function () {
//     await expect(page.locator("//h6[text()='Add Employee']")).toBeVisible();
// });

// When('I add a new employee with unique details', async function () {
//     await page.locator("//input[@placeholder='First Name']").fill("Test");
//     await page.locator("//input[@placeholder='Last Name']").fill("Employee");

//     let empid = await page.locator("//label[text()='Employee Id']/../..//input").inputValue();
//     console.log("Employee Id is " + empid);
//     await page.locator("//button[normalize-space()='Save']").click();
// });

// Then('the employee should be created successfully', async function () {
//     await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible({ timeout: 10000 });
// });
