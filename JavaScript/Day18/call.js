//1st example
let shashiObject = {
    name: 'shashi',
    amount: 1000
};
let manuObject = {
  name: "manu",
  amount: 10000,
};
let DixithObject = {
  name: "Dixith",
  amount: 500,
};
let windowObject = window;

function callAnyObject() {
    console.log(`I need money from ${this.name} and amount is ${this.amount}`);
}
//function method called CALL method
callAnyObject.call(DixithObject)

//2nd example
let obj1={
num:100,
}
let obj2 = {
    num:1000,
}

function GetTotalValue(num1, num2) {
    return this.num + num1 + num2;
}
let total = GetTotalValue.call(obj2, 100, 100);
let total1 = GetTotalValue.call(obj1, 100, 100);
console.log(total)
console.log(total1);
