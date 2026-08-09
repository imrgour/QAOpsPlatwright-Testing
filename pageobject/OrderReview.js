const {expect} = require('@playwright/test');

class OrderReview {

constructor(page){

    this.page = page;
    this.selectCountry = page.locator("[placeholder='Select Country']");
    this.dropdownResult = page.locator(".ta-results");
    this.userEmail = page.locator(".user__name [type='text']");
    this.smtBtn = page.locator(".action__submit");
    this.orderConfirmation = page.locator(".hero-primary");
    this.orderid = page.locator(".em-spacer-1 .ng-star-inserted");
    this.gotoOrders = page.locator(".fa-handshake-o");
}


async selectCountryDropdown (countryCode,countryName){

    await this.selectCountry.pressSequentially(countryCode, { delay: 150 });
    const dropResults = await this.dropdownResult;
    await dropResults.waitFor();
    const dropCount = await dropResults.locator("button").count();
    for (let i=0; i< await dropCount; ++i){

        const text = await dropResults.locator("button").nth(i).textContent();
        if(text.trim() === countryName){
            await dropResults.locator("button").nth(i).click();
            break;

        }
    }


}

async verifyEmailndsubmit(username){


    expect(await this.userEmail.first()).toHaveText(username);
    await this.smtBtn.click();

}

async reviewOrder (){

    expect(await this.orderConfirmation).toHaveText(" Thankyou for the order. ");
    const orderID = await this.orderid.textContent();
    console.log(orderID);
    return orderID;
    
}

async gotooOrders(){

    await this.gotoOrders.click()
}




}
module.exports={OrderReview};


