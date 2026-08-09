/*
Manipulate an array of strings (add, remove, sort)
Create an array named studentNames with the names of your students.

Add a new student name to the beginning of the array.

Remove the last student name from the array.

Alphabetize the student names within the array.
*/

//create an array named studentNames with the names of your students.

let sName = ["Ram","Sristi","Priyanka","Tanya"]

//Add a new student name to the beginning of the array.
sName.unshift("Bikas");

//Remove the last student name from the array
sName.pop();

//Alphabetize the student names within the array
let sortName = sName.sort()
console.log(sortName);

