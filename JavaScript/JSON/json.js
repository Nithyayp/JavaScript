let x = {
    name: "apple",
    id:222
}
console.log(x);

let v = JSON.stringify(x);
console.log(v)
console.log(typeof (v))

const person = {
    name: "raj",
    age: 25,
    color: "blue",
    hobbies: ["acting", "dancing", "singing"],
    address: {
        city: "Mysore",
        pin:560040,
    },
}
const jsonperson = JSON.stringify(person);
console.log("The datatype is :" + typeof jsonperson);
console.log("JSON person object", jsonperson);

//JSON OBJECT TO JS OBJECT (using parse())
const jsprsn = JSON.parse(jsonperson);
console.log("the datatype is : " + typeof jsprsn);
console.log(jsprsn);

let arr = [10, 20, 30, 40];
// const [a, b, , d] = arr;
// console.log(a);//10
// console.log(b);//20
// console.log(d);//40

// const [a, , ,b] = arr;
// console.log(a);//10
// console.log(b)//40

let emp = {
    eid: 123,
    ename: "raj",
    loc:"goa"
}

let { eid:id, ename:name, loc:place } = emp
console.log(place)