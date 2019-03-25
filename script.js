//SET INTERVAL CLOCK
setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

//SET INTERVAL STOPWATCH
function add(){
    setInterval(build, 1000);
}
var i=0;
function build(){
    i++;
    document.getElementById("target").innerHTML = i;
    }

//YOUR CODE GOES HERE!
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}
function plus(){
    setInterval(watch, 500);
}
var a = 0;
function watch(){
  a++;
  document.getElementById("stop").innerHTML = a;
 } 
