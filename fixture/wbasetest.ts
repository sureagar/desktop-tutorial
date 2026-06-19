//Worker level

import { test as base, BrowserContext, Page } from "@playwright/test";
import { BasePage } from "@pages/basepage";
import DashboardPage from "@pages/dashboardpage";
import LoginPage from "@pages/loginpage";
import PersonalDetailsPage from "@pages/personaldetailspage";
import PIMPage from "@pages/pimpage";
import AddEmployeePage from "@pages/addemppage";

// Extend the base test with passing pageobjects to all tests in the worker scope (before all tests in the worker starts and after all tests in the worker ends)

export let test = base.extend< {
    basePage: BasePage,
    dashboardPage: DashboardPage,
    loginPage: LoginPage,
    personalDetailsPage: PersonalDetailsPage,
    pimPage: PIMPage,
    addEmpPage: AddEmployeePage,
},{wPage:Page}>({
    wPage: [async ({ browser }, use) => {
        const wContext = await browser.newContext();
        const wPage = await wContext.newPage();
        await use(wPage);
        // await wPage.close();
    }, { scope: 'worker' }],
    basePage: async ({ wPage }, use) => {
        const basepage = new BasePage(wPage);
        await use(basepage);
    },
    loginPage: async ({ wPage }, use) => {
        const loginPage = new LoginPage(wPage);
        await use(loginPage);
    },
    dashboardPage: async ({ wPage }, use) => {
        const dashboardPage = new DashboardPage(wPage);
        await use(dashboardPage);
    },
    personalDetailsPage: async ({ wPage }, use) => {
        const personalDetailsPage = new PersonalDetailsPage(wPage);
        await use(personalDetailsPage);
    },
    pimPage: async ({ wPage }, use) => {
        const pimPage = new PIMPage(wPage);
        await use(pimPage);
    },
    addEmpPage: async ({ wPage }, use) => {
        const addEmpPage = new AddEmployeePage(wPage);
        await use(addEmpPage);
    },
    // Define new page in a similar way
})