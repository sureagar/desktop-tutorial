import {test,expect} from '@playwright/test'

test('Verify APSRTC website',async({page})=>{
    await page.goto("https://www.apsrtconline.in/oprs-web/");
    await page.locator("input[id='fromPlaceName']").fill("Hyderabad");
    await page.locator("//span[text()='HYDERABAD']").click();
    await page.locator("input[id='toPlaceName']").fill("Vijayawada");
    await page.locator("//span[text()='VIJAYAWADA']").click();
    // await page.locator("input[id='txtJourneyDate']").fill("30/05/2026");
    // await page.keyboard.press("Escape");
    await page.click("input[id='txtJourneyDate']");
    await page.locator("(//a[text()='30'])[1]").click();
    await page.click("input[id='searchBtn']");
    await expect(page.getByText("Book ticket in advance")).toBeVisible();
    await page.locator("//span[text()='Bus Type']").click();
    await page.locator("//span[normalize-space()='A/C CLASS']").click();

    let acServices = await page.locator("div.srvceNO:visible").all();

    //div[@class='srvceNO' and not(ancestor::div[@style='display: none;'])]

    console.log("Number of A/C CLASS services " + acServices.length);
    for(let i=0;i<acServices.length;i++){
        let text = (await acServices[i].innerText()).trim();
        console.log(text);
    }
})