// let section = document.getElementsByTagName("section");
// section[0].style.display = "flex";
// section[0].style.width = "1000px";
// section[0].style.gap = "20px";
// section[0].style.margin = "20px auto";

//fetch all images
// let images = document.images;
// [...images].forEach(img => {
//     img.style.width = "100%";
//     img.style.height = "200px";

// })
//fetch all divs
// let divs = document.getElementsByTagName("div")
// Array.from(diva).forEach(val => {
//     val.style.flexBasis = "30%";
//     val.style.background = "#fff";
//     val.style.height = "300px";
// })


// let divsWithQueryAll = document.querySelectorAll("div")
// console.log(divsWithQueryAll);//node list
// divsWithQueryAll.forEach(val => {
//     val.style.flexBasis = "30%";
//     val.style.background = "#fff";
//     val.style.height = "300px";
// })

let section = document.querySelectorAll("section");
section.forEach(val => {
    val.id = "mainSection"
});

//fetch all images and add classes to images
let images = document.images;
[...images].forEach(img => {
    img.className = "course-images";
})

//fetch all divs and add classes to div
let divs = document.querySelectorAll("div");
divs.forEach(div => {
    div.className = "container"
});