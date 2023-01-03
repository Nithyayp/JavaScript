//addition operators
let x = 10;
let y = 5;
console.log(x + y);

let a = "hi";
let b = "hello";
console.log(a + b );
console.log(x + a);
console.log(10 + "10");
console.log(10 - "5"); //type-casting will happen, o/p is 5

//Subtraction operators
console.log(x - y);
console.log(x - a);
console.log(10 + "test");

//Multiplication Operators
console.log(x * y);
console.log(x * a);
console.log(x * 0.5);
console.log(10 * "5"); //type-casting will happen, o/p is 50
console.log(x * 10 * 0.5 + 2);

//Division Operator
console.log(x / y);
console.log(10 / "5");
console.log(10 / "hi")
console.log(typeof NaN);
console.log(10 / 5.0);

//Modulus Operator
console.log(x % y);
console.log(10 % "5");
console.log(10 % 0.2);

//Exponention operator(**)
console.log(2 ** 2);
console.log(2 ** "2");
console.log(2 ** "hi");

// Increment operator(++)
// console.log(++10); //Uncaught SyntaxError: Invalid left-hand side expression in prefix operation 
console.log(++x); //11
console.log(x); //11
console.log(++x); //12
console.log(x); //12
console.log(x++); //12
console.log(x); //13

//Decrement operator(--)
console.log(--y); //4
console.log(y); //4
console.log(y--); //4
console.log(y--); //3

