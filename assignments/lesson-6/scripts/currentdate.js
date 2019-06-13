var myDate = new Date();

var day = myDate.getDay();
var date = myDate.getDate();
var month = myDate.getMonth();
var year = myDate.getFullYear();

var dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

document.getElementById("dateDisplay").innerHTML = dayArray[day] + ", " + date + " " + monthArray[month] + " " + year;