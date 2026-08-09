import {test, expect, Locator,Page } from '@playwright/test'

export class Cartpage {


    page:Page;
    cartList : Locator;
    checkout : Locator;


    constructor(page:Page) {

        this.page = page;
        this.cartList = page.locator(".cart li").first();
        this.checkout = page.locator("button[type='button']").nth(1);

    }



    async verifyPoductIsDisplayed(productname:string){

        await this.cartList.waitFor();
        const bool:boolean = await this.getProductLocator(productname).isVisible();
        expect(bool).toBeTruthy();


    }

    async clickCheckout(){

        await this.checkout.click();
    }


    getProductLocator(productname:string){

        this.page.locator("h3:has-text('"+productname+"')");
        
        

    }

}
module.exports={Cartpage};


