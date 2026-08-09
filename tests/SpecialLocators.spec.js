const {test,expect} = require('@playwright/test')


test('Third TestCase loginAssignment', async ({browser})=> 
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    //await page.pause();

    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    //await page.locator("#exampleInputPassword1").pressSequentially("abcdefgh");
    await page.getByPlaceholder("Password").fill("abcdefgh");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link", {name: 'Shop'}).click();

    await page.locator("app-card").filter({hasText:'Samsung Note 8'}).getByRole("button", {name: 'Add'}).click();
    //await page.pause();

})