import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { BasePage } from '../../pages/basepage';
import LoginPage from '../../pages/loginpage';
import DashboardPage from '../../pages/dashboardpage';
import AddEmployeePage from '../../pages/addemppage';
import PIMPage from '../../pages/pimpage';
import PersonalDetailsPage from '../../pages/personaldetailspage';

export interface CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;

  // Page objects - always available after init()
  basePage: BasePage;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  addEmployeePage: AddEmployeePage;
  pimPage: PIMPage;
  personalDetailsPage: PersonalDetailsPage;
}

export class CustomPlaywrightWorld extends World implements CustomWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;

  // Page objects - declare as definite assignment
  basePage!: BasePage;
  loginPage!: LoginPage;
  dashboardPage!: DashboardPage;
  addEmployeePage!: AddEmployeePage;
  pimPage!: PIMPage;
  personalDetailsPage!: PersonalDetailsPage;
  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Initialize page objects - same pattern as basetest.ts
    this.basePage = new BasePage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.addEmployeePage = new AddEmployeePage(this.page);
    this.pimPage = new PIMPage(this.page);
    this.personalDetailsPage = new PersonalDetailsPage(this.page);
  }

  async cleanup(): Promise<void> {
    if (this.page) {
      await this.page.close();
    }
    if (this.context) {
      await this.context.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Enable this line when using POM approach (with page objects)
setWorldConstructor(CustomPlaywrightWorld);