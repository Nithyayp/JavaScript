let empDetails = {
    eName: "Harish",
    id: 555,
    company: "tyss",
    address: function () {
        console.log(this);
    },
};
console.log(Object.keys(empDetails));

console.log(Object.values(empDetails));

console.log(Object.entries(empDetails));

console.log(empDetails);

// let obj = {
//     sName: "Raj",
//     id: 222,
// };

//seal
// console.log(obj);

// Object.seal(obj);//can update only existing value of keys in object
// console.log(Object.isSealed(obj));//to check,whether it is sealed or not
// obj.company = "qsp";//can not add new key
// console.log(obj);

// obj.id = 555;
// console.log(obj);

//freeze
// Object.freeze(obj);
// console.log(Object.isFrozen(obj));

// obj.city = "b'lore";//can not add new key
// console.log(obj);
// obj.sName = "Kumar";//can not update the existing value of key in object 
// console.log(obj)
