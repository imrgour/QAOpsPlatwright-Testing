
const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataforOrder :
        {
            username : "Das1@gmail.com",
            password : "Qwerty@@123",
            productname : "ZARA COAT 3",
            countryCode : "ind",
            countryName : "India"
        }
    }
)