// let arr = [1, "hi", () => { }, {}, true, null, undefined];
// console.log(arr);

// let arr1 = new Array(1, 2, 3);
// console.log(arr1);
// console.log(arr1.length);

//how to fetch the items of an array?
// let a = [10, 20, 30, 40, 50]
// console.log(a[1]);
// console.log(a[6]);

//Array methods
// let arrEg = [10, "hi", 55, true];
//1.pop() method
//removes the values/items present at the last position
// console.log(arrEg.pop());
// console.log(arrEg);
// console.log(arrEg.pop());
// console.log(arrEg);
//we can empty an array using pop method
// console.log(arrEg.pop());
// console.log(arrEg.pop());
// console.log(arrEg); //[]

//2.push() method
// let pushEg = [10, 20, 30];
// pushEg.push(40);
// console.log(pushEg)
// pushEg.push("");
// console.log(pushEg);
// console.log(pushEg.length);
// pushEg.push(100, 200);
// console.log(pushEg);

//3.shift() method
// let shiftEg = [65, 55, 97];
// console.log(shiftEg.shift());
// console.log(shiftEg);

//4.unshift() method

// shiftEg.unshift("first");
// shiftEg.unshift("FIRST", "SEC", "third");
// console.log(shiftEg);

// shiftEg.pop().push("end");
// console.log(shiftEg)

//5.splice() method
// let test = [10, 55, 787, 11];
// test.splice(1, 2, "hi");
// console.log(test);
// test.splice(0, 4);
// console.log(test);
// test.splice(2, 0, null);
// console.log(test);

//by giving index number we can add new item in that particular index position
//test[1]="hello"
// console.log(test);

//6.slice() method
// let slc = [55, 88, 77, 58];
// console.log(slc.slice(1,3));
// console.log(slc);
// console.log(typeof slc);

//7.indexOf()
// let arr1 = [22, 55, 88];
// console.log(arr1.indexOf(55));
// console.log(arr1.indexOf(100));

//includes()
// returns boolean value
// let arr1 = [22, 55, 88];
// console.log(arr1.includes(22));
// console.log(arr1.includes(222));

//concat()
// let n1 = [1, 2, 3,];
// let n2 = [4, 5, 6];
// console.log(n1.concat(n2));

// flat()
// let arr = [1, 2, 3, [4, 5,8,[5,9]], 6, 7, [10, 7]];
// print(arr.flat(2));

//sort()
// let arr = [1, 5, 8, 3, 999, 22, 3, 4, 7878, 256, 989, 1111];
// console.log(arr.sort());

// let srt2 = ["a", "z", "aa", "dd", "ff"];
// console.log(srt2.sort());

// let test = ["apple", "$", 12, "45A", "a78", "", "M"];
// console.log(test.sort());

//ex:ascending order
let z = [9, 1, 8, 3, 88];
console.log(z.sort((a,b)=> { return a-b }));

