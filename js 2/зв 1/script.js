function time () {
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var hoursInADay = 24;
var daysInAYear = 365;
var age = 15;
s=secondsInAMinute*minutesInAnHour
document.getElementById("myspan").innerHTML = s;
s=secondsInAMinute*minutesInAnHour*hoursInADay
document.getElementById("myspan1").innerHTML = s;
s=secondsInAMinute*minutesInAnHour*hoursInADay*daysInAYear
document.getElementById("myspan2").innerHTML = s;
s=secondsInAMinute*minutesInAnHour*hoursInADay*daysInAYear*age
document.getElementById("myspan3").innerHTML = s;



}
