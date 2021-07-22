// 1. INFINITY
// As 1/0 is inifnity 
var a = 1/0;
console.log(a);

//Adding 1 to infinity will still be infinity
a = a+1;
console.log(a);

//Dividing infinity / 2 is still infinity
a = a/2;
console.log(a);

//Now, to find what is the max value that js can store
console.log(Number.MAX_VALUE);


// 2.NAN - Not A Number
console.log(Math.sqrt(-1));

// To check the type of value a variable is holding
console.log(typeof(10)); // Number
console.log(typeof(true)); // Bool
console.log(typeof("Aman")); // String
console.log(typeof('A'));  //String
console.log(typeof(Infinity)); // it is also a number

var newVar;
console.log(typeof(newVar)); //undefined

//Type of null
newVar = null
console.log(typeof(newVar)); //object
//This is a bug in JS


 