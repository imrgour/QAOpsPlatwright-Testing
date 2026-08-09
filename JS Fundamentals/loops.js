
const flag = true;

if(!flag){

    console.log("I am true");

}
else{

    console.log(flag)
console.log("I am not true");
}

let i = 0;
while(i>10){

i++;
console.log(i);
}

do{

    i++

}while(i>10);
console.log(i);
console.log("0000000000000000000000000");

//2 and 5

// 1 to 10 give me the common multiple values of 2 and 5

let x=0;
for(let k=1; k<=299; k++){

    if(k%2==0 && k%5==0){
        console.log(k)
        x++
        if(x==3){
            break;
        }
    }
 
    
}