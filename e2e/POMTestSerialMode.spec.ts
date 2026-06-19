import { expect } from '@playwright/test';
import { wTest as test } from "../fixture/basetest";
import appCredentials from '../testdata/appcredentials.json';
// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test.describe.configure({ mode: 'serial' });
test.describe('OrangeHRM End to End', () => {

    test('Login Test', async ({ basePage, loginPage, dashboardPage, addEmpPage, pimPage, personalDetailsPage }) => {

        // Navigate to Application
        await basePage.navigateToURL("/");
        await loginPage.EnterUserName(appCredentials["vibetestq"].username);
        await loginPage.EnterPassword(appCredentials["vibetestq"].password);
        await loginPage.ClickLogin();
        //Dashboard
        await dashboardPage.verifyDashboardPage();

    })

    test('Add Employee', async ({ basePage, loginPage, dashboardPage, addEmpPage, pimPage, personalDetailsPage }) => {
        // await dashboardPage.verifyDashboardPage();
        await dashboardPage.ClickPIM();

        await pimPage.verifyPIMPage();
        await pimPage.ClickAdd();

        await addEmpPage.EnterFirstName("John");
        await addEmpPage.EnterLastName("Smith");
        await addEmpPage.ClickSave();

        await personalDetailsPage.verifyPersonalDetailsPage();

    });

});