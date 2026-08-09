
class ApiUtils {

    constructor(apiContext,loginPayload){

        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
        
    }

    async getToken (){

        const loginResponce = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        
                data: this.loginPayload
            })        
            const loginJsonResponce = await loginResponce.json();
            const Token = loginJsonResponce.token;
            console.log(Token);
            return Token;
    }

    async createOrder (orderpayload){

        let responce = {};
        responce.Token = await this.getToken ()
        const orderResponce =  await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{

        data: orderpayload,
        headers:{

            'Authorization' : responce.Token,
            'Content-Type' : 'application/json'
        }
    })
    const orderResponceJSON = await orderResponce.json();
    console.log(orderResponceJSON);
    const jsonOrderID = orderResponceJSON.orders[0];
    responce.jsonOrderID = jsonOrderID;
    return responce;

    }
}

module.exports = {ApiUtils};