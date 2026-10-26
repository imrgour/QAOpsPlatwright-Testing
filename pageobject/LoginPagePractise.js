const { expect } = require('@playwright/test');

class LoginPagePractise {
    constructor(page) {
        this.page = page;
        this.username = page.locator("input[type='text']").first();
        this.password = page.locator("input[type='password']").first();
        this.checkbox = page.locator('#terms');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async acceptTerms() {
        await this.checkbox.check();
    }

    async signIn() {
        await this.signInButton.click({ force: true });
    }

    async waitForShopPage() {
        await this.page.waitForURL('**/angularpractice/shop', { timeout: 15000 });
    }

    async verifyProductVisible(productName) {
        await expect(this.page.locator('.card-title').filter({ hasText: productName })).toBeVisible();
    }
}

module.exports = { LoginPagePractise };
