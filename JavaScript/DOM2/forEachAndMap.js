let array = [1, 2, 4, 10, 100];
// let oldArray = array.forEach(val => val).reverse();
// console.log(oldArray);

let newArray = array
    .map(val => val).reverse().reduce((a, b) => {
        let test = a + b;
        console.log(typeof test);
        return test;
    });
console.log(newArray);