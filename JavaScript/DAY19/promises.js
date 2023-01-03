// let p = new Promise((res, rej) => {
//     let isRoomCleaned = false;
//     if (isRoomCleaned) {
//         document.write("yes room is cleaned");
//         res("your room is cleaned");
//     }
//     else {
//         document.write("idiot...clean your room");
//         rej("Please clean the room");
//     }
// })
// p.then(msg => console.log(msg)).catch(err => console.log(err)).finally(() => {
//     console.log("the function is executed")
// });
// console.log(p);

let p = new Promise((res, rej) => {
    let taskCompleted = true;
    if (taskCompleted) {
        document.write("task completed successfully");
        res("task completed");
    } else {
        document.write("task not completed");
        rej("please complete the task");
    }
})
p.then(msg => console.log(msg)).catch(err => console.log(err)).finally(() => {
    console.log("the function is executed")
});
console.log(p);
