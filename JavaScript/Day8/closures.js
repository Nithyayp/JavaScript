// function x(p, q) {
//     var a = 10;
//     function y() {
//         console.log(a);
//         console.log(p);
//         console.log(q);
//     }
//     y();
// }
// x(1, 2);

console.log("start")
var str = "test";
function x(j, k) {
    var str = "demo";
    var a = 10;
    console.log(a);
    var p = "hi";
    console.log(p);
    console.log(k);
    console.log("i m x()");
    function y() {
        console.log(a);
        console.log(str);
        console.log(this.str);
        console.log(j);
        console.log("i m y()");
        var b = 20;
        console.log(b);
        function z() {
            console.log(b);
            console.log(a);
            console.log(k);
        }
        z();
    }
    y();
}
x(5, 10);
console.log("end");
