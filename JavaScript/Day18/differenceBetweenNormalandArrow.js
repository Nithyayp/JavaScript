//Normal function with argument object
// function test() {
//     return arguments;
// }
// let value = test("a", "b", "c");
// console.log(value)
// console.log(Array.isArray(value));//false
// let finalValue = Array.from(value);
// console.log(finalValue)//['a','b','c']

//Arrow function with argument object
// let x = () => {
//     return arguments;
// }
// let y = x("red", 'green');
// console.log(y); //o/p is uncaught reference error:arguments is not defined


// let NormalFun = function (...rest) {
//     return rest;
// };
// let test1 = NormalFun("red", "blue");
// console.log(test1);
// console.log(Array.isArray(test1));


// let ArrowFun = (...rest) => {
//     return rest;
// }
// let test2 = ArrowFun("red", "green");
// console.log(test2);
// console.log(Array.isArray(test2));


// let x = (username, password, html, css, js, react) => {
//     return { username, password, html, css, js, react };
// };

// let y = x("shashi", "shashi124", "html", "css", "js", "react");
// console.log(y);

// let z = (username, password, ...rest) => {
//     return { username, password, rest };
// }

// let a = z("shashi", "shashi124", "html", "css", "js", "react");
// console.log(a)

//Difference b/w spread and split

split
let str = "shashi  is very bad...";
let strToArray = str.split("  ");
console.log(str);
console.log(strToArray);

spread
let TryWithSpread = [...str];
console.log(TryWithSpread);


//to convert array like object to array we use spread operator
// function test() {
//     return arguments;
// }
// let x = test("react", "node", "express")
// let finalValue = [...x];
// console.log(finalValue);

//joining two arrays
// let frontEnd = ["html", "css", "js", "react", "angular"];
// let backend = ["nodejs", "expressjs", "nextjs", "mongodb", "socket.io", "aws"];
//using concat
// let fullstack = frontEnd.concat(backend);
// console.log(fullstack);
//using spread operator
// let spreadWay = [...frontEnd, ...backend];
// console.log(spreadWay);

//explicit return
// function x() {
//     return "shashi";
// }
// console.log(x())

//implicit return
// let y = () => "shashi"
// console.log(y())

//explicit array return
// function Test() {
//     return ["shashi","harish"]
// }
// console.log(Test());

//implicit array return
// let ArrowWithFun = () => ["shashi", "harish"];
// console.log(ArrowWithFun());

//object return
// explicit object return in normal function
// function test() {
//     return {
//         username: "shashi",
//         password:"1234"
//     }
// }
// console.log(test());

//explicit object return in arrow function
// let ArrowWithFun = () => {
//     return {
//       username: "shashi",
//       password: "1234",
//     }
// }
// console.log(ArrowWithFun());

//implicit object return in arrow function
// let ArrowWithFunImplicit = () => ({ username: "shashi", password: "1234" });
// console.log(ArrowWithFunImplicit());

//passing string as argument in arrow function
// let str = val => val;
// console.log(str("red"));
//passing array as an argument in arrow function
// let arr = (...val) => val;
// console.log(arr("html", "css", "js"));
//passing object as an argument in arrow function
// let obj = ({ ...val }) => val;
// console.log(obj({username:"shashi",pass:"1234"}))

//explicit return with normal function
// function Parent() {
//     return function () {
//         console.log("i am child")
//     }
// }
// Parent()();

//explicit return with arrow function
// let ArrowWithExplicit = () => {
//     return () => {
//         console.log("child here")
//     }
// }
// ArrowWithExplicit()();

//implicit return with arrow function
// let ArrowWithImplicit = () => () => console.log("child here")
// ArrowWithImplicit()();

//explicit return with arrow function by passing  arguments
// let ArrowWithExplicit = () => {
//     return val => {
//         return val;
//     }
// }
// let val = ArrowWithExplicit()("shashi");
// console.log(val);

//implicit return with arrow function by passing arguments
// let ArrowWithImplicit = () => val => val;
// let val1 = ArrowWithImplicit()('shashi');
// console.log(val1)

//when there is no parameter use underscore in arrow function
// let z = _ => "shashi"
// console.log(z())

//if we have multiple line we can use paranthesis in arrow function
// let u = () => (`<h1>hello</h1>
// <p>hello</p>`);
// console.log(u());

//how to create object using function
// function User(name, age, company) {
//     this.name = name;
//     this.age = age;
//     this.company = company;
// }


// let user1 = new User("a", 22, "ty");
// let user2 = new User("b", 28, "tyss");
// console.log(user1, user2);

// let UserWithArrow = (name, age, company) => {
//     this.name = name;
//     this.age = age;
//     this.company = company;
// }
// let user3 = new UserWithArrow("c", 22, "ty");
// console.log(user1);


// function EmpDetails(eName, eId, eSalary, eDesignation, eCity, eDob) {
//     this.eName = eName;
//     this.eId = eId;
//     this.eSalary = eSalary;
//     this.eDesignation = eDesignation;
//     this.eCity = eCity;
//     this.eDob = eDob;
// }
// let Emp1 = new EmpDetails("a", 123, "20000", "developer", "Mysore", "04-05-1998")
// let Emp2 = new EmpDetails("b", 456, "20000", "tester", "goa", "04-05-1998");
// console.log(Emp1, Emp2);

//this keyword difference in normal and arrow
let x = {
    username: "manu",
    company: "tyss",
    details: function () {
        console.log(this);
    },
    detailsWithArrow: () => {
        console.log(this);
    }
};
x.details();//current object.
x.detailsWithArrow();//window object.

