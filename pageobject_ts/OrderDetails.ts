import { Locator, Page,expect } from "@playwright/test";

export class OrderDetails {

page:Page;
tableBody : Locator;
totalOrders : Locator;

constructor(page:Page){

    this.page = page;
    this.tableBody = page.locator("tbody");
    this.totalOrders = page.locator("tbody tr");

}


async verifyOrders(orderID:any){

    await this.tableBody.first().waitFor();
    const totalOrders:any= await this.totalOrders;

    for(let i=0; i< await totalOrders.count(); i++){

        const rowOrderID : any= await totalOrders.nth(i).locator("th").textContent();
        if(orderID.includes(rowOrderID)){

            await totalOrders.nth(i).locator("td .btn-primary").click();
            break;
        }
    }


}


}
module.exports={OrderDetails};

