let person = {

    firstname:'tim',
    lastname:'din',
    fullname: function(){

        console.log(this.firstname + this.lastname)
    }
}
console.log("this is the full name"+person.fullname())
console.log(person.firstname);
console.log(person['lastname']);
console.log(person[0]);
person.firstname='Sohan Dutta';
console.log(person.firstname);
person.age = '34';
console.log(person);

console.log(person);

console.log(['firstname'] in person);

for(let key in person){

    console.log(person[key]);
}

