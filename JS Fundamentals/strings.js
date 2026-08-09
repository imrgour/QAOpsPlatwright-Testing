const Person2 = require("./classes")

let day = "tuesday ";
console.log(day.length);

let newday = day.slice(0,3);
console.log(newday);

let splitday = day.split("s")
console.log(splitday[1].length);
console.log(splitday[1].trim().length);


// write a code to check how many day word present in a sentence 

let code = day+" is the funday day";
console.log(code);
let dayCount = code.indexOf("day");
console.log(dayCount);

let value = code.indexOf("day");
let count = 0;
while (value !== -1) {

    count++
    value= code.indexOf("day",value+1);
}
console.log(count);

let person121 = new Person2("sohan","dutta");
console.log(person121.fullname())






