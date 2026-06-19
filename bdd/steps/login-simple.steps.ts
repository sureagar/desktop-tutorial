import { Given, When, Then } from '@cucumber/cucumber';
import { PSWorld,expect } from '../support/simpleWorld';
// import {expect} from '@playwright/test';

// Simple step definitions WITHOUT POM - direct Playwright API usage
// setDefaultTimeout(60 * 1000); 

Given('I navigate to the login page', async function (this: PSWorld) {
    // await this.init();
    await this.page.goto('https://vibetestq-osondemand.orangehrm.com/auth/login');

});

When('I login with valid credentials {string} and {string}', async function (this: PSWorld, username: string, password: string) {
    // Direct Playwright API calls - no page objects
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
});

When('I login with invalid credentials {string} and {string}', async function (this: PSWorld, username: string, password: string) {
    // Direct Playwright API calls - no page objects
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
});


When('I click on the PIM module', async function (this: PSWorld) {
    await this.page.click('a:has-text("PIM")');
});

Then('I should see the PIM module', async function (this: PSWorld) {
    await expect(this.page.locator('h6:has-text("PIM")')).toBeVisible();
});

When('I click on add button', async function (this: PSWorld) {
    await this.page.click('button:has-text("Add")');
});

Then('I should see the add employee form', async function (this: PSWorld) {
    await expect(this.page.locator('h6:has-text("Add Employee")')).toBeVisible();
});

When('I add a new employee with unique details', async function (this: PSWorld) {
    const ts = Date.now();
    const first = `AutoFN_${ts}`;
    const last = `AutoLN_${ts}`;

    await this.page.locator("//input[@placeholder='First Name']").fill(first);
    await this.page.locator("//input[@placeholder='Last Name']").fill(last);

    let empid = await this.page.locator("//label[text()='Employee Id']/../..//input").inputValue();
    console.log("Employee Id is " + empid);
    await this.page.locator("//button[normalize-space()='Save']").click();
});

Then('I should see the Personal Details page for the new employee', async function (this: PSWorld) {
    await expect(this.page.locator('h6:has-text("Personal Details")')).toBeVisible({timeout: 10000});
});

Then('I should be redirected to the dashboard page', async function (this: PSWorld) {
    // Wait for navigation to dashboard page
    // await this.page.waitForURL('**/dashboard', { timeout: 10000 });

    // Verify the URL contains dashboard
    // const currentUrl = this.page!.url();
    // expect(currentUrl).toContain('dashboard');

    await expect(this.page.locator('h6:has-text("Dashboard")')).toBeVisible();
});
