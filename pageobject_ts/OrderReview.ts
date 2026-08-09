import { Locator, Page, expect } from "@playwright/test";

export class OrderReview {

    page:Page;
    selectCountry : Locator;
    dropdownResult: Locator;
    userEmail : Locator;
    smtBtn : Locator;
    orderConfirmation : Locator;
    orderid : Locator;
    gotoOrders : Locator;


constructor(page:Page){

    this.page = page;
    this.selectCountry = page.locator("[placeholder='Select Country']");
    this.dropdownResult = page.locator(".ta-results");
    this.userEmail = page.locator(".user__name [type='text']");
    this.smtBtn = page.locator(".action__submit");
    this.orderConfirmation = page.locator(".hero-primary");
    this.orderid = page.locator(".em-spacer-1 .ng-star-inserted");
    this.gotoOrders = page.locator(".fa-handshake-o");
}


async selectCountryDropdown (countryCode:string,countryName:string){

    await this.selectCountry.pressSequentially(countryCode, { delay: 150 });
    const dropResults:any = await this.dropdownResult;
    await dropResults.waitFor();
    const dropCount:any = await dropResults.locator("button").count();
    for (let i=0; i< await dropCount; ++i){

        const text:string = await dropResults.locator("button").nth(i).textContent();
        if(text.trim() === countryName){
            await dropResults.locator("button").nth(i).click();
            break;

        }
    }


}

async verifyEmailndsubmit(username:string){


    expect(await this.userEmail.first()).toHaveText(username);
    await this.smtBtn.click();

}

async reviewOrder (){

    await expect (this.orderConfirmation).toHaveText(" Thankyou for the order. ");
    const orderID: any = await this.orderid.textContent();
    console.log(orderID);
    return orderID;
    
}

async gotooOrders(){

    await this.gotoOrders.click()
}




}
module.exports={OrderReview};


