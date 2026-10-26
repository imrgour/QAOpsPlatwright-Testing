
//Login UI >>  .JSON

//Test cases > browser, cart, order, orderdetailpage,  orderhistory

const {test,expect} = require('@playwright/test')

let webContext;

test.beforeAll( async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const loginBtn = page.locator("#login");
    const pAss = page.locator("#userPassword");
    const email = page.locator("#userEmail");
    const products = page.locator(".card-body");


    await email.fill("singh111@gmail.com");
    await pAss.fill("Qazwsp@1234");
    await loginBtn.click();
    await page.locator(".card-body b").first().waitFor();
    context.storageState({path: 'state.json'})
    webContext = await browser.newContext({storageState : 'state.json'})
})


test('Third TestCase loginAssignment', async ({browser})=> 
{  
    const page= await webContext.newPage()
    const productname = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const products = page.locator(".card-body");
   
    
    //await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    console.log("The Total products are "+count);

    for(let i=0; i<count; i++){
        
        if(await products.nth(i).locator("b").textContent() === productname){
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    page.locator("[routerlink='/dashboard/cart']").click();
    await page.locator(".cart li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();

    expect(bool).toBeTruthy();

    await page.locator("button[type='button']").nth(1).click();

    await page.locator("[placeholder='Select Country']").pressSequentially("ind", { delay: 150 });
    const dropResults = await page.locator(".ta-results");
    await dropResults.waitFor();
    const dropCount = await dropResults.locator("button").count();
    for (let i=0; i< await dropCount; ++i){

        const text = await dropResults.locator("button").nth(i).textContent();
        if(text === " India"){
            await dropResults.locator("button").nth(i).click();
            break;

        }
    }

    //expect(await page.locator(".user__name [type='text']").first()).toHaveText("singh111@gmail.com");
    await page.locator(".action__submit").click();
    expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);

    page.locator(".fa-handshake-o").click();
    await page.locator("tbody").first().waitFor();
    const totalOrders= await page.locator("tbody tr");
    

    for(let i=0; i< await totalOrders.count(); i++){

        const rowOrderID = await totalOrders.nth(i).locator("th").textContent();
        if(orderID.includes(rowOrderID)){

            await totalOrders.nth(i).locator("td .btn-primary").click();
            break;
        }

    }

    const finalpageOrderID= await page.locator(".col-text").allTextContents();
    await expect(orderID.includes(finalpageOrderID)).toBeTruthy();
    console.log("order Places succesfilly")


})


test('TestCase 2 - Print cart titles', async ({browser})=> 
{  
    const page= await webContext.newPage()
    const productname = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const products = page.locator(".card-body");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    })