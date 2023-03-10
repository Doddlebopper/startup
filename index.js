var count = 0;
var btn = document.getElementById("btnCount");
var disp = document.getElementById("display");

btn.onclick = function () {
 count++;
  disp.innerHTML = count;
}
/*
rstBtn.onclick = function () {
 count = 0;
 disp.innerHTML = count;
}
*/
