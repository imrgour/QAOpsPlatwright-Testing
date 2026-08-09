import { Locator, Page, expect } from "@playwright/test";


export class OrderSummary {

    page:Page;
    orderid: Locator;


    constructor(page:Page){

    this.page = page;
    this.orderid = page.locator(".col-text")

}


async finalOrderdetail(orderID:any){

    const finalpageOrderID : any = await this.orderid.allTextContents();
    await expect(orderID.includes(finalpageOrderID)).toBeTruthy();
    console.log("order Places succesfilly")
}
}
module.exports ={OrderSummary};
