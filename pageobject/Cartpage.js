class Cartpage {


    constructor(page) {

        this.page = page;
        this.cartList = page.locator(".cart li").first();
        this.checkout = page.locator("button[type='button']").nth(1);

    }



    async verifyPoductIsDisplayed(productname){

        await this.cartList.waitFor();
        const bool = await this.getProductLocator(productname).isVisible();
        expect(bool).toBeTruthy();


    }

    async clickCheckout(){

        await this.checkout.click();
    }


    getProductLocator(productname){

        this.page.locator("h3:has-text('"+productname+"')");
        
        

    }

}
module.exports={Cartpage};


