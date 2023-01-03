// var
var a; //declaration
a = 10; //initialization
console.log(a);

var a = 100; //D&I
console.log(a);

var a; //RD
a = 99;
console.log(a);

var a = 777; //RD&RI
console.log(a)

//let
let b; //D
b = "hi";
console.log(b);

// let b; //Re Declaration is not Possible

b = 999; //RI
console.log(b)

let c = "test"; //D&I
console.log(c);

// let c = "demo"; //Re D&I not possible
// console.log(c);

// const
const d = 555;
console.log(d);

console.log(e)
var e = 10; //Undefined

console.log(f)
let f = "bye" //Temporal dead zone for both let and const

