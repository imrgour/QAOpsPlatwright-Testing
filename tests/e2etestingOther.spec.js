const {test,expect} = require('@playwright/test')


test('Third TestCase loginAssignment', async ({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const productname = 'ADIDAS ORIGINAL';

    //Login Page
    const loginBtn = page.getByRole("button", {name: 'Login'});
    const pAss = page.getByPlaceholder("enter your passsword");
    const email = page.getByPlaceholder("email@example.com");
    const products = page.locator(".card-body");
    await email.fill("Das1@gmail.com"); 
    await pAss.fill("Qwerty@@123");
    await loginBtn.click();

    //Cart Page

    await page.locator(".card-body b").first().waitFor();
    //await page.waitForLoadState('networkidle');
    
    await page.locator(".card-body").filter({hasText:"ADIDAS ORIGINAL"}).getByRole("button",{name: 'Add to Cart'}).click(); 


    //Go to cart button
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
    //page.locator("[routerlink='/dashboard/cart']").click();


    //Cart Page
    await page.locator(".cart li").first().waitFor();
    await expect (page.getByText("ADIDAS ORIGINAL")).toBeVisible();
    await page.getByRole("button",{name:'Checkout'}).click();

    //checkoup Page
   
    await page.getByPlaceholder("Select Country").pressSequentially("ind", { delay: 150 });
    await page.getByRole("button",{name:'India'}).nth(1).click();

    await page.getByText("Place Order ").click();
    await page.locator(".em-spacer-1").first().waitFor();
    expect(await page.getByText(" Thankyou for the order. ")).toBeVisible();

    
    /*const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);

    page.locator(".fa-handshake-o").click();
    await page.locator("tbody").waitFor();
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
    console.log("order Places succesfilly")*/


})