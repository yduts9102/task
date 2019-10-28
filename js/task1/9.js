var b1 = document.getElementsByClassName("f1");
var fk = document.getElementsByClassName("sq");
var time;
function reset() {
  for (var i = 0; i < fk.length; i++) {
    fk[i].style.backgroundColor = "rgb(255,166,0)";
  }
}
function c() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
}
function a() {
  var fk2 = new Array(1, 1, 1);
  reset();
  do {
    for (i = 0; i < 3; i++) {
      var numb = Math.round(Math.random() * (fk.length - 1));
      fk2[i] = numb;
    }
    var a1 = fk2[0];
    var a2 = fk2[1];
    var a3 = fk2[2];
  } while (a1 == a2 || a2 == a3 || a3 == a1);
  fk[a1].style.backgroundColor = c();
  fk[a2].style.backgroundColor = c();
  fk[a3].style.backgroundColor = c();
}
function go() {
  clearInterval(time);
  time = setInterval(function() {
    a();
  }, 1000);
}
function over() {
  clearInterval(time);
  reset();
}
