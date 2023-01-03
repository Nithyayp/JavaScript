//logical AND(&&) (all condition should satisify)
let a = 100;
let b = 50;
let c = 20;
console.log(a > b && a < b);

//logical OR(||) (either of the condition should satisify)
console.log(a > b || a < b);

//logical NOT(!)
console.log(!(a > b));

console.log(a > b || a > c || a < b);
console.log(a > b && a > c && a < b);
console.log((a > b && a > c) || a < b);
console.log(a > b || (a > c && a < b));


