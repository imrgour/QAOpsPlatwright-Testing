const { test, expect, request } = require('@playwright/test')
const { ApiUtils } = require('../utils/ApiUtils')


//Createing Payload Objects
const loginPayload = { userEmail: "Das1@gmail.com", userPassword: "Qwerty@@123" }
const orderpayload = { orders: [{ country: "Brunei Darussalam", productOrderedId: "6960ea76c941646b7a8b3dd5" }] }
let fakeresponsePayload = { data: [], message: "No Orders" }

let responce;

test.beforeAll(async () => {

    //login API
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    responce = await apiUtils.createOrder(orderpayload);
})


test('Third TestCase loginAssignment', async ({ page }) => {
    const productname = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, responce.Token)

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator(".card-body b").first().waitFor();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",

        async route => {
            //intersepting the resoponce > APi responce > Browser > render
            const InterResponce = await page.request.fetch(route.request());
            let body = JSON.stringify(fakeresponsePayload);
            route.fulfill({
                responce,
                body,
            });
        });



    //const titles = await page.locator(".card-body b").allTextContents();
    await page.locator(".fa-handshake-o").click();

    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")

    console.log(await page.locator(".mt-4").textContent());

    //await page.locator("tbody").waitFor();




})