let table = document.createElement('table');
table.border = '2px solid block';
document.body.append(table);

let tr = document.createElement('tr');
table.appendChild(tr);

let th1 = document.createElement('th');
th1.textContent='SlNo'
tr.appendChild(th1);

let th2 = document.createElement("th");
th2.textContent = "Name";
tr.appendChild(th2);

let th3 = document.createElement("th");
th3.textContent = "Id";
tr.appendChild(th3);

let tr1 = document.createElement("tr");
table.appendChild(tr1);

let td1 = document.createElement('td');
td1.textContent = '1';
tr1.appendChild(td1)

let td2 = document.createElement("td");
td2.textContent = "Shree";
tr1.appendChild(td2);

let td3 = document.createElement("td");
td3.textContent = "123";
tr1.appendChild(td3);

let tr2 = document.createElement("tr");
table.appendChild(tr2);

let td4 = document.createElement("td");
td4.textContent = "2";
tr2.appendChild(td4);

let td5 = document.createElement("td");
td5.textContent = "GC";
tr2.appendChild(td5);

let td6 = document.createElement("td");
td6.textContent = "123";
tr2.appendChild(td6);
