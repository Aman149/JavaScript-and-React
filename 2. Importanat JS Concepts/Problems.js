//Question 1
let y = 30
function foo() {
    console.log(y) //cannot access 'y' before initialization
    let y = 20;
}
foo() 

//Question 2
const a = 20;
a = 30;
console.log(a); //Cannot reasign to const

//Question 3
var x = 10;
function foo() {
    if(true) {
        var x = 20;
        let y = 30;
        console.log(x,y); // 20, 30
    }
    console.log(x); //20 * var has a function scope
    console.log(y) //y is not defined *let has a block scope
}
foo();

//Question 4
var x = 20;
function foo() {
    console.log(x); //Cannot access x before initializatio *let is being considered
    let x = 30;
}
foo();

//Question 5
function foo() {
    console.log(x); //Undefined
    var x = 20;
}
foo();

//Question 6
function foo() {
    console.log(x); //Not defined *let has a block scope
    if(true) {
        let x = 20;
    }
}
foo();

//Question 7
let z = 60;
{
    var z = 20;
    console.log(z); //Cannot redeclare
}
console.log(z);

//Question 8
const person = {
    name: "Aman",
    age: 22
}

person.age = 100;
console.log(person.age);
