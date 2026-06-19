// Dashboard Page Calss

import { expect, Page } from "@playwright/test";
import { BasePage } from "./basepage";

class DashboardPage extends BasePage{
    dashboardHeader;
    lnkPIM;
    constructor(page:Page){
        super(page);
        this.dashboardHeader = page.locator("//h6[text()='Dashboard']").describe("Dashboard Header");
        this.lnkPIM = page.locator("//a[normalize-space()='PIM']").describe("PIM Link");
    }

    async ClickPIM(){
        await this.lnkPIM.click();
        console.log("Clicked on PIM Link");
    }
    async verifyDashboardPage(){
        await expect(this.dashboardHeader).toBeVisible();
        console.log("Dashboard Page is displayed");
    }
    
}

export default DashboardPage;