/*
Apply transformations and calculations to array elements, and filter elements based on a condition
You have an array called productPrices with various product prices.

Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.

Use the filter method to create a new array called affordableProducts containing only products priced below $50

Calculate the total cost of all items in the affordableProducts array using the reduce method.
*/

//You have an array called productPrices with various product prices.

let productPrices = [10,20,30,50,60,90,36];

//Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.

let discountedPrices = productPrices.map(dis=>dis*0.9);


//Use the filter method to create a new array called affordableProducts containing only products priced below $50

let affordableProducts = discountedPrices.filter(aff=>aff<50);
console.log(affordableProducts);

//Calculate the total cost of all items in the affordableProducts array using the reduce method.

let totalCost = affordableProducts.reduce((sum, price) => sum + price, 0);
console.log(totalCost);