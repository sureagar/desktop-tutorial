import {test,expect} from '@playwright/test'

test('Verify Tabs',async({page})=>{

    //Browser
    //Context
    //Page

    await page.goto("https://vibetestq-osondemand.orangehrm.com/auth/login");
    //click link that opens another tab
    await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    await page.context().waitForEvent("page");

    //get all pages opened in the browser
    let allPages = page.context().pages();
    console.log("Number of pages opened " + allPages.length);

    //get title of all pages    for(let i=0;i<allPages.length;i++){
    for(let i=0;i<allPages.length;i++){
        let title = await allPages[i].title();
        console.log("Title of page " + i + " is " + title);
    }

    //switch to new tab
    let newPage = allPages[1];
    await newPage.getByPlaceholder("Your email address").fill("sudhakar@qtpsudhakar.com"); 

    newPage.close();
    await page.waitForTimeout(5000);


})