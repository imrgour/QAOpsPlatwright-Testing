import { Locator, Page,expect } from "@playwright/test";

export class LoginPage {


    page:Page;
    signINbtn : Locator;
    userName : Locator;
    passWord : Locator;

    constructor(page:Page)
    {

        this.page = page;
        this.signINbtn = page.locator("#login");
        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
    }

    async goTO(){

        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(username:string,password:string){

        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.signINbtn.click();
    }


}
module.exports={LoginPage};

