import { test, expect } from '@playwright/test';
// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test('Create and Delete Employee using Xpath and CSS', async ({ page }) => {

    let txtUsername=page.locator('input[name="username"]').describe("Username Textbox");
    let txtPassword=page.locator('input[name="password"]').describe("Password Textbox");
    let btnLogin=page.locator("//button[@type='submit']").describe("Login Button");

    // Navigate to Application
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");

    // Login to Application
    await txtUsername.fill('testadmin');
    await txtPassword.fill('Vibetestq@123#');
    await btnLogin.click();

    //Verify Dashboard Page is displayed
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

    await page.locator("//a[normalize-space()='PIM']").click();
    await page.locator("//button[normalize-space()='Add']").click();
    await page.locator("//input[@placeholder='First Name']").fill("Test");
    await page.locator("//input[@placeholder='Last Name']").fill("Employee");
    
    let empid= await page.locator("//label[text()='Employee Id']/../..//input").inputValue();
    console.log("Employee Id is "+empid);
    await page.locator("//button[normalize-space()='Save']").click();

    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible({timeout: 10000});
    await page.locator("//a[normalize-space()='Employee List']").click();
    // Delete the employee created
    await page.locator("//label[text()='Employee Id']/../..//input").fill(empid);
    await page.locator("//button[normalize-space()='Search']").click();
    // let empXpath ="//div[text()='"+empid+"']/../..//input[@type='checkbox']"
    let empXpath =`//div[text()='${empid}']/../..//i[contains(@class,'oxd-checkbox-input-icon')]`
    await page.locator(empXpath).click();
    await page.locator("//button[normalize-space()='Delete Selected']").click();
    await page.locator("//button[normalize-space()='Yes, Delete']").click();

    // Verify employee is deleted
    await page.locator("//label[text()='Employee Id']/../..//input").fill(empid);
    await page.locator("//button[normalize-space()='Search']").click();
    await expect(page.locator("//div[normalize-space()='No Records Found']")).toBeVisible();

    // await expect(page.locator("span:has-text('No Records Found')")).toBeVisible();

})
