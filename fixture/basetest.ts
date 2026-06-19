import { test as base, BrowserContext, Page } from "@playwright/test";
import { BasePage } from "@pages/basepage";
import DashboardPage from "@pages/dashboardpage";
import LoginPage from "@pages/loginpage";
import PersonalDetailsPage from "@pages/personaldetailspage";
import PIMPage from "@pages/pimpage";
import AddEmployeePage from "@pages/addemppage";

type MyFixtures = {
    basePage: BasePage,
    dashboardPage: DashboardPage,
    loginPage: LoginPage,
    personalDetailsPage: PersonalDetailsPage,
    pimPage: PIMPage,
    addEmpPage: AddEmployeePage,
    //define new page variable
};

// Extend the base test with our custom fixtures for Each Test Level

export const fTest = base.extend<MyFixtures>({
    basePage: async ({ page }, use) => {
        const basepage = new BasePage(page);
        await use(basepage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    personalDetailsPage: async ({ page }, use) => {
        const personalDetailsPage = new PersonalDetailsPage(page);
        await use(personalDetailsPage);
    },
    pimPage: async ({ page }, use) => {
        const pimPage = new PIMPage(page);
        await use(pimPage);
    },
    addEmpPage: async ({ page }, use) => {
        const addEmpPage = new AddEmployeePage(page);
        await use(addEmpPage);
    }
    // Define new page in a similar way
});

// Extend the base test with passing pageobjects to all tests in the worker scope (before all tests in the worker starts and after all tests in the worker ends)

export let wTest = base.extend<{}, {
    wPage: Page,
    basePage: BasePage,
    dashboardPage: DashboardPage,
    loginPage: LoginPage,
    personalDetailsPage: PersonalDetailsPage,
    pimPage: PIMPage,
    addEmpPage: AddEmployeePage,
}>({
    wPage: [async ({ browser }, use) => {
        let context = await browser.newContext();
        const wPage = await context.newPage();
        await use(wPage);
        await wPage.close();
    }, { scope: 'worker' }],
    basePage: [async ({ wPage }, use) => {
        const basepage = new BasePage(wPage);
        await use(basepage);
    }, { scope: 'worker' }],
    loginPage: [async ({ wPage }, use) => {
        const loginPage = new LoginPage(wPage);
        await use(loginPage);
    }, { scope: 'worker' }],
    dashboardPage: [async ({ wPage }, use) => {
        const dashboardPage = new DashboardPage(wPage);
        await use(dashboardPage);
    }, { scope: 'worker' }],
    personalDetailsPage: [async ({ wPage }, use) => {
        const personalDetailsPage = new PersonalDetailsPage(wPage);
        await use(personalDetailsPage);
    }, { scope: 'worker' }],
    pimPage: [async ({ wPage }, use) => {
        const pimPage = new PIMPage(wPage);
        await use(pimPage);
    }, { scope: 'worker' }],
    addEmpPage: [async ({ wPage }, use) => {
        const addEmpPage = new AddEmployeePage(wPage);
        await use(addEmpPage);
    }, { scope: 'worker' }],
    // Define new page in a similar way
})