const { expect } = require('@playwright/test');

class thisIsTestFile {
    constructor(page) {
        this.page = page;
        this.username = page.locator("input[type='text']").first();
        this.password = page.locator("input[type='password']").first();
        this.termsCheckbox = page.locator('#terms');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.productTitles = page.locator('.card-title');
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async acceptTerms() {
        await this.termsCheckbox.check();
    }

    async signIn() {
        await this.signInButton.click();
    }

    async waitForShopPage() {
        await this.page.waitForURL('**/angularpractice/shop');
    }

    async verifyProductVisible(productName) {
        await expect(this.productTitles.filter({ hasText: productName })).toBeVisible();
    }
}

module.exports = { thisIsTestFile };
