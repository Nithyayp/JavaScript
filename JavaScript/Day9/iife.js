//IIfe
(function () {
    var a = 100;
    console.log(a);
    console.log("i am iife")
})();

(function () {
    var a = 200;
    console.log(a);
    console.log("i am life");
})
    ();

let test = (function () {
    let str = "hi"
    return str;
})
console.log(test());

(function () {
    console.log("iife");
})
    ();