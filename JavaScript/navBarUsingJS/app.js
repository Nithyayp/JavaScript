// let section = document.createElement("section");
// section.style.width = "100%";
// section.style.height = "80px";
// section.style.backgroundColor = "gray";
// document.body.append(section);

// let article = document.createElement("article");
// article.style.width = "90%";
// article.style.height = "80px";
// article.style.backgroundColor = "yellow";
// article.style.margin = "0px auto";
// section.appendChild(article);

// let div1 = document.createElement("div1");
// div1.innerText = "LOGO";
// article.appendChild(div1);

var allElements = document.querySelectorAll("*");
for (var i = 0; i < allElements.length; i++) {
  var element = allElements[i];
  element.style.boxSizing = "border-box";
  element.style.margin = "0px";
  element.style.padding = "0px";
}

let section = document.createElement("section");
section.style.width = "100%";
section.style.height = "125vh";
section.style.marginTop = "0px";
section.style.backgroundColor = "#fff";
document.body.append(section);

let article = document.createElement("article");
article.style.width = "45%";
article.style.height = "125vh";
article.style.backgroundColor = "orange";
article.style.margin = "0px auto";
section.appendChild(article);

let h1 = document.createElement("h1");
h1.innerText = "Book A Room Form";
h1.style.borderBottom = "2px solid Black";
h1.style.fontSize = "25px";
h1.style.textAlign = "center";
h1.style.paddingTop = "40px";
article.appendChild(h1);

let form = document.createElement("form");
form.style.paddingLeft = "40px";
form.style.paddingRight = "30px";
article.appendChild(form);

let firstName = document.createElement("label");
firstName.innerText = "First Name";
firstName.style.width = "50%";
form.appendChild(firstName);

let lastName = document.createElement("label");
lastName.innerText = "Last Name";
lastName.style.width = "50%";
lastName.style.paddingLeft = "39.5%";
form.appendChild(lastName);

let breake = document.createElement("br");
form.appendChild(breake);

let input1 = document.createElement("input");
input1.innerText = "First Name";
input1.style.width = "45%";
input1.style.height = "30px";
input1.style.marginBottom = "20px";
input1.setAttribute("placeholder", "First Name");
form.appendChild(input1);

let input2 = document.createElement("input");
input2.innerText = "First Name";
input2.style.width = "45%";
input2.style.height = "30px";
input2.style.marginLeft = "30px";
input2.style.marginBottom = "20px";
input2.setAttribute("placeholder", "Last Name");
form.appendChild(input2);

let email = document.createElement("label");
email.innerText = "Email";
email.style.marginBottom = "10px";
form.appendChild(email);

let breake1 = document.createElement("br");
form.appendChild(breake1);

let input3 = document.createElement("input");
input3.setAttribute("placeholder", "Email");
input3.style.width = "96%";
input3.style.height = "30px";
input3.style.marginBottom = "20px";
form.appendChild(input3);

let phoneNumber = document.createElement("label");
phoneNumber.innerText = "Phone Number";
phoneNumber.style.marginBottom = "10px";
form.appendChild(phoneNumber);

let breake2 = document.createElement("br");
form.appendChild(breake2);

let input4 = document.createElement("input");
input4.setAttribute("placeholder", "123-4567-789");
input4.setAttribute("type", "tel");
input4.style.width = "96%";
input4.style.height = "30px";
input4.style.marginBottom = "20px";
form.appendChild(input4);

let date = document.createElement("label");
date.innerText = "Date of Arrival";
form.appendChild(date);

let breake3 = document.createElement("br");
form.appendChild(breake3);

let input5 = document.createElement("input");
input5.setAttribute("placeholder", "Select Booking Date");
input5.setAttribute("type", "date");
input5.style.width = "96%";
input5.style.height = "30px";
input5.style.marginBottom = "20px";
form.appendChild(input5);

let date1 = document.createElement("label");
date1.innerText = "Date of Departure";
form.appendChild(date1);

let breake4 = document.createElement("br");
form.appendChild(breake4);

let input6 = document.createElement("input");
input6.setAttribute("placeholder", "Select Departure Date");
input6.setAttribute("type", "date");
input6.style.width = "96%";
input6.style.height = "30px";
input6.style.marginBottom = "20px";
form.appendChild(input6);

let roomType = document.createElement("label");
roomType.innerText = "Room Type";
form.appendChild(roomType);

let breake5 = document.createElement("br");
form.appendChild(breake5);

let radio1 = document.createElement("input");
radio1.setAttribute("type", "radio");
radio1.style.marginTop = "10px";
radio1.setAttribute("name", "room");
form.appendChild(radio1);

let single = document.createElement("label");
single.innerText = "Single -$300 per day";
form.appendChild(single);

let break6 = document.createElement("br");
form.appendChild(break6);

let radio2 = document.createElement("input");
radio2.setAttribute("name", "room");
radio2.setAttribute("type", "radio");
form.appendChild(radio2);

let Deluxe = document.createElement("label");
Deluxe.innerText = "Deluxe -$500 per day";
form.appendChild(Deluxe);

let break7 = document.createElement("br");
form.appendChild(break7);

let radio3 = document.createElement("input");
radio3.setAttribute("name", "room");
radio3.setAttribute("type", "radio");
form.appendChild(radio3);

let suite = document.createElement("label");
suite.innerText = "Suite -$800 per day";
form.appendChild(suite);

let break8 = document.createElement("br");
form.appendChild(break8);

let radio4 = document.createElement("input");
radio4.setAttribute("name", "room");
radio4.setAttribute("type", "radio");
radio4.style.marginBottom = "30px";
form.appendChild(radio4);

let Presidential = document.createElement("label");
Presidential.innerText = "Presidential Suite -$1200 per day";
form.appendChild(Presidential);

let break9 = document.createElement("br");
form.appendChild(break9);

let roomReq = document.createElement("label");
roomReq.innerText = "Number of rooms required";
form.appendChild(roomReq);

let break10 = document.createElement("br");
form.appendChild(break10);

let input7 = document.createElement("input");
input7.setAttribute("placeholder", "Number of room required");
input7.setAttribute("type", "text");
input7.style.width = "96%";
input7.style.height = "30px";
input7.style.marginBottom = "20px";
form.appendChild(input7);

let Comments = document.createElement("label");
Comments.innerText = "Comments";
form.appendChild(Comments);

let comment = document.createElement("textarea");
comment.style.width = "96%";
comment.style.height = "100px";
comment.style.marginBottom = "40px";
form.appendChild(comment);

let button1 = document.createElement("input");
button1.setAttribute("type", "button");
button1.setAttribute("value", "Book Now");
button1.style.padding = "10px 26px";
button1.style.borderRadius = "30px";
button1.style.background = "black";
button1.style.color = "white";
button1.style.fontSize = "16px";
button1.style.marginLeft = "76%";
button1.style.marginBottom = "30px";
form.appendChild(button1);