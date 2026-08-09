
const Person = require ("./classes")
class pet extends Person{

    constructor(firstname,lastname){

        super(firstname,lastname)
    }

    get location(){
        return "india";
    }


}

let pet1 = new pet("mile","rosco")

pet1.fullname();
console.log(pet.location);
