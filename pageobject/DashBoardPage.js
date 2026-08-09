class DashBoardPage {

    constructor(page) {

        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink='/dashboard/cart']");

    }


    async SearchProductAddCart(productname) {

        await this.productsText.first().waitFor();
        //await page.waitForLoadState('networkidle');
        const titles = await this.productsText.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {

            if (await this.products.nth(i).locator("b").textContent() === productname) {
                //add to cart click button
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async NavigateTocart (){

        await this.cart.click();

    }



}

module.exports={DashBoardPage};