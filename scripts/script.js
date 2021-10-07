/*
    Author: Kaine van Ommeren
    Date: 07:10-2021
    Version: 0.2
*/
// Geboorte datum
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


console.log(calulatedAge);
document.getElementById("year_age").innerHTML = calulatedAge;
//document.getElementById("year_age").innerHTML = "hallo";
