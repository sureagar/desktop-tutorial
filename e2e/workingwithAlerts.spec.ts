import { test, expect } from '@playwright/test'

test('Verify javascript Alerts and popup',{tag:"@ind"}, async ({ page }) => {
    await page.goto("https://www.apsrtconline.in/oprs-web/");

    // page.on('dialog', async (alert) => {
    //     await alert.dismiss();
    // });


    page.once('dialog', async (alert) => {
        await page.waitForTimeout(2000);
        if (alert.message().includes("Please select start place.")) {
            console.log("Start place validation alert is displayed with message " + alert.message());
            await alert.accept();
        } else {
            console.log("start place validation alert is not displayed");
        }
    });

    await page.waitForTimeout(2000);
    await page.click("input[id='searchBtn']");


    await page.locator("input[id='fromPlaceName']").fill("Hyderabad");
    await page.locator("//span[text()='HYDERABAD']").click();

    page.once('dialog', async (alert) => {
        await page.waitForTimeout(2000);
        if (alert.message().includes("Please select end place.")) {
            console.log("End place validation alert is displayed with message " + alert.message());
            await alert.accept();
        } else {
            console.log("End place validation alert is not displayed");
        }
    });
    // await page.waitForTimeout(2000);
    await page.click("input[id='searchBtn']");

    await page.locator("input[id='toPlaceName']").fill("Vijayawada");
    await page.locator("//span[text()='VIJAYAWADA']").click();
    // await page.locator("input[id='txtJourneyDate']").fill("30/05/2026");
    // await page.keyboard.press("Escape");
    await page.click("input[id='txtJourneyDate']");
    await page.locator("(//a[text()='30'])[1]").click();
    await page.click("input[id='searchBtn']");

})