function Demo(id, city) {
    this.id = id;
    this.city = city;
}
let s1 = new Demo(22, "b'lore");
let s2 = new Demo(33, "goa");
console.log(s1);
console.log(s2);

class MERN5 {
    constructor(eName, id, designation) {
        // console.log(eName);
        // console.log(id);
        // console.log(designation)
        console.log(this);
        this.eName = eName;
        this.id = id;
        this.designation = designation;
    }
}
let e1 = new MERN5("a", 11, "developer");
console.log(e1)
let e2 = new MERN5("b", 22, "tester");
console.log(e2);
let e3 = new MERN5("c", 33, "coder");
e3.place = "b'lore"
console.log(e3);

let x = [MERN5] ;
for (let y of x) {
    console.log(e1.eName);
    console.log(e2.eName);
    console.log(e3.eName);
}

// let z = x.map((val) => {
//     console.log(e1.eName);
//     console.log(e2.eName);
//     console.log(e3.eName);

// })
let q = [e1, e2, e3];
let a = q.map((val) => {
    console.log(val.eName);
})
