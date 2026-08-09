/*Test your JavaScript Array knowledge
Create an array called expenses that contains at least 5 different expense amounts.

Calculate the total expenses by summing all the elements of the array.

Find the highest and lowest individual expenses within the array.*/


//Create an array called expenses that contains at least 5 different expense amounts.

let expenses = [200,400,500,1200,600,100];

// Calculate the total expenses by summing all the elements of the array.

let totalExp = expenses.reduce((sum,amt)=>sum+amt,0);
console.log("the total expenses is " + totalExp);

//Find the highest and lowest individual expenses within the array.

let accsort = expenses.sort((a,b)=>a-b)
let highestInd = (accsort.length)-1;
console.log("the highest individual expenses is " + accsort[highestInd]);
console.log("the lowest individual expenses is " + accsort[0]);


