function people () {

	var people = [{name: "Vasyl",lastname: "Shevchenko", age:13},{name: "Ira",lastname: "Rydenko",age:15}];
		
	document.getElementById("myspan1").innerHTML = people.length
	document.getElementById("myspan2").innerHTML = people[0].name;
	document.getElementById("myspan3").innerHTML = people[0].age;
	document.getElementById("myspan4").innerHTML = people[1].name;
	document.getElementById("myspan5").innerHTML = people[1].age;
};