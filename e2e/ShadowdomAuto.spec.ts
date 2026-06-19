import {test,expect} from '@playwright/test'

test("shadow dom example", async ({page})=>{

    await page.goto("https://vibetestq.com/testweb/sandbox/");
    await page.click("text=Drag, Drop & Shadow");
    await page.fill("input#shadow-txt","Hello Shadow DOM");
    // await page.locator("input#shadow-txt").getAttribute("value")
    let shadowText = await page.locator("input#shadow-txt").inputValue();
    console.log("Text in shadow dom is "+shadowText);

    // await page.locator("input#shadow-txt").click();
    // await page.click("text=Shadow DOM Button");
    // await page.getByText("Drag, Drop & Shadow").click();

})