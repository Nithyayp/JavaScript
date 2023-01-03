// "use strict"
// var a = 10;
// let b = 111;
// console.log(b);
// console.log(this.b);
// function x() {
//     var a = 20;
//     console.log(a);
    // console.log(window);
//     console.log(window.a);
//     b = 222;
//     console.log(b);
//     console.log(window.b);
// }
// x();

//To prove "this" keyword and "window" object both are same:
// console.log(this);
// console.log(window);
// console.log(this == window);

let obj1 = {
    eName: "Sarala",
    id: 555,
    demo: () => {
        console.log(this.id);
    },
};
console.log(obj1.demo());

let obj2 = {
    eName: "Virala",
    id: 8888,
    test: function () {
        console.log(this.eName);
    },
};
console.log(obj2.test());
console.log(obj2);
