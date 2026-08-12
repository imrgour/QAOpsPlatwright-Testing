const {test,expect} = require('@playwright/test');
//const { pathToFileURL } = require('node:url');

test('First TestCase BrowserContext', async ({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
})


test('Second TestCase OnlyPage', async({ page })=>
{
    const userName = page.locator("input#username");
    const passWord = page.locator("[name='password']");
    const signBtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
   /* await userName.fill("rohan");
    await passWord.fill("passwordss");
    await signBtn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');*/

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await passWord.fill("");
    await passWord.fill("Learning@830$3mK2");
    await signBtn.click();
    console.log(await page.title());

    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(2).textContent());  
    await console.log("All titles are");
    const alltest = await cardTitles.allTextContents();
    console.log(alltest);
})

test('UIControls', async({ page })=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("input#username");
    const passWord = page.locator("[name='password']");
    const dropDown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");
    await dropDown.selectOption("teach");
    await page.locator(".radiotextsty").nth(1).click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
    console.log(await page.locator(".radiotextsty").nth(1).isChecked());
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute("class","blinkingText");







})



test('childWindow', async({ browser })=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("input#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])

    const text = await newPage.locator(".red").textContent()
    console.log(text);
    const arrayText = text.split("@");
    const email = arrayText[1].split(" ")[0]
    console.log(email);

    await userName.fill(email);
    console.log("emails is the ----" + await userName.inputValue())
    page.pause();





})
