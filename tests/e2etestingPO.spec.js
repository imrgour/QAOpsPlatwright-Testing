const {test,expect} = require('@playwright/test');
const {customtest} = require('../utils/test-base');

const {POmanager} =  require('../pageobject/POmanager');
//creating variables into JSON and convert into JSON > String > JS Object
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')))


for(const data of dataSet){
test(` @web Client app E2E flow for ${data.productname}`, async ({page})=> 
{

    //Iniciating  Browser and page
    // const context = await browser.newContext();
    // const page = await context.newPage();
    const POManager = new POmanager(page);

    //Creating login page objects and calling login page
    const loginpage = POManager.getLoginPage();
    await loginpage.goTO();
    await loginpage.validLogin(data.username,data.password);
    

    //Creating Dashboard page objects and adding product to cart
    const dashboard = POManager.getDashboardPage();
    await dashboard.SearchProductAddCart(data.productname);
    await dashboard.NavigateTocart();

    //Creating Cart page  to verify the product and click on the checkout
    const cartpage = POManager.getCartpage(data.productname);
    await cartpage.clickCheckout();
    
    //Creating OrderReview page for checkout
    const orderReviews = POManager.getOrderReview();
    await orderReviews.selectCountryDropdown(data.countryCode,data.countryName);
    await orderReviews.verifyEmailndsubmit(data.username);
    const orderID = await orderReviews.reviewOrder();
    await orderReviews.gotooOrders();

    //creating order detail page to verify the orders
    const orderDetailP = POManager.getOrderDetails();
    await orderDetailP.verifyOrders(orderID); 

    //creating orderSummary page and matching the actual order
    const orderSummary = POManager.getorderSummarY();
    await orderSummary.finalOrderdetail(orderID);

})
}

customtest('Client app E2E flow', async ({page, testDataforOrder})=> 
{

    //Iniciating  Browser and page
    const POManager = new POmanager(page);

    //Creating login page objects and calling login page
    const loginpage = POManager.getLoginPage();
    await loginpage.goTO();
    await loginpage.validLogin(testDataforOrder.username,testDataforOrder.password);
    

    //Creating Dashboard page objects and calling login page
    const dashboard = POManager.getDashboardPage();
    await dashboard.SearchProductAddCart(testDataforOrder.productname);
    await dashboard.NavigateTocart();

    //Creating Cart page  to verify the product and click on the checkout
    const cartpage = POManager.getCartpage(testDataforOrder.productname);
    await cartpage.clickCheckout();

})



