//const {LoginPage} =  require('../pageobject/LoginPage');
import {LoginPage} from './LoginPage'
import {DashBoardPage} from './DashBoardPage'
import {Cartpage} from './Cartpage'
import {OrderReview} from './OrderReview'
import {OrderDetails} from './OrderDetails'
import {OrderSummary} from './OrderSummary'
import {Page } from '@playwright/test'


export class POmanager {


    loginpage : LoginPage;
    dashboardpage : DashBoardPage;
    cartpage : Cartpage;
    orderreview : OrderReview;
    orderdetails : OrderDetails;
    orderSummary : OrderSummary;
    page : Page;

constructor(page:Page){

    this.page = page;
    this.loginpage = new LoginPage(this.page);
    this.dashboardpage = new DashBoardPage(this.page);
    this.cartpage = new Cartpage(this.page);
    this.orderreview = new OrderReview(this.page);
    this.orderdetails = new OrderDetails(this.page);
    this.orderSummary = new OrderSummary(this.page);
    
}


getLoginPage (){

    return this.loginpage;
}

getDashboardPage (){

    return this.dashboardpage;

}

getCartpage (){

    return this.cartpage;
}

getOrderReview (){

    return this.orderreview;
}

getOrderDetails (){

    return this.orderdetails;
}

getorderSummarY (){

    return this.orderSummary;
}
    
}
module.exports={POmanager};