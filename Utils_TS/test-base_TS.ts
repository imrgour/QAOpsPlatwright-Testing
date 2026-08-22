
const base = require('@playwright/test');
import { test as baseTest} from "@playwright/test";

interface TestDataforOrder
        {
            username : string;
            password : string;
            productname : string;
            countryCode : string;
            countryName : string;
        }

export const customtest = baseTest.extend<{testDataforOrder:TestDataforOrder}>(
    {
        testDataforOrder :
        {
            username : "Manoj@gmail.com",
            password : "Qazwsp@1234",
            productname : "ZARA COAT 3",
            countryCode : "ind",
            countryName : "India"
        }
    }
)