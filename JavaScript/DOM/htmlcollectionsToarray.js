let allProperties = window.document.all;
console.log(allProperties);//html Collections
console.log(Array.isArray(allProperties));


let convertIntoArray = Array.from(allProperties);
console.log(convertIntoArray);
console.log(Array.isArray(convertIntoArray));

//forEach is only for Array and nodeList
[...allProperties].forEach(val => {
    console.log(val);
});
//looping elements
for (let i = 0; i < allProperties.length; i++){
    console.log(allProperties[i]);
}

for (let i of allProperties) {
    console.log(i);
}