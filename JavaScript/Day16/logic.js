// for (let i = 0; ; i++){ //if we didn't give the condition then default will be true
    
// } //o/p is infinite loop

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

let num = 123456; //=======>I
let last = 0;
let result = 0;

while (num > 0) {  //=======>C
    last = num % 10;
    result = result * 10 + last;
    num = parseInt( num / 10);  //========>U
}
console.log(num)