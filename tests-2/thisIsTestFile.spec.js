const { test, expect } = require('@playwright/test');
const { thisIsTestFile } = require('../pageobject-2/thisIsTestFile');

test('Login practise flow and verify iphone X product', async ({ page }) => {
    const loginPage = new thisIsTestFile(page);

    await loginPage.goTo();
    await loginPage.login('rahulshettyacademy', 'Learning@830$3mK2');
    await loginPage.acceptTerms();
    await loginPage.signIn();
    await loginPage.waitForShopPage();

    await expect(page).toHaveURL(/.*angularpractice\/shop/);
    await loginPage.verifyProductVisible('iphone X');
});
