// function test(...emp,...a) {
//     console.log(emp);
// }
// test("a","b","c","d","e","f")

let arr = [10, 20, 30, 40];
let [a, b, ...c] = arr;  //array destructuring
console.log(a);
console.log(b);
console.log(c); //o/p is array

let { x, y, ...z } = arr; //we have to use only one variable in object destructuring
console.log(x); //undefined
console.log(y); //undefined 
console.log(z); //o/p is object

let { ...p } = arr; //object destructuring
console.log(p);

//joining two arrays using concat and spread operator
let arr1 = [10, 20, 25, 33];
let arr2 = [100, 2000, 300, 400];

console.log(arr1.concat(arr2));//concat
console.log(arr1 + arr2);
console.log([...arr1, ...arr2]);//spread operator

//adding number
let num = "12345";
let [...g] = num;
console.log(g);

console.log(g.map(m => parseInt(m)).reduce((acc, l) => { return acc + l }));

//by using split()
let s = num.split("");
console.log(s.map(val => parseInt(val)).reduce((acc, l) => { return acc + l }));

let f = "12345abc"
let as=f.split("")
let ws=as.splice(5, 3);
console.log(ws);
console.log(as.map(val => parseInt(val)).reduce((acc, l) => {
    
    return acc + l
}));