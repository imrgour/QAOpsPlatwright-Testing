const { Before, After, BeforeStep , AfterStep} = require('@cucumber/cucumber')
const playwright = require('@playwright/test');;
const { POmanager } = require('../../pageobject/POmanager');



Before(async function () {

    const browser = await playwright.chromium.launch(
        {
            headless: false
        }
    );
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.POManager = new POmanager(this.page);
}) 



Before({tags : "@error and @anotherValidation" },async function () {

    const browser = await playwright.chromium.launch(
        {
            headless: false
        }
    );
    const context = await browser.newContext();
    this.page = await context.newPage();

})

After(async function () {

    console.log("I am the last test case")
})


