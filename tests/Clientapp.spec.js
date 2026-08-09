
const {test,expect} = require('@playwright/test')


test('Third TestCase loginAssignment', async ({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const loginBtn = page.locator("#login");
    const pAss = page.locator("#userPassword");
    const email = page.locator("#userEmail");


    /*await page.locator(".login-wrapper-footer-text").click();
    await page.locator("#firstName").fill("Ram");
    await page.locator("#lastName").fill("Das");
    await email.fill("Das1@gmail.com");
    await page.locator("#userMobile").fill("1234567890");
    await pAss.fill("Qwerty@@123");
    await page.locator("#confirmPassword").fill("Qwerty@@123");
    await page.locator("[type='checkbox']").click();
    await loginBtn.click();
    await page.locator(".btn-primary").click();*/
    await email.fill("Das1@gmail.com");
    await pAss.fill("Qwerty@@123");
    await loginBtn.click();

    await page.locator(".card-body b").first().waitFor();
    //await page.waitForLoadState('networkidle');
    console.log(await page.locator(".card-body b").allTextContents());

})