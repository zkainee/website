/*
    Author: Kaine van Ommeren
    Date: 07:10-2021
    Version: 0.2
*/
// Berekent vanaf het jaar 2000 (geboorte jaar) de jaartelling 
var bornYear = 2000;
var d = new Date();
var n = d.getFullYear();

function getAge(year)
{
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - year;
    return age;
}
var calulatedAge = getAge(bornYear);


console.log("Leeftijd: " + calulatedAge);
document.getElementById("year_age").innerHTML = calulatedAge;

