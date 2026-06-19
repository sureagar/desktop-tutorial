import { expect } from '@playwright/test';
import { fTest as test } from "@fixtures/basetest";
// import appCredentials from '../testdata/appcredentials.json';
// import employeeData from '../testdata/Employees.json';
import * as data from '@testdata/index';

// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test.describe('POM with Base and Data', () => {

    test.beforeEach(async ({ page, basePage, loginPage, dashboardPage }) => {

        page.on("requestfinished", async (request) => {
            // if (request.url().includes("https://vibetestq-osondemand.orangehrm.com/api/v2/")) {
                const response = await request.response();
                if (response) {
                    // console.log("responce text:", await response.json());
                    // console.log("Request URL:", request.url());
                    // console.log("Request Method:", request.method());
                    // console.log("Response Status:", response.status());
                    // console.log("Response Status:", JSON.stringify(await response)); // to print response body
                }
            // }
        });

        // Navigate to Application
        await basePage.navigateToURL("/");
        await loginPage.EnterUserName(data["vibetestq"].username);
        await loginPage.EnterPassword(data["vibetestq"].password);
        await loginPage.ClickLogin();
        //Dashboard
        await dashboardPage.verifyDashboardPage();

    });

    data.empData.forEach((emp) => {
        test(`Create Employee - ${emp.firstName} ${emp.lastName}`, async ({ dashboardPage, addEmpPage, pimPage, personalDetailsPage }) => {

            await dashboardPage.ClickPIM();

            await pimPage.verifyPIMPage();
            await pimPage.ClickAdd();

            await addEmpPage.EnterFirstName(emp.firstName);
            await addEmpPage.EnterLastName(emp.lastName);
            await addEmpPage.ClickSave();

            // await personalDetailsPage.verifyPersonalDetailsPage();

        });
    });
});