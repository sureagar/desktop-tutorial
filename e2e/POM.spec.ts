import { test, expect } from '@playwright/test';
import LoginPage from '@pages/loginpage';
import DashboardPage from '../pages/dashboardpage';
import PIMPage from '../pages/pimpage';
import AddEmployeePage from '../pages/addemppage';
import PersonalDetailsPage from '../pages/personaldetailspage';
import { BasePage } from '../pages/basepage';
// test is used define tests
// expect is used create assertions

// syntax of test is test('test description', async ({page}) => { // test code })

test('Create and Delete Employee using Xpath and CSS', async ({ page }) => {
    let basepage = new BasePage(page);
    // Navigate to Application
    await basepage.navigateToURL("https://vibetestq-osondemand.orangehrm.com/auth/login");
    let loginpage = new LoginPage(page);
    await loginpage.EnterUserName('testadmin');
    await loginpage.EnterPassword('Vibetestq@123#');
    await loginpage.ClickLogin();

    //Dashboard
    let dashboardpage = new DashboardPage(page);
    await dashboardpage.verifyDashboardPage();
    await dashboardpage.ClickPIM();

    let pimpage = new PIMPage(page);
    await pimpage.verifyPIMPage();
    await pimpage.ClickAdd();

    let addemppage = new AddEmployeePage(page);
    await addemppage.EnterFirstName("John");
    await addemppage.EnterLastName("Smith");
    await addemppage.ClickSave();

    let personaldetailspage = new PersonalDetailsPage(page);
    await personaldetailspage.verifyPersonalDetailsPage();


    // Login to Application
    // await loginpage.txtUserName.fill('testadmin');
    // await loginpage.txtPassword.fill('Vibetestq@123#');
    // await loginpage.btnLogin.click();
    //Verify Dashboard Page is displayed
    // await expect(dashboardpage.dashboardHeader).toBeVisible();
    // await dashboardpage.lnkPIM.click();
    //Verify PIM Page is displayed
    // await expect(pimpage.pimHeader).toBeVisible({timeout: 10000});
    // await pimpage.btnAdd.click();
    // await addemppage.txtFirstName.fill("John");
    // await addemppage.txtLastName.fill("Smith");
    // await addemppage.btnSave.click();
    // await expect(personaldetailspage.personalDetailsHeader).toBeVisible({timeout: 10000});

})
