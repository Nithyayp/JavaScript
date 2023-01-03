// console.log(window);
// window.alert("")

// let x = document.createElement('div');
// document.write(x);

// x.innerHTML = "hello";
// x.style.color = "red";

// let x = document.getElementById("demo");
// x.style.color = "red";
// x.innerHTML = "link";
// console.log(x);

// let y = document.getElementsByClassName("cls");
// console.log(y)
// console.log(Array.isArray(y));

// let arr = [1, 2, 3];
// console.log(Array.isArray(arr));

// let z = document.getElementById("demo1");
// let q = z.getElementsByTagName("h1")
// console.log(q)

// let r = document.getElementsByName("para");
// console.log(r)

// let w = document.getElementsByName("test")[2];
// w.style.background="red"
// console.log(w)

// let v = document.querySelector("#demo2 h1");
// console.log(v)

// let o = document.querySelectorAll("#test~p")
// console.log(o);

function fun() {
    const test = window.open();
    test.document.open();
    test.document.innerHTML('<h1>hello</h1>')
}

