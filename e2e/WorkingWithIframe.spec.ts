import {test,expect} from '@playwright/test'

test('Verify Iframe',async({page})=>{
    await page.goto("https://api.jquery.com/dblclick/");
    //switch iframe
    let frameElm = page.frameLocator("div.code-demo iframe");
    await frameElm.locator("body > div").dblclick();

    await page.waitForTimeout(5000);
})