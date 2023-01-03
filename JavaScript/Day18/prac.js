// function test() {
//     return arguments;
// }
// let x = test("a", "b", "c");
// console.log(x);
// let y = Array.from(x)
// console.log(y)

// function arr(a,...rest) {
//     console.log(a);
//     console.log(rest)
// }
// arr("asd", "qwe", "lkj")

// let r = (...rest) => {
//     return rest
// }
// console.log(r(2, 3, 4, 5, 6));


//default parameters(when we are not passing any value it takes default parameter value )
function Sum(a=100,b=200) {
    return a + b;
}
console.log(Sum(undefined));