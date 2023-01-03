/*All string methods return a new string. 
  They don't modify the original string.
  Strings are immutable: Strings cannot be changed, only replaced. */


/* 1. charAt() = returns the character at a specified index (position) in a string.
The index value can't be a negative, greater than or equal to the length of the string.*/
let text = "HELLO WORLD";
console.log(text.charAt());//print first character i.e.,H.
console.log(text.charAt(0));//print first character i.e.,H.
console.log(text.charAt(text.length - 1));//print last character i.e.,D.
console.log(text.charAt(-1));//output is empty.


/* 2. charCodeAt() = It provides the Unicode value of a character present at the specified index.
The method returns a UTF-16 code (an integer between 0 and 65535).
It returns NaN if the given index number is either a negative number or it is greater than or equal to the length of the string. */
let str = "HELLO WORLD";
console.log(str.charCodeAt(3));//output is 76.
console.log(str.charCodeAt());//it will return the Unicode value of first character i.e.,72.
console.log(str.charCodeAt(-1));//output is NaN.
console.log(str.charCodeAt(12));//output is NaN.


/* 3. concat() = This method combines two or more strings and returns a new string. 
This method doesn't make any change in the original string. */
let text1 = "Hello";
let text2 = "World";
let text3 = "Example";
console.log(text1.concat(text2));//output is HelloWorld.
console.log(text1.concat(" ",text2));//output is Hello World.
console.log(text1.concat(" " + text2));//output is Hello World.
console.log(text1.concat(" " + text2 + " " + text3));//output is Hello World Example.


/* 4. indexOf() = It provides the position of a char value present in the given string.
If an element is not present in a string, it returns -1.
This method is case sensitive. */
var web = "Learn JavaScript on JavaTPoint";
console.log(web.indexOf());//output is -1.
console.log(web.indexOf("a"));//output is 2.
console.log(web.indexOf('a', 3));//output is 7.
console.log(web.indexOf('Java'));//output is 6.
console.log(web.indexOf('Java', 7));//output is 20.
console.log(web.indexOf("I"));//output is -1.
console.log(web.indexOf("a", -6));//output is 2 (it will take argument as 0 if we give negative value).
console.log(web.indexOf("i", 66));//if we give more than the length of string it returns -1.


/* 5. lastIndexOf() = It behaves similar to indexOf() method with a difference that it start searching an element from the last position of the string. */
var web = "Learn JavaScript on JavaTPoint";
console.log(web.lastIndexOf());//output is -1.
console.log(web.lastIndexOf("a"));//output is 23.
console.log(web.lastIndexOf("a", 0));//output is -1.
console.log(web.lastIndexOf("a", -6));//output is -1.
console.log(web.lastIndexOf("i", 66));//output is 27.
















