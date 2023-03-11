var count = 0;
var starter = "";
var btn = document.getElementById("btnCount");
var btn11 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var disp = document.getElementById("display");
var btn1 = document.getElementById("btnReset");
var score = document.getElementById("name").value;
var score1 = document.getElementById("name1").value;
var score2 = document.getElementById("name2").value;
var score3 = document.getElementById("name3").value;
var name = document.getElementById("name0");
var name1 = document.getElementById("name11");
var name2 = document.getElementById("name22");
var name3 = document.getElementById("name33");

score.addEventListener("score", updateValue);
score1.addEventListener("score1", updateValue1);
score2.addEventListener("score2", updateValue2);
score3.addEventListener("score3", updateValue3);

btn.onclick = function () {
 count++;
  disp.innerHTML = count;
}

btn1.onclick = function () {
 count = 0;
 disp.innerHTML = count;
}

btn11.onclick = function () {
 name.innerHTML = " ";
}

btn2.onclick = function () {
 name1.innerHTML = " ";
}

btn3.onclick = function () {
 name2.innerHTML = " ";
}

btn4.onclick = function () { 
 name3.innerHTML = " ";
}

function updateValue(e) {
 name.innerHTML = e.target.value;
}

function updateValue1(e) {
 name1.innerHTML = e.target.value;
}

function updateValue2(e) {
 name2.innerHTML = e.target.value;
}

function updateValue3(e) {
 name3.innerHTML = e.target.value;
}

