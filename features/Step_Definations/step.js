const { Given, When, Then } = require('@cucumber/cucumber')
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');;
const {POmanager} =  require('../../pageobject/POmanager');

    Given('Login to Ecommerce application using {string} and {string}', {timeout : 100*1000}, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions

    const loginpage = this.POManager.getLoginPage();
    await loginpage.goTO();
    await loginpage.validLogin(username,password);
    });

    When('add {string} to cart', async function (productname) {
    // Write code here that turns the phrase above into concrete actions

    const dashboard = this.POManager.getDashboardPage();
    await dashboard.SearchProductAddCart(productname);
    await dashboard.NavigateTocart();
    });

    Then('Verify {string} is added in the cart', async function (productname) {
    // Write code here that turns the phrase above into concrete actions
    const cartpage = this.POManager.getCartpage(productname);
    await cartpage.clickCheckout();
    });

    When('enter payment details {string} and  {string} and place the Order and verify using {string}', async function (countryCode, countryName, username) {
    
    const orderReviews = this.POManager.getOrderReview();
    await orderReviews.selectCountryDropdown(countryCode,countryName);
    await orderReviews.verifyEmailndsubmit(username);
    this.orderID = await orderReviews.reviewOrder();
    await orderReviews.gotooOrders();
    });

    Then('verify order is placed and its visible in the order history page', async function () {

    const orderDetailP = this.POManager.getOrderDetails();
    await orderDetailP.verifyOrders(this.orderID); 
    const orderSummary = this.POManager.getorderSummarY();
    await orderSummary.finalOrderdetail(this.orderID);
    });


    //------------------------------------------------------//

    Given('Login to Ecommerce2 application using {string} and {string}', {timeout : 100*1000}, async function (username, password) {
     await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = this.page.locator("input#username");
    const passWord = this.page.locator("[name='password']");
    const signBtn = this.page.locator("#signInBtn");
    console.log(await this.page.title());
    await userName.fill(username);
    await passWord.fill(password);
    await signBtn.click();
    
    });

    Then('Verify the error msg is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
    
    });



    