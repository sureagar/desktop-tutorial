import { test, expect } from '@playwright/test';
import fs from 'fs';
// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test('Create employee with file upload ', async ({ page }) => {
    // Navigate to Application
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");

    // Login to Application
    await page.fill('input[name="username"]', 'testadmin');
    await page.locator('input[name="password"]').fill('Vibetestq@123#');
    await page.locator("//button[@type='submit']").click();

    //Verify Dashboard Page is displayed
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

    await page.locator("//a[normalize-space()='PIM']").click();
    await page.locator("//button[normalize-space()='Add']").click();
    await page.locator("//input[@placeholder='First Name']").fill("Test");
    await page.locator("//input[@placeholder='Last Name']").fill("Employee");

    let empid = await page.locator("//label[text()='Employee Id']/../..//input").inputValue();
    console.log("Employee Id is " + empid);
    await page.locator("//button[normalize-space()='Save']").click();

    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible({ timeout: 10000 });

    // await page.waitForTimeout(10000);
    await page.click("//button[normalize-space()='Add']");
    await page.locator("input.oxd-file-input").setInputFiles("testdata/sampleData.txt");

    await page.click("div.orangehrm-attachment button[type='submit']");

    await page.waitForTimeout(5000);

    let dp = page.waitForEvent('download');

    await page.click("i.bi-download");
    let download = await dp;
    await download.saveAs('downloads/' + download.suggestedFilename());

    //verify file exist
    fs.exists('downloads/' + download.suggestedFilename(), (err, exists) => {
        if (err) {
            console.error('Error checking file existence:', err);
            return;
        }
        if (exists) {
            console.log('File exists:', download.suggestedFilename());
        } else {
            console.log('File does not exist:', download.suggestedFilename());
        }
    });
})
