let empDetails = {
    name: "Shiva"
}
let x = new Date();

let arr1 = ["sun", "mon", "tue", "wednesday", "thu", "fri", "sat"];


let arr = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];
// console.log(arr[x.getMonth()]);

console.log(`My name is ${empDetails.name}, attending js 
class on ${arr1[x.getDay()]} at ${x.getHours()}:${x.getMinutes()} AM in
the ${arr[x.getMonth()]} month of ${x.getFullYear()} year`)