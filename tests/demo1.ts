let message1 : string = "hellow";
console.log(message1);


let num : any = [1,2,3,4,5];
console.log(num);


function add(a:number, b:number) : number
{
    return a+b;
}

let sum:number = add(3,4);
console.log(sum);

let obj :{ name:string, age:number, location:string } = {name:"Ram", age:67};
console.log(obj.age);
console.log(obj.name);
obj.location = "Mumbaai";
console.log(obj);

