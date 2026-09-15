function rm(){
document.getElementById('#p3').value="";
document.getElementById('#p4').value="";
document.getElemetnById('#f1').innerHTML="";
document.getElementById('#f2').innerHTML="";
};
function PLUS(){
var a = "+";
var p1= parseInt(document.getElementById('#p3').value);
var p2= parseInt(document.getElementById('#p4').value);
var s=p1+p2; 
document.getElementById('#f1').innerHTML=a;
document.getElementById('#f2').innerHTML=s;
};
function minus(){
var a = "-";
var p1= parseInt(document.getElementById('#p3').value);
var p2= parseInt(document.getElementById('#p4').value);
var s=p1-p2; 
document.getElementById('#f1').innerHTML=a;
document.getElementById('#f2').innerHTML=s;
};
function star(){
var a = "*";
var p1= parseInt(document.getElementById('#p3').value);
var p2= parseInt(document.getElementById('#p4').value);
var s=p1*p2; 
document.getElementById('#f1').innerHTML=a;
document.getElementById('#f2').innerHTML=s;
};
function line(){
var a = "/";
var p1= parseInt(document.getElementById('#p3').value);
var p2= parseInt(document.getElementById('#p4').value);
var s=p1/p2; 
document.getElementById('#f1').innerHTML=a;
document.getElementById('#f2').innerHTML=s;
};