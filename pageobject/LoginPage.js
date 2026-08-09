class LoginPage {


    constructor(page)
    {

        this.page = page;
        this.signINbtn = page.locator("#login");
        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
    }

    async goTO(){

        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(username,password){

        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.signINbtn.click();
    }


}
module.exports={LoginPage};

