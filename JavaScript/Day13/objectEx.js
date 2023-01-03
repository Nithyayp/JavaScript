// let empDetails = {
//     eName: "ratan",
//     id: "TYP1234",
//     company:"TYSS",
// }
// console.log(empDetails);
// console.log(empDetails.id)
// empDetails.city = "Bengaluru"
// console.log(empDetails);
// empDetails.city = "Delhi";
// console.log(empDetails);

let empDetails = {
  eName: "ratan",
  id: "TYP1234",
    company: "TYSS",
    city: "Bengaluru",
    address: {
        pin: 111,
        area:"India",
    }
};
console.log(empDetails);
empDetails.address.area = "MG road";
console.log(empDetails);

//to delete key from an object:
delete empDetails.company;
console.log(empDetails);