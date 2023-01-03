let fruits = ["apple", "kiwi", "tomato"];


for (let values of fruits) {
    console.log(values);
}

for (let index in fruits) {
    console.log(index);
}

fruits.forEach((val, ind) => {
    console.log(val);
    console.log(ind);
})

fruits.forEach((index, values) => {
  console.log(index); //first parameter position is always for the values of the array
});

fruits.forEach((p1, p2) => {
  console.log(p2);
});

// difference between map and foreach
let colors = ["red", "blue", "green"];
let map1 = colors.map((items) => {
    return items;
})
console.log(map1);
// it returns array[]

let forEachEx = colors.forEach((items) => {
    console.log(items);
    return items;
})
console.log(forEachEx);
//it returns undefined


let studentDetails = {
    sName: 'gc',
    id: 50,
    job:"developer"
}

console.log(studentDetails);
// note:Only for-in loop can be applied to the object
for (let x in studentDetails) {
    console.log(x);
}

console.log(Object.keys(studentDetails));

for (let y of studentDetails) {
    console.log(y);
}

studentDetails.forEach((p1, p2) => {
    console.log(p1)
})

let arrayOfObjects = [
  {
    sName: "a",
    id: 50,
    job: "developer",
  },
  {
    sName: "b",
    id: 500,
    job: "tester",
  },
  {
    sName: "c",
    id: 550,
    job: "coder",
  },
  {
    sName: "4",
    id: 50,
    job: "manager",
  },
];

let p = arrayOfObjects.forEach((p1,p2) => {
    return p1;
})
console.log(arrayOfObjects);
console.log(p);

let q = arrayOfObjects.map(p1 => {
    console.log(p1);
    console.log(p1.sName);
    return p1;
})
console.log(arrayOfObjects);
console.log(q);

let map = arrayOfObjects.map((val) => {
    val.job = "developer"
    return val;
});
console.log(map);

let salaryAfterDeployment = arrayOfObjects.map(val => {
    console.log(val);
    val.salary = 20000;
    return val;
})
console.log(salaryAfterDeployment);