// Array higher order methods
// 1.map()
// let m = [10, 20, 30, 40]
// let mappedItems=m.map(val => val + 5)
// console.log(mappedItems);

function hof(arr, cb) {
    console.log(arr);
    console.log(cb);
    let mappedItems=[];
    for (let i = 0; i < arr.length; i++){
       mappedItems.push(cb(arr[i]));
    }
return mappedItems;
}
console.log(hof([10, 20, 30], (val) => { return val + 10 }));

// for (let i = 0; i < m.length; i++){
//     console.log(m[i] + 20);  
// }
// let str = "hello"
// let str1 = str.split("");
// console.log(str1)

// let mappedItems = str1.map(val => "#"+val)
// console.log(mappedItems)

// function hof(arr, cb) {
//     let newString = [];
//     for (let i = 0; i < arr.length; i++){
//         newString.push(cb(arr[i]))
//     }
//     return newString;
// }

// console.log(hof("hello", val => {
//   return "#" > val;
// }));

//2.filter()
// function hof(arr, cb) {
//     let filteredItems = [];
//     for (let i = 0; i < arr.length; i++){
//         if (cb(arr[i])) {
//             filteredItems.push(arr[i]);
//         }
//     }
//     console.log(filteredItems);
// }
// hof([ 80, 100, 200], f => {
//   return f > 50;
// });

// let itemsPrice = [150, 110, 180, 240, 650, 2540];
// let mappedItems = itemsPrice.map(val => val + val * 0.2);
// console.log(mappedItems);
// let f = mappedItems.filter(x => x > 200);
// console.log(f);

// function hof(arr, cb) {
//     let mappedItems = [];
//     for (let i = 0; i < arr.length; i++){
//         mappedItems.push(cb(arr[i]));
//     }
//     return mappedItems;
// }
// console.log(
//     hof([150, 110, 180, 240, 650, 2540], val => {
//       return  val + val * 0.2;
//     }));

let sym = Symbol('test');
console.log(typeof (sym));
    
