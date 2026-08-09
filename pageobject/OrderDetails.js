class OrderDetails {


constructor(page){

    this.page = page;
    this.tableBody = page.locator("tbody");
    this.totalOrders = page.locator("tbody tr");

}


async verifyOrders(orderID){

    await this.tableBody.first().waitFor();
    const totalOrders= await this.totalOrders;

    for(let i=0; i< await totalOrders.count(); i++){

        const rowOrderID = await totalOrders.nth(i).locator("th").textContent();
        if(orderID.includes(rowOrderID)){

            await totalOrders.nth(i).locator("td .btn-primary").click();
            break;
        }
    }


}


}
module.exports={OrderDetails};

