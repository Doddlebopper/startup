var count = 0;
var btn = document.getElementById("btnCount");
var disp = document.getElementById("display");
var btn1 = document.getElementById("btnReset");

btn.onclick = function () {
 count++;
  disp.innerHTML = count;
}

btn1.onclick = function () {
 count = 0;
 disp.innerHTML = count;
}

