

let mark = new Array(20,30,40,50,60);
var marks = [20,30,40,50,60];

console.log(mark[3]);
console.log(marks[4]);

marks[4] = 200;
console.log(marks[4]);
console.log(mark.length);

mark.push(70); // to insert a value to the array from the last
console.log(mark.length);
console.log(mark);
marks.pop(); // to del the value from an array from last

marks.unshift(11); // to insert a value to the array from the first
console.log(marks.length);
console.log(marks);

console.log(mark.indexOf(30)) // to cherck the index of the value 
console.log(marks);
console.log(mark);

console.log(marks.includes(40));/// to check if the value present in the array or not and it show the boolean value


var subMarks = marks.slice(2,4);
console.log(subMarks);

var sum  = 0;

console.log(marks);
for(let i = 0; i<marks.length; i++){

    console.log("before sum"+marks[i]);
    sum = sum + marks[i];
    console.log("after sum" + sum);

}

//reduce filter map


//reduce
let dig = [20,30,40,50,60];

let tdtd = marks.reduce((sum,dik)=>sum+dik,0)

console.log("the total value is "+tdtd);               

// Create a new array with the even numbers of this array [11,12,13,14,15,16,17,18]

let arr1 = [11,12,13,14,15,16,17,18];
let newarr = [];

for (let i = 0; i<arr1.length; i++){

    if(arr1[i]%2==0){

        
        newarr.push(arr1[i]);

    }else{
        
    }
    
}

console.log("Then even array is " + newarr)

//filter : 

let newarr1 = arr1.filter(arr2=>arr2%2==0);
console.log("Then even array is " + newarr1);

//Multiply the even array [12,14,16,18] by 3 > [26,42,48,54]

//map

let newarr2 = newarr1.map(multi=>multi*3);
console.log("Then even multiplied by 3 array is " + newarr2);

let sumArr = newarr2.reduce((newSum,data)=>newSum+data,0);
console.log(sumArr);

//applying reduce filte and map in one code

let score = [22,33,44,55,66];

let all = score.filter(even=>even%2==0).map(add=>add*3).reduce((ad,vall)=>ad+vall,0);

console.log("the all data is "+ all);


//Sorting

let fruits = ["mango","banana","coconut","appendFile","orange","pomo"];
let sortNum = [2,1,01,2,4,5,6,77,88,44,009];

console.log(fruits.sort());
console.log(fruits.reverse());
console.log(sortNum.sort());

newSort=sortNum.sort((a,b)=>b-a);
console.log(newSort);



