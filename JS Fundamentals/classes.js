class person{

    age=65;


    get location(){

        return "canada"
    }

    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullname(){

        console.log(this.firstname + this.lastname);
    }


}

let person1 = new person()
let nameDetail = new person("Ram","Gour")

console.log(person1.age);
console.log(person1.location);
console.log(nameDetail.fullname());

module.exports =person;


