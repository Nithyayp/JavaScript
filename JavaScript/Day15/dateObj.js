let x = new Date();
let d = x.getDay();
// console.log(x);
// console.log(d);

// console.log(x.getDate());
// console.log(x.getTime());
// console.log(x.getMinutes());
// console.log(x.getSeconds());

switch (d) {
  case 1:
    console.log("mon");
    break;
  case 2:
    console.log("tue");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thur");
    break;
  case 5:
    console.log("fri");
    break;
  case 6:
    console.log("sat");
    break;
  case 0:
    console.log("sun");
    break;
}

// let arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(arr[x.getDay()]);

let arr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
console.log(arr[x.getMonth()]);