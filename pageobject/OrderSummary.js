const {expect} = require('@playwright/test');

class OrderSummary {


    constructor(page){

    this.page = page;
    this.orderid = page.locator(".col-text")

}


async finalOrderdetail(orderID){

    const finalpageOrderID = await this.orderid.allTextContents();
    await expect(orderID.includes(finalpageOrderID)).toBeTruthy();
    console.log("order Places succesfilly")
}
}
module.exports ={OrderSummary};
