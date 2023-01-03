let obj1 = {
  num: 100,
};
let obj2 = {
  num: 1000,
};

function GetTotalValue(num1, num2) {
  return this.num + num1 + num2;
}


//call
let totalCall = GetTotalValue.call(obj2, 100, 100);
//apply
let totalApply = GetTotalValue.apply(obj2, [100, 100]);
//bind
let totalBind = GetTotalValue.bind(obj2, 100, 100);

//call
console.log(totalCall);
//apply
console.log(totalApply);
//bind
console.log(totalBind());



