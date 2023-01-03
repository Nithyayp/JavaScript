// 1.assign method
// const target = { a: 1 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// console.log(source);
// console.log(returnedTarget)

// var obj1 = { a: 10 };
// var obj2 = { b: 20 };
// var obj3 = { c: 30 };

// var newObject = Object.assign(obj1, obj2, obj3);
// console.log(newObject);
// console.log(obj1)

// 2.create()
let obj = {
    name: "raj"
}
let obj1 = Object.create(obj);
console.log(obj1.name);
console.log(obj1);

// 3.defineProperties()
let x = {};
 
Object.defineProperties(x, {
  prop1: {
    value: "chick"
  },
    prop2: {
      id: "d"
  }
});
 
console.log(x.prop1);
console.log(x.prop2);

// 4.defineproperty
var Student = { name: "Ali", rollNo: "123" };
console.log(Student);

// modifying property
Object.defineProperty(Student, "rollNo", { value: "234" });
console.log(Student);

// 5.getOwnPropertyNames
var Student = { name: "Ali", rollNo: "123" };
console.log(Object.getOwnPropertyNames(Student));


// 6.getOwnPropertyDescriptor()
const object1 = {
  property1: 42,
};
const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");
console.log(descriptor1.value);//42