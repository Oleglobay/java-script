function app(){
	var name = document.getElementById("b1").value;
	if (name === "Roman"){
		document.getElementById("a1").innerHTML = "Priv"
	}
	else{
		document.getElementById("a1").innerHTML = "Kto"
	}
}