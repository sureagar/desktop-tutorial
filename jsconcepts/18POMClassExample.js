// Playwright POM Class Example

class LoginPage {

    usernameInput = page.locator("#username");
    passwordInput = page.locator("#password");
    loginButton = page.locator("#login-button");

    constructor(page) {
        this.page = page;
    }

    login(username, password) {
        usernameInput.fill(username);
        passwordInput.fill(password);
        loginButton.click();
    }

    VerifyPasswordInputEncryption(password) {
        passwordInput.fill(password);
        // code to verify that the password is encrypted in the input field
    }
}

class BasePage {
    constructor(page) {
        this.page = page;
    }
    navigate(url) {
        this.page.goto(url);
    }
}

let basePage = new BasePage(page);
basePage.navigate("https://example.com/login");

let loginPage = new LoginPage(page);
loginPage.login("sudhakar", "password123");
