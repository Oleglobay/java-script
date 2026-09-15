
	function rm(){
		document.getElementById('b1').value ="";
		document.getElementById('b2').value ="";
		document.getElemetnById('k1').innerHTML = "";
		document.getElementById('a1').innerHTML = "";
}
	function plus(){
		var a = "+";
		var b1 = parseInt(document.getElementById('b1').value);
		var b2 = parseInt(document.getElementById('b2').value);
		document.getElementById('a1').innerHTML = a;
		document.getElementById('k1').innerHTML = b1 + b2;
	}
	function minus(){
		var a = "-";
		var b1 = parseInt(document.getElementById('b1').value);
		var b2 = parseInt(document.getElementById('b2').value);
		document.getElementById('a1').innerHTML = a;
		document.getElementById('k1').innerHTML = b1-b2;
	}
	function mn(){
		var a = "*";
		var b1 = parseInt(document.getElementById('b1').value);
		var b2 = parseInt(document.getElementById('b2').value);
		document.getElementById('a1').innerHTML = a;
		document.getElementById('k1').innerHTML = b1*b2;
	}
	function dil(){
		var a = "/";
		var b1 = parseInt(document.getElementById('b1').value);
		var b2 = parseInt(document.getElementById('b2').value);
		document.getElementById('a1').innerHTML = a;
		document.getElementById('k1').innerHTML = b1/b2;
	}
	
	
