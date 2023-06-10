
function color(ab){
    var color = document.getElementById("area").style.color=ab;
    
}
function bold(){
    var bold = document.getElementById("area").style.fontWeight ="bolder";
}
function italic(){
    var ital = document.getElementById("area").style.fontStyle = "italic";
}
function under(){
    var under = document.getElementById("area").style.textDecoration = "underline"
}
function left(){
    var left = document.getElementById("area").style.textAlign = "start";
}
function right(){
    var right = document.getElementById("area").style.textAlign = "right";
}
function center(){
    var center = document.getElementById("area").style.textAlign = "center";
}
function line(){
  var line = document.getElementById("area").style.lineHeight = "100px"
}
function abc(){
    var abc = document.getElementById("area").style.textDecoration = "line-through";
}
function upper(){
    var upper = document.getElementById("area").style.textTransform = "uppercase";
}
function lower(){
    var lower = document.getElementById("area").style.textTransform = "lowercase";
}
function capital(){
    var capital = document.getElementById("area").style.textTransform = "capitalize";
}
function over(){
    var over = document.getElementById("area").style.textDecoration = "overline";
}
function shad(){
    var shad = document.getElementById("area").style.textShadow = "gray 3px 2px 4px"
    console.log(shad);
}
function fontFamily(e){
    var font = document.getElementById("area").style.fontFamily = e.value;
    console.log(font);
}

function heading(){
    var heading = document.getElementById("area").style.fontSize = "50px" ;
    console.log(heading);
}
function letter(){
    var letter = document.getElementById("area").style.letterSpacing = "10px";
}
function word(){
var word = document.getElementById("area").style.wordSpacing = "10px";
}
function fontSize(e){
    var fontSize = document.getElementById("area").style.fontSize = e.value;
    console.log(fontSize);
}
function back(e){
    var back = document.getElementById("area").style.backgroundColor = e.value;
}
