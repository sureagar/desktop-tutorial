import { test, expect } from '@playwright/test';
// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test('Create and Delete Employee using Xpath and CSS', async ({ page }) => {
    // Navigate to Application
    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");

    // Login to Application
    await page.fill('input[name="username"]', 'testadmin');
    await page.locator('input[name="password"]').fill('Vibetestq@123#');
    await page.locator("//button[@type='submit']").click();

    //Verify Dashboard Page is displayed
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

    await page.locator("//a[normalize-space()='PIM']").click();

    await page.locator("//a[normalize-space()='Employee List']").click();

    let isPaginationVisible = true;

    while (isPaginationVisible) {
        // await page.waitForTimeout(5000);
        await expect(page.locator("div.oxd-table-cell:nth-of-type(2)").first()).toBeVisible({ timeout: 10000 });

        let allElms = await page.locator("div.oxd-table-cell:nth-of-type(2)").all();
        console.log("Number of records in current page " + allElms.length);
        for (let i = 0; i < allElms.length; i++) {
            let text = await allElms[i].innerText();
            console.log(text);
        }

        isPaginationVisible = await page.locator("i.bi-chevron-right").isVisible();
        console.log("Is pagination visible " + isPaginationVisible);
        if (isPaginationVisible) {
            await page.locator("i.bi-chevron-right").click();
        }
    }

})
