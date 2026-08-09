
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
            username : "Das1@gmail.com",
            password : "Qwerty@@123",
            productname : "ZARA COAT 3",
            countryCode : "ind",
            countryName : "India"
        }
    }
)