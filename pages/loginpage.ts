// Login Page Calss

import { Page } from "@playwright/test";
import { BasePage } from "./basepage";

class LoginPage extends BasePage{
    txtUserName;
    txtPassword;
    btnLogin;
    constructor(page:Page){
        super(page);
        this.txtUserName = page.locator("input[name='username']").describe("Username Textbox");
        this.txtPassword = page.locator('input[name="password"]').describe("Password Textbox");
        this.btnLogin = page.locator("//button[@type='submit']").describe("Login Button");
    }
    
    async EnterUserName(username:string){
        await this.txtUserName.fill(username);
        console.log("Entered username "+username);
    }
    async EnterPassword(password:string){
        await this.txtPassword.fill(password);
        console.log("Entered password "+password);
    }
    async ClickLogin(){
        await this.btnLogin.click();
        console.log("Clicked on Login Button");
    }

    async loginToApplication(username:string,password:string){
        await this.EnterUserName(username);
        await this.EnterPassword(password);
        await this.ClickLogin();
    }
}

export default LoginPage;