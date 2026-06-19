import { expect } from '@playwright/test';
import { fTest as test } from "../fixture/basetest";
import appCredentials from '../testdata/appcredentials.json';

// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test.describe('POM with Base and Data', () => {

    test('Create and Delete Employee using Xpath and CSS', async ({ page, basePage, loginPage, dashboardPage, addEmpPage, pimPage, personalDetailsPage }) => {

        // Navigate to Application
        await basePage.navigateToURL("/");
        await loginPage.EnterUserName(appCredentials["vibetestq"].username);
        await loginPage.EnterPassword(appCredentials["vibetestq"].password);
        await loginPage.ClickLogin();

        //Dashboard
        await dashboardPage.verifyDashboardPage();
        await dashboardPage.ClickPIM();

        await pimPage.verifyPIMPage();
        await pimPage.ClickAdd();

        await addEmpPage.EnterFirstName("John");
        await addEmpPage.EnterLastName("Smith");
        await addEmpPage.ClickSave();

        await personalDetailsPage.verifyPersonalDetailsPage();

    })

    test('Create and Delete Employee using Xpath and CSS - Open Source', async ({ page, basePage, loginPage, dashboardPage, addEmpPage, pimPage, personalDetailsPage }) => {

        // Navigate to Application
        await basePage.navigateToURL("/");
        await loginPage.EnterUserName(appCredentials["opensource"].username);
        await loginPage.EnterPassword(appCredentials["opensource"].password);
        await loginPage.ClickLogin();
    });

});