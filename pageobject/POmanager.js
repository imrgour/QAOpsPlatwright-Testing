const {LoginPage} =  require('../pageobject/LoginPage');
const {DashBoardPage} =  require('../pageobject/DashBoardPage');
const {Cartpage} =  require('../pageobject/Cartpage');
const {OrderReview} =  require('../pageobject/OrderReview');
const {OrderDetails} =  require('../pageobject/OrderDetails');
const {OrderSummary} =  require('../pageobject/OrderSummary');

class POmanager {

constructor(page){

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