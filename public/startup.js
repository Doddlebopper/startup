
var count = 0;
var starter = "";
var btn = document.getElementById("btnCount");
var disp = document.getElementById("display");
var disp1 = document.getElementById("display1");
var disp2 = document.getElementById("display2");
var disp3 = document.getElementById("display3");
var disp4 = document.getElementById("display4");
var btn1 = document.getElementById("btnReset");
var btn2 = document.getElementById("btn1");
var btn3 = document.getElementById("btn2");
var btn4 = document.getElementById("btn3");
var btn5 = document.getElementById("btn4");


btn.onclick = function () {
 count++;
  disp.innerHTML = count;
}

btn1.onclick = function () {
 count = 0;
 disp.innerHTML = count;
}

btn2.onclick = function() {
  disp1.innerHTML = 0;
  document.getElementById("name").value = '';
}

btn3.onclick = function() {
  disp2.innerHTML = 0;
  document.getElementById("name1").value = '';
}

btn4.onclick = function() {
  disp3.innerHTML = 0;
  document.getElementById("name2").value = '';
}

btn5.onclick = function() {
  disp4.innerHTML = 0;
  document.getElementById("name3").value = '';
}

function myFunction() {
  var x = document.getElementById("name").value;
  document.getElementById("display1").innerHTML = x;
  document.getElementById("name").value = "";
}

function myFunction1() {
  var x = document.getElementById("name1").value;
  document.getElementById("display2").innerHTML = x;
  document.getElementById("name1").value = "";
}

function myFunction2() {
  var x = document.getElementById("name2").value;
  document.getElementById("display3").innerHTML = x;
  document.getElementById("name2").value = "";
}

function myFunction3() {
  var x = document.getElementById("name3").value;
  document.getElementById("display4").innerHTML = x;
  document.getElementById("name3").value = "";
}
