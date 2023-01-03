// let personDetails = {
//     name: "xyz",
//     email: "xyz@gmail",
//     martial_status: "single",
//     address: {
//         pin: 0000,
//         place: "goa",
//         landmark:"casino"
//     }
// }

// let allDetails = {
//     name: "abc",
//     tel: 123456789,
//     qualification:"B.E",
// }

// let final = Object.assign(personDetails, allDetails);
// console.log(final);

// let final1 = { ...personDetails, ...allDetails };
// console.log(final1);

// let value = {
//   ...personDetails,
//   name:"xyz"
// }
// console.log(value)

//spread
const teacher = {
    name: "reena",
    age: 30,
    color: "pink",
    subjects: ["social", "english"]
};

const address = {
    city: "blore",
    pin: 560040,
    landmark:"btm"
}

//adding extra keys and value for the created objects
const teacherDetails = {
    ...teacher, ...address
};
console.log("teacher with address", teacherDetails);

const teacherWithPhono = {
    ...teacher,
    phone: 123456789,
    married: false
};
console.log("teacher with phone number", teacherWithPhono);

//spread operator with object
const person = {
    name: "raj",
    age: 25,
    place: "Blore"
};

//creating a copy of object
const copyOfPrsn = { ...person };
person.name = "ram"
console.log("the person list is", person);
console.log("the copy of person", copyOfPrsn);

