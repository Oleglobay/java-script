	function rm(){
		document.getElementById('a').value ="";
		document.getElementById('a').innerHTML = "";
}
function b9(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[8];
}
function b8(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[7];
}
function b7(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[6];
}
function b6(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[5];
}
function b5(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[4];
}
function b4(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[3];
}
function b3(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[2];
}
function b2(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[1];
}
function b1(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[0];
}
function b0(){
	num = [1,2,3,4,5,6,7,8,9,0]
	document.getElementById('a').value += num[9];
}
function bplus(){
	document.getElementById('a').value += '+';
}
function brav(){
	document.getElementById('a').value += '=';
}
function bdil(){
	document.getElementById('a').value += '/';
}
function bmn(){
	document.getElementById('a').value += '*';
}
function bm(){
	document.getElementById('a').value += '-';
}
var plus = true;
var plus1 =0;
var plus2 =0;
var diy ='';
function q1(s){
	if(plus){
		plus1 +=s;
		document.getElementById('a').value +=s;
	}
	else{
		plus2 +=s;
		document.getElementById('a').value +=s;
	}
}
function plus(){
	if(plus){
		diy='+';
		plus =false;
		document.getElementById('a').value+= document.getElementById('bplus').value;
	}
}
function minus(){
	if(plus){
		diy+='-';
		plus =false;
		document.getElementById('a').value+= document.getElementById('minus').value;
	}
}
function mn(){
	if(plus){
		diy = '*';
		plus =false;
		document.getElementById('a').value+= document.getElementById('bmn').value;
	}
}
function bdil(){
	if(plus){
		diy = '/';
		plus =false;
		document.getElementById('a').value+= document.getElementById('bdil').value;
	}
}
function equals(){
	if(diy =='+'){
		document.getElementById('a').value+= document.getElementById('equals').value;
		document.getElementById('a').value+= parseInt('plus1')+parseInt('plus2');
	plus =true;
	}
	else	if(diy =='-'){
		document.getElementById('a').value+= document.getElementById('equals').value;
		document.getElementById('a').value+= parseInt('plus1')-parseInt('plus2');
	plus =true;
	}
	else	if(diy =='*'){
		document.getElementById('a').value+= document.getElementById('equals').value;
		document.getElementById('a').value+= parseInt('plus1')*parseInt('plus2');
	plus =true;
	}
	else 	if(diy =='/'){
		document.getElementById('a').value+= document.getElementById('equals').value;
		document.getElementById('a').value+= parseInt('plus1')+parseInt('plus2');
	plus =true;
	}
}
