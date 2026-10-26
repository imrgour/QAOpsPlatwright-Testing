const { test, expect } = require('@playwright/test');
const { LoginPagePractise } = require('../pageobject/LoginPagePractise');

test('Login practise flow and verify iphone X product', async ({ page }) => {
    const loginPage = new LoginPagePractise(page);

    await loginPage.goTo();
    await loginPage.login('rahulshettyacademy', 'Learning@830$3mK2');
    await loginPage.acceptTerms();
    await loginPage.signIn();
    await loginPage.waitForShopPage();

    await expect(page).toHaveURL(/.*angularpractice\/shop/);
    await loginPage.verifyProductVisible('iphone X');
});
